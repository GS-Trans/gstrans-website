export const metadata = {
	title: 'About Us - GS Trans | Trusted Goods Transport in India',
	description: 'Learn about Gamma Smart Trans Pvt Ltd — our mission, values, and commitment to providing reliable, affordable goods transport services across India.',
	keywords: ['about GS Trans', 'Gamma Smart Trans', 'logistics company India', 'transport company Telangana', 'goods transport mission', 'freight company history'],
	openGraph: {
		title: 'About GS Trans - Smart Logistics Powering India',
		description: 'Discover how GS Trans is revolutionizing goods transport with on-ground support, transparent pricing, and technology-driven logistics solutions.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import Features from "@/components/sections/features/Features";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function About() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"About Us"} text={"About Us"} />
						<Features type={2} />
						<About3 type={2} />

						<Faq2 type={3} />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
