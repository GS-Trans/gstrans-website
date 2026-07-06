import Image from "next/image";
import Link from "next/link";

const Cta3 = () => {
	return (
		<section className="h9-cta-section section-gap-x">
			<div
				className="cta-bg"
				style={{ backgroundImage: "url('/images/cta/h9-cta-bg.webp')" }}
			></div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-content">
							<h2 className="title text-anim">
								<span>Let’s Talk to</span>{" "}
								<span className="cta-img wow fadeInUp" data-wow-delay=".3s">
									<Image src="/images/team/team-1.webp" alt="GS Trans expert" width={100} height={100} style={{ height: 'auto' }} />
									<Link className="tji-icon-btn" href="/contact">
										<i className="tji-arrow-right-long"></i>
									</Link>
								</span>{" "}
								<span>Our Expert.</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta3;

