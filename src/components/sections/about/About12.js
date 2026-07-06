import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About12 = () => {
	return (
		<section className="tj-history section-gap">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-xl-5">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								<i className="tji-box"></i> Our background
							</span>
							<h2 className="sec-title text-anim">
								Building smarter logistics from local delivery to a growing{" "}
								<span>network.</span>
							</h2>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s">
							<p>
								GS Trans was created to make cargo movement simple, fast, and
								reliable for individuals and businesses. We started with a focus
								on local pickups and deliveries, and gradually expanded our
								operations to serve more routes and use-cases.
							</p>
							<p>
								Today, we combine verified partners, transparent pricing, and
								real-time tracking to help customers ship with confidence—whether
								it’s a small parcel, business inventory, or urgent express cargo.
							</p>
						</div>
						<div
							className="history-btn mt-30 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<ButtonPrimary text={"Learn More"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;

