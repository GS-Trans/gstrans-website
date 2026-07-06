import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img3 = "/images/project/project-6.webp",
		shortDesc,
		id,
		slug,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item">
			<div className="project-img">
				<Image src={img3} alt="" width={434} height={420} loading="lazy" />
			</div>
			<div className="project-content">
				<span className="categories">
				<Link 
					href={`/portfolios/${slug || id}`}
					style={{ transition: 'all 0.3s ease', display: 'inline-block' }} 
					onMouseEnter={(e) => {
						e.target.style.color = '#D4AF37';
						e.target.style.backgroundColor = '#0a1f2e';
						e.target.style.padding = '6px 14px';
						e.target.style.borderRadius = '6px';
						e.target.style.boxShadow = '0 2px 10px rgba(212, 175, 55, 0.25)';
					}} 
					onMouseLeave={(e) => {
						e.target.style.color = '';
						e.target.style.backgroundColor = '';
						e.target.style.padding = '';
						e.target.style.borderRadius = '';
						e.target.style.boxShadow = '';
					}}
				>
					{category}
				</Link>
				</span>
				<div className="project-text">
					<h4 className="title">
					<Link 
						href={`/portfolios/${slug || id}`}
						style={{ transition: 'all 0.3s ease' }} 
						onMouseEnter={(e) => {
							e.target.style.color = '#D4AF37';
							// e.target.style.textShadow = '0 2px 8px rgba(212, 175, 55, 0.4)';
						}} 
						onMouseLeave={(e) => {
							e.target.style.color = '';
							e.target.style.textShadow = '';
						}}
					>
						{title}
					</Link>
					</h4>
				<Link 
					className="project-btn" 
					href={`/portfolios/${slug || id}`}
					style={{ transition: 'all 0.3s ease' }} 
					onMouseEnter={(e) => {
						const icon = e.currentTarget.querySelector('i');
						if (icon) {
							icon.style.color = '#D4AF37';
							icon.style.backgroundColor = '#0a1f2e';
							icon.style.padding = '12px';
							icon.style.borderRadius = '8px';
							icon.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
						}
					}} 
					onMouseLeave={(e) => {
						const icon = e.currentTarget.querySelector('i');
						if (icon) {
							icon.style.color = '';
							icon.style.backgroundColor = '';
							icon.style.padding = '';
							icon.style.borderRadius = '';
							icon.style.boxShadow = '';
						}
					}}
				>
					<i className="tji-arrow-right-big" style={{ transition: 'all 0.3s ease', display: 'inline-block' }}></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard3;

