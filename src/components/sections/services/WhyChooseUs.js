
const WhyChooseUs = () => {
	const reasons = [
		{
			id: 1,
			icon: "tji-arrow-right-long",
			title: "Lightning Fast",
			description: "Express delivery in 2-4 hours. Same-day local delivery options available.",
			stats: "2-4 Hours",
		},
		{
			id: 2,
			icon: "tji-check",
			title: "100% Reliable",
			description: "99% on-time delivery rate. Professional drivers and verified fleet maintenance.",
			stats: "99% Reliable",
		},
		{
			id: 3,
			icon: "tji-service-3",
			title: "Smart Technology",
			description: "AI-powered routing, real-time tracking, and automated reporting dashboard.",
			stats: "AI Optimized",
		},
		{
			id: 4,
			icon: "tji-service-2",
			title: "Cost-Effective",
			description: "Volume discounts, transparent pricing, and flexible subscription plans for businesses.",
			stats: "Save 30%",
		},
	];

	return (
		<section className="tj-why-choose-us section-gap bg-light">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center mb-60">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d', fontWeight: '600' }}>
								<i className="tji-heart" style={{color: '#D4AF37'}}></i>Why Choose Us
							</span>
							<h2 className="sec-title title-anim" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)' }}>
								The GS Trans <span style={{color: '#D4AF37'}}>Advantage</span>
							</h2>
							<p style={{ color: '#666', marginTop: '20px', fontSize: '16px' }}>
								We're not just a logistics company. We're your trusted partner in growth.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{reasons.map((reason, idx) => (
						<div key={reason.id} className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx + 1)}s`}>
							<div className="choose-card">
								<div className="choose-card-header">
									<div className="choose-icon">
										<i className={reason.icon}></i>
									</div>
									<div className="choose-stats">{reason.stats}</div>
								</div>
								<div className="choose-content">
									<h3 className="choose-title">{reason.title}</h3>
									<p className="choose-description">{reason.description}</p>
								</div>
								<div className="choose-bg-shape"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
