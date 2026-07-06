import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Cta = () => {
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
								<h2 style={{ fontSize: '38px', color: 'white', fontWeight: '500', marginBottom: '20px', lineHeight: '1.2', whiteSpace: 'nowrap' }}>
									Let's Build Future Together.
								</h2>
								<p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', marginBottom: '30px' }}>
									To Start{' '}
									<span style={{ color: '#D4AF37', fontSize: '44px', fontWeight: '600' }}>
										Franchise
									</span>
									{' '}or{' '}
									<span style={{ color: '#D4AF37', fontSize: '44px', fontWeight: '600' }}>
										Dealership
									</span>
								</p>
								<div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary
										text={"Get Start Now"}
										url={"/contact"}
										className={"btn-dark"}
									/>
								</div>
							</div>
							<div className="cta-img">
								<Image src="/images/cta/cta-bg.webp" alt="GS Trans franchise and dealership opportunity" width={600} height={400} style={{ height: 'auto', width: '100%' }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;

