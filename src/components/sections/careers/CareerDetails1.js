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
	const [formErrors, setFormErrors] = useState({});
	const [submitStatus, setSubmitStatus] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const validateForm = () => {
		const errors = {};

		// Name validation
		if (!form.name.trim()) {
			errors.name = "Full name is required";
		} else if (form.name.trim().length < 3) {
			errors.name = "Name must be at least 3 characters";
		}

		// Email validation
		if (!form.email.trim()) {
			errors.email = "Email address is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			errors.email = "Please enter a valid email address";
		}

		// Phone validation
		if (!form.phone.trim()) {
			errors.phone = "Phone number is required";
		} else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ""))) {
			errors.phone = "Please enter a valid 10-digit phone number";
		}

		// Cover letter validation
		if (!form.coverLetter.trim()) {
			errors.coverLetter = "Cover letter is required";
		} else if (form.coverLetter.trim().length < 50) {
			errors.coverLetter = "Cover letter must be at least 50 characters";
		}

		return errors;
	};

	const onChange = (key) => (e) => {
		setForm((prev) => ({ ...prev, [key]: e.target.value }));
		// Clear error for this field when user starts typing
		if (formErrors[key]) {
			setFormErrors((prev) => ({ ...prev, [key]: "" }));
		}
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		// Validate form
		const errors = validateForm();
		setFormErrors(errors);

		// If there are errors, show error message and stop
		if (Object.keys(errors).length > 0) {
			setSubmitStatus({
				type: "error",
				message: "Please fix the errors above and try again"
			});
			return;
		}

		setIsLoading(true);

		try {
			const response = await fetch("/api/career-apply", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: form.name.trim(),
					email: form.email.trim(),
					phone: form.phone.trim(),
					resumeLink: form.resumeLink.trim(),
					coverLetter: form.coverLetter.trim(),
					jobTitle: title,
					jobId: jobId,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				// Show success message
				setSubmitStatus({
					type: "success",
					message: "✓ " + data.message
				});

				// Reset form
				setForm({
					name: "",
					email: "",
					phone: "",
					resumeLink: "",
					coverLetter: "",
				});
				setFormErrors({});

				// Clear success message after 5 seconds
				setTimeout(() => {
					setSubmitStatus(null);
				}, 5000);
			} else {
				setSubmitStatus({
					type: "error",
					message: data.error || "Failed to submit application. Please try again."
				});
			}
		} catch (error) {
			console.error("Error submitting application:", error);
			setSubmitStatus({
				type: "error",
				message: "Network error. Please check your connection and try again."
			});
		} finally {
			setIsLoading(false);
		}
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
									
									{requirements && requirements.length > 0 && (
										<div className="tj-check-list">
											<h4 className="text-anim" style={{ color: '#D4AF37' }}>Requirements</h4>
											<ul className="wow fadeInUp" data-wow-delay="0.3s">
												{requirements.map((req, idx) => (
													<li key={idx}>
														<span>
															<i className="tji-check" style={{ backgroundColor: '#D4AF37', color: 'white', borderRadius: '50%', padding: '5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}></i>
														</span>{" "}
														{req}
													</li>
												))}
											</ul>
										</div>
									)}
									
									{responsibilities && responsibilities.length > 0 && (
										<div className="tj-check-list">
											<br />
											<h4 className="text-anim" style={{ color: '#D4AF37' }}>Responsibilities</h4>
											<ul className="wow fadeInUp" data-wow-delay="0.3s">
												{responsibilities.map((resp, idx) => (
													<li key={idx}>
														<span>
															<i className="tji-check" style={{ backgroundColor: '#D4AF37', color: 'white', borderRadius: '50%', padding: '5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px' }}></i>
														</span>{" "}
														{resp}
													</li>
												))}
											</ul>
										</div>
									)}
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
								<h4 className="widget-title" style={{ color: '#D4AF37' }}>Job Information</h4>
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
							<div
								className="tj-sidebar-widget wow fadeInUp"
								data-wow-delay="0.3s"
							>
								<h4 className="widget-title" style={{ color: '#D4AF37' }}>Apply Online</h4>
								
								{/* Status Message */}
								{submitStatus && (
									<div style={{
										padding: '12px 15px',
										borderRadius: '8px',
										marginBottom: '20px',
										fontSize: '13px',
										fontWeight: '500',
										backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
										color: submitStatus.type === 'success' ? '#155724' : '#721c24',
										border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
										display: 'flex',
										alignItems: 'center',
										gap: '8px'
									}}>
										<i style={{ fontSize: '16px' }} className={submitStatus.type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation'}></i>
										<span>{submitStatus.message}</span>
									</div>
								)}
								
								<div className="tj-careers-form">
									<form onSubmit={onSubmit}>
										<div className="form-input">
											<input
												type="text"
												name="cr_name"
												placeholder="Full name*"
												value={form.name}
												onChange={onChange("name")}
												disabled={isLoading}
												style={{
													borderColor: formErrors.name ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.name ? 'rgba(220, 53, 69, 0.05)' : '#fff'
												}}
											/>
											{formErrors.name && (
												<span style={{ color: '#dc3545', fontSize: '11px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.name}
												</span>
											)}
										</div>
										<div className="form-input">
											<input
												type="email"
												name="cr_email"
												placeholder="Enter email*"
												value={form.email}
												onChange={onChange("email")}
												disabled={isLoading}
												style={{
													borderColor: formErrors.email ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.email ? 'rgba(220, 53, 69, 0.05)' : '#fff'
												}}
											/>
											{formErrors.email && (
												<span style={{ color: '#dc3545', fontSize: '11px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.email}
												</span>
											)}
										</div>
										<div className="form-input">
											<input
												type="text"
												name="cr_phone"
												placeholder="Phone number*"
												value={form.phone}
												onChange={onChange("phone")}
												disabled={isLoading}
												style={{
													borderColor: formErrors.phone ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.phone ? 'rgba(220, 53, 69, 0.05)' : '#fff'
												}}
											/>
											{formErrors.phone && (
												<span style={{ color: '#dc3545', fontSize: '11px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.phone}
												</span>
											)}
										</div>
										<div className="form-input">
											<input
												type="url"
												name="cr_resume"
												placeholder="Resume link (Google Drive/OneDrive)"
												value={form.resumeLink}
												onChange={onChange("resumeLink")}
												disabled={isLoading}
											/>
										</div>
										<div className="form-input">
											<textarea
												name="cr_cover_letter"
												placeholder="Cover letter* (minimum 50 characters)"
												value={form.coverLetter}
												onChange={onChange("coverLetter")}
												disabled={isLoading}
												style={{
													borderColor: formErrors.coverLetter ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.coverLetter ? 'rgba(220, 53, 69, 0.05)' : '#fff'
												}}
											></textarea>
											{formErrors.coverLetter && (
												<span style={{ color: '#dc3545', fontSize: '11px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.coverLetter}
												</span>
											)}
										</div>
										<div className="tj-careers-button">
											<ButtonPrimary 
												text={isLoading ? "Submitting..." : "Submit now"} 
												type="submit"
												disabled={isLoading}
											/>
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

