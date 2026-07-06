'use client';

const ServiceModel = () => {
	return (
		<div 
			className="service-model-wrapper"
			style={{ 
				paddingTop: '40px', 
				paddingBottom: '40px', 
				position: 'relative',
				backgroundImage: 'url(/images/bg/unique-bg.webp)',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
				backgroundRepeat: 'no-repeat'
			}}>
			<section 
				className="service-model-section" 
				style={{ 
					padding: 0
				}}
			>
				<div className="container">
				{/* Section Heading */}
				<div className="row mb-3 mb-lg-2">
					<div className="col-lg-8 mx-auto">
						<div className="sec-heading text-center">
							<span className="sub-title" style={{ color: '#a0522d', backgroundColor: '#a0522d', color: 'white', padding: '8px 16px', borderRadius: '4px', display: 'inline-block', fontWeight: '600' }}>
								Our Unique Approach
							</span>
							<h2 className="title" style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px', color: '#000' }}>
								<span style={{ color: '#D4AF37' }}>Offline</span> + <span style={{ color: '#1E90FF' }}>Online</span> Service Model
							</h2>
							<p style={{ fontSize: '16px', color: '#666', lineHeight: '1.8' }}>
								GS Trans combines the best of both worlds: dedicated field executives for personalized on-ground support and a digital platform for seamless online booking and tracking.
							</p>
						</div>
					</div>
				</div>

				{/* Service Model Cards */}
				<div className="row row-gap-4 align-items-stretch" style={{ position: 'relative' }}>
					{/* Offline Service */}
					<div className="col-lg-6 col-md-12" style={{ display: 'flex' }}>
						<div className="service-model-card offline-card" style={{ width: '100%' }}>
							<div className="card-icon">
								<i className="fa-solid fa-person"></i>
							</div>
							<h3 className="card-title">Offline Service</h3>
							<p className="card-subtitle">Field Executive Support</p>
							<ul className="card-features">
								<li>
									<i className="fa-solid fa-check"></i>
									<span>On-ground booking assistance</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Personal relationship management</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>On-location issue resolution</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Face-to-face consultations</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Customized solutions for B2B clients</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Plus Symbol Between Cards - Middle */}
					<div style={{
						position: 'absolute',
						left: '96.5%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						zIndex: 10,
						pointerEvents: 'none'
					}}>
						<div style={{
							width: '70px',
							height: '70px',
							backgroundColor: '#ca9d0a',
							borderRadius: '50%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							boxShadow: '0 8px 20px rgba(255, 140, 66, 0.3)',
							cursor: 'pointer',
							transition: 'all 0.3s ease-in-out'
						}}>
							<span style={{
								fontSize: '48px',
								color: '#ffffff',
								fontWeight: 'bold',
								lineHeight: '1',
								marginTop: '-2px'
							}}>
								+
							</span>
						</div>
					</div>

					{/* Online Service */}
					<div className="col-lg-6 col-md-12" style={{ display: 'flex' }}>
						<div className="service-model-card online-card" style={{ width: '100%' }}>
							<div className="card-icon">
								<i className="fa-solid fa-mobile"></i>
							</div>
							<h3 className="card-title">Online Service</h3>
							<p className="card-subtitle">Digital Platform</p>
							<ul className="card-features">
								<li>
									<i className="fa-solid fa-check"></i>
									<span>24/7 online booking</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Real-time shipment tracking</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Instant quote generation</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Digital document management</span>
								</li>
								<li>
									<i className="fa-solid fa-check"></i>
									<span>Mobile app accessibility</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Integration Message */}
				<div className="row mt-3 mt-lg-2">
					<div className="col-lg-8 mx-auto">
						<div className="integration-box" style={{ 
							borderRadius: '16px', 
							position: 'relative',
							overflow: 'hidden',
							minHeight: '200px',
							display: 'flex',
							boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
							background: '#ffffff'
						}}>
							{/* Left White Background with Text */}
							<div style={{
								flex: '0 0 99%',
								backgroundColor: '#ffffff',
								padding: '35px 35px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								textAlign: 'center',
								zIndex: 2,
								position: 'relative'
							}}>
								<h4 style={{ fontSize: '32px', fontWeight: '900', margin: '0 0 18px 0', letterSpacing: '-1px', color: '#000000', textTransform: 'uppercase' }}>
									Seamless Integration
								</h4>
								<p style={{ fontSize: '15px', lineHeight: '1.7', margin: '0', color: '#666666', fontWeight: '400' }}>
									Whether you prefer direct communication with our field executives or managing everything through our digital platform, we provide a unified logistics experience tailored to your business needs.
								</p>
							</div>
							
							{/* Right Background Image with Large Quotation */}
							<div style={{
								flex: '0 0 1%',
								// backgroundImage: 'url(/images/bg/quotation-bg.webp)',
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								backgroundRepeat: 'no-repeat',
								position: 'relative',
								display: 'flex',
								textAlign: 'center',
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								{/* Light overlay for subtle effect */}
								<div style={{
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									bottom: 0,
									backgroundColor: 'rgba(255, 255, 255, 0.08)',
									zIndex: 0
								}}></div>
								
								{/* Large Quotation Marks */}
								<div style={{
									position: 'relative',
									zIndex: 1,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									gap: '8px'
								}}>
									<div style={{
										fontSize: '130px',
										color: '#ffffff',
										opacity: '0.8',
										lineHeight: '0.7',
										fontWeight: 'bold',
										textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
									}}>
										„
									</div>
									<div style={{
										fontSize: '130px',
										color: '#ffffff',
										opacity: '0.8',
										lineHeight: '0.7',
										fontWeight: 'bold',
										textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
									}}>
										"
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</section>
		</div>
	);
};

export default ServiceModel;
