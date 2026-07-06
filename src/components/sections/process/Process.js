"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: 1,
			title: "Book Your Shipment",
			desc: "Select your delivery type, enter shipment details, and get an instant quote. Our easy-to-use booking system takes just minutes.",
		},
		{
			id: 2,
			title: "Real-Time Tracking",
			desc: "Track your shipment live with GPS tracking. Receive updates at every step and stay informed throughout the delivery journey.",
		},
		{
			id: 3,
			title: "Safe Delivery & Support",
			desc: "Your package arrives safely with professional care. Our support team is here to help with any questions or concerns.",
		},
	];
	return (
		<section className="tj-working-process" style={{ padding: '100px 0' }}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
						<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#a0522d' }}>
								How It Works
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										<span style={{color: '#000000'}}>Booking to Delivery,</span> <span style={{color: '#D4AF37', textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: '700'}}>Simplified.</span>
									</h2>
								</div>
							<p className="desc wow fadeInUp" data-wow-delay=".5s">
									Experience seamless logistics with our simple three-step process. Book, track, and receive with complete peace of mind.
								</p>
							<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Process;

