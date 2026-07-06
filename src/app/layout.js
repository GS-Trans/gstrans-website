import { Mona_Sans } from "next/font/google";
import "react-range-slider-input/dist/style.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome-pro.min.css";
import "./assets/css/glightbox.min.css";
import "./assets/css/gstrans-icons.css";
import "./assets/css/meanmenu.css";
import "./assets/css/nice-select2.css";
import "./assets/css/odometer-theme-default.css";
import "./globals.scss";

// SEO and Analytics Components
import GoogleAnalytics from "@/components/shared/analytics/GoogleAnalytics";
import StructuredData from "@/components/shared/seo/StructuredData";

const bodyFont = Mona_Sans({
	variable: "--tj-ff-body",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});
const headingFont = Mona_Sans({
	variable: "--tj-ff-heading",
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	style: ["normal", "italic"],
	display: "swap",
});

export const metadata = {
	title: {
		default: "GS Trans - Smart Transport & Logistics Solutions in India",
		template: "%s | GS Trans"
	},
	description: "Gamma Smart Trans Pvt Ltd offers technology-driven cargo transport, inter-city freight, express delivery, and business logistics solutions across India with real-time GPS tracking and 24/7 support.",
	keywords: ["logistics", "cargo transport", "freight services", "express delivery", "same-day delivery", "inter-city freight", "GPS tracking", "business logistics", "India transport", "Telangana logistics", "Andhra Pradesh transport", "e-commerce delivery", "last-mile delivery"],
	authors: [{ name: "Gamma Smart Trans Pvt Ltd" }],
	creator: "Gamma Smart Trans Pvt Ltd",
	publisher: "Gamma Smart Trans Pvt Ltd",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	metadataBase: new URL('https://www.gstrans.in'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		title: "GS Trans - Smart Transport & Logistics Solutions",
		description: "Technology-driven cargo transport and logistics platform providing seamless delivery across India with real-time tracking.",
		url: 'https://www.gstrans.in',
		siteName: 'GS Trans',
		images: [
			{
				url: '/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'GS Trans - Smart Logistics Solutions',
			},
		],
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: "GS Trans - Smart Transport & Logistics Solutions",
		description: "Technology-driven cargo transport and logistics across India with real-time GPS tracking.",
		images: ['/images/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		// Add verification codes when available:
		// google: 'actual-verification-code',
		// bing: 'actual-bing-code',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-scroll-behavior="smooth" dir="ltr">
			<head>
				<StructuredData />
				<GoogleAnalytics measurementId="G-BB5TKMLHMM" />
				{/* Add MetaPixel when you have a real Pixel ID:
				<MetaPixel pixelId="REAL_PIXEL_ID" /> */}
			</head>
			<body className={`${bodyFont.variable} ${headingFont.variable}`}>
				{children}
			</body>
		</html>
	);
}

