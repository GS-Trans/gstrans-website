import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import AppDownload from "@/components/sections/download/AppDownload";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Download App | GS Trans Mobile App",
	description:
		"Download the GS Trans app for Android and iOS. Book cargo transport, track shipments in real-time, and manage your deliveries on the go.",
	keywords: [
		"GS Trans app download",
		"cargo transport app",
		"logistics app",
		"shipment tracking app",
		"delivery app India",
	],
};

export default function Download() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Download App"} text={"Get the App"} />
						<AppDownload />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
