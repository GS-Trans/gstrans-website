"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { company, socials } from "@/content/gstrans";
import getCareers from "@/libs/getCareers";
import Link from "next/link";
import { useMemo, useState } from "react";

const CareerDetails1 = ({ currentItemSlug }) => {
	const items = getCareers();
	const currentItem = items?.find(({ slug }) => slug === currentItemSlug);
	
	if (!currentItem) return null;

	const currentId = currentItem.id;
	const { prevId, nextId, isPrevItem, isNextItem, prevSlug, nextSlug } =
		(() => {
			const currentIndex = items.findIndex(({ slug }) => slug === currentItemSlug);
			const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
			const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;
			
			return {
				prevId: prevItem?.id,
				nextId: nextItem?.id,
				prevSlug: prevItem?.slug,
				nextSlug: nextItem?.slug,
				isPrevItem: !!prevItem,
				isNextItem: !!nextItem,
			};
		})();
	
	const { title, iconName, category, need, location, price, duration, description, requirements, responsibilities } =
		currentItem || {};

	const jobId = useMemo(() => `JOB-${currentId}`, [currentId]);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		resumeLink: "",
		coverLetter: "",
	});

	const applyMailtoHref = useMemo(() => {
		const subject = `Job Application: ${title || "Role"} (${jobId})`;
		const body = [
			`Role: ${title || ""}`,
			`Job ID: ${jobId}`,
			"",
			`Full Name: ${form.name}`,
			`Email: ${form.email}`,
			`Phone: ${form.phone}`,
			`Resume Link: ${form.resumeLink}`,
			"",
			"Cover Letter:",
			form.coverLetter,
		].join("\n");
		return `mailto:${company.emails.support}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	}, [form, jobId, title]);

	const onChange = (key) => (e) => {
		setForm((prev) => ({ ...prev, [key]: e.target.value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
		window.location.href = applyMailtoHref;
	};

	return (
		<section className="tj-careers-details section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="tj-post-wrapper">
							<div className="tj-post-single-post">
								{/* <!-- top content --> */}
								<div className="tj-careers-top mb-30">
									<div className="tj-careers-top-icon">
										<i className={iconName ? iconName : "tji-manage"}></i>
									</div>
									<div className="tj-careers-top-content">
										<div className="tj-careers-tag">
											<span>{category}</span> <span>{need}</span>
										</div>
										<h3 className="tj-careers-top-title text-anim">{title}</h3>
										<span className="location">
											<i className="tji-location"></i>
											{location || company.address.line1}
										</span>
									</div>
								</div>
								{/* <!-- content --> */}
								<div className="tj-entry-content">
								<h4 className="text-anim" style={{ color: '#D4AF37' }}>Job Description</h4>
								<p className="wow fadeInUp" data-wow-delay="0.1s">
									{description || "Join GS Trans and help us deliver a reliable, customer-first logistics experience."}
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Requirements</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											We’re looking for someone who is organized, responsive, and
											comfortable working in a fast-paced logistics environment.
										</p>
									</div>
									<div
										className="team-details__experience__list service-check-list mt-4 mb-4 wow fadeInUp"
										data-wow-delay="0.3s"
									>
										<ul>
											<li>
												<i className="tji-check"></i>
												<span>
													Clear communication (Hindi/English preferred).
												</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>
													Basic computer skills and attention to detail.
												</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>
													Willingness to coordinate with riders/partners.
												</span>
											</li>
											<li>
												<i className="tji-check"></i>
												<span>
													Prior experience in logistics/support is a plus.
												</span>
											</li>
										</ul>
									</div>
									<p className="wow fadeInUp" data-wow-delay="0.3s">
										If you enjoy solving problems and keeping operations running
										smoothly, this role is a great fit.
									</p>
									<div className="tj-check-list">
										<h4 className="text-anim">Responsibilities</h4>
										<p className="wow fadeInUp" data-wow-delay="0.1s">
											Support dispatch and coordination for pickups/deliveries, share
											status updates with customers, and ensure issues are resolved
											quickly.
										</p>
										<ul className="wow fadeInUp" data-wow-delay="0.3s">
											<li>
												<span>
													<i className="tji-check"></i>
												</span>{" "}
												Coordinate shipments and partner allocation
											</li>
											<li>
												<span>
													<i className="tji-check"></i>
												</span>{" "}
												Maintain accurate booking and delivery records
											</li>
											<li>
												<span>
													<i className="tji-check"></i>
												</span>{" "}
												Handle customer queries and escalations
											</li>
											<li>
												<span>
													<i className="tji-check"></i>
												</span>{" "}
												Follow safety and quality processes for cargo handling
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- post tag and share --> */}
								<div
									className="tj-tags-post tj-post-details_tags_share wow fadeInUp"
									data-wow-delay=".1s"
								>
									<div className="tagcloud">
										<span>Tags:</span>
										<Link href="/careers">Logistics</Link>
										<Link href="/careers">Transport</Link>
										<Link href="/careers">Operations</Link>
									</div>
									<div className="post-share">
										<ul>
											<li> Share:</li>
											{socials?.slice(0, 3)?.map((item, idx) => (
												<li key={idx}>
													<a href={item?.path} target="_blank" rel="noreferrer">
														<i className={item?.iconName}></i>
													</a>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>

							{/* <!-- post navigation --> */}
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
									<Link href={isPrevItem ? `/careers/${prevSlug}` : "#"}>
										<span>
											<i className="tji-arrow-left"></i>
										</span>
										Previous
									</Link>
								</div>
							</div>
							<Link href={"/careers"} className="tj-nav-post__grid">
								<i className="tji-window"></i>
							</Link>
							{/* <!-- next post --> */}
							<div
								className="tj-nav__post next"
								style={{ visibility: isNextItem ? "visible" : "hidden" }}
							>
								<div className="tj-nav-post__nav next_post">
									<Link href={isNextItem ? `/careers/${nextSlug}` : "#"}>
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
						<aside className="tj-blog-sidebar">
							{/* <!-- Job information  --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.1s"
							>
								<h4 className="widget-title">Job Information</h4>
								<div className="project_catagory">
									<ul>
										<li>
											<span className="first-child">Role type</span>
											<span>{category || "Open role"}</span>
										</li>
										<li>
											<span className="first-child">Job ID</span>
											<span>{jobId}</span>
										</li>
										<li>
											<span className="first-child">Company</span>
											<span>{company.name}</span>
										</li>
										<li>
											<span className="first-child">Website</span>
											<span>www.gstrans.in</span>
										</li>
										<li>
											<span className="first-child">Compensation</span>
											<span>
												{price
													? `${price}${duration ? ` / ${duration}` : ""}`
													: "As per company policy"}
											</span>
										</li>
									</ul>
								</div>
							</div>
							{/* <!-- apply form --> */}
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h4 className="widget-title">Apply Online</h4>
								<div className="tj-careers-form">
									<form onSubmit={onSubmit}>
										<div className="form-input">
											<input
												type="text"
												name="cr_name"
												placeholder="Full name*"
												value={form.name}
												onChange={onChange("name")}
												required
											/>
										</div>
										<div className="form-input">
											<input
												type="email"
												name="cr_email"
												placeholder="Enter email*"
												value={form.email}
												onChange={onChange("email")}
												required
											/>
										</div>
										<div className="form-input">
											<input
												type="text"
												name="cr_phone"
												placeholder="Phone number*"
												value={form.phone}
												onChange={onChange("phone")}
												required
											/>
										</div>
										<div className="form-input">
											<input
												type="url"
												name="cr_resume"
												placeholder="Resume link (Google Drive/OneDrive)"
												value={form.resumeLink}
												onChange={onChange("resumeLink")}
											/>
										</div>
										<div className="form-input">
											<textarea
												name="cr_cover_letter"
												placeholder="Cover letter*"
												value={form.coverLetter}
												onChange={onChange("coverLetter")}
												required
											></textarea>
										</div>
										<div className="tj-careers-button">
											<ButtonPrimary text={"Submit now"} type="submit" />
										</div>
									</form>
								</div>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CareerDetails1;

