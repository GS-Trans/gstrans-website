import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const Faq3 = () => {
	const items = [
		{
			title: "What logistics services does GS Trans offer?",
			desc: "GS Trans provides comprehensive transport solutions including local cargo delivery, inter-city freight, express delivery services, and customized business logistics plans. We serve 50+ cities across India with real-time GPS tracking and 24/7 customer support.",
			initActive: true,
		},
		{
			title: "How do I track my shipment?",
			desc: "Track your shipment anytime through our mobile app or website using your unique tracking ID. Our advanced GPS system provides live location updates, estimated arrival time, and delivery status notifications.",
			initActive: false,
		},
		{
			title: "What areas do you deliver to?",
			desc: "GS Trans operates across major cities and towns in India. We offer local, inter-city, and long-distance freight services with optimized route planning for faster delivery. Contact us to verify coverage for your specific pickup and delivery locations.",
			initActive: false,
		},
		{
			title: "How can I get a quote for transport services?",
			desc: "Get an instant quote through our website contact form or call us directly. Provide details about pickup location, delivery destination, cargo type, weight, and dimensions for accurate pricing.",
			initActive: false,
		},
		{
			title: "Do you offer business partnerships or franchise opportunities?",
			desc: "Yes! GS Trans welcomes franchise and dealership inquiries. We provide comprehensive support, training, and resources to help you establish a successful logistics business in your area. Contact us through our careers page or call for partnership details.",
			initActive: false,
		},
	];
	return (
		<section className="tj-faq-section section-gap section-separator">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Common Questions
							</span>
							<h2 className="sec-title title-anim">
								Need <span>Help?</span> Start Here...
							</h2>
						</div>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<BootstrapWrapper>
								<div className="accordion tj-faq pt-0" id="faqTwo">
									{items?.length
										? items?.map((item, idx) => (
												<FaqItem2 key={idx} item={item} idx={idx} />
										  ))
										: ""}
								</div>
							</BootstrapWrapper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq3;

