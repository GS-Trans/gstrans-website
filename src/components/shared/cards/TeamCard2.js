"use client";

import { socials } from "@/content/gstrans";
import Image from "next/image";
import Link from "next/link";

const TeamCard2 = ({ teamMember, activeMember, handleMouseEnter }) => {
	const {
		id,
		name,
		desig,
		imgLarge = "/images/team/team-1-big.webp",
	} = teamMember || {};
	return (
		<div
			className={`team-item ${
				id === activeMember?.id ? "active" : ""
			} wow fadeInUp`}
			data-wow-delay=".3s"
			onMouseEnter={() => handleMouseEnter(teamMember)}
		>
			<div className="team-item-inner">
				<div className="team-content">
					<h3 className="title">
						{" "}
						<Link href={`/team/${id}`}>{name}</Link>
					</h3>
					<span className="designation">{desig}</span>
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
				<Link className="team-link" href={`/team/${id}`}>
					<i className="tji-arrow-right-long"></i>
				</Link>
			</div>
			<div className="team-img-wrap">
				<div className="team-img">
					<Image src={imgLarge} alt={name ? `${name} - ${desig || 'Team Member'}` : 'Team member'} width={600} height={600} style={{ height: 'auto', width: '100%' }} />
				</div>
			</div>
		</div>
	);
};

export default TeamCard2;

