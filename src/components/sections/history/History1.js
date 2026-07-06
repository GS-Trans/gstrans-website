import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "Vision & Planning",
			desc: "We started with a clear goal: make transport booking and delivery coordination simpler, more transparent, and easier to track for everyone.",
			images: [
				"/images/history/history-1.webp",
				"/images/history/history-2.webp",
			],
			year: "Phase 1",
		},
		{
			title: "Local Launch",
			desc: "We focused on solving local cargo needs first—fast pickups, reliable delivery partners, and a customer experience that’s easy to use.",
			images: [
				"/images/history/history-3.webp",
				"/images/history/history-4.webp",
			],
			year: "Phase 2",
		},
		{
			title: "Scaling Operations",
			desc: "As demand grew, we expanded coverage and improved dispatch and routing so more customers could ship reliably across busy routes.",
			images: [
				"/images/history/history-5.webp",
				"/images/history/history-6.webp",
			],
			year: "Phase 3",
		},
		{
			title: "Technology & Tracking",
			desc: "We invested in real-time visibility—tracking, status updates, and support workflows—to make deliveries more predictable and accountable.",
			images: [
				"/images/history/history-7.webp",
				"/images/history/history-8.webp",
			],
			year: "Phase 4",
		},
		{
			title: "What’s Next",
			desc: "We continue improving service quality, expanding routes, and adding features that help businesses move goods faster and more efficiently.",
			images: [
				"/images/history/history-9.webp",
				"/images/history/history-1.webp",
			],
			year: "Phase 5",
		},
	];
	return (
		<section className="tj-history-area section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="timeline">
							{history?.length
								? history?.map(({ title, desc, images, year }, idx) => (
										<div
											key={idx}
											className="timeline-inner wow fadeInUp"
											data-wow-delay={`0.${idx + 1 + idx}s`}
										>
											<div className="date">{year}</div>
											<div className="content">
												<div className="top">
													<span>{modifyNumber(idx + 1)}.</span>
													<h4 className="title">{title}</h4>
													<p>{desc}</p>
												</div>
												<div className="bottom">
													{images?.length
														? images?.map((img, idx) => (
																<Image
																	key={idx + 100}
																	src={
																		img ? img : "/images/history/history-1.webp"
																	}
																	alt="history"
																	width={241}
																	height={204}
																	style={{ height: "auto" }}
																/>
														  ))
														: ""}
												</div>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History1;

