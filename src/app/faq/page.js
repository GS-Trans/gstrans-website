export const metadata = {
	title: 'FAQs - GS Trans | Frequently Asked Questions',
	description: 'Find answers to common questions about GS Trans services, pricing, booking process, delivery timelines, and more.',
	keywords: ['GS Trans FAQ', 'transport questions', 'cargo booking help', 'delivery timeline', 'freight pricing FAQ', 'logistics support'],
	openGraph: {
		title: 'GS Trans FAQs - Your Questions Answered',
		description: 'Get quick answers about GS Trans goods transport services, how to book, pricing details, and delivery timelines.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Faq() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>

						<HeroInner title={"Faq"} text={"Faq"} />
						<Faq2 type={4} />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

