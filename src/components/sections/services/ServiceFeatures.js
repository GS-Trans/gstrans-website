
const ServiceFeatures = () => {
	const features = [
		{
			id: 1,
			icon: "tji-location",
			title: "Real-Time Tracking",
			description: "Track your shipment live on our mobile app with GPS location updates every minute.",
		},
		{
			id: 2,
			icon: "tji-support",
			title: "24/7 Customer Support",
			description: "Our support team is available round-the-clock to help with any queries or concerns.",
		},
		{
			id: 3,
			icon: "tji-service-1",
			title: "Affordable Pricing",
			description: "Transparent, distance-based pricing with no hidden charges or surge pricing.",
		},
		{
			id: 4,
			icon: "tji-team",
			title: "Professional Drivers",
			description: "Verified, trained, and background-checked drivers ensure safe and reliable service.",
		},
		{
			id: 5,
			icon: "tji-clock",
			title: "Flexible Scheduling",
			description: "Book deliveries at your convenience with flexible pickup and drop-off times.",
		},
		{
			id: 6,
			icon: "tji-check",
			title: "Quality Assurance",
			description: "Every delivery is monitored for quality and customer satisfaction is guaranteed.",
		},
	];

	return (
		<section className="tj-service-features section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center mb-60">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d', fontWeight: '600' }}>
								<i className="tji-star" style={{color: '#D4AF37'}}></i>Why We Excel
							</span>
							<h2 className="sec-title title-anim" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)' }}>
								Key Features That Make <span style={{color: '#D4AF37'}}>Us Different</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{features.map((feature, idx) => (
						<div key={feature.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx + 1)}s`}>
							<div className="feature-card">
								<div className="feature-icon">
									<i className={feature.icon}></i>
								</div>
								<div className="feature-content">
									<h3 className="feature-title">{feature.title}</h3>
									<p className="feature-description">{feature.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceFeatures;
