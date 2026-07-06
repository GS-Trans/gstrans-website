import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import CityContent from "@/components/sections/cities/CityContent";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { cities } from "@/content/cities";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }) {
	const { city } = await params;
	const cityData = cities.find((c) => c.slug === city);
	if (!cityData) return {};
	return {
		title: `Cargo Transport in ${cityData.name} | Reliable Goods Delivery`,
		description: `Fast and affordable cargo transport services in ${cityData.name}, ${cityData.state}. Same-day local delivery, inter-city freight, and real-time GPS tracking by GS Trans.`,
		keywords: [
			`cargo transport ${cityData.name}`,
			`goods transport ${cityData.name}`,
			`logistics ${cityData.name}`,
			`freight delivery ${cityData.state}`,
			`courier service ${cityData.name}`,
		],
	};
}

export default async function CityPage({ params }) {
	const { city } = await params;
	const cityData = cities.find((c) => c.slug === city);
	if (!cityData) notFound();

	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner
							title={`Transport in ${cityData.name}`}
							text={`${cityData.name} Services`}
						/>
						<CityContent city={cityData} />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
