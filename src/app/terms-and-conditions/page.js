export const metadata = {
	title: 'Terms & Conditions - GS Trans | Service Agreement',
	description: 'Review the GS Trans terms and conditions governing the use of our goods transport services, bookings, payments, and liability.',
	keywords: ['GS Trans terms', 'transport service agreement', 'booking terms', 'logistics terms and conditions', 'freight service policy'],
	openGraph: {
		title: 'GS Trans Terms & Conditions',
		description: 'Terms and conditions for using GS Trans goods transport services. Understand your rights and responsibilities.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import TermsAndConditionsPrimary from "@/components/sections/registration/TermsAndConditionsPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function TermsAndConditions() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Terms and Conditions"} text={"Terms and Conditions"} />
						<TermsAndConditionsPrimary />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
