"use client";

import { cities } from "@/content/cities";
import Link from "next/link";

export default function CityList() {
	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				<div style={{ textAlign: "center", marginBottom: "50px" }}>
					<h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}>
						We Deliver Across Telangana & Andhra Pradesh
					</h2>
					<p style={{ color: "#666", maxWidth: "550px", margin: "0 auto" }}>
						Our growing network covers major cities and towns. Click on a city to see available routes and services.
					</p>
				</div>

				<div className="row">
					{cities.map((city) => (
						<div key={city.slug} className="col-md-6 col-lg-4" style={{ marginBottom: "24px" }}>
							<Link href={`/cities/${city.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
								<div
									style={{
										background: "#fff",
										border: "1px solid #eee",
										borderRadius: "16px",
										padding: "30px",
										height: "100%",
										transition: "box-shadow 0.3s, transform 0.2s",
										cursor: "pointer",
									}}
								>
									<div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
										<div
											style={{
												width: "44px",
												height: "44px",
												background: city.isHQ ? "#22c55e" : "#1890ff",
												borderRadius: "12px",
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												color: "#fff",
												fontSize: "18px",
											}}
										>
											<i className="fa-solid fa-location-dot"></i>
										</div>
										<div>
											<h5 style={{ fontWeight: "600", margin: "0 0 2px" }}>{city.name}</h5>
											<span style={{ color: "#999", fontSize: "13px" }}>{city.state}</span>
										</div>
										{city.isHQ && (
											<span
												style={{
													background: "#dcfce7",
													color: "#15803d",
													padding: "2px 10px",
													borderRadius: "12px",
													fontSize: "11px",
													fontWeight: "600",
													marginLeft: "auto",
												}}
											>
												HQ
											</span>
										)}
									</div>
									<p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", margin: "0 0 14px" }}>
										{city.description.slice(0, 120)}...
									</p>
									<div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
										{city.popularRoutes.slice(0, 2).map((r, i) => (
											<span
												key={i}
												style={{
													background: "#f0f7ff",
													color: "#1890ff",
													padding: "3px 10px",
													borderRadius: "12px",
													fontSize: "12px",
													fontWeight: "500",
												}}
											>
												→ {r.to}
											</span>
										))}
										{city.popularRoutes.length > 2 && (
											<span style={{ color: "#999", fontSize: "12px", lineHeight: "24px" }}>
												+{city.popularRoutes.length - 2} more
											</span>
										)}
									</div>
								</div>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
