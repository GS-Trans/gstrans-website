"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
const PortfolioDetailsPrimary = ({ option }) => {
	const { prevSlug, nextSlug, currentItem, isPrevItem, isNextItem } = option || {};
	const { 
		title, 
		titleLarge, 
		id, 
		img, 
		img2,
		img3,
		detailsImg,
		desc1, 
		desc2, 
		shortDesc,
		statusItem = [],
		descItems = [],
		tags = []
	} = currentItem || {};

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={detailsImg || img || "/images/project/project-details.webp"}
									alt={title || "Images"}
									width={868}
									height={450}
									style={{ height: "auto" }}
								/>
							</div>
							<h2 className="title title-anim">
								{titleLarge || title}
							</h2>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{desc1}
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{desc2}
								</p>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Key Features
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{shortDesc}
								</p>
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									{statusItem.map((item, index) => (
										<li key={index}>
											<span>
												<i className="tji-check"></i>
											</span>
											{typeof item === 'string' ? item : `${item.title}: ${item.desc}`}
										</li>
									))}
								</ul>
								{/* <h3 className="wow fadeInUp" data-wow-delay=".3s">
									Platform Gallery
								</h3> */}
								<p className="wow fadeInUp" data-wow-delay=".3s">
									{descItems.length > 0 ? (typeof descItems[0] === 'string' ? descItems[0] : descItems[0].desc) : "Explore the features and capabilities of our platform."}
								</p>
								<div className="images-wrap">
									<div className="row">
										{/* <div className="col-sm-12">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href={img || "/images/project/project-gallery-1.webp"}
														prefetch={false}
													>
														<Image
															src={img || "/images/project/project-gallery-1.webp"}
															alt={title || "Image"}
															width={870}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div> */}
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href={img2 || "/images/project/project-gallery-2.webp"}
														prefetch={false}
													>
														<Image
															src={img2 || "/images/project/project-gallery-2.webp"}
															alt={title || "Image"}
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".5s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														prefetch={false}
														href={img3 || "/images/project/project-gallery-3.webp"}
													>
														<Image
															src={img3 || "/images/project/project-gallery-3.webp"}
															alt={title || "Image"}
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
									</div>
								</div>
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
										<Link href={isPrevItem ? `/portfolios/${prevSlug}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/portfolios"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/portfolios/${nextSlug}` : "#"}>
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
							{/* <!-- category --> */}
							<div
								className="tj-sidebar-widget widget-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">Platform Info</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Platform</span>
										<h6 className="title">{title || "GS Trans"}</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-chart"></i>
									</div>
									<div className="project-text">
										<span>Category</span>
										<h6 className="title">Transport Technology</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-location-2"></i>
									</div>
									<div className="project-text">
										<span>Service Area</span>
										<h6 className="title">Pan India</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
									<i className="tji-phone"></i>
									</div>
									<div className="project-text">
										<span>Availability</span>
										<h6 className="title">24/7 Support</h6>
									</div>
								</div>
								{tags && tags.length > 0 && (
									<div className="infos-item">
										<div className="project-icons">
										<i className="tji-box"></i>
										</div>
										<div className="project-text">
											<span>Tags</span>
											<h6 className="title">{tags.join(", ")}</h6>
										</div>
									</div>
								)}
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

export default PortfolioDetailsPrimary;

