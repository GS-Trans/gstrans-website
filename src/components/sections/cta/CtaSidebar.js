import Image from "next/image";
import Link from "next/link";

const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Reach Us</h2>
				{/* <span>Home Makeover</span> */}
				<Link className="read-more feature-contact" href="tel:+919133533549">
					<i className="tji-phone-3"></i>
					<span>(+91) 91335 33549 </span>
				</Link>
			</div>
			<div className="feature-images">
				<Image src="/images/service/service-ad.webp" alt="Contact GS Trans for service" width={400} height={300} style={{ height: 'auto', width: '100%' }} />
			</div>
		</div>
	);
};

export default CtaSidebar;

