import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import CityList from "@/components/sections/cities/CityList";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Service Areas | Cities We Serve",
	description:
		"GS Trans operates cargo transport services across Telangana and Andhra Pradesh. Find our service areas including Khammam, Hyderabad, Vijayawada, Warangal, and more.",
	keywords: [
		"GS Trans service areas",
		"cargo transport cities",
		"Telangana logistics",
		"Andhra Pradesh transport",
		"goods delivery cities India",
	],
};

export default function Cities() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Service Areas"} text={"Cities We Serve"} />
						<CityList />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
