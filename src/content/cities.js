// City data for local SEO pages

export const cities = [
	{
		slug: "khammam",
		name: "Khammam",
		state: "Telangana",
		isHQ: true,
		description:
			"GS Trans is headquartered in Khammam and provides the widest coverage of cargo transport services in the district. From local parcel delivery within the city to inter-city freight to Hyderabad, Vijayawada, and beyond.",
		highlights: [
			"Same-day delivery within Khammam city",
			"Dedicated fleet covering all mandals",
			"Warehouse and hub at IT Hub, Khammam",
			"Inter-city routes to Hyderabad, Vijayawada, Warangal",
		],
		popularRoutes: [
			{ from: "Khammam", to: "Hyderabad", distance: "275 km" },
			{ from: "Khammam", to: "Vijayawada", distance: "170 km" },
			{ from: "Khammam", to: "Warangal", distance: "130 km" },
			{ from: "Khammam", to: "Suryapet", distance: "110 km" },
		],
	},
	{
		slug: "hyderabad",
		name: "Hyderabad",
		state: "Telangana",
		isHQ: false,
		description:
			"Ship goods to and from Hyderabad with GS Trans. We cover all major commercial areas including Secunderabad, Kukatpally, Gachibowli, Ameerpet, and surrounding districts with reliable, time-bound deliveries.",
		highlights: [
			"Coverage across all Hyderabad zones",
			"Express delivery for urgent cargo",
			"Regular routes to Khammam, Warangal, Karimnagar",
			"Commercial hub pickups & last-mile delivery",
		],
		popularRoutes: [
			{ from: "Hyderabad", to: "Khammam", distance: "275 km" },
			{ from: "Hyderabad", to: "Warangal", distance: "145 km" },
			{ from: "Hyderabad", to: "Vijayawada", distance: "275 km" },
			{ from: "Hyderabad", to: "Karimnagar", distance: "165 km" },
		],
	},
	{
		slug: "vijayawada",
		name: "Vijayawada",
		state: "Andhra Pradesh",
		isHQ: false,
		description:
			"GS Trans connects Vijayawada to key freight corridors across Andhra Pradesh and Telangana. Whether you need local delivery within Vijayawada or inter-state transport, we have you covered.",
		highlights: [
			"Cross-state routes to Telangana cities",
			"Coverage in Krishna district mandals",
			"Commercial goods and bulk cargo transport",
			"Competitive rates for regular shippers",
		],
		popularRoutes: [
			{ from: "Vijayawada", to: "Hyderabad", distance: "275 km" },
			{ from: "Vijayawada", to: "Khammam", distance: "170 km" },
			{ from: "Vijayawada", to: "Guntur", distance: "35 km" },
			{ from: "Vijayawada", to: "Rajahmundry", distance: "200 km" },
		],
	},
	{
		slug: "warangal",
		name: "Warangal",
		state: "Telangana",
		isHQ: false,
		description:
			"Reliable cargo transport in Warangal and Hanamkonda twin cities. GS Trans provides fast connections to Hyderabad, Khammam, and Karimnagar with competitive rates.",
		highlights: [
			"Twin city coverage: Warangal & Hanamkonda",
			"Regular routes to Hyderabad and Khammam",
			"Agricultural goods transport",
			"Small and medium business delivery solutions",
		],
		popularRoutes: [
			{ from: "Warangal", to: "Hyderabad", distance: "145 km" },
			{ from: "Warangal", to: "Khammam", distance: "130 km" },
			{ from: "Warangal", to: "Karimnagar", distance: "65 km" },
			{ from: "Warangal", to: "Nizamabad", distance: "180 km" },
		],
	},
	{
		slug: "karimnagar",
		name: "Karimnagar",
		state: "Telangana",
		isHQ: false,
		description:
			"GS Trans offers dependable cargo transport services in Karimnagar with excellent connectivity to Hyderabad, Warangal, and other major cities in Telangana.",
		highlights: [
			"Industrial cargo and FMCG transport",
			"Direct connections to Hyderabad",
			"Affordable rates for short-distance deliveries",
			"Growing network in northern Telangana",
		],
		popularRoutes: [
			{ from: "Karimnagar", to: "Hyderabad", distance: "165 km" },
			{ from: "Karimnagar", to: "Warangal", distance: "65 km" },
			{ from: "Karimnagar", to: "Nizamabad", distance: "115 km" },
			{ from: "Karimnagar", to: "Khammam", distance: "185 km" },
		],
	},
	{
		slug: "guntur",
		name: "Guntur",
		state: "Andhra Pradesh",
		isHQ: false,
		description:
			"GS Trans provides goods transport services in Guntur with strong connectivity to Vijayawada, Hyderabad, and other commercial centers in Andhra Pradesh.",
		highlights: [
			"Agricultural produce and bulk transport",
			"Connected to Vijayawada's logistics hub",
			"Competitive rates for AP routes",
			"Last-mile delivery support",
		],
		popularRoutes: [
			{ from: "Guntur", to: "Vijayawada", distance: "35 km" },
			{ from: "Guntur", to: "Hyderabad", distance: "280 km" },
			{ from: "Guntur", to: "Khammam", distance: "200 km" },
			{ from: "Guntur", to: "Ongole", distance: "130 km" },
		],
	},
];
