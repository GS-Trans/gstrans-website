import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import { company, socials } from "@/content/gstrans";
import { COLORS } from "@/lib/constants";
import Link from "next/link";

const Footer2 = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="tj-footer-section footer-2">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-1 wow fadeInUp"
								data-wow-delay=".1s"
							>
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logo.png" alt="GS Trans Logo" style={{ height: '80px', width: 'auto' }} />
									</Link>
								</div>
								<div className="footer-text">
									<h6 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold', color: COLORS.primary }}>{company.name}</h6>
									<h6 style={{ marginBottom: '10px', fontSize: '13px', fontWeight: '600', color: '#E8C547' }}>{company.tagline}</h6>
									<p style={{ fontSize: '14px', lineHeight: '1.6' }}>
										{company.description}
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title" style={{ color: COLORS.primary }}>Services</h5>
								<ul>
									<li>
										<Link href="/services/local-cargo-transport">Local Cargo Transport</Link>
									</li>
									<li>
										<Link href="/services/inter-city-freight">Inter-City Freight</Link>
									</li>
									<li>
										<Link href="/services/express-delivery">Express Delivery</Link>
									</li>
									<li>
										<Link href="/services/business-solutions">Business Solutions</Link>
									</li>
									<li>
										<Link href="/contact">Customer Support</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title" style={{ color: COLORS.primary }}>Quick Links</h5>
								<ul>
									<li>
										<Link href="/contact">Contact Us</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/careers">
											Careers
										</Link>
									</li>
									<li>
										<Link href="/faq">FAQs</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title" style={{ color: COLORS.primary }}>Contact Info</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>🏢 GS Trans Headquarters</span>
										<span>
											{company.address.line1}, {company.address.postalCode}.
										</span>
									</div>
									<div className="contact-item" >
										<span>📞   </span>
										<Link href={`tel:${company.phoneE164}`} style={{ color: COLORS.primary }}>{company.phoneDisplay}</Link>
									</div>
									<div className="contact-item">
										<span>📧 </span>
										<Link href={`mailto:${company.emails.primary}`} style={{ color: COLORS.primary }}>{company.emails.primary}</Link>
										<Link href={`mailto:${company.emails.support}`} style={{ color: COLORS.primary }}>{company.emails.support}</Link>
									</div>
									<div className="contact-item">
										<span>⏰ Business Hours</span>
										<span>Mon-Sat: 9:00 AM - 6:00 PM IST</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-marquee">
				<MarqueeSlider1 />
			</div>
			<div className="tj-copyright-area-2">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; {currentYear} <b>{company.name}</b> All right reserved
									</p>
								</div>
								<div className="social-links style-3">
									<ul>
										{socials?.slice(0, 4)?.map((item, idx) => (
											<li key={idx}>
												<Link href={item?.path} target="_blank" rel="noreferrer" aria-label={item?.name || 'Social media'}>
													<i className={item?.iconName}></i>
												</Link>
											</li>
										))}
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">Terms & Condition</Link>
										</li>
									</ul>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer2;

