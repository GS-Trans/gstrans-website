export const metadata = {
	title: 'Our Team - GS Trans | Meet the People Behind Our Success',
	description: 'Meet the dedicated GS Trans team driving innovation in goods transport. Our experienced professionals ensure reliable logistics across India.',
	keywords: ['GS Trans team', 'logistics professionals', 'transport company team', 'GS Trans leadership', 'freight company staff'],
	openGraph: {
		title: 'Meet the GS Trans Team',
		description: 'The people behind GS Trans — a passionate team committed to delivering smart, reliable, and affordable logistics solutions.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import Team1 from "@/components/sections/teams/Team1";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Team() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Team"} text={"Team"} />
						<Team1 type={2} />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

