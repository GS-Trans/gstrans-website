"use client";
import { company, socials } from "@/content/gstrans";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-center">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
								<img src="/images/logo.png" alt="GS Trans Logo" style={{ height: '50px', width: 'auto' }} />
								</Link>
							</div>
							<div className="hamburger_close" style={{ position: 'absolute', right: '20px' }}>
								<button className="hamburger_close_btn" onClick={handleClick} aria-label="Close mobile menu">
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<MobileNavbar />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link
										className="contact-link"
										href={`tel:${company.phoneE164}`}
									>
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
										<Link href={item?.path} target="_blank" rel="noreferrer" aria-label={item?.name || 'Social media'}>
											<i className={item?.iconName}></i>
										</Link>
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

export default MobileMenu;

