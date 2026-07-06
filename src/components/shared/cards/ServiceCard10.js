import Link from "next/link";

const ServiceCard10 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc3,
		id,
		slug,
		totalProject,
		img5 = "/images/service/h9-service-1.webp",
		svg,
		iconName,
	} = service || {};
	const href = `/services/${slug || id}`;

	return (
		<div className="service-item style-5 tj-progress-item">
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName}></i>
				</div>
				<div className="service-content">
					<h4 className="title">
						<Link href={href}>{title}</Link>
					</h4>
					<p className="desc">
						Recognize that exceptional customer experiences are at the heart of
						every successful business. Our Customer Experience Solutions are
						crafted to help you transform every interaction your customers have
						with your brand busin.
					</p>
				</div>
				<Link href={href} className="h9-service-nav">
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<div className="service-img">
				<img src={img5} alt="" />
			</div>
		</div>
	);
};

export default ServiceCard10;

