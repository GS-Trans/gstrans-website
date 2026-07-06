import { COLORS } from "@/lib/constants";

const ServiceApproach = () => {
	const approaches = [
		{
			icon: "tji-location",
			title: "On-Ground Booking & Support",
			desc: "Our field executives visit your business location to understand your unique needs, book shipments, and provide personalized support. We believe in face-to-face relationships, not just digital interactions.",
			bgImage: "booking-support-bg.webp",
		},
		{
			icon: "tji-support",
			title: "Issue Resolution On-Location",
			desc: "Problems are solved where they happen. Our executives are always on the ground to track issues in real-time and resolve them immediately at your location, ensuring zero delays and maximum satisfaction.",
			bgImage: "issue-resolution-bg.webp",
		},
		{
			icon: "tji-team",
			title: "B2B Relationship Management",
			desc: "We're committed to being your long-term logistics partner. Dedicated account management, regular business reviews, and personalized solutions designed to grow your business alongside ours.",
			bgImage: "b2b-relationship-bg.webp",
		},
	];

	return (
		<section id="approach" className="tj-approach-section section-gap" style={{ backgroundImage: `url('/images/bg/our_approch_bg.webp')`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', zIndex: 1 }}>
			{/* Dark overlay for text visibility */}
			<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}></div>
			
			<div className="container" style={{ position: 'relative', zIndex: 1 }}>
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: COLORS.primary, fontWeight: '600', backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '10px 20px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
							<i className="tji-check" style={{color: COLORS.primary}}></i>Our Approach
							</span>
							<h2 className="sec-title title-anim" style={{ color: '#ffffff', fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
								Understanding Our <span style={{color: COLORS.primary}}>Service Motive</span>
							</h2>
							<p className="sec-desc wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '16px', color: '#ffffff', lineHeight: '1.6' }}>
								We're not just a logistics company. We're your business partner committed to hassle-free service and on-location support.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{approaches.map((approach, idx) => (
						<div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + idx * 0.2}s`}>
							<div className="choose-box approach-card">
								{/* Image on top with icon overlay */}
								<div className="approach-image" style={{ '--bg-image': `url('/images/approach/${approach.bgImage}')` }}>
									<div className="approach-icon-overlay">
										<div className="choose-icon">
											<i className={approach.icon}></i>
										</div>
									</div>
								</div>
								
								{/* Content on bottom */}
								<div className="choose-content">
									<h4 className="title">{approach.title}</h4>
									<p className="desc">{approach.desc}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceApproach;
