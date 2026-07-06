const TermsAndConditionsPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Terms &amp; Conditions <span className="pill">GS Trans</span>
								</h2>
								<p className="muted">Last updated: January 14, 2026</p>
								<p>
									These Terms &amp; Conditions govern your use of the GS Trans
									website and related services. By accessing or using this website,
									you agree to these terms.
								</p>
								<div className="note">
									<strong>Short version:</strong> Use the website responsibly,
									respect our content, and contact us if you need help.
								</div>
							</div>

							<nav className="toc" aria-label="Table of contents">
								<h2>Table of Contents</h2>
								<ol>
									<li>
										<button
											className="tj-scroll-btn"
											data-target="#definitions"
										>
											Definitions
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#use">
											Website Use
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#ip">
											Intellectual Property
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#disclaimer">
											Disclaimer
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#contact">
											Contact
										</button>
									</li>
								</ol>
							</nav>

							<div id="definitions">
								<h3>1. Definitions</h3>
								<p>
									<strong>“We”, “Us”, “Our”</strong> refers to GS Trans.
								</p>
								<p>
									<strong>“You”, “Your”</strong> refers to any visitor or user of
									this website.
								</p>
								<p>
									<strong>“Services”</strong> refers to any booking, tracking, or
									customer support features provided by GS Trans.
								</p>
							</div>

							<div id="use">
								<h3>2. Website Use</h3>
								<p>
									You agree not to misuse the website. This includes attempting to
									access systems or data without authorization, disrupting service,
									or using the website for unlawful activities.
								</p>
							</div>

							<div id="ip">
								<h3>3. Intellectual Property</h3>
								<p>
									All content on this website (text, graphics, branding, and
									assets) is owned by GS Trans or its licensors and is protected by
									applicable laws. You may not copy, reproduce, or redistribute
									content without written permission.
								</p>
							</div>

							<div id="disclaimer">
								<h3>4. Disclaimer</h3>
								<p>
									We try to keep information on this website accurate and up to
									date, but we do not guarantee completeness or availability.
									Services and pricing may change without notice.
								</p>
							</div>

							<div id="contact">
								<h3>5. Contact</h3>
								<p>
									For questions about these terms or to reach customer support,
									email us at <strong>contact@gstrans.in</strong>.
								</p>
							</div>
							<p className="muted">
								<small>
									This page is provided for general information and may not cover
									every legal requirement.
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TermsAndConditionsPrimary;

