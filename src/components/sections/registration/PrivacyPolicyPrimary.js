import { company } from "@/content/gstrans";

const PrivacyPolicyPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Privacy Policy <span className="pill">{company.name}</span>
								</h2>
								<p className="muted">Last updated: January 14, 2026</p>
								<p>
									This Privacy Policy explains how {company.name} collects, uses,
									and protects information when you use our website.
								</p>
								<div className="note">
									<strong>Short version:</strong> We only collect what we need to
									provide support and improve the experience. We do not sell your
									personal information.
								</div>
							</div>

							<nav className="toc" aria-label="Table of contents">
								<h2>Table of Contents</h2>
								<ol>
									<li>
										<button className="tj-scroll-btn" data-target="#info">
											Information We Collect
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#use">
											How We Use Information
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#cookies">
											Cookies
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#sharing">
											Sharing
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#contact">
											Contact
										</button>
									</li>
								</ol>
							</nav>

							<div id="info">
								<h3>1. Information We Collect</h3>
								<p>
									We may collect information you choose to provide via contact
									forms or email (such as your name, phone number, email address,
									and message). If you contact us, we may retain the conversation
									for support and record-keeping.
								</p>
							</div>

							<div id="use">
								<h3>2. How We Use Information</h3>
								<p>
									We use information to respond to inquiries, provide customer
									support, and improve our website and services.
								</p>
							</div>

							<div id="cookies">
								<h3>3. Cookies</h3>
								<p>
									Our website may use cookies or similar technologies to support
									site functionality and basic analytics. You can manage cookie
									preferences in your browser settings.
								</p>
							</div>

							<div id="sharing">
								<h3>4. Sharing</h3>
								<p>
									We do not sell your personal information. We may share
									information only when required to comply with applicable laws or
									to protect our rights.
								</p>
							</div>

							<div id="contact">
								<h3>5. Contact</h3>
								<p>
									If you have questions about this policy, contact us at{" "}
									<strong>{company.emails.support}</strong>.
								</p>
							</div>

							<p className="muted">
								<small>
									This page is provided for general information and may not cover
									every legal requirement. If you need formal legal advice, consult
									a qualified professional.
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrivacyPolicyPrimary;
