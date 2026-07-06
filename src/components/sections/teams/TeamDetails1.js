import { company, socials } from "@/content/gstrans";
import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";

const TeamDetails1 = ({ currentItemId }) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const {
		name,
		desig,
		imgLarge = "/images/team/team-1-big.webp",
	} = currentItem || {};

	return (
		<section className="team-details slidebar-stickiy-container">
			<div className="container">
				<div className="row justify-content-center">
					{/* <!--  left --> */}
					<div className="col-12 col-md-8 col-lg-5">
						<div
							className="team-details__img slidebar-stickiy wow fadeInUp"
							data-wow-delay=".1s"
						>
							<Image
								src={imgLarge}
								alt=""
								width={645}
								height={700}
								style={{ height: "auto" }}
							/>
						</div>
					</div>
					{/* <!-- right --> */}
					<div className="col-12 col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name title-anim">
								Hello, I am {name}
							</h2>
							<span
								className="team-details__desig wow fadeInUp"
								data-wow-delay=".1s"
							>
								{desig}
							</span>
							<p className="wow fadeInUp" data-wow-delay=".3s">
								At GS Trans, our team works to keep shipments moving smoothly—from
								pickup to delivery. We focus on on-time dispatch, clear
								communication, and safe handling so customers can ship with
								confidence.
							</p>
							<div
								className="team-details__contact-info wow fadeInUp"
								data-wow-delay=".5s"
							>
								<ul>
									<li>
										<span>Email address</span>
										<a href={`mailto:${company.emails.primary}`}>
											{company.emails.primary}
										</a>
									</li>
									<li>
										<span>Phone number</span>
										<a href={`tel:${company.phoneE164}`}>{company.phoneDisplay}</a>
									</li>
								</ul>
							</div>
							<div className="social-links wow fadeInUp" data-wow-delay=".5s">
								<ul>
									{socials?.slice(0, 4)?.map((item, idx) => (
										<li key={idx}>
											<a href={item?.path} target="_blank" rel="noreferrer">
												<i className={item?.iconName}></i>
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="team-details__experience">
								<h4
									className="team-details__subtitle wow fadeInUp"
									data-wow-delay=".3s"
								>
									Work experience
								</h4>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Hands-on experience coordinating pickup schedules, route planning,
									and delivery confirmations. We continuously optimize operations
									to reduce delays and improve the customer experience.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									We collaborate across support, operations, and partner teams to
									ensure consistent service quality and reliable on-time delivery.
								</p>
								<div
									className="team-details__experience__list wow fadeInUp"
									data-wow-delay=".3s"
								>
									<ul>
										<li>
											<i className="tji-check"></i>
											<p>
												Fast pickup coordination and dispatch planning.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												Clear updates and customer communication.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												Safe handling checks for fragile and high-value cargo.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												Continuous improvement using delivery data and feedback.
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="team-details__skills">
								<h4
									className="team-details__subtitle wow fadeInUp"
									data-wow-delay=".3s"
								>
									Professional skills
								</h4>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									We build strong logistics foundations with consistent processes,
									good communication, and reliable execution.
								</p>
								<ul
									className="tj-progress-list wow fadeInUp"
									data-wow-delay=".3s"
								>
									<li>
										<h6 className="tj-progress-title">Logistics Operations</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">82%</span>
											<div className="tj-progress-bar" data-percent="82"></div>
										</div>
									</li>
									<li>
										<h6 className="tj-progress-title">Client Communication</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">90%</span>
											<div className="tj-progress-bar" data-percent="90"></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails1;

