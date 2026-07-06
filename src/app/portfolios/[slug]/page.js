import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import PortfolioDetailsMain from "@/components/layout/main/PortfolioDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getPortfolio from "@/libs/getPortfolio";
import { notFound } from "next/navigation";
const items = getPortfolio();

export default async function PortfolioDetails({ params }) {
	const { slug } = await params;

	const isExistItem = items?.find(({ slug: itemSlug }) => itemSlug === slug);
	if (!isExistItem) {
		notFound();
	}
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<PortfolioDetailsMain currentItemSlug={slug} />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
export async function generateStaticParams() {
	return items?.map(({ slug }) => ({ slug }));
}
