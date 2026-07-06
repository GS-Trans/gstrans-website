"use client";

import { company } from "@/content/gstrans";

export default function CityContent({ city }) {
	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				{/* City Intro */}
				<div className="row justify-content-center" style={{ marginBottom: "60px" }}>
					<div className="col-lg-8" style={{ textAlign: "center" }}>
						{city.isHQ && (
							<span
								style={{
									background: "#22c55e",
									color: "#fff",
									padding: "4px 16px",
									borderRadius: "20px",
									fontSize: "13px",
									fontWeight: "600",
									display: "inline-block",
									marginBottom: "16px",
								}}
							>
								🏠 Our Headquarters
							</span>
						)}
						<h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "16px" }}>
							Cargo Transport Services in {city.name}
						</h2>
						<p style={{ color: "#666", fontSize: "17px", lineHeight: "1.7" }}>{city.description}</p>
					</div>
				</div>

				{/* Highlights */}
				<div className="row" style={{ marginBottom: "60px" }}>
					{city.highlights.map((h, i) => (
						<div key={i} className="col-md-6 col-lg-3" style={{ marginBottom: "20px" }}>
							<div
								style={{
									background: "#f0f7ff",
									borderRadius: "14px",
									padding: "24px",
									height: "100%",
									textAlign: "center",
								}}
							>
								<div
									style={{
										width: "44px",
										height: "44px",
										background: "#1890ff",
										borderRadius: "50%",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										margin: "0 auto 12px",
										color: "#fff",
										fontWeight: "700",
									}}
								>
									{i + 1}
								</div>
								<p style={{ fontWeight: "500", margin: 0, fontSize: "15px" }}>{h}</p>
							</div>
						</div>
					))}
				</div>

				{/* Popular Routes */}
				<div style={{ marginBottom: "60px" }}>
					<h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "30px" }}>
						Popular Routes from {city.name}
					</h3>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div style={{ background: "#fff", border: "1px solid #eee", borderRadius: "16px", overflow: "hidden" }}>
								{city.popularRoutes.map((route, i) => (
									<div
										key={i}
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											padding: "18px 24px",
											borderBottom: i < city.popularRoutes.length - 1 ? "1px solid #f0f0f0" : "none",
										}}
									>
										<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
											<i className="fa-solid fa-route" style={{ color: "#1890ff" }}></i>
											<span style={{ fontWeight: "500" }}>
												{route.from} → {route.to}
											</span>
										</div>
										<span
											style={{
												background: "#f0f7ff",
												color: "#1890ff",
												padding: "4px 14px",
												borderRadius: "20px",
												fontSize: "13px",
												fontWeight: "600",
											}}
										>
											{route.distance}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Services Available */}
				<div style={{ marginBottom: "60px" }}>
					<h3 style={{ textAlign: "center", fontWeight: "700", marginBottom: "30px" }}>
						Services Available in {city.name}
					</h3>
					<div className="row">
						{[
							{ icon: "fa-solid fa-box", title: "Local Delivery", desc: "Same-day parcel and cargo delivery within the city." },
							{ icon: "fa-solid fa-truck", title: "Inter-City Transport", desc: "Reliable long-distance freight to other cities and states." },
							{ icon: "fa-solid fa-dolly", title: "Express Delivery", desc: "Quick and efficient cargo delivery with our verified fleet." },
							{ icon: "fa-solid fa-warehouse", title: "Bulk Cargo", desc: "Full truck and trailer loads for industrial and commercial shipments." },
						].map((s, i) => (
							<div key={i} className="col-md-6 col-lg-3" style={{ marginBottom: "20px" }}>
								<div
									style={{
										background: "#fff",
										border: "1px solid #eee",
										borderRadius: "14px",
										padding: "28px",
										textAlign: "center",
										height: "100%",
									}}
								>
									<div
										style={{
											width: "50px",
											height: "50px",
											background: "#e8f4ff",
											borderRadius: "12px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											margin: "0 auto 14px",
										}}
									>
										<i className={s.icon} style={{ color: "#1890ff", fontSize: "20px" }}></i>
									</div>
									<h6 style={{ fontWeight: "600", marginBottom: "8px" }}>{s.title}</h6>
									<p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{s.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* CTA */}
				<div
					style={{
						textAlign: "center",
						padding: "50px",
						background: "linear-gradient(135deg, #1890ff 0%, #0050b3 100%)",
						borderRadius: "20px",
						color: "#fff",
					}}
				>
					<h3 style={{ color: "#fff", fontWeight: "700", marginBottom: "12px" }}>
						Need Transport in {city.name}?
					</h3>
					<p style={{ opacity: 0.9, marginBottom: "24px", maxWidth: "450px", margin: "0 auto 24px" }}>
						Get an instant fare estimate or book your shipment now. 
					</p>
					<div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
						<a
							href="/estimate"
							style={{
								padding: "12px 28px",
								background: "#fff",
								color: "#1890ff",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
							}}
						>
							Get Fare Estimate
						</a>
						<a
							href={`tel:${company.phoneE164}`}
							style={{
								padding: "12px 28px",
								background: "transparent",
								color: "#fff",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
								border: "1px solid rgba(255,255,255,0.5)",
							}}
						>
							<i className="fa-solid fa-phone" style={{ marginRight: "6px" }}></i>
							{company.phoneDisplay}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
