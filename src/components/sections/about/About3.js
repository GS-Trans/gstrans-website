import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { COLORS } from "@/lib/constants";
import Image from "next/image";
const About3 = ({ type }) => {
	return (
		<section className="tj-about-section-2" style={{ padding: '100px 0' }}>
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6 order-lg-1 order-2">
						<div
							className="about-img-area style-2 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<Image
									data-speed=".8"
									src="/images/about/about-5.webp"
									alt=""
									width={591}
									height={639}
								/>
							</div>
							<div className={`box-area ${type === 2 ? "style-2" : ""}`}>
								<div className="progress-box wow fadeInUp" data-wow-delay=".3s">
									<h4 className="title">Performance Metrics</h4>
									<ul className="tj-progress-list">
										<li>
											<h6 className="tj-progress-title">On-Time Delivery Rate</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">99.5%</span>
												<div
													className="tj-progress-bar"
													data-percent="99.5"
												></div>
											</div>
										</li>
										<li>
											<h6 className="tj-progress-title">Customer Satisfaction</h6>
											<div className="tj-progress">
												<span className="tj-progress-percent">98%</span>
												<div
													className="tj-progress-bar"
													data-percent="98"
												></div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 order-lg-2 order-1">
						<div className="about-content-area">
							<div className={`sec-heading ${type === 2 ? "" : "style-3"}`}>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: 'white', backgroundColor: '#a0522d', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', fontWeight: '600' }}>
								<i className="tji-box"></i>Get to Know Us
							</span>
							<h2 className="sec-title title-anim" style={{color: '#000000',  textShadow: '0 0 15px rgba(238, 13, 13, 0)' }}>
								{type === 2 ? (
									<>
										<span style={{color: '#D4AF37', fontWeight: '800', textShadow: '0 0'}}>Smart Logistics</span> Powering
										<span style={{color: '#000000', fontWeight: '800', textShadow: '0 0'}}> India's Business Growth</span>
									</>
								) : (
									<>
										<span style={{color: COLORS.primary, fontWeight: '800'}}>Smart Logistics</span> Powering India's Business Growth
									</>
									)}
								</h2>
							</div>
						</div>
						<div className="about-bottom-area">
							<div
								className="mission-vision-box wow fadeInLeft"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Mission</h4>
								<p className="desc">
									To revolutionize logistics across India by providing AI-powered, real-time tracking solutions that ensure safe, efficient, and reliable cargo delivery to every corner of the nation.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Real-Time GPS Tracking & Transparency
									</li>
									<li>
										<i className="tji-list"></i>99.5% On-Time Delivery Guarantee
									</li>
									<li>
										<i className="tji-list"></i>24/7 Customer Support & Assistance
									</li>
								</ul>
							</div>
							<div
								className="mission-vision-box wow fadeInRight"
								data-wow-delay=".5s"
							>
								<h4 className="title">Our Vision</h4>
								<p className="desc">
									To establish GS Trans as India's most trusted and preferred last-mile logistics provider, connecting businesses across 50+ cities with cutting-edge technology and unmatched reliability.
								</p>
								<ul className="list-items">
									<li>
										<i className="tji-list"></i>Expand to 100+ Cities by end of2026
									</li>
									<li>
										<i className="tji-list"></i>Achieve 100% Fleet Digitization
									</li>
									<li>
										<i className="tji-list"></i>Carbon-Neutral Logistics Operations
									</li>
								</ul>
							</div>
						</div>
						<div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
							<ButtonPrimary text={"Learn More About Us"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About3;

