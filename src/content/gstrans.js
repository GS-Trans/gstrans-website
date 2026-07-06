// Centralized “real content” for GS Trans.
// Kept as plain JS to match current codebase (no TS in repo).

export const socials = [
	{
		name: "Facebook",
		iconName: "fa-brands fa-facebook-f",
		path: "https://facebook.com/gstrans",
	},
	{
		name: "Instagram",
		iconName: "fa-brands fa-instagram",
		path: "https://instagram.com/gstrans.in",
	},
	{
		name: "X (Twitter)",
		iconName: "fa-brands fa-x-twitter",
		path: "https://twitter.com/gstrans_in",
	},
	{
		name: "LinkedIn",
		iconName: "fa-brands fa-linkedin-in",
		path: "https://linkedin.com/company/gstrans",
	},
	{
		name: "YouTube",
		iconName: "fa-brands fa-youtube",
		path: "https://youtube.com/@gstrans",
	},
];

export const company = {
	name: "GS Trans",
	tagline: "Smart Transport, Smarter Solutions.",
	description:
		"Technology-driven transportation and logistics platform providing seamless, efficient, and reliable cargo delivery.",
	phoneE164: "+919133533549",
	phoneDisplay: "+91 91335 33549",
	emails: {
		primary: "info@gstrans.in",
		support: "contact@gstrans.in",
	},
	address: {
		line1: "Khammam, Telangana, India",
		postalCode: "507002",
	},
	mapEmbedUrl:
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.1450156986756!2d80.1605275222368!3d17.251734532283074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3459ea2f85c907%3A0x725ef940f51960e!2sIT%20Hub%20Khammam!5e0!3m2!1sen!2sin!4v1768571611176!5m2!1sen!2sin",
};

export const navItems = [
	{ id: 1, name: "Home", path: "/", icon: "tji-home" },
	{ id: 2, name: "About Us", path: "/about", icon: "tji-user" },
	{ id: 5, name: "Services", path: "/services", icon: "tji-manage" },
	{ id: 10, name: "Pricing", path: "/pricing", icon: "tji-manage" },
	{ id: 11, name: "Track", path: "/track", icon: "tji-manage" },
	{ id: 6, name: "Portfolio", path: "/portfolios", icon: "tji-window" },
	{ id: 7, name: "Careers", path: "/careers", icon: "tji-growth" },
	{ id: 8, name: "Contact", path: "/contact", icon: "tji-phone" },
	{ id: 9, name: "FAQs", path: "/faq", icon: "tji-comment" },
];

export const testimonials = [
	{
		id: 1,
		authorName: "Rajesh Sharma",
		authorDesig: "Sharma Electronics, Khammam",
		img: "/images/testimonial/client-1.webp",
		desc2:
			"GS Trans has transformed our business deliveries. Real-time tracking and reliable service have made our operations so much smoother. Highly recommended!",
	},
	{
		id: 2,
		authorName: "Priya Reddy",
		authorDesig: "HomeGoods Store, Hyderabad",
		img: "/images/testimonial/client-2.webp",
		desc2:
			"Professional, affordable, and always on time. The app is so easy to use and customer support is excellent. We use GS Trans for all our inter-city shipments.",
	},
	{
		id: 3,
		authorName: "Mohammed Ali",
		authorDesig: "Fresh Fruits Wholesale",
		img: "/images/testimonial/client-3.webp",
		desc2:
			"Fast delivery and careful handling. The riders are professional and the pricing is very competitive. GS Trans is our go-to transport partner.",
	},
];

export const services = [
	{
		id: 1,
		slug: "local-cargo-transport",
		title: "Local Cargo Transport",
		shortTitle: "Local Transport",
		valueStatement: "Same-Day Delivery Available",
		titleLarge:
			"Fast and reliable local cargo transport within cities for quick deliveries",
		img: "/images/service/service-1.webp",
		img2: "/images/service/service-2.webp",
		img3: "/images/service/service-6.webp",
		bgImg: "/images/service/service-1.webp",
		iconName: "tji-service-1",
		iconSvg: "/icons/services/same-day-delivery.png",
		desc:
			"Fast and reliable local cargo transport within cities with real-time GPS tracking and verified drivers.",
		shortDesc:
			"Same-day delivery within your city with real-time tracking and multiple vehicle options.",
		desc1:
			"GS Trans provides fast and reliable local cargo transport within your city and surrounding areas. Perfect for businesses and individuals needing quick delivery of goods within the same city or district. Whether you're moving household items, office equipment, or commercial goods, our fleet of verified vehicles ensures safe and timely delivery.",
		desc2:
			"Experience hassle-free same-day delivery with our advanced real-time GPS tracking system. Choose from multiple vehicle types including mini trucks for medium loads, trucks for heavy cargo, and trailers for industrial shipments. All our drivers are verified, trained, and background-checked to ensure the highest safety standards for your valuable goods.",
		desc3:
			"Transparent and affordable pricing starting from just ₹100 for local deliveries. Our distance-based pricing model means you pay exactly what you should — no hidden charges, no surprises. View the exact fare before booking through our customer app, and choose from multiple payment options including cash, UPI, and digital wallets for your convenience.",
		totalProject: "50,000+ Deliveries",
		process: {
			title: "How It Works",
			processItems: [
				"Download the GS Trans customer app and register your account",
				"Enter pickup and drop locations with detailed addresses",
				"Select vehicle type based on your cargo size and requirements",
				"Review transparent pricing and confirm booking with payment",
				"Get assigned a verified rider within minutes of booking",
				"Track your delivery in real-time until successful completion",
			],
		},
	},
	{
		id: 2,
		slug: "inter-city-freight",
		title: "Inter-City Freight",
		shortTitle: "Inter-City",
		valueStatement: "Door-to-Door Service",
		titleLarge:
			"Seamless inter-city freight solutions with secure handling and live tracking",
		img: "/images/service/service-5.webp",
		img2: "/images/service/service-3.webp",
		img3: "/images/service/service-1.webp",
		bgImg: "/images/service/service-5.webp",
		iconName: "tji-service-2",
		iconSvg: "/icons/services/door-to-door-delivery.png",
		desc:
			"Reliable inter-city freight with door-to-door pickup, secure handling, and live shipment tracking.",
		shortDesc:
			"Inter-city freight between major cities with secure handling and end-to-end tracking.",
		desc1:
			"GS Trans offers seamless inter-city freight solutions connecting major cities and towns across multiple regions. Whether you're shipping commercial goods, industrial equipment, or personal belongings, our extensive network ensures reliable door-to-door service. We handle everything from small parcels to full truck loads with professional care and attention.",
		desc2:
			"Experience complete peace of mind with our door-to-door pickup and delivery service. Our team provides secure packaging and careful handling of your goods. Insurance coverage is available for high-value shipments, and our trained logistics staff ensures your cargo remains safe throughout the journey. We use GPS-enabled vehicles for real-time tracking.",
		desc3:
			"Stay informed every step of the way with live shipment tracking and regular status updates. Receive timely notifications via SMS, email, and app alerts so you always know exactly where your cargo is. Our customer support team is available to answer questions and provide estimated delivery times based on real-time transit data.",
		totalProject: "10,000+ Shipments",
		process: {
			title: "Inter-City Process",
			processItems: [
				"Book your inter-city shipment through our app or website",
				"Confirm pickup location, destination, and cargo details",
				"Professional pickup team collects your cargo with proper documentation",
				"Secure packaging, loading, and transit via GPS-tracked vehicles",
				"Monitor live tracking and receive regular status updates",
				"Safe delivery at destination with proof of delivery confirmation",
			],
		},
	},
	{
		id: 3,
		slug: "express-delivery",
		title: "Express Delivery",
		shortTitle: "Express",
		valueStatement: "2–4 Hour Rush",
		titleLarge:
			"Ultra-fast delivery for urgent cargo with priority handling and dedicated riders",
		img: "/images/service/service-6.webp",
		img2: "/images/service/service-4.webp",
		img3: "/images/service/service-7.webp",
		bgImg: "/images/service/service-6.webp",
		iconName: "tji-service-3",
		iconSvg: "/icons/services/2-4-hours-delivery.png",
		desc:
			"Priority handling and dedicated rider assignment for urgent cargo with real-time updates.",
		shortDesc:
			"Urgent cargo delivery with dedicated riders and priority support.",
		desc1:
			"When time is critical, GS Trans Express Delivery ensures your urgent cargo reaches its destination within 2-4 hours. Our express service provides priority handling and dedicated vehicle assignment from pickup to delivery. Perfect for emergency shipments, urgent documents, medical supplies, or time-sensitive business materials that simply cannot wait.",
		desc2:
			"Experience lightning-fast 2-4 hour delivery within city limits with dedicated rider assignment exclusively for your cargo. We provide special handling protocols for fragile items, urgent documents, and high-priority shipments. Our express fleet operates on priority routes with minimal stops, ensuring the fastest possible delivery without compromising safety.",
		desc3:
			"Stay connected with instant real-time updates delivered via SMS, email, and push notifications. Our dedicated priority customer support team is available exclusively for express delivery customers, ready to assist with any urgent concerns. Track your rider's exact location and receive immediate notifications at each milestone from pickup to successful delivery.",
		totalProject: "8,000+ Express Deliveries",
		process: {
			title: "Express Process",
			processItems: [
				"Book express delivery with urgent priority marking",
				"Immediate dedicated rider assignment within minutes",
				"Instant pickup from your location with priority handling",
				"Track your rider in real-time with live GPS updates",
				"Access priority customer support for immediate assistance",
				"Ultra-fast delivery within 2-4 hours with proof of delivery",
			],
		},
	},
	{
		id: 4,
		slug: "business-solutions",
		title: "Business Solutions",
		shortTitle: "Business",
		valueStatement: "Monthly Plans Available",
		titleLarge:
			"Customized logistics solutions for businesses with recurring transport needs",
		img: "/images/service/service-7.webp",
		img2: "/images/service/service-6.webp",
		img3: "/images/service/service-1.webp",
		bgImg: "/images/service/service-7.webp",
		iconName: "tji-service-4",
		iconSvg: "/icons/services/monthly-plans.png",
		desc:
			"Recurring logistics solutions for businesses with subscription plans, billing, reporting, and priority allocation.",
		shortDesc:
			"Business logistics plans with recurring bookings, monthly billing, and dedicated support.",
		desc1:
			"GS Trans Business Solutions provides customized logistics packages tailored to your company's recurring transport needs. Whether you're a retail business, manufacturer, distributor, or service provider, our flexible plans offer volume discounts and dedicated account management. Scale your logistics operations efficiently with our comprehensive business-focused services and predictable monthly costs.",
		desc2:
			"Choose from flexible monthly subscription plans designed for businesses of all sizes. Benefit from consolidated monthly billing, detailed reporting and analytics, priority vehicle allocation for your regular shipments, and dedicated support. Our business dashboard provides complete visibility into your logistics operations with expense tracking, delivery success rates, and performance metrics.",
		desc3:
			"Streamline your operations with our powerful API integration for automated booking and tracking. Perfect for e-commerce platforms, ERP systems, and custom business applications. Access developer documentation, sandbox environment, and technical support to integrate GS Trans seamlessly into your existing workflow. Achieve operational efficiency at scale with automated dispatch and real-time status updates.",
		totalProject: "2,000+ Customers",
		process: {
			title: "Business Setup",
			processItems: [
				"Discuss your business logistics requirements with our team",
				"Choose the subscription plan that fits your volume needs",
				"Set up corporate billing with your preferred payment terms",
				"Access business dashboard with reporting and analytics",
				"Integrate our API for automated bookings (optional)",
				"Start enjoying seamless recurring shipments with priority support",
			],
		},
	},
	{
		id: 5,
		slug: "specialized-item-transport",
		title: "Specialized Item Transport",
		shortTitle: "Specialized Transport",
		valueStatement: "Fragile & Valuable Items",
		titleLarge:
			"Specialized transport for fragile, valuable, and temperature-sensitive items",
		img: "/images/service/service-1.webp",
		img2: "/images/service/service-2.webp",
		img3: "/images/service/service-5.webp",
		bgImg: "/images/service/service-1.webp",
		iconName: "tji-service-5",
		iconSvg: "/icons/services/fragile-valuable-delivery.png",
		desc:
			"Specialized transport for fragile and valuable items with protective packaging and trained handling staff.",
		shortDesc:
			"Safe transport for fragile, valuable, and specialized items with expert handling.",
		desc1:
			"GS Trans Specialized Item Transport provides expert handling for your most precious and delicate cargo. Whether you're transporting fragile electronics, valuable artwork, sensitive medical equipment, heavy machinery, or irreplaceable antiques, our specialized team has the expertise and equipment to ensure safe delivery. We understand that some items require extraordinary care and attention.",
		desc2:
			"Your valuable items receive premium protection with custom protective packaging solutions, specially equipped padded vehicles with suspension systems, and extensively trained handlers who understand proper lifting and securing techniques. Comprehensive insurance coverage is available for high-value shipments, giving you complete peace of mind throughout the transport process.",
		desc3:
			"We accommodate custom handling requirements specific to your items including temperature control, vibration-free transport, and secure mounting. Detailed documentation with photographs is created at both pickup and delivery to verify item condition. Our specialized team conducts thorough pre-transport inspections and uses industry-standard protective materials to ensure your valuable items arrive in perfect condition.",
		totalProject: "5,000+ Specialized Shipments",
		process: {
			title: "Specialized Transport Process",
			processItems: [
				"Comprehensive item inspection with detailed condition documentation",
				"Design custom packaging solution based on item specifications",
				"Arrange appropriate insurance coverage for valuable items",
				"Assign specialized vehicle with proper equipment and padding",
				"Execute protected transport with trained handlers and monitoring",
				"Verify safe delivery with condition check and photo documentation",
			],
		},
	},
	{
		id: 6,
		slug: "last-mile-ecommerce",
		title: "Last-Mile E-Commerce",
		shortTitle: "E-Commerce",
		valueStatement: "E-Commerce Delivery",
		titleLarge:
			"Fast and reliable last-mile delivery solutions for e-commerce businesses",
		img: "/images/service/service-6.webp",
		img2: "/images/service/service-3.webp",
		img3: "/images/service/service-4.webp",
		bgImg: "/images/service/service-6.webp",
		iconName: "tji-service-6",
		iconSvg: "/icons/services/e-commerce-delivery.png",
		desc:
			"Optimized last-mile delivery for e-commerce with batch processing, cost efficiency, and customer satisfaction.",
		shortDesc:
			"E-commerce delivery with batch processing, door-step delivery, and delivery notifications.",
		desc1:
			"GS Trans Last-Mile E-Commerce delivery is specifically designed for online retailers and marketplace sellers handling high-volume orders. Our intelligent route optimization technology ensures maximum efficiency, reducing delivery times and costs. Perfect for e-commerce businesses of all sizes, from startups to established online stores, our scalable solution grows with your business needs.",
		desc2:
			"Process hundreds or thousands of orders efficiently with our advanced batch processing capability. Enjoy cost-efficient pricing structures designed specifically for bulk e-commerce shipments. Your customers receive professional delivery notifications via SMS and email, complete with delivery photos and real-time tracking links, enhancing their shopping experience and reducing customer service inquiries.",
		desc3:
			"Comprehensive returns management support makes reverse logistics hassle-free for both you and your customers. Our system handles failed delivery attempts with multiple retry options and customer communication. Access detailed analytical reports with delivery success rates, average delivery times, customer feedback, and operational insights to optimize your e-commerce fulfillment strategy.",
		totalProject: "20,000+ E-Commerce Deliveries",
		process: {
			title: "E-Commerce Delivery Process",
			processItems: [
				"Import bulk orders via API, CSV upload, or manual entry",
				"Automatic route optimization for maximum delivery efficiency",
				"Smart batch assignment to riders based on zones and capacity",
				"Provide real-time tracking links to your customers automatically",
				"Automated delivery confirmation with photos and digital signatures",
				"Seamless return management with pickup scheduling and tracking",
			],
		},
	},
];

export default {
	services,
	testimonials,
	socials,
	company,
	navItems,
};
