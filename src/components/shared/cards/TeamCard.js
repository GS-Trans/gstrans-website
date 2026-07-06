import { company, socials } from "@/content/gstrans";
import Image from "next/image";
import Link from "next/link";

const TeamCard = ({ teamMember }) => {
	const {
		id,
		name,
		desig,
		img = "/images/team/team-1.webp",
	} = teamMember || {};
	return (
		<div className="team-item left-swipe">
			<div className="team-img">
				<div className="team-img-inner">
					<Image src={img} alt={name ? `${name} - ${desig || 'Team Member'}` : 'Team member'} width={400} height={400} style={{ height: 'auto', width: '100%' }} />
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
				<h4 className="title">
					<Link href={`/team/${id}`}>{name}</Link>
				</h4>
				<span className="designation">{desig}</span>
				<Link className="mail-at" href={`mailto:${company.emails.primary}`}>
					<i className="tji-at"></i>
				</Link>
			</div>
		</div>
	);
};

export default TeamCard;

