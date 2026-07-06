import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();

	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems && navItems.map((item, idx) => (
								<MobileMenuItem
									key={idx}
									text={item?.name}
									url={item?.path ? item?.path : "/"}
									icon={item?.icon}
									submenuClass={"sub-menu"}
								>
									{item?.submenu && item?.submenu?.length > 0 && (
										<ul>
											{item?.submenu?.map((subitem, subidx) => (
												<li key={subidx}>
													<Link href={subitem?.path ? subitem?.path : "/"}>
														{subitem?.name}
													</Link>
												</li>
											))}
										</ul>
									)}
								</MobileMenuItem>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;

