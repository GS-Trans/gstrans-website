"use client";
import { company, socials } from "@/content/gstrans";
import Link from "next/link";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
	const handleClick = () => {
		setIsContactOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`tj-offcanvas-area d-none d-lg-block  ${
					isContactOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo" style={{ flex: 1, textAlign: 'center' }}>
								<Link href="/" className="mobile_logo">
									<img src="/images/logo.png" alt="GS Trans Logo" style={{ height: '120px', width: 'auto' }} />
								</Link>
							</div>
							<div className="hamburger_close" style={{ position: 'absolute', right: '20px', top: '20px' }}>
								<button className="hamburger_close_btn" onClick={handleClick} aria-label="Close contact menu">
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<div className="offcanvas-text">
						<h6 style={{ marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#D4AF37' }}>GS Trans</h6>
						<h6 style={{ marginBottom: '10px', fontSize: '14px', fontWeight: '600', color: '#E8C547' }}>Smart Transport, Smarter Solutions.</h6>
						<p>
							We provide reliable and efficient transportation services across the region with dedicated customer support.
						</p>
					</div>
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
								<Link className="contact-link" href={`tel:${company.phoneE164}`}>
									{company.phoneDisplay}
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link
										className="contact-link"
										href={`mailto:${company.emails.primary}`}
									>
										{company.emails.primary}
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
									{company.address.line1}, {company.address.postalCode}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-3">
							<ul>
								{socials?.slice(0, 4)?.map((item, idx) => (
									<li key={idx}>
										<a href={item?.path} target="_blank" rel="noreferrer" aria-label={item?.name || 'Social media'}>
											<i className={item?.iconName}></i>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMenu;

