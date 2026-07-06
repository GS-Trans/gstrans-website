export const metadata = {
	title: 'Privacy Policy - GS Trans | Data Protection & Privacy',
	description: 'Read the GS Trans privacy policy to understand how we collect, use, and protect your personal information when using our transport services.',
	keywords: ['GS Trans privacy policy', 'data protection', 'user privacy', 'transport service privacy', 'personal data policy'],
	openGraph: {
		title: 'GS Trans Privacy Policy',
		description: 'Our commitment to protecting your privacy and personal data. Read the full GS Trans privacy policy.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import PrivacyPolicyPrimary from "@/components/sections/registration/PrivacyPolicyPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function PrivacyPolicy() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Privacy Policy"} text={"Privacy Policy"} />
						<PrivacyPolicyPrimary />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
