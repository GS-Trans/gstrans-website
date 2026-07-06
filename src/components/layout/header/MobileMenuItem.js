"use client";

import Link from "next/link";
import { useState } from "react";

const MobileMenuItem = ({ children, text, url, icon, submenuClass }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(prevIsOpen => !prevIsOpen);
	};

	const hasChildren = children && (Array.isArray(children) ? children.length > 0 : true);

	return (
		<li className={`${hasChildren ? 'has-dropdown' : ''} ${isOpen ? "dropdown-opened" : ""}`}>
			<Link href={url ? url : "#"}>
				{icon && <i className={icon} style={{ marginRight: '8px' }}></i>}
				<span>{text}</span>
			</Link>
			{hasChildren && (
				<>
					<ul
						className={`sub-menu ${submenuClass ? submenuClass : ""}`}
						style={{ display: !isOpen ? "none" : "" }}
					>
						{children}
					</ul>
					<Link
						className={`mean-expand ${isOpen ? "mean-clicked" : ""}`}
						href="#"
						style={{ fontSize: "18px" }}
						onClick={() => handleClick()}
					>
						<i className="tji-arrow-down"></i>
					</Link>
				</>
			)}
		</li>
	);
};

export default MobileMenuItem;

