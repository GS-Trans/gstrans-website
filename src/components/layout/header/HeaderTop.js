import { company, socials } from "@/content/gstrans";
import Link from "next/link";

const HeaderTop = ({ type }) => {
	return (
		<div className="header-top">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="header-top-content">
							<p className="topbar-text">
								<i className="tji-excellence"></i>
								{company.tagline}{" "}
								<Link href="/contact">Get a quote</Link>
							</p>
							<div className="header-info">
								<div className="info-item">
									<span>
										<i className="tji-location"></i>
									</span>
									<Link href="/contact">
										{company.address.line1}
									</Link>
								</div>
								<div className="info-item">
									<span>
										<i className="tji-phone-3"></i>
									</span>
									<Link href={`tel:${company.phoneE164}`}>{company.phoneDisplay}</Link>
								</div>
								<div className="info-item">
									<div className="social-links style-2">
										<ul>
											{socials?.slice(0, 4)?.map((item, idx) => (
												<li key={idx}>
													<Link
														href={item?.path}
														target="_blank"
														rel="noreferrer"
													>
														<i className={item?.iconName}></i>
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderTop;

