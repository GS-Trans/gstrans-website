import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { company } from "@/content/gstrans";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
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
			desc: `Get an instant quote through our website contact form or call us directly at ${company.phoneDisplay}. Provide details about pickup location, delivery destination, cargo type, weight, and dimensions for accurate pricing.`,
			initActive: false,
		},
		{
			title: "Do you offer business partnerships or franchise opportunities?",
			desc: "Yes! GS Trans welcomes franchise and dealership inquiries. We provide comprehensive support, training, and resources to help you establish a successful logistics business in your area. Contact us through our careers page or call for partnership details.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#D4AF37', fontWeight: '600', textShadow: '0 0' }}>
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim" style={{color: '#000000', textShadow: '0 0'}}>
										Need <span style={{color: '#D4AF37', fontWeight: '800', textShadow: '0 0'}}>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									Quick answers about booking, pricing, tracking, and support.
									<br /> If you still need help, our team is one message away.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt="Frequently asked questions about GS Trans transport services"
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Need support? Call us</h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href={`tel:${company.phoneE164}`}>
											<span>{company.phoneDisplay}</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;

