export const metadata = {
	title: 'Careers at GS Trans | Join Our Logistics Team',
	description: 'Join the GS Trans team! Explore career opportunities in logistics, transport operations, technology, and customer support. Build your future with us.',
	keywords: ['logistics jobs India', 'transport careers', 'GS Trans careers', 'freight company jobs', 'delivery driver jobs', 'logistics technology jobs'],
	openGraph: {
		title: 'Careers at GS Trans - Grow With Us',
		description: 'Discover exciting career opportunities at GS Trans. We\'re hiring talented individuals passionate about logistics and innovation.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Careers1 from "@/components/sections/careers/Careers1";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Careers() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Careers"} text={"Careers"} />
						<Careers1 />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

