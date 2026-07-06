export const metadata = {
	title: 'GS Trans - Smart Transport & Logistics Solutions in India',
	description: 'Book reliable goods transport across India with GS Trans. Local cargo, inter-city freight, express delivery with real-time GPS tracking, transparent pricing, and 24/7 support.',
	keywords: ['goods transport', 'cargo delivery India', 'logistics platform', 'freight services', 'express delivery', 'GPS tracking', 'same-day delivery', 'inter-city freight', 'GS Trans', 'Telangana logistics'],
	openGraph: {
		title: 'GS Trans - Smart Transport & Logistics Solutions in India',
		description: 'Technology-driven cargo transport platform. Book local, inter-city, and express delivery with real-time tracking across 50+ cities in India.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Hero2 from "@/components/sections/hero/Hero2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import dynamic from "next/dynamic";

// Lazy load below-fold sections for better performance
const About2 = dynamic(() => import("@/components/sections/about/About2"), {
	loading: () => <div style={{ minHeight: "400px" }} />,
});
const ServiceApproach = dynamic(() => import("@/components/sections/approach/ServiceApproach"), {
	loading: () => <div style={{ minHeight: "400px" }} />,
});
const ServiceModel = dynamic(() => import("@/components/sections/servicemodel/ServiceModel"), {
	loading: () => <div style={{ minHeight: "300px" }} />,
});
const Services2 = dynamic(() => import("@/components/sections/services/Services2"), {
	loading: () => <div style={{ minHeight: "500px" }} />,
});
const Process = dynamic(() => import("@/components/sections/process/Process"), {
	loading: () => <div style={{ minHeight: "400px" }} />,
});

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<Hero2 />
						<ServiceModel />
						<About2 />
						<ServiceApproach />
						<Services2 />
						<Process />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

