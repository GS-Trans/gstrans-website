import { socials } from "@/content/gstrans";
import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";

const TeamCard3 = ({ teamMember, idx }) => {
	const {
		id,
		name,
		desig,
		img = "/images/team/team-1.webp",
	} = teamMember || {};
	return (
		<div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
			<div
				className="team-item wow fadeInRightBig"
				data-wow-delay={makeWowDelay(idx, 0.2, 2)}
			>
				<div className="team-img">
					<div className="team-img-inner">
						<img src={img} alt={`${name || 'Team member'} - ${desig || 'GS Trans'}`} />
					</div>
					<div className="social-links">
						<ul>
							{socials?.slice(0, 4)?.map((item, idx) => (
								<li key={idx}>
									<Link href={item?.path} target="_blank" rel="noreferrer">
										<i className={item?.iconName}></i>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="team-content">
					<h5 className="title">
						<Link href={`/team/${id}`}>{name}</Link>
					</h5>
					<span className="designation">{desig}</span>
				</div>
			</div>
		</div>
	);
};

export default TeamCard3;

