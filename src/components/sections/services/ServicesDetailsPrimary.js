"use client";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const {
		currentItem,
		items,
		isPrevItem,
		isNextItem,
		prevItem,
		nextItem,
	} = option || {};
	const { title, id, slug, img, desc1, desc2, desc3, img2, img3, process } = currentItem || {};
	const sidebarItems = items?.slice(0, 6);
	
	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={img || "/images/service/service-details.webp"}
									alt={title || "Service"}
									width={870}
									height={450}
									style={{ height: "auto" }}
								/>
							</div>
							<h2 className="title title-anim">
								{title}
							</h2>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{desc1}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{desc2}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{desc3}
								</p>
								
								{process && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s">
											{process.title}
										</h3>
										<ul className="wow fadeInUp" data-wow-delay=".3s">
											{process.processItems?.map((item, idx) => (
												<li key={idx}>
													<span>
														<i className="tji-check"></i>
													</span>
													{item}
												</li>
											))}
										</ul>
									</>
								)}
								
								{img2 && img3 && (
									<div className="images-wrap">
										<div className="row">
											<div className="col-sm-6">
												<div className="image-box wow fadeInUp" data-wow-delay=".3s">
													<Image
														src={img2}
														alt="Service Image"
														width={420}
														height={420}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="image-box wow fadeInUp" data-wow-delay=".5s">
													<Image
														src={img3}
														alt="Service Image"
														width={420}
														height={420}
														style={{ height: "auto" }}
													/>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
							
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/services/${prevItem?.slug}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/services"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/services/${nextItem?.slug}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-main-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget service-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">More Services</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ shortTitle, id, slug }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentItem?.id === id ? "active" : ""}`}
														href={`/services/${slug}`}
													>
														{shortTitle}
														<span className="icon">
															<i className="tji-arrow-right"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
							</div>

							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget widget-feature-item wow fadeInUp"
								data-wow-delay=".3s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;

