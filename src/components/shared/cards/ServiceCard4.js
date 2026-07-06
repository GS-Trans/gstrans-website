import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard4 = ({ service, idx, lastItem }) => {
	const {
		title,
		desc,
		id,
		slug,
		totalProject,
		valueStatement,
		img2 = "/images/service/service-2.webp",
		svg,
		iconName,
		iconSvg,
	} = service || {};

	return (
		<div className="service-item style-4">
			<div className="service-icon-wrapper">
				<div className="service-icon-circle">
					<div className="service-icon">
						{iconSvg ? (
							<img src={iconSvg} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
						) : (
							<i className={iconName ? iconName : "tji-service-1"}></i>
						)}
					</div>
				</div>
			</div>
			
			{valueStatement && (
				<div className="service-label">
					{valueStatement}
				</div>
			)}
			
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${slug}`}>{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={"Learn More"}
					url={`/services/${slug}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard4;

