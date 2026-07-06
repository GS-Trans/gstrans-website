"use client";

const posts = [
	{
		slug: "how-gst-trans-is-transforming-goods-transport",
		title: "How GS Trans is Transforming Goods Transport in Telangana",
		excerpt:
			"From real-time tracking to transparent pricing, learn how technology is reshaping cargo delivery for businesses across Telangana and Andhra Pradesh.",
		date: "2025-01-15",
		category: "Company",
		readTime: "5 min read",
		image: "/images/blog/blog-1.webp",
	},
	{
		slug: "5-tips-to-reduce-shipping-costs",
		title: "5 Tips to Reduce Your Shipping Costs Without Compromising Quality",
		excerpt:
			"Smart logistics choices can save your business thousands. Here are practical tips for reducing transport expenses while maintaining delivery quality.",
		date: "2025-01-10",
		category: "Tips",
		readTime: "4 min read",
		image: "/images/blog/blog-2.webp",
	},
	{
		slug: "why-real-time-tracking-matters",
		title: "Why Real-Time Tracking Matters for Your Business Shipments",
		excerpt:
			"Real-time GPS tracking isn't just a feature — it's a game-changer for customer trust and operational efficiency. Here's why every business needs it.",
		date: "2025-01-05",
		category: "Technology",
		readTime: "3 min read",
		image: "/images/blog/blog-3.webp",
	},
	{
		slug: "choosing-right-vehicle-for-cargo",
		title: "Choosing the Right Vehicle for Your Cargo: A Complete Guide",
		excerpt:
			"Mini truck, truck, or trailer? Learn how to pick the ideal vehicle type for your shipment based on weight, distance, and urgency.",
		date: "2024-12-28",
		category: "Guide",
		readTime: "6 min read",
		image: "/images/blog/blog-4.webp",
	},
	{
		slug: "future-of-logistics-india",
		title: "The Future of Logistics in India: Trends to Watch in 2025",
		excerpt:
			"AI-powered routing, EV fleets, and hyperlocal delivery — explore the key trends shaping Indian logistics and what they mean for your business.",
		date: "2024-12-20",
		category: "Industry",
		readTime: "5 min read",
		image: "/images/blog/blog-5.webp",
	},
	{
		slug: "safe-transport-fragile-goods",
		title: "How to Safely Transport Fragile Goods: Packaging & Handling Tips",
		excerpt:
			"Shipping electronics, glassware, or delicate items? Learn best practices for packaging and handling to ensure your goods arrive intact.",
		date: "2024-12-15",
		category: "Tips",
		readTime: "4 min read",
		image: "/images/blog/blog-6.webp",
	},
];

const categoryColors = {
	Company: "#1890ff",
	Tips: "#22c55e",
	Technology: "#8b5cf6",
	Guide: "#f59e0b",
	Industry: "#ef4444",
};

export default function BlogList() {
	return (
		<section style={{ padding: "80px 0" }}>
			<div className="container">
				<div className="row">
					{posts.map((post, i) => (
						<div key={post.slug} className="col-lg-4 col-md-6" style={{ marginBottom: "30px" }}>
							<article
								style={{
									background: "#fff",
									borderRadius: "16px",
									overflow: "hidden",
									border: "1px solid #eee",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									transition: "box-shadow 0.3s, transform 0.2s",
								}}
							>
								{/* Image Placeholder */}
								<div
									style={{
										height: "200px",
										background: `linear-gradient(135deg, ${categoryColors[post.category] || "#1890ff"}22, ${categoryColors[post.category] || "#1890ff"}11)`,
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										position: "relative",
									}}
								>
									<div style={{ fontSize: "48px" }}>
										{post.category === "Company" && "🏢"}
										{post.category === "Tips" && "💡"}
										{post.category === "Technology" && "⚡"}
										{post.category === "Guide" && "📖"}
										{post.category === "Industry" && "📊"}
									</div>
									<span
										style={{
											position: "absolute",
											top: "12px",
											left: "12px",
											background: categoryColors[post.category] || "#1890ff",
											color: "#fff",
											padding: "4px 12px",
											borderRadius: "20px",
											fontSize: "12px",
											fontWeight: "600",
										}}
									>
										{post.category}
									</span>
								</div>

								{/* Content */}
								<div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											fontSize: "13px",
											color: "#999",
											marginBottom: "12px",
										}}
									>
										<span>
											{new Date(post.date).toLocaleDateString("en-IN", {
												day: "numeric",
												month: "short",
												year: "numeric",
											})}
										</span>
										<span>{post.readTime}</span>
									</div>
									<h5
										style={{
											fontWeight: "600",
											marginBottom: "10px",
											lineHeight: "1.4",
											fontSize: "17px",
										}}
									>
										{post.title}
									</h5>
									<p
										style={{
											color: "#666",
											fontSize: "14px",
											lineHeight: "1.6",
											flex: 1,
										}}
									>
										{post.excerpt}
									</p>
									<div style={{ marginTop: "16px" }}>
										<span
											style={{
												color: "#1890ff",
												fontWeight: "600",
												fontSize: "14px",
												cursor: "default",
											}}
										>
											Read More <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px", marginLeft: "4px" }}></i>
										</span>
									</div>
								</div>
							</article>
						</div>
					))}
				</div>

				{/* Newsletter CTA */}
				<div
					style={{
						marginTop: "40px",
						padding: "50px",
						background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4ff 100%)",
						borderRadius: "20px",
						textAlign: "center",
					}}
				>
					<h4 style={{ fontWeight: "700", marginBottom: "12px" }}>Stay Updated</h4>
					<p style={{ color: "#666", marginBottom: "24px", maxWidth: "450px", margin: "0 auto 24px" }}>
						Get the latest logistics tips and company updates delivered to your inbox.
					</p>
					<div
						style={{
							display: "flex",
							gap: "12px",
							maxWidth: "420px",
							margin: "0 auto",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						<a
							href="/contact"
							style={{
								padding: "12px 28px",
								background: "#1890ff",
								color: "#fff",
								borderRadius: "8px",
								textDecoration: "none",
								fontWeight: "600",
							}}
						>
							Contact Us for Updates
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
