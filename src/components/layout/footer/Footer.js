import { company, socials } from "@/content/gstrans";
import Link from "next/link";

const Footer = () => {
const currentYear = new Date().getFullYear();

return (
<footer className="tj-footer-section footer-1 section-gap-x">
<div className="footer-main-area">
<div className="container">
<div className="row justify-content-between">
<div className="col-xl-3 col-lg-4 col-md-6">
<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
<div className="footer-logo">
<Link href="/">
<img src="/images/logo.png" alt="GS Trans Logo" />
</Link>
</div>
<div className="footer-text">
<h6
style={{
marginBottom: "10px",
fontSize: "16px",
fontWeight: "bold",
color: "#D4AF37",
}}
>
{company.name}
</h6>
<h6
style={{
marginBottom: "10px",
fontSize: "13px",
fontWeight: 600,
color: "#E8C547",
}}
>
{company.tagline}
</h6>
<p style={{ fontSize: "14px", lineHeight: "1.6" }}>
{company.description}
</p>
</div>
<div className="award-logo-area">
<div className="award-logo">
<img src="/images/footer/award-logo-1.webp" alt="" />
</div>
<div className="award-logo">
<img src="/images/footer/award-logo-2.webp" alt="" />
</div>
</div>
</div>
</div>

<div className="col-xl-3 col-lg-4 col-md-6">
<div
className="footer-widget widget-nav-menu wow fadeInUp"
data-wow-delay=".3s"
>
<h5 className="title">Services</h5>
<ul>
						<li>
							<Link href="/services/local-cargo-transport">Local Cargo Transport</Link>
						</li>
<li>
<Link href="/services/express-delivery">Express Delivery</Link>
</li>
<li>
<Link href="/services/business-solutions">Business Solutions</Link>
</li>
<li>
<Link href="/contact">Contact</Link>
</li>
<li>
<Link href="/about">About Us</Link>
</li>
</ul>
</div>
</div>

<div className="col-xl-2 col-lg-4 col-md-6">
<div
className="footer-widget widget-nav-menu wow fadeInUp"
data-wow-delay=".5s"
>
<h5 className="title">Company</h5>
<ul>
<li>
<Link href="/services">Services</Link>
</li>
<li>
<Link href="/careers">
Careers <span className="badge">New</span>
</Link>
</li>
<li>
<Link href="/team">Team</Link>
</li>
<li>
<Link href="/faq">FAQs</Link>
</li>
<li>
<Link href="/contact">Support</Link>
</li>
						<li>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/terms-and-conditions">Terms & Conditions</Link>
						</li>
</ul>
</div>
</div>

<div className="col-xl-4 col-lg-5 col-md-6">
<div
className="footer-widget widget-subscribe wow fadeInUp"
data-wow-delay=".7s"
>
<h3 className="title">Stay in touch.</h3>
<div className="subscribe-form">
<form action="#">
<input type="email" name="email" placeholder="Enter email" />
										<button type="button">
<i className="tji-plane"></i>
</button>
<label htmlFor="agree">
<input id="agree" type="checkbox" />
Agree to our{" "}
<Link href="/terms-and-conditions">Terms & Condition?</Link>
</label>
</form>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tj-copyright-area">
<div className="container">
<div className="row">
<div className="col-12">
<div className="copyright-content-area">
<div className="footer-contact">
<ul>
<li>
<Link href={`tel:${company.phoneE164}`}>
<span className="icon">
<i className="tji-phone-2"></i>
</span>
<span className="text">{company.phoneDisplay}</span>
</Link>
</li>
<li>
<Link href={`mailto:${company.emails.primary}`}>
<span className="icon">
<i className="tji-envelop-2"></i>
</span>
<span className="text">{company.emails.primary}</span>
</Link>
</li>
</ul>
</div>

<div className="social-links">
<ul>
{socials?.slice(0, 4)?.map((item, idx) => (
<li key={idx}>
<Link href={item?.path} target="_blank" rel="noreferrer">
<i className={item?.iconName}></i>
</Link>
</li>
))}
</ul>
</div>

<div className="copyright-text">
<p>
&copy; {currentYear} <Link href="/">{company.name}</Link> All right reserved
</p>
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

export default Footer;
