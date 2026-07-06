"use client";
import ServiceCard4 from "@/components/shared/cards/ServiceCard4";
import getALlServices from "@/libs/getALlServices";
import makeWowDelay from "@/libs/makeWowDelay";

const ServicesPrimary = () => {
	const items = getALlServices();
	const totalItems = items?.length;
	
	return (
		<div className="tj-service-section service-4 section-gap" style={{ 
			paddingTop: '80px', 
			paddingBottom: '80px',
			background: 'linear-gradient(135deg, rgba(15, 42, 58, 0.95) 0%, rgba(10, 31, 46, 0.95) 50%, rgba(19, 45, 58, 0.95) 100%), url(/images/bg/ourservices-bg.webp)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Decorative blob - top right */}
			<div style={{
				position: 'absolute',
				top: '-100px',
				right: '-80px',
				width: '300px',
				height: '300px',
				background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
				borderRadius: '50%',
				pointerEvents: 'none',
				zIndex: 1
			}}></div>
			
			{/* Decorative blob - bottom left */}
			<div style={{
				position: 'absolute',
				bottom: '-80px',
				left: '-100px',
				width: '350px',
				height: '350px',
				background: 'radial-gradient(circle, rgba(160, 82, 45, 0.06) 0%, transparent 70%)',
				borderRadius: '50%',
				pointerEvents: 'none',
				zIndex: 1
			}}></div>

			{/* Accent line - top center */}
			<div style={{
				position: 'absolute',
				top: '40px',
				left: '50%',
				transform: 'translateX(-50%)',
				width: '60px',
				height: '3px',
				background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
				pointerEvents: 'none',
				zIndex: 1
			}}></div>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d', fontWeight: '600' }}>
						<i className="tji-service-1" style={{color: '#D4AF37'}}></i>Our Services
							</span>
							<h2 className="sec-title title-anim">
							<span style={{color: '#D4AF37'}}>Smart Logistics</span> <span style={{color: '#ffffff'}}>Solutions for Every Need.</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{items?.length
						? items?.map((item, idx) => (
								<div
									key={idx}
									className="col-lg-4 col-md-6 wow fadeInUp"
									data-wow-delay={makeWowDelay(idx, 0.1)}
								>
									<ServiceCard4 service={item} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</div>
	);
};

export default ServicesPrimary;

