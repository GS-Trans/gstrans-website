import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Real-Time GPS Tracking",
			desc: "Monitor your shipments live with our advanced GPS tracking technology. Know exactly where your cargo is at any moment with 99.5% accuracy.",
			icon: "tji-location",
		},
		{
			title: "24/7 Customer Support",
			desc: "Our dedicated support team is available round-the-clock to assist with queries, track shipments, and resolve issues instantly across all cities.",
			icon: "tji-support",
		},
		{
			title: "Fastest Delivery Guarantee",
			desc: "With 99.5% on-time delivery rate and optimized routes across 50+ cities, we guarantee your cargo arrives when promised, every time.",
			icon: "tji-plane",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d', fontWeight: '600' }}>
							<i className="tji-box" style={{color: '#D4AF37'}}></i>Choose the Best
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim" style={{color: '#000000', textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
										<span style={{color: '#D4AF37', fontWeight: '800', textShadow: '0 0'}}>Smart Logistics</span> for the <span style={{color: '#060606', fontWeight: '800'}}>Modern Era.</span>
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Request a Call" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d', fontWeight: '600' }}>
								<i className="tji-box" style={{color: '#D4AF37'}}></i>Choose the Best
								</span>
							<h2 className="sec-title title-anim" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
							<span style={{color: '#D4AF37', fontWeight: '800'}}>Smart Logistics</span> for the <span style={{color: '#D4AF37'}}>Modern Era.</span>
								</h2>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;

