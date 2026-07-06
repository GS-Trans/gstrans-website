export default function StructuredData() {
	const organizationSchema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Gamma Smart Trans Pvt Ltd",
		"alternateName": "GS Trans",
		"url": "https://www.gstrans.in",
		"logo": "https://www.gstrans.in/images/logo.png",
		"description": "Technology-driven cargo transport and logistics platform providing seamless delivery across India with real-time GPS tracking and 24/7 customer support.",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "IT Hub, Wyra Road, Balaji Nagar",
			"addressLocality": "Khammam",
			"addressRegion": "Telangana",
			"postalCode": "507002",
			"addressCountry": "IN"
		},
		"contactPoint": {
			"@type": "ContactPoint",
			"telephone": "+91-9133533549",
			"contactType": "customer service",
			"availableLanguage": ["en", "hi", "te"],
			"areaServed": "IN"
		},
		"sameAs": [
			"https://www.facebook.com/gstrans",
			"https://www.linkedin.com/company/gstrans",
			"https://twitter.com/gstrans",
			"https://www.instagram.com/gstrans"
		]
	};

	const localBusinessSchema = {
		"@context": "https://schema.org",
		"@type": "LocalBusiness",
		"name": "Gamma Smart Trans Pvt Ltd",
		"image": "https://www.gstrans.in/images/logo.png",
		"@id": "https://www.gstrans.in",
		"url": "https://www.gstrans.in",
		"telephone": "+91-8332969369",
		"priceRange": "$$",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "IT Hub, Wyra Road, Balaji Nagar",
			"addressLocality": "Khammam",
			"addressRegion": "Telangana",
			"postalCode": "507002",
			"addressCountry": "IN"
		},
		"geo": {
			"@type": "GeoCoordinates",
			"latitude": 17.2517345,
			"longitude": 80.1605275
		},
		"openingHoursSpecification": {
			"@type": "OpeningHoursSpecification",
			"dayOfWeek": [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
				"Sunday"
			],
			"opens": "00:00",
			"closes": "23:59"
		}
	};

	const serviceSchema = {
		"@context": "https://schema.org",
		"@type": "Service",
		"serviceType": "Logistics and Transportation",
		"provider": {
			"@type": "Organization",
			"name": "Gamma Smart Trans Pvt Ltd"
		},
		"areaServed": {
			"@type": "Country",
			"name": "India"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Logistics Services",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Local Cargo Transport",
						"description": "Same-day delivery with real-time GPS tracking"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Inter-City Freight",
						"description": "Next-day delivery across cities"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Express Delivery",
						"description": "2-4 hour rush delivery service"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Business Solutions",
						"description": "Customized logistics plans with API integration"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Specialized Transport",
						"description": "Fragile and valuable item delivery"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "E-Commerce Logistics",
						"description": "Last-mile delivery for bulk orders"
					}
				}
			]
		}
	};

	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		"mainEntity": [
			{
				"@type": "Question",
				"name": "What logistics services does GS Trans offer?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "GS Trans provides comprehensive transport solutions including local cargo delivery, inter-city freight, express delivery services, and customized business logistics plans. We serve 50+ cities across India with real-time GPS tracking and 24/7 customer support."
				}
			},
			{
				"@type": "Question",
				"name": "How do I track my shipment?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Track your shipment anytime through our mobile app or website using your unique tracking ID. Our advanced GPS system provides live location updates, estimated arrival time, and delivery status notifications."
				}
			},
			{
				"@type": "Question",
				"name": "What areas do you deliver to?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "GS Trans operates across major cities and towns in India. We offer local, inter-city, and long-distance freight services with optimized route planning for faster delivery. Contact us to verify coverage for your specific pickup and delivery locations."
				}
			},
			{
				"@type": "Question",
				"name": "How can I get a quote for transport services?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Get an instant quote through our website contact form or call us directly. Provide details about pickup location, delivery destination, cargo type, weight, and dimensions for accurate pricing."
				}
			},
			{
				"@type": "Question",
				"name": "Do you offer business partnerships or franchise opportunities?",
				"acceptedAnswer": {
					"@type": "Answer",
					"text": "Yes! GS Trans welcomes franchise and dealership inquiries. We provide comprehensive support, training, and resources to help you establish a successful logistics business in your area."
				}
			}
		]
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>
		</>
	);
}
