export const metadata = {
	title: 'Our Portfolio - GS Trans | Successful Deliveries & Projects',
	description: 'Browse the GS Trans portfolio showcasing successful deliveries, key business partnerships, and large-scale logistics projects across India.',
	keywords: ['GS Trans portfolio', 'logistics projects', 'successful deliveries', 'transport case studies', 'freight solutions showcase'],
	openGraph: {
		title: 'GS Trans Portfolio - Our Work',
		description: 'Explore our track record of successful deliveries and logistics projects across multiple cities in India.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import PortfoliosPrimary from "@/components/sections/portfolios/PortfoliosPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Portfolios() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Portfolio"} text={"Portfolio"} backgroundImage="/images/bg/portfolio-bg.webp" />
						<PortfoliosPrimary />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

