import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard7 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc3,
		id,
		slug,
		totalProject,
		img4 = "/images/service/h6-service-1.webp",
		svg,
		iconName,
	} = service || {};
	const href = `/services/${slug || id}`;

	return (
		<div className="h6-service-item">
			<div className="h6-service-thumb">
				<Link href={href}>
					<img src={img4} alt="" />
				</Link>
			</div>
			<div className="h6-service-content">
				<h5 className="h6-service-index">{modifyNumber(id)}.</h5>
				<div className="h6-service-title-wrap">
					<h4 className="title">
						<Link href={href}>{title}</Link>
					</h4>
					<Link className="text-btn" href={href}>
						<span className="btn-icon">
							<i className="tji-arrow-right-long"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard7;

