"use client";
import Link from "next/link";

const Portfolios2 = () => {
	const portfolioItems = [
		{
			id: 1,
			title: "Customer Mobile App",
			desc: "Book rides instantly with real-time tracking and multiple payment options",
			img: "/images/project/customer-app.webp",
			features: ["Easy Booking", "Live Tracking", "Quick Payments"]
		},
		{
			id: 2,
			title: "Rider Network Platform",
			desc: "Verified riders with background checks ensuring safe and reliable deliveries",
			img: "/images/project/rider-network.webp",
			features: ["Verified Riders", "Real-time Updates", "Safety First"]
		},
		{
			id: 3,
			title: "Business Dashboard",
			desc: "Manage bulk orders with analytics, reporting, and API integration",
			img: "/images/project/business-dashboard.webp",
			features: ["Bulk Management", "Analytics", "API Access"]
		},
		{
			id: 4,
			title: "GPS Tracking System",
			desc: "Real-time GPS tracking with route optimization and ETA updates",
			img: "/images/project/gps-tracking.webp",
			features: ["Live GPS", "Route Optimization", "ETA Updates"]
		},
	];

	return (
		<section className="tj-project-section-2" style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-sec-heading-2 text-center" style={{ marginBottom: '50px' }}>
							<span className="sub-title" style={{ color: '#a0522d', fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
								Our Platform
							</span>
							<h2 className="sec-title" style={{ color: '#0c2d41', fontSize: '42px', fontWeight: 'bold', marginTop: '10px' }}>
								App-Based <span style={{ color: '#D4AF37' }}>Transport Solutions</span>
							</h2>
							<p style={{ color: '#666', fontSize: '18px', marginTop: '15px', maxWidth: '700px', margin: '15px auto 0' }}>
								Powering seamless logistics with technology-driven solutions for customers, riders, and businesses
							</p>
						</div>
					</div>
				</div>

				<div className="row" style={{ gap: '30px 0' }}>
					{portfolioItems.map((item) => (
						<div key={item.id} className="col-lg-6 col-md-6">
							<div
								className="portfolio-item"
								style={{
									backgroundColor: '#ffffff',
									borderRadius: '12px',
									overflow: 'hidden',
									boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
									transition: 'transform 0.3s ease, box-shadow 0.3s ease',
									height: '100%',
									cursor: 'pointer',
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'translateY(-10px)';
									e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.3)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'translateY(0)';
									e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
								}}
							>
								<div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
									<div
										style={{
											width: '100%',
											height: '100%',
											backgroundImage: `linear-gradient(to bottom, rgba(12, 45, 65, 0.3), rgba(12, 45, 65, 0.6)), url(${item.img})`,
											backgroundSize: 'cover',
											backgroundPosition: 'center',
											transition: 'transform 0.3s ease',
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.transform = 'scale(1.05)';
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.transform = 'scale(1)';
										}}
									/>
									<div
										style={{
											position: 'absolute',
											top: '20px',
											right: '20px',
											backgroundColor: '#D4AF37',
											color: '#fff',
											padding: '8px 16px',
											borderRadius: '20px',
											fontSize: '12px',
											fontWeight: '600',
											textTransform: 'uppercase',
										}}
									>
										Platform Feature
									</div>
								</div>

								<div style={{ padding: '30px' }}>
									<h3 style={{ color: '#0c2d41', fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
										{item.title}
									</h3>
									<p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
										{item.desc}
									</p>

									<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
										{item.features.map((feature, idx) => (
											<span
												key={idx}
												style={{
													backgroundColor: '#f0f0f0',
													color: '#a0522d',
													padding: '6px 14px',
													borderRadius: '15px',
													fontSize: '13px',
													fontWeight: '500',
												}}
											>
												{feature}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA Section */}
				<div className="row" style={{ marginTop: '60px' }}>
					<div className="col-12 text-center">
						<div
							style={{
								backgroundColor: '#0c2d41',
								padding: '50px 30px',
								borderRadius: '12px',
								backgroundImage: 'linear-gradient(135deg, #0c2d41 0%, #1a4d6d 100%)',
							}}
						>
							<h3 style={{ color: '#D4AF37', fontSize: '32px', fontWeight: 'bold', marginBottom: '15px' }}>
								Ready to Transform Your Logistics?
							</h3>
							<p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '30px' }}>
								Join thousands of satisfied customers using GS Trans for their transport needs
							</p>
							<div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
								<Link
									href="/services"
									className="tj-primary-btn"
									style={{
										backgroundColor: '#D4AF37',
										color: '#fff',
										padding: '14px 32px',
										borderRadius: '8px',
										fontSize: '16px',
										fontWeight: '600',
										textDecoration: 'none',
										display: 'inline-block',
										transition: 'all 0.3s ease',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = '#E8C547';
										e.currentTarget.style.transform = 'translateY(-2px)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = '#D4AF37';
										e.currentTarget.style.transform = 'translateY(0)';
									}}
								>
									Explore Services
								</Link>
								<Link
									href="/about"
									className="tj-secondary-btn"
									style={{
										backgroundColor: 'transparent',
										color: '#D4AF37',
										padding: '14px 32px',
										borderRadius: '8px',
										fontSize: '16px',
										fontWeight: '600',
										textDecoration: 'none',
										display: 'inline-block',
										border: '2px solid #D4AF37',
										transition: 'all 0.3s ease',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = '#D4AF37';
										e.currentTarget.style.color = '#fff';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = 'transparent';
										e.currentTarget.style.color = '#D4AF37';
									}}
								>
									Learn More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios2;

