"use client";

import { company } from "@/content/gstrans";

const vehicleRates = [
	{
		type: "Mini Truck",
		icon: "🚐",
		capacity: "Up to 1,000 kg",
		best: "Bulk goods, furniture, appliances",
		baseRate: "₹300",
		perKm: "₹15/km",
		perKg: "₹2/kg",
		color: "#1890ff",
		popular: true,
	},
	{
		type: "Truck",
		icon: "🚚",
		capacity: "Up to 5,000 kg",
		best: "Commercial freight, industrial cargo",
		baseRate: "₹800",
		perKm: "₹20/km",
		perKg: "₹1.5/kg",
		color: "#8b5cf6",
	},
	{
		type: "Trailer",
		icon: "🚛",
		capacity: "5,000+ kg",
		best: "Heavy goods, construction materials",
		baseRate: "₹1500",
		perKm: "₹25/km",
		perKg: "₹1/kg",
		color: "#ef4444",
	},
];

const surcharges = [
	{ label: "Night Delivery (10 PM – 6 AM)", value: "+20%" },
	{ label: "Peak Hours (8–10 AM, 5–8 PM)", value: "+10%" },
	{ label: "Heavy Weight (above 500 kg)", value: "+15%" },
	{ label: "Long Distance (above 100 km)", value: "+5%" },
	{ label: "Return Load Discount", value: "-10% to -20%" },
];

export default function RateCard() {
	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				{/* Intro */}
				<div style={{ textAlign: "center", marginBottom: "50px" }}>
					<h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}>
						Simple, Transparent Pricing
					</h2>
					<p style={{ color: "#666", maxWidth: "550px", margin: "0 auto" }}>
						No hidden fees. Our rates are based on vehicle type, distance, and cargo weight.
						Final fare is calculated dynamically based on your specific requirements.
					</p>
				</div>

				{/* Vehicle Rate Cards */}
				<div className="row" style={{ marginBottom: "60px" }}>
					{vehicleRates.map((v) => (
						<div key={v.type} className="col-lg" style={{ marginBottom: "20px" }}>
							<div
								style={{
									background: "#fff",
									border: v.popular ? `2px solid ${v.color}` : "1px solid #eee",
									borderRadius: "16px",
									padding: "28px 20px",
									textAlign: "center",
									height: "100%",
									position: "relative",
								}}
							>
								{v.popular && (
									<span
										style={{
											position: "absolute",
											top: "-12px",
											left: "50%",
											transform: "translateX(-50%)",
											background: v.color,
											color: "#fff",
											padding: "3px 14px",
											borderRadius: "12px",
											fontSize: "11px",
											fontWeight: "600",
										}}
									>
										Most Popular
									</span>
								)}
								<div style={{ fontSize: "40px", marginBottom: "10px" }}>{v.icon}</div>
								<h5 style={{ fontWeight: "700", marginBottom: "4px" }}>{v.type}</h5>
								<p style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>{v.capacity}</p>

								<div
									style={{
										background: `${v.color}11`,
										borderRadius: "12px",
										padding: "16px",
										marginBottom: "16px",
									}}
								>
									<div style={{ fontSize: "24px", fontWeight: "700", color: v.color }}>{v.baseRate}</div>
									<div style={{ fontSize: "12px", color: "#888" }}>Base fare</div>
								</div>

								<div style={{ fontSize: "14px", marginBottom: "6px" }}>
									<span style={{ color: "#888" }}>Per km:</span>{" "}
									<strong style={{ color: "#333" }}>{v.perKm}</strong>
								</div>
								<div style={{ fontSize: "14px", marginBottom: "14px" }}>
									<span style={{ color: "#888" }}>Per kg:</span>{" "}
									<strong style={{ color: "#333" }}>{v.perKg}</strong>
								</div>

								<p style={{ fontSize: "12px", color: "#999", margin: 0, fontStyle: "italic" }}>
									Best for: {v.best}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Surcharges & Discounts */}
				<div className="row justify-content-center" style={{ marginBottom: "60px" }}>
					<div className="col-lg-8">
						<h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "24px" }}>
							Surcharges & Discounts
						</h3>
						<div
							style={{
								background: "#fff",
								border: "1px solid #eee",
								borderRadius: "16px",
								overflow: "hidden",
							}}
						>
							{surcharges.map((s, i) => (
								<div
									key={i}
									style={{
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										padding: "16px 24px",
										borderBottom: i < surcharges.length - 1 ? "1px solid #f0f0f0" : "none",
									}}
								>
									<span style={{ fontWeight: "500" }}>{s.label}</span>
									<span
										style={{
											fontWeight: "600",
											color: s.value.startsWith("-") ? "#22c55e" : "#f59e0b",
											background: s.value.startsWith("-") ? "#dcfce7" : "#fef9c3",
											padding: "4px 14px",
											borderRadius: "20px",
											fontSize: "13px",
										}}
									>
										{s.value}
									</span>
								</div>
							))}
						</div>
						<p style={{ textAlign: "center", fontSize: "13px", color: "#999", marginTop: "12px" }}>
							* Surcharges are applied automatically. Final fare shown before booking confirmation.
						</p>
					</div>
				</div>

				{/* CTA */}
				<div
					style={{
						display: "flex",
						gap: "30px",
						flexWrap: "wrap",
						justifyContent: "center",
						alignItems: "center",
						padding: "50px",
						background: "#f8f9fa",
						borderRadius: "20px",
					}}
				>
					<div style={{ textAlign: "center", maxWidth: "400px" }}>
						<h4 style={{ fontWeight: "700", marginBottom: "8px" }}>Want an Exact Fare?</h4>
						<p style={{ color: "#666", fontSize: "15px", margin: 0 }}>
							Use our fare calculator to get a precise estimate for your shipment.
						</p>
					</div>
					<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
						<a
							href="/estimate"
							style={{
								padding: "14px 28px",
								background: "#1890ff",
								color: "#fff",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
							}}
						>
							Calculate Fare
						</a>
						<a
							href={`tel:${company.phoneE164}`}
							style={{
								padding: "14px 28px",
								background: "#fff",
								color: "#1890ff",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
								border: "1px solid #1890ff",
							}}
						>
							Call for Bulk Rates
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
