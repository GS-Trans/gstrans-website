"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import { company } from "@/content/gstrans";
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

const Contact3 = () => {
	const [selectedTopic, setSelectedTopic] = useState("");
	const [formErrors, setFormErrors] = useState({});
	const [submitStatus, setSubmitStatus] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const validateForm = (form) => {
		const errors = {};
		const name = form?.cfName?.value?.trim() || "";
		const email = form?.cfEmail?.value?.trim() || "";
		const phone = form?.cfPhone?.value?.trim() || "";
		const message = form?.cfMessage?.value?.trim() || "";

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

		const name = form?.cfName?.value?.trim() || "";
		const email = form?.cfEmail?.value?.trim() || "";
		const phone = form?.cfPhone?.value?.trim() || "";
		const message = form?.cfMessage?.value?.trim() || "";

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
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>

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

							<form id="contact-form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
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
												name="cfEmail"
												placeholder="Email Address*"
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
												name="cfPhone"
												placeholder="Phone number*"
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
												name="cfMessage"
												id="message"
												placeholder="Type message*"
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
											text={isLoading ? "Sending..." : "Submit Now"} 
											type={"submit"}
											disabled={isLoading}
										/>
									</div>
									<div style={{ marginTop: "10px" }}>
										<a
											href={`https://wa.me/${company.phoneE164.replace(
												"+",
												""
											)}?text=${encodeURIComponent(
												"Hi GS Trans, I have an enquiry from the website."
										)}`}
											target="_blank"
											rel="noreferrer"
											style={{ fontSize: "14px" }}
										>
											Prefer WhatsApp? Message us
										</a>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe title="GS Trans location" src={company.mapEmbedUrl}></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;

