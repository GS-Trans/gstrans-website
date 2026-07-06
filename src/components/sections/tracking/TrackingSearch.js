"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TrackingSearch() {
	const [bookingId, setBookingId] = useState("");
	const router = useRouter();

	const handleTrack = (e) => {
		e.preventDefault();
		const trimmed = bookingId.trim();
		if (trimmed) {
			router.push(`/track/${encodeURIComponent(trimmed)}`);
		}
	};

	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-8">
						<div style={{ textAlign: "center", marginBottom: "50px" }}>
							<h2 style={{ marginBottom: "16px" }}>Track Your Shipment</h2>
							<p style={{ color: "#666", fontSize: "16px" }}>
								Enter your booking ID to get real-time status updates and live location of your cargo.
							</p>
						</div>

						{/* Search Box */}
						<div
							style={{
								background: "#f8f9fa",
								borderRadius: "16px",
								padding: "50px",
								textAlign: "center",
							}}
						>
							<div style={{ fontSize: "60px", marginBottom: "20px" }}>📦</div>
							<form onSubmit={handleTrack}>
								<div
									style={{
										display: "flex",
										gap: "12px",
										maxWidth: "500px",
										margin: "0 auto 20px",
									}}
								>
									<input
										type="text"
										value={bookingId}
										onChange={(e) => setBookingId(e.target.value)}
										placeholder="Enter Booking ID (e.g., GST-10045)"
										required
										style={{
											flex: 1,
											padding: "16px 20px",
											borderRadius: "10px",
											border: "2px solid #ddd",
											fontSize: "16px",
											outline: "none",
										}}
									/>
									<button
										type="submit"
										style={{
											padding: "16px 28px",
											background: "#1890ff",
											color: "#fff",
											border: "none",
											borderRadius: "10px",
											fontSize: "16px",
											fontWeight: "600",
											cursor: "pointer",
											whiteSpace: "nowrap",
										}}
									>
										<i className="fa-solid fa-magnifying-glass" style={{ marginRight: "6px" }}></i>
										Track
									</button>
								</div>
							</form>
							<p style={{ color: "#999", fontSize: "13px" }}>
								Your booking ID was shared via SMS & email when you placed your order.
							</p>
						</div>

						{/* Status Legend */}
						<div style={{ marginTop: "50px" }}>
							<h5 style={{ marginBottom: "20px", textAlign: "center" }}>Shipment Status Guide</h5>
							<div className="row">
								{[
									{ status: "Pending", icon: "🕐", color: "#f59e0b", desc: "Booking placed, waiting for rider assignment" },
									{ status: "Accepted", icon: "✅", color: "#22c55e", desc: "Rider assigned and heading to pickup" },
									{ status: "In Transit", icon: "🚚", color: "#1890ff", desc: "Your cargo is on the way to destination" },
									{ status: "Completed", icon: "🎉", color: "#10b981", desc: "Successfully delivered at destination" },
								].map((s, i) => (
									<div className="col-md-6" key={i} style={{ marginBottom: "16px" }}>
										<div
											style={{
												display: "flex",
												alignItems: "center",
												gap: "14px",
												padding: "16px 20px",
												background: "#fff",
												borderRadius: "10px",
												border: "1px solid #eee",
											}}
										>
											<span style={{ fontSize: "28px" }}>{s.icon}</span>
											<div>
												<strong style={{ color: s.color }}>{s.status}</strong>
												<p style={{ margin: 0, fontSize: "13px", color: "#888" }}>{s.desc}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
