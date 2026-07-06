import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import FareCalculator from "@/components/sections/estimate/FareCalculator";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Fare Estimate | Get Instant Transport Quotes",
	description:
		"Calculate your cargo transport fare instantly. Enter pickup & drop locations, weight, and vehicle type to get a transparent price estimate from GS Trans.",
	keywords: [
		"transport fare calculator",
		"cargo cost estimate",
		"logistics pricing",
		"freight cost calculator",
		"GS Trans pricing",
	],
};

export default function Estimate() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Fare Estimate"} text={"Get Instant Quote"} />
						<FareCalculator />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
