import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import CareerDetails1 from "@/components/sections/careers/CareerDetails1";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getCareers from "@/libs/getCareers";
import { notFound } from "next/navigation";
const items = getCareers();

export default async function CareerDetails({ params }) {
	const { slug } = await params;

	const isExistItem = items?.find(({ slug: slug1 }) => slug1 === slug);
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
						<HeroInner title={"Careers Details"} text={"Careers Details"} backgroundImage="/images/bg/services-bg.webp" />
						<CareerDetails1 currentItemSlug={slug} />
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
