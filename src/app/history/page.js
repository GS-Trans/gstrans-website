export const metadata = {
	title: 'Our History - GS Trans | The Journey of Smart Logistics',
	description: 'Explore the GS Trans journey from inception to becoming a trusted name in goods transport across India. Our milestones and growth story.',
	keywords: ['GS Trans history', 'logistics company journey', 'transport company milestones', 'Gamma Smart Trans story', 'freight company growth'],
	openGraph: {
		title: 'GS Trans History - Our Journey',
		description: 'From humble beginnings to a network spanning multiple cities — discover the GS Trans growth story.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import About12 from "@/components/sections/about/About12";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import History1 from "@/components/sections/history/History1";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function History() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>

						<HeroInner title={"Company History"} text={"Company History"} />
						<About12 />
						<History1 />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

