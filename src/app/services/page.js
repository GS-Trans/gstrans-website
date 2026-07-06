export const metadata = {
	title: 'Our Services - GS Trans | Cargo Transport & Freight Solutions',
	description: 'Explore GS Trans services: local cargo transport, inter-city freight, express delivery, and custom business logistics solutions across India.',
	keywords: ['cargo transport services', 'freight solutions India', 'express delivery service', 'inter-city freight', 'local cargo transport', 'business logistics', 'GS Trans services'],
	openGraph: {
		title: 'GS Trans Services - Comprehensive Transport Solutions',
		description: 'From local cargo to inter-city freight and express delivery, GS Trans provides end-to-end goods transport services tailored to your business needs.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import ServiceApproach from "@/components/sections/approach/ServiceApproach";
import Contact2 from "@/components/sections/contacts/Contact2";
import HeroInner from "@/components/sections/hero/HeroInner";
import ServiceFeatures from "@/components/sections/services/ServiceFeatures";
import ServicesPrimary from "@/components/sections/services/ServicesPrimary";
import WhyChooseUs from "@/components/sections/services/WhyChooseUs";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Services() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Services"} text={"Services"} backgroundImage="/images/bg/services-bg.webp" />
						<ServicesPrimary />
						<ServiceApproach />
						<ServiceFeatures />
						<WhyChooseUs />
						<Contact2 />

					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

