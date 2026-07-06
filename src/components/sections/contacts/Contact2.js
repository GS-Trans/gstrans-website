"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import { company } from "@/content/gstrans";
import Link from "next/link";
import { useState } from "react";

const CONTACT_TOPICS = [
	{ value: "0", optionName: "Choose a topic" },
	{ value: "local", optionName: "Local Cargo Transport" },
	{ value: "intercity", optionName: "Inter-City Freight" },
	{ value: "express", optionName: "Express Delivery" },
	{ value: "business", optionName: "Business Solutions (Monthly Plans)" },
	{ value: "franchise", optionName: "Franchise / Dealership" },
	{ value: "support", optionName: "Customer Support" },
	{ value: "other", optionName: "Other" },
];

const Contact2 = () => {
	const [selectedTopic, setSelectedTopic] = useState("");
	const [formErrors, setFormErrors] = useState({});
	const [submitStatus, setSubmitStatus] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const validateForm = (form) => {
		const errors = {};
		const name = form?.cfName2?.value?.trim() || "";
		const email = form?.cfEmail2?.value?.trim() || "";
		const phone = form?.cfPhone2?.value?.trim() || "";
		const message = form?.cfMessage2?.value?.trim() || "";

		// Name validation
		if (!name) {
			errors.name = "Full name is required";
		} else if (name.length < 3) {
			errors.name = "Name must be at least 3 characters";
		}

		// Email validation
		if (!email) {
			errors.email = "Email address is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = "Please enter a valid email address";
		}

		// Phone validation
		if (!phone) {
			errors.phone = "Phone number is required";
		} else if (!/^\d{10}$/.test(phone.replace(/\D/g, ""))) {
			errors.phone = "Please enter a valid 10-digit phone number";
		}

		// Topic validation
		if (!selectedTopic || selectedTopic === "Choose a topic") {
			errors.topic = "Please select a service topic";
		}

		// Message validation
		if (!message) {
			errors.message = "Message is required";
		} else if (message.length < 10) {
			errors.message = "Message must be at least 10 characters";
		}

		return errors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		// Validate form
		const errors = validateForm(form);
		setFormErrors(errors);

		// If there are errors, show error message and stop
		if (Object.keys(errors).length > 0) {
			setSubmitStatus({
				type: "error",
				message: "Please fix the errors above and try again"
			});
			return;
		}

		const name = form?.cfName2?.value?.trim() || "";
		const email = form?.cfEmail2?.value?.trim() || "";
		const phone = form?.cfPhone2?.value?.trim() || "";
		const message = form?.cfMessage2?.value?.trim() || "";

		setIsLoading(true);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					phone,
					topic: selectedTopic,
					message,
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
				form.reset();
				setSelectedTopic("");
				setFormErrors({});

				// Clear success message after 4 seconds
				setTimeout(() => {
					setSubmitStatus(null);
				}, 4000);
			} else {
				setSubmitStatus({
					type: "error",
					message: data.error || "Failed to send message. Please try again."
				});
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			setSubmitStatus({
				type: "error",
				message: "Network error. Please check your connection and try again."
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="tj-contact-section section-gap section-gap-x" style={{ borderRadius: 0, width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-details wow fadeInUp" data-wow-delay=".3s">
							<div className="sec-heading">
								<span className="sub-title text-white">
									<i className="tji-box"></i>Contact Details
								</span>
								<h2 className="sec-title title-anim">
									Get in <span>Touch</span>
								</h2>
								<p style={{ color: '#999', marginTop: '20px', fontSize: '15px', lineHeight: '1.8' }}>
									Have questions about our logistics services? Reach out to us and our team will be happy to help you find the perfect solution for your business needs.
								</p>
							</div>

							<div style={{ marginTop: '50px' }}>
								{/* Phone */}
								<div style={{ marginBottom: '40px' }}>
									<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
										<div style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
											<i className="fa-solid fa-phone" style={{ color: '#D4AF37', fontSize: '24px' }}></i>
										</div>
										<div>
											<h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Phone</h5>
											<Link href={`tel:${company.phoneE164}`} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
												{company.phoneDisplay}
											</Link>
										</div>
									</div>
								</div>

								{/* Email */}
								<div style={{ marginBottom: '40px' }}>
									<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
										<div style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
											<i className="fa-solid fa-envelope" style={{ color: '#D4AF37', fontSize: '24px' }}></i>
										</div>
										<div>
											<h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Email</h5>
											<Link href={`mailto:${company.emails.support}`} style={{ color: '#D4AF37', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>
												{company.emails.support}
											</Link>
										</div>
									</div>
								</div>

								{/* Address */}
								<div style={{ marginBottom: '40px' }}>
									<div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
										<div style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px', flexShrink: 0 }}>
											<i className="tji-location" style={{ color: '#D4AF37', fontSize: '24px' }}></i>
										</div>
										<div>
											<h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Head Office</h5>
											<p style={{ color: '#999', fontSize: '15px', margin: 0 }}>
												{company.address.line1}, {company.address.postalCode}
											</p>
										</div>
									</div>
								</div>

								{/* Hours */}
								<div style={{ marginBottom: '40px' }}>
									<div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
										<div style={{ width: '50px', height: '50px', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px' }}>
											<i className="tji-clock" style={{ color: '#D4AF37', fontSize: '24px' }}></i>
										</div>
										<div>
											<h5 style={{ color: '#ffffff', fontSize: '16px', fontWeight: '600', margin: '0 0 5px 0' }}>Business Hours</h5>
											<p style={{ color: '#999', fontSize: '15px', margin: '0 0 3px 0' }}>Monday - Saturday</p>
											<p style={{ color: '#999', fontSize: '15px', margin: 0 }}>9:00 AM - 6:00 PM</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="contact-form style-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="sec-heading">
								<span className="sub-title text-white">
									<i className="tji-box"></i>Get in Touch
								</span>
								<h2 className="sec-title title-anim">
									Drop Us a <span>Line.</span>
								</h2>
							</div>

							{/* Status Message */}
							{submitStatus && (
								<div style={{
									padding: '15px 18px',
									borderRadius: '8px',
									marginBottom: '25px',
									fontSize: '14px',
									fontWeight: '500',
									backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
									color: submitStatus.type === 'success' ? '#155724' : '#721c24',
									border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
									display: 'flex',
									alignItems: 'center',
									gap: '10px'
								}}>
									<i style={{ fontSize: '18px' }} className={submitStatus.type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-exclamation'}></i>
									<span>{submitStatus.message}</span>
								</div>
							)}

							<form id="contact-form-2" onSubmit={handleSubmit}>
								<div className="row wow fadeInUp" data-wow-delay=".5s">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName2"
												placeholder="Full Name *"
												style={{
													borderColor: formErrors.name ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.name ? 'rgba(220, 53, 69, 0.05)' : 'transparent'
												}}
											/>
											{formErrors.name && (
												<span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.name}
												</span>
											)}
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail2"
												placeholder="Email Address *"
												style={{
													borderColor: formErrors.email ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.email ? 'rgba(220, 53, 69, 0.05)' : 'transparent'
												}}
											/>
											{formErrors.email && (
												<span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.email}
												</span>
											)}
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone2"
												placeholder="Phone number *"
												style={{
													borderColor: formErrors.phone ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.phone ? 'rgba(220, 53, 69, 0.05)' : 'transparent'
												}}
											/>
											{formErrors.phone && (
												<span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.phone}
												</span>
											)}
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={CONTACT_TOPICS}
														getSelectedOption={(opt) =>
															setSelectedTopic(opt?.optionName || "")
														}
													/>
												</div>
											</div>
											{formErrors.topic && (
												<span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.topic}
												</span>
											)}
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage2"
												id="message"
												placeholder="Type message *"
												style={{
													borderColor: formErrors.message ? '#dc3545' : 'transparent',
													backgroundColor: formErrors.message ? 'rgba(220, 53, 69, 0.05)' : 'transparent'
												}}
											></textarea>
											{formErrors.message && (
												<span style={{ color: '#dc3545', fontSize: '12px', marginTop: '5px', display: 'block' }}>
													<i className="fa-solid fa-circle-exclamation" style={{ marginRight: '5px' }}></i>
													{formErrors.message}
												</span>
											)}
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary 
											text={isLoading ? "Sending..." : "Send Message"} 
											type={"submit"}
											disabled={isLoading}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Contact2;

