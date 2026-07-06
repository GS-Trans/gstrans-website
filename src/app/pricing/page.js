import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import RateCard from "@/components/sections/pricing/RateCard";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Pricing | Transparent Transport Rates",
	description:
		"View GS Trans cargo transport rates. Transparent pricing with no hidden fees. Rates vary by vehicle type, distance, and weight. Get an instant estimate.",
	keywords: [
		"transport rates India",
		"cargo pricing",
		"logistics cost per km",
		"freight charges",
		"GS Trans pricing",
		"delivery charges Telangana",
	],
};

export default function Pricing() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Pricing"} text={"Our Rates"} />
						<RateCard />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
