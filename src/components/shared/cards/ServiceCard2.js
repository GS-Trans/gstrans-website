import Link from "next/link";

const ServiceCard2 = ({ service, idx, lastItem }) => {
	const { title, valueStatement, desc, shortDesc, id, slug, totalProject, img, svg, iconName } = service || {};
	const href = `/services/${slug || id}`;

	// Define list items for each service
	const getListItems = (serviceId) => {
		const listItems = {
			1: ["Real-Time GPS Tracking", "Multiple Vehicle Types", "Verified Drivers"],
			2: ["Secure Packaging", "Live Tracking", "Full Insurance Coverage"],
			3: ["Priority Handling", "SMS Updates", "Dedicated Rider"],
			4: ["Dedicated Account Manager", "Monthly Billing", "API Integration"]
		};
		return listItems[serviceId] || ["Professional Service", "Quality Assured", "Customer Support"];
	};

	const listItems = getListItems(id);

	return (
		<div className="service-item-wrapper tj-fadein-right-on-scroll">
			<div className="service-item style-2 ">
				<div className="title-area">
				<div className="service-icon" style={{ borderLeft: '4px solid #a0522d', paddingLeft: '12px' }}>
					<i className={iconName ? iconName : "tji-service-1"} style={{ color: '#a0522d' }}></i>
				</div>
				<div>
					<h4 className="title" style={{ color: '#a0522d' }}>
							<Link href={href}>{title}</Link>
						</h4>
						{valueStatement && (
							<p style={{ fontSize: '12px', color: '#D4AF37', fontWeight: '600', marginTop: '4px' }}>
								✓ {valueStatement}
							</p>
						)}
					</div>
				</div>
				<div className="service-content">
					<p className="desc">
						{shortDesc}
					</p>
					<ul className="list-items">
						{listItems.map((item, index) => (
							<li key={index}>
								<i className="tji-list"></i>{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard2;

