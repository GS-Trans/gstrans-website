import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
const About2 = () => {
	return (
		<section className="tj-about-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-lg-4 col-md-6 order-lg-1 order-3">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
							<span className="steps">01.</span>
							<div className="count-inner">
								<span className="count-text">AI-Powered On-Time Delivery</span>
								<FunfactSingle currentValue={99.5} symbol="%" />
							</div>
						</div>
					</div>
					<div className="col-lg-8 col-sm-12 order-lg-2 order-1">
						<div
							className="about-content-area-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="about-content">
								<div className="sec-heading style-2">
							<span className="sub-title" style={{ color: '#a0522d', backgroundColor: '#a0522d', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', fontWeight: '600' }}>Get to Know Us</span>
								<h2 className="sec-title title-highlight">
										Fast, Reliable Logistics<span className="gold-text"> Smart Transport</span> for Every Indian
										Business
									</h2>
								</div>
							<div className="wow fadeInUp" data-wow-delay=".3s">
									<ButtonPrimary
										text={"Learn More"}
										url={"/about"}
										isTextBtn={true}
									/>
								</div>
							</div>
							<div className="video-img wow fadeInRight" data-wow-delay=".7s">
								<Image
									src="/images/about/about-3.webp"
									alt="Image"
									width={120}
									height={320}
									loading="lazy"
								/>
								<PopupVideo>
									<Link
										className="video-btn video-popup glightbox"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&amp;ab_channel=eidelchteinadvogados"
									>
										<span>
											<i className="tji-play"></i>
										</span>
									</Link>
								</PopupVideo>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-3 order-2">
						<div
							className="customers-box style-2 wow fadeInUp"
							data-wow-delay=".3s"
							style={{
							position: "relative",
							borderRadius: "24px",
							minHeight: "400px",
							padding: "30px",
							overflow: "hidden",
						}}
					>
						<Image
							src="/images/about/about-4.webp"
							alt="Customer Satisfaction"
							fill
							style={{ objectFit: "cover" }}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
							loading="lazy"
						/>
					</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-4 order-4">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
							<span className="steps">02.</span>
							<div className="count-inner">
								<span className="count-text">Cities Service Coverage</span>
								<FunfactSingle currentValue={50} symbol="+" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<span className="steps">03.</span>
							<div className="count-inner">
								<span className="count-text">Modern Fleet Vehicles</span>
								<FunfactSingle currentValue={200} symbol="+" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About2;

