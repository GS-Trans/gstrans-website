"use client";

import { useEffect, useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://api.gstrans.in";

const statusSteps = [
	{ key: "pending", label: "Booking Placed", icon: "📋" },
	{ key: "accepted", label: "Rider Assigned", icon: "✅" },
	{ key: "in_transit", label: "In Transit", icon: "🚚" },
	{ key: "completed", label: "Delivered", icon: "🎉" },
];

export default function TrackingView({ bookingId }) {
	const [booking, setBooking] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!bookingId) return;

		const fetchBooking = async () => {
			try {
				setLoading(true);
				const res = await fetch(`${API_BASE}/api/bookings/track/${encodeURIComponent(bookingId)}`);
				if (!res.ok) {
					setError("Booking not found. Please check your booking ID and try again.");
					return;
				}
				const data = await res.json();
				setBooking(data.data || data);
			} catch {
				setError("Unable to reach tracking server. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchBooking();
	}, [bookingId]);

	const getStepIndex = (status) => {
		const idx = statusSteps.findIndex((s) => s.key === status);
		return idx >= 0 ? idx : 0;
	};

	if (loading) {
		return (
			<section style={{ padding: "80px 0", textAlign: "center" }}>
				<div className="container">
					<i className="fa-solid fa-spinner fa-spin" style={{ fontSize: "40px", color: "#1890ff" }}></i>
					<p style={{ marginTop: "16px", color: "#666" }}>Looking up booking {bookingId}...</p>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section style={{ padding: "80px 0" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6" style={{ textAlign: "center" }}>
							<div
								style={{
									background: "#fef2f2",
									borderRadius: "16px",
									padding: "50px",
								}}
							>
								<div style={{ fontSize: "60px", marginBottom: "16px" }}>🔍</div>
								<h4 style={{ marginBottom: "12px", color: "#ef4444" }}>Booking Not Found</h4>
								<p style={{ color: "#666", marginBottom: "24px" }}>{error}</p>
								<p style={{ fontSize: "14px", color: "#999", marginBottom: "24px" }}>
									Booking ID searched: <strong>{bookingId}</strong>
								</p>
								<a
									href="/track"
									style={{
										padding: "12px 28px",
										background: "#1890ff",
										color: "#fff",
										borderRadius: "8px",
										textDecoration: "none",
										fontWeight: "600",
									}}
								>
									Try Again
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

	const currentStep = getStepIndex(booking?.status);
	const isCancelled = booking?.status === "cancelled";

	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						{/* Booking Header */}
						<div
							style={{
								background: isCancelled
									? "linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)"
									: "linear-gradient(135deg, #1890ff 0%, #0050b3 100%)",
								borderRadius: "16px",
								padding: "30px",
								color: "#fff",
								marginBottom: "30px",
							}}
						>
							<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
								<div>
									<p style={{ opacity: 0.8, marginBottom: "4px", fontSize: "14px" }}>Booking ID</p>
									<h3 style={{ color: "#fff", margin: 0 }}>{bookingId}</h3>
								</div>
								<div
									style={{
										background: "rgba(255,255,255,0.2)",
										padding: "8px 20px",
										borderRadius: "20px",
										fontWeight: "600",
										textTransform: "capitalize",
									}}
								>
									{isCancelled ? "❌ Cancelled" : statusSteps[currentStep]?.icon + " " + statusSteps[currentStep]?.label}
								</div>
							</div>
						</div>

						{/* Progress Steps */}
						{!isCancelled && (
							<div style={{ background: "#f8f9fa", borderRadius: "16px", padding: "40px", marginBottom: "30px" }}>
								<div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
									{/* Progress Line */}
									<div
										style={{
											position: "absolute",
											top: "20px",
											left: "40px",
											right: "40px",
											height: "4px",
											background: "#e5e7eb",
											borderRadius: "2px",
											zIndex: 0,
										}}
									>
										<div
											style={{
												width: `${(currentStep / (statusSteps.length - 1)) * 100}%`,
												height: "100%",
												background: "#1890ff",
												borderRadius: "2px",
												transition: "width 0.5s ease",
											}}
										/>
									</div>

									{statusSteps.map((step, i) => (
										<div key={step.key} style={{ textAlign: "center", position: "relative", zIndex: 1, flex: 1 }}>
											<div
												style={{
													width: "40px",
													height: "40px",
													borderRadius: "50%",
													background: i <= currentStep ? "#1890ff" : "#e5e7eb",
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													margin: "0 auto 10px",
													fontSize: "18px",
													color: i <= currentStep ? "#fff" : "#aaa",
													fontWeight: "700",
													border: i === currentStep ? "3px solid #0050b3" : "none",
												}}
											>
												{i < currentStep ? "✓" : step.icon}
											</div>
											<p
												style={{
													fontSize: "13px",
													fontWeight: i <= currentStep ? "600" : "400",
													color: i <= currentStep ? "#1890ff" : "#aaa",
													margin: 0,
												}}
											>
												{step.label}
											</p>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Booking Details */}
						<div className="row">
							<div className="col-md-6" style={{ marginBottom: "20px" }}>
								<div
									style={{
										background: "#fff",
										border: "1px solid #eee",
										borderRadius: "12px",
										padding: "24px",
										height: "100%",
									}}
								>
									<h6 style={{ color: "#1890ff", marginBottom: "16px" }}>
										<i className="fa-solid fa-location-dot" style={{ marginRight: "8px" }}></i>
										Route Details
									</h6>
									<div style={{ marginBottom: "12px" }}>
										<span style={{ fontSize: "12px", color: "#22c55e", fontWeight: "600" }}>PICKUP</span>
										<p style={{ margin: "4px 0", fontWeight: "500" }}>{booking?.pickup_location || "—"}</p>
									</div>
									<div>
										<span style={{ fontSize: "12px", color: "#ef4444", fontWeight: "600" }}>DROP</span>
										<p style={{ margin: "4px 0", fontWeight: "500" }}>{booking?.dropoff_location || "—"}</p>
									</div>
								</div>
							</div>
							<div className="col-md-6" style={{ marginBottom: "20px" }}>
								<div
									style={{
										background: "#fff",
										border: "1px solid #eee",
										borderRadius: "12px",
										padding: "24px",
										height: "100%",
									}}
								>
									<h6 style={{ color: "#1890ff", marginBottom: "16px" }}>
										<i className="fa-solid fa-circle-info" style={{ marginRight: "8px" }}></i>
										Shipment Details
									</h6>
									{booking?.vehicle_type && (
										<div style={{ marginBottom: "8px", display: "flex", justifyContent: "space-between" }}>
											<span style={{ color: "#888" }}>Vehicle</span>
											<span style={{ fontWeight: "500", textTransform: "capitalize" }}>{booking.vehicle_type}</span>
										</div>
									)}
									{booking?.distance_km && (
										<div style={{ marginBottom: "8px", display: "flex", justifyContent: "space-between" }}>
											<span style={{ color: "#888" }}>Distance</span>
											<span style={{ fontWeight: "500" }}>{booking.distance_km} km</span>
										</div>
									)}
									{booking?.fare && (
										<div style={{ marginBottom: "8px", display: "flex", justifyContent: "space-between" }}>
											<span style={{ color: "#888" }}>Fare</span>
											<span style={{ fontWeight: "600", color: "#1890ff" }}>₹{booking.fare}</span>
										</div>
									)}
									{booking?.created_at && (
										<div style={{ display: "flex", justifyContent: "space-between" }}>
											<span style={{ color: "#888" }}>Booked</span>
											<span style={{ fontWeight: "500" }}>
												{new Date(booking.created_at).toLocaleDateString("en-IN", {
													day: "numeric",
													month: "short",
													year: "numeric",
												})}
											</span>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* CTA */}
						<div
							style={{
								textAlign: "center",
								marginTop: "20px",
								padding: "30px",
								background: "#f0f7ff",
								borderRadius: "12px",
							}}
						>
							<p style={{ color: "#666", marginBottom: "16px" }}>
								Need help with this shipment? Our support team is here to assist.
							</p>
							<a
								href="/contact"
								style={{
									padding: "12px 28px",
									background: "#1890ff",
									color: "#fff",
									borderRadius: "8px",
									textDecoration: "none",
									fontWeight: "600",
									marginRight: "12px",
								}}
							>
								Contact Support
							</a>
							<a
								href="tel:+919133533549"
								style={{
									padding: "12px 28px",
									background: "transparent",
									color: "#1890ff",
									borderRadius: "8px",
									textDecoration: "none",
									fontWeight: "600",
									border: "1px solid #1890ff",
								}}
							>
								<i className="fa-solid fa-phone" style={{ marginRight: "6px" }}></i>
								Call Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
