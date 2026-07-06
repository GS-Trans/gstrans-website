import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard5 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc,
		id,
		slug,
		totalProject,
		img3 = "/images/service/service-6.webp",
		svg,
		iconName,
	} = service || {};
	const href = `/services/${slug || id}`;

	return (
		<div
			className={`service-item style-5 ${
				idx !== lastItemIdx ? "service-stack" : ""
			}`}
		>
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName ? iconName : "tji-service-1"}></i>
				</div>
				<div className="service-content">
					<span className="no">{modifyNumber(idx + 1)}.</span>
					<h3 className="title">
						<Link href={href}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ButtonPrimary text={"Learn More"} url={href} />
				</div>
			</div>
			<div className="service-img">
				<Image src={img3} alt={title || 'Service'} width={870} height={450} style={{ height: 'auto', width: '100%' }} />
			</div>
		</div>
	);
};

export default ServiceCard5;

