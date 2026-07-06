import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import ServiceDetailsMain from "@/components/layout/main/ServiceDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import getALlServices from "@/libs/getALlServices";
import { notFound } from "next/navigation";
const items = getALlServices();

export default async function ServiceDetails({ params }) {
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
						<ServiceDetailsMain currentItemSlug={slug} />
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
	return items?.map(({ slug }) => ({ slug: slug }));
}
