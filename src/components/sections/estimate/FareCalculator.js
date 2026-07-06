"use client";

import { useState } from "react";

const vehicleTypes = [
	{ id: "mini_truck", name: "Mini Truck (Tata Ace)", icon: "🚛", maxKg: 750, perKm: 18, perKg: 5, base: 200, desc: "Household & office goods" },
	{ id: "truck", name: "Truck", icon: "🚚", maxKg: 5000, perKm: 25, perKg: 7, base: 500, desc: "Heavy & bulk cargo" },
	{ id: "trailer", name: "Trailer / Container", icon: "🚛", maxKg: 20000, perKm: 35, perKg: 10, base: 1500, desc: "Industrial & large shipments" },
];

export default function FareCalculator() {
	const [pickup, setPickup] = useState("");
	const [dropoff, setDropoff] = useState("");
	const [distance, setDistance] = useState("");
	const [weight, setWeight] = useState("");
	const [selectedVehicle, setSelectedVehicle] = useState(null);
	const [result, setResult] = useState(null);
	const [loading, setLoading] = useState(false);

	const calculateFare = (e) => {
		e.preventDefault();
		if (!selectedVehicle || !distance) return;

		setLoading(true);

		const vehicle = vehicleTypes.find((v) => v.id === selectedVehicle);
		const dist = parseFloat(distance) || 0;
		const wt = parseFloat(weight) || 0;

		// Client-side estimate (mirrors backend PricingService logic)
		let baseFare = vehicle.base;
		let distanceCharge = dist * vehicle.perKm;
		let weightCharge = wt * vehicle.perKg;

		// Surcharges
		let surcharges = 0;
		let surchargeDetails = [];

		// Weight surcharge (>500kg)
		if (wt > 500) {
			surcharges += 100;
			surchargeDetails.push({ name: "Heavy cargo (>500kg)", amount: 100 });
		}

		// Distance surcharge (>100km)
		if (dist > 100) {
			const distSurcharge = Math.round((distanceCharge + weightCharge) * 0.1);
			surcharges += distSurcharge;
			surchargeDetails.push({ name: "Long distance (>100km)", amount: distSurcharge });
		}

		const subtotal = baseFare + distanceCharge + weightCharge;
		const total = subtotal + surcharges;

		// Simulate brief loading
		setTimeout(() => {
			setResult({
				baseFare,
				distanceCharge: Math.round(distanceCharge),
				weightCharge: Math.round(weightCharge),
				surcharges,
				surchargeDetails,
				total: Math.round(total),
				vehicleName: vehicle.name,
				distance: dist,
				weight: wt,
			});
			setLoading(false);
		}, 500);
	};

	const resetForm = () => {
		setPickup("");
		setDropoff("");
		setDistance("");
		setWeight("");
		setSelectedVehicle(null);
		setResult(null);
	};

	return (
		<section className="tj-service-section" style={{ padding: "80px 0" }}>
			<div className="container">
				<div className="row">
					{/* Left - Form */}
					<div className="col-lg-7">
						<div style={{ background: "#f8f9fa", borderRadius: "16px", padding: "40px", marginBottom: "30px" }}>
							<h3 style={{ marginBottom: "8px", fontSize: "28px" }}>
								<i className="fa-solid fa-calculator" style={{ color: "#1890ff", marginRight: "10px" }}></i>
								Calculate Your Fare
							</h3>
							<p style={{ color: "#666", marginBottom: "30px" }}>
								Get an instant estimate for your cargo transport. Final fare may vary based on actual route and conditions.
							</p>

							<form onSubmit={calculateFare}>
								{/* Locations */}
								<div className="row" style={{ marginBottom: "20px" }}>
									<div className="col-md-6" style={{ marginBottom: "15px" }}>
										<label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>
											<i className="fa-solid fa-location-dot" style={{ color: "#22c55e", marginRight: "6px" }}></i>
											Pickup Location
										</label>
										<input
											type="text"
											value={pickup}
											onChange={(e) => setPickup(e.target.value)}
											placeholder="e.g., Khammam"
											style={{
												width: "100%", padding: "12px 16px", borderRadius: "8px",
												border: "1px solid #ddd", fontSize: "15px", outline: "none",
											}}
										/>
									</div>
									<div className="col-md-6" style={{ marginBottom: "15px" }}>
										<label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>
											<i className="fa-solid fa-location-dot" style={{ color: "#ef4444", marginRight: "6px" }}></i>
											Drop Location
										</label>
										<input
											type="text"
											value={dropoff}
											onChange={(e) => setDropoff(e.target.value)}
											placeholder="e.g., Hyderabad"
											style={{
												width: "100%", padding: "12px 16px", borderRadius: "8px",
												border: "1px solid #ddd", fontSize: "15px", outline: "none",
											}}
										/>
									</div>
								</div>

								{/* Distance & Weight */}
								<div className="row" style={{ marginBottom: "20px" }}>
									<div className="col-md-6" style={{ marginBottom: "15px" }}>
										<label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>
											<i className="fa-solid fa-road" style={{ color: "#1890ff", marginRight: "6px" }}></i>
											Estimated Distance (km) *
										</label>
										<input
											type="number"
											value={distance}
											onChange={(e) => setDistance(e.target.value)}
											placeholder="e.g., 50"
											min="1"
											max="2000"
											required
											style={{
												width: "100%", padding: "12px 16px", borderRadius: "8px",
												border: "1px solid #ddd", fontSize: "15px", outline: "none",
											}}
										/>
									</div>
									<div className="col-md-6" style={{ marginBottom: "15px" }}>
										<label style={{ fontWeight: "600", marginBottom: "8px", display: "block" }}>
											<i className="fa-solid fa-weight-hanging" style={{ color: "#f59e0b", marginRight: "6px" }}></i>
											Cargo Weight (kg)
										</label>
										<input
											type="number"
											value={weight}
											onChange={(e) => setWeight(e.target.value)}
											placeholder="e.g., 100"
											min="0"
											max="20000"
											style={{
												width: "100%", padding: "12px 16px", borderRadius: "8px",
												border: "1px solid #ddd", fontSize: "15px", outline: "none",
											}}
										/>
									</div>
								</div>

								{/* Vehicle Selection */}
								<div style={{ marginBottom: "25px" }}>
									<label style={{ fontWeight: "600", marginBottom: "12px", display: "block" }}>
										<i className="fa-solid fa-truck" style={{ color: "#1890ff", marginRight: "6px" }}></i>
										Select Vehicle Type *
									</label>
									<div className="row">
										{vehicleTypes.map((v) => (
											<div className="col-6 col-md-4" key={v.id} style={{ marginBottom: "10px" }}>
												<div
													onClick={() => setSelectedVehicle(v.id)}
													style={{
														padding: "16px 12px",
														borderRadius: "12px",
														border: selectedVehicle === v.id ? "2px solid #1890ff" : "2px solid #e5e7eb",
														background: selectedVehicle === v.id ? "#e6f4ff" : "#fff",
														cursor: "pointer",
														textAlign: "center",
														transition: "all 0.2s",
													}}
												>
													<div style={{ fontSize: "28px", marginBottom: "6px" }}>{v.icon}</div>
													<div style={{ fontWeight: "600", fontSize: "13px", marginBottom: "2px" }}>{v.name}</div>
													<div style={{ fontSize: "11px", color: "#888" }}>{v.desc}</div>
													<div style={{ fontSize: "12px", color: "#1890ff", fontWeight: "600", marginTop: "4px" }}>
														₹{v.perKm}/km
													</div>
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Buttons */}
								<div style={{ display: "flex", gap: "12px" }}>
									<button
										type="submit"
										disabled={!selectedVehicle || !distance || loading}
										style={{
											padding: "14px 32px",
											background: !selectedVehicle || !distance ? "#ccc" : "#1890ff",
											color: "#fff",
											border: "none",
											borderRadius: "8px",
											fontSize: "16px",
											fontWeight: "600",
											cursor: !selectedVehicle || !distance ? "not-allowed" : "pointer",
											display: "flex",
											alignItems: "center",
											gap: "8px",
										}}
									>
										{loading ? (
											<>
												<i className="fa-solid fa-spinner fa-spin"></i> Calculating...
											</>
										) : (
											<>
												<i className="fa-solid fa-calculator"></i> Get Estimate
											</>
										)}
									</button>
									<button
										type="button"
										onClick={resetForm}
										style={{
											padding: "14px 24px",
											background: "transparent",
											color: "#666",
											border: "1px solid #ddd",
											borderRadius: "8px",
											fontSize: "16px",
											cursor: "pointer",
										}}
									>
										Reset
									</button>
								</div>
							</form>
						</div>
					</div>

					{/* Right - Result */}
					<div className="col-lg-5">
						{result ? (
							<div
								style={{
									background: "linear-gradient(135deg, #1890ff 0%, #0050b3 100%)",
									borderRadius: "16px",
									padding: "35px",
									color: "#fff",
									position: "sticky",
									top: "100px",
								}}
							>
								<h4 style={{ color: "#fff", marginBottom: "20px", fontSize: "22px" }}>
									<i className="fa-solid fa-receipt" style={{ marginRight: "8px" }}></i>
									Fare Estimate
								</h4>

								<div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "20px", marginBottom: "20px" }}>
									<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
										<span>🚛 {result.vehicleName}</span>
									</div>
									<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "14px", opacity: 0.9 }}>
										<span>📍 Distance</span>
										<span>{result.distance} km</span>
									</div>
									{result.weight > 0 && (
										<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", fontSize: "14px", opacity: 0.9 }}>
											<span>⚖️ Weight</span>
											<span>{result.weight} kg</span>
										</div>
									)}
								</div>

								{/* Breakdown */}
								<div style={{ marginBottom: "20px" }}>
									<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "15px" }}>
										<span>Base fare</span>
										<span>₹{result.baseFare}</span>
									</div>
									<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "15px" }}>
										<span>Distance charge</span>
										<span>₹{result.distanceCharge}</span>
									</div>
									{result.weightCharge > 0 && (
										<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "15px" }}>
											<span>Weight charge</span>
											<span>₹{result.weightCharge}</span>
										</div>
									)}
									{result.surchargeDetails.map((s, i) => (
										<div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", opacity: 0.85 }}>
											<span>{s.name}</span>
											<span>+₹{s.amount}</span>
										</div>
									))}
									<hr style={{ borderColor: "rgba(255,255,255,0.3)", margin: "12px 0" }} />
									<div style={{ display: "flex", justifyContent: "space-between", fontSize: "24px", fontWeight: "700" }}>
										<span>Total</span>
										<span>₹{result.total}</span>
									</div>
								</div>

								<p style={{ fontSize: "12px", opacity: 0.7, marginBottom: "20px" }}>
									* This is an estimate. Actual fare may vary based on route, time of day, and other factors. Download our app for exact pricing.
								</p>

								<a
									href="/download"
									style={{
										display: "block",
										textAlign: "center",
										padding: "14px",
										background: "#fff",
										color: "#1890ff",
										borderRadius: "8px",
										fontWeight: "700",
										fontSize: "16px",
										textDecoration: "none",
									}}
								>
									<i className="fa-solid fa-mobile-screen" style={{ marginRight: "8px" }}></i>
									Book Now — Download App
								</a>
							</div>
						) : (
							<div
								style={{
									background: "#f0f7ff",
									borderRadius: "16px",
									padding: "40px",
									textAlign: "center",
									position: "sticky",
									top: "100px",
								}}
							>
								<div style={{ fontSize: "48px", marginBottom: "16px" }}>📦</div>
								<h4 style={{ marginBottom: "12px" }}>Get Your Fare Estimate</h4>
								<p style={{ color: "#666", fontSize: "15px", marginBottom: "24px" }}>
									Select a vehicle type and enter distance to see a transparent fare breakdown.
								</p>

								<div style={{ textAlign: "left", padding: "0 20px" }}>
									<h6 style={{ marginBottom: "12px", color: "#1890ff" }}>Why GS Trans?</h6>
									<ul style={{ listStyle: "none", padding: 0 }}>
										{[
											"No hidden charges",
											"Transparent pricing",
											"Real-time GPS tracking",
											"Verified riders",
											"Multiple payment options",
										].map((item, i) => (
											<li key={i} style={{ marginBottom: "8px", fontSize: "14px", color: "#555" }}>
												<i className="fa-solid fa-check" style={{ color: "#22c55e", marginRight: "8px" }}></i>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
