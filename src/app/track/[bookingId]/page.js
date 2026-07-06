import Footer2 from "@/components/layout/footer/Footer2";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import TrackingView from "@/components/sections/tracking/TrackingView";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
	title: "Track Your Shipment",
	description:
		"Track your GS Trans cargo shipment in real-time. Enter your booking ID to see live location, status updates, and estimated delivery time.",
	keywords: ['track shipment', 'cargo tracking', 'booking status', 'live delivery tracking', 'GS Trans shipment tracker'],
};

export default function TrackBooking({ params }) {
	return (
		<div>
			<BackToTop />
			<Header headerType={2} />
			<Header headerType={2} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeroInner title={"Track Shipment"} text={"Live Tracking"} />
						<TrackingView bookingId={params.bookingId} />
					</main>
					<Footer2 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
