"use client";

import { company } from "@/content/gstrans";

const features = [
	{
		icon: "fa-solid fa-location-dot",
		title: "Real-Time Tracking",
		desc: "Track your shipment live on the map from pickup to delivery.",
	},
	{
		icon: "fa-solid fa-calculator",
		title: "Instant Fare Estimates",
		desc: "Get transparent pricing before you book. No hidden charges.",
	},
	{
		icon: "fa-solid fa-bell",
		title: "Live Notifications",
		desc: "Stay updated with booking confirmations, rider assignments, and delivery status.",
	},
	{
		icon: "fa-solid fa-shield-halved",
		title: "Secure Payments",
		desc: "Pay safely with multiple payment options including UPI and cards.",
	},
	{
		icon: "fa-solid fa-headset",
		title: "24/7 Support",
		desc: "Reach our customer care team anytime via app chat or call.",
	},
	{
		icon: "fa-solid fa-truck-fast",
		title: "Multiple Vehicle Types",
		desc: "Choose from mini trucks, trucks, and trailers for all your cargo needs.",
	},
];

export default function AppDownload() {
	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				{/* Hero Download Section */}
				<div className="row align-items-center" style={{ marginBottom: "80px" }}>
					<div className="col-lg-6" style={{ marginBottom: "30px" }}>
						<h2 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "20px", lineHeight: "1.3" }}>
							Your Shipments, <br />
							<span style={{ color: "#1890ff" }}>Right in Your Pocket</span>
						</h2>
						<p style={{ color: "#666", fontSize: "17px", lineHeight: "1.7", marginBottom: "30px" }}>
							Book cargo transport, track deliveries in real-time, and manage all your shipments from 
							one powerful app. Available for customers and riders.
						</p>

						{/* Download Buttons */}
						<div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "30px" }}>
							<a
								href="#"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "12px",
									background: "#000",
									color: "#fff",
									padding: "14px 28px",
									borderRadius: "12px",
									textDecoration: "none",
									transition: "transform 0.2s",
								}}
								aria-label="Download on App Store"
							>
								<i className="fa-brands fa-apple" style={{ fontSize: "28px" }}></i>
								<div>
									<div style={{ fontSize: "11px", opacity: 0.8 }}>Download on the</div>
									<div style={{ fontWeight: "600", fontSize: "16px" }}>App Store</div>
								</div>
							</a>
							<a
								href="#"
								style={{
									display: "inline-flex",
									alignItems: "center",
									gap: "12px",
									background: "#000",
									color: "#fff",
									padding: "14px 28px",
									borderRadius: "12px",
									textDecoration: "none",
									transition: "transform 0.2s",
								}}
								aria-label="Download on Google Play"
							>
								<i className="fa-brands fa-google-play" style={{ fontSize: "24px" }}></i>
								<div>
									<div style={{ fontSize: "11px", opacity: 0.8 }}>Get it on</div>
									<div style={{ fontWeight: "600", fontSize: "16px" }}>Google Play</div>
								</div>
							</a>
						</div>

						<p style={{ fontSize: "14px", color: "#999" }}>
							<i className="fa-solid fa-circle-check" style={{ color: "#22c55e", marginRight: "6px" }}></i>
							Free to download &bull; No subscription required
						</p>
					</div>
					<div className="col-lg-6" style={{ textAlign: "center" }}>
						<div
							style={{
								background: "linear-gradient(135deg, #e8f4ff 0%, #f0f7ff 100%)",
								borderRadius: "24px",
								padding: "50px",
								position: "relative",
							}}
						>
							{/* App Mockup Placeholder */}
							<div
								style={{
									width: "220px",
									height: "440px",
									background: "#fff",
									borderRadius: "30px",
									margin: "0 auto",
									boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
									border: "8px solid #1a1a1a",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									flexDirection: "column",
									gap: "12px",
								}}
							>
								<div style={{ fontSize: "48px" }}>🚚</div>
								<div style={{ fontWeight: "700", color: "#1890ff", fontSize: "18px" }}>GS Trans</div>
								<div style={{ fontSize: "13px", color: "#888" }}>Smart Transport</div>
							</div>
						</div>
					</div>
				</div>

				{/* App Features Grid */}
				<div style={{ textAlign: "center", marginBottom: "50px" }}>
					<h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px" }}>Why Use the GS Trans App?</h3>
					<p style={{ color: "#666", maxWidth: "500px", margin: "0 auto" }}>
						Everything you need to ship goods — fast, easy, and transparent.
					</p>
				</div>

				<div className="row">
					{features.map((f, i) => (
						<div key={i} className="col-md-4" style={{ marginBottom: "24px" }}>
							<div
								style={{
									background: "#fff",
									border: "1px solid #eee",
									borderRadius: "16px",
									padding: "30px",
									height: "100%",
									transition: "box-shadow 0.3s",
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
										marginBottom: "16px",
									}}
								>
									<i className={f.icon} style={{ color: "#1890ff", fontSize: "20px" }}></i>
								</div>
								<h5 style={{ fontWeight: "600", marginBottom: "8px" }}>{f.title}</h5>
								<p style={{ color: "#666", fontSize: "14px", margin: 0 }}>{f.desc}</p>
							</div>
						</div>
					))}
				</div>

				{/* Two Apps Section */}
				<div style={{ marginTop: "60px" }}>
					<div className="row">
						<div className="col-md-6" style={{ marginBottom: "24px" }}>
							<div
								style={{
									background: "linear-gradient(135deg, #1890ff 0%, #0050b3 100%)",
									borderRadius: "20px",
									padding: "40px",
									color: "#fff",
									height: "100%",
								}}
							>
								<div style={{ fontSize: "40px", marginBottom: "16px" }}>📦</div>
								<h4 style={{ color: "#fff", marginBottom: "12px" }}>Customer App</h4>
								<p style={{ opacity: 0.9, marginBottom: "20px", fontSize: "15px" }}>
									Book shipments, get instant fare estimates, track your packages in real-time, 
									and rate your delivery experience.
								</p>
								<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
									{["Book in under 2 minutes", "Live GPS tracking", "Transparent pricing", "Order history"].map((t, i) => (
										<li key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
											<i className="fa-solid fa-check" style={{ marginRight: "8px", opacity: 0.8 }}></i>
											{t}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-md-6" style={{ marginBottom: "24px" }}>
							<div
								style={{
									background: "linear-gradient(135deg, #22c55e 0%, #15803d 100%)",
									borderRadius: "20px",
									padding: "40px",
									color: "#fff",
									height: "100%",
								}}
							>
								<div style={{ fontSize: "40px", marginBottom: "16px" }}>🏍️</div>
								<h4 style={{ color: "#fff", marginBottom: "12px" }}>Rider App</h4>
								<p style={{ opacity: 0.9, marginBottom: "20px", fontSize: "15px" }}>
									Accept jobs, navigate to pickups, manage your deliveries, and track your 
									earnings — all from one app.
								</p>
								<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
									{["Browse available rides", "Turn-by-turn navigation", "Earnings dashboard", "Document management"].map((t, i) => (
										<li key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
											<i className="fa-solid fa-check" style={{ marginRight: "8px", opacity: 0.8 }}></i>
											{t}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom CTA */}
				<div
					style={{
						textAlign: "center",
						marginTop: "60px",
						padding: "50px",
						background: "#f8f9fa",
						borderRadius: "20px",
					}}
				>
					<h3 style={{ fontWeight: "700", marginBottom: "12px" }}>Ready to Get Started?</h3>
					<p style={{ color: "#666", marginBottom: "24px" }}>
						Download the app or call us to book your first shipment.
					</p>
					<a
						href={`tel:${company.phoneE164}`}
						style={{
							padding: "14px 32px",
							background: "#1890ff",
							color: "#fff",
							borderRadius: "8px",
							textDecoration: "none",
							fontWeight: "600",
							fontSize: "16px",
						}}
					>
						<i className="fa-solid fa-phone" style={{ marginRight: "8px" }}></i>
						{company.phoneDisplay}
					</a>
				</div>
			</div>
		</section>
	);
}
