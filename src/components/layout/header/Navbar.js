import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems && navItems.map((item, idx) => {
						const activeItem = makeActiveLink(item);
						return (
						<li
							key={idx}
							className={`${activeItem?.submenu ? "has-dropdown" : ""} ${activeItem?.isActive ? "current-menu-item" : ""}`}
						>
							<Link href={item?.path ? item?.path : "/"}>
								{item?.icon && <i className={item?.icon}></i>}
								{" "}{item?.name}
							</Link>
							{item?.submenu && item?.submenu?.length > 0 && (
								<ul className="sub-menu">
									{item?.submenu?.map((subitem, subidx) => (
										<li key={subidx}>
											<Link href={subitem?.path ? subitem?.path : "/"}>
												{subitem?.name}
											</Link>
										</li>
									))}
								</ul>
							)}
						</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
