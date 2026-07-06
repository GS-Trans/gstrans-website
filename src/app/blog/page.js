import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import BlogList from "@/components/sections/blog/BlogList";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Blog | Logistics & Transport Insights",
	description:
		"Stay updated with the latest news, tips, and insights on goods transport, logistics technology, and the Indian shipping industry from GS Trans.",
	keywords: [
		"transport blog",
		"logistics insights India",
		"cargo shipping tips",
		"freight industry news",
		"GS Trans updates",
	],
};

export default function Blog() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Blog"} text={"Insights & Updates"} />
						<BlogList />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
