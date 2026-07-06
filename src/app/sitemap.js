export const dynamic = 'force-static';

export default function sitemap() {
	const baseUrl = 'https://www.gstrans.in';
	const currentDate = new Date().toISOString();

	// Dynamic route data
	const portfolioIds = [1, 2, 3, 4, 5, 6];
	const careerSlugs = [
		'ai-ml-engineer', 'android-developer', 'ios-developer',
		'data-scientist', 'data-engineer', 'full-stack-developer',
		'devops-engineer', 'marketing-executive', 'product-manager-logistics-tech',
		'ui-ux-designer', 'backend-developer-nodejs-python', 'quality-assurance-engineer',
	];
	const teamIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services/local-cargo-transport`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/inter-city-freight`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/express-delivery`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/business-solutions`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/specialized-item-transport`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/last-mile-ecommerce`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/portfolios`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/careers`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/team`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/history`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/faq`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/terms-and-conditions`,
			lastModified: currentDate,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
		{
			url: `${baseUrl}/estimate`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/track`,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/pricing`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/download`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/cities`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/cities/khammam`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/cities/hyderabad`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/cities/vijayawada`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/cities/warangal`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/cities/karimnagar`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		{
			url: `${baseUrl}/cities/guntur`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		},
		// Portfolio detail pages
		...portfolioIds.map((id) => ({
			url: `${baseUrl}/portfolios/${id}`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		})),
		// Career detail pages
		...careerSlugs.map((slug) => ({
			url: `${baseUrl}/careers/${slug}`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6,
		})),
		// Team member pages
		...teamIds.map((id) => ({
			url: `${baseUrl}/team/${id}`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.5,
		})),
	];
}
