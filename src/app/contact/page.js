export const metadata = {
	title: 'Contact Us - GS Trans | Get in Touch for Transport Services',
	description: 'Contact GS Trans for goods transport inquiries, booking support, or business partnerships. Reach us by phone, email, or visit our Khammam office.',
	keywords: ['contact GS Trans', 'transport inquiry', 'logistics support', 'Khammam office', 'cargo booking help', 'GS Trans phone number'],
	openGraph: {
		title: 'Contact GS Trans - We\'re Here to Help',
		description: 'Get in touch with GS Trans for reliable goods transport services. Call +91 9133533549 or email info@gstrans.in.',
	},
};

import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import Contact3 from "@/components/sections/contacts/Contact3";
import ContactTop from "@/components/sections/contacts/ContactTop";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function Contact() {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Contact Us"} text={"Contact Us"} />
						<ContactTop />
						<Contact3 />
						<Cta />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}

