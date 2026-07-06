import Image from "next/image";
import Link from "next/link";
import PopupVideo from "../popup-video/PopupVideo";

const HeroCard = ({ item, idx }) => {
	const {
		id,
		slug,
		title,
		img = "/images/hero/h6-hero-cart-1.webp",
		videoUrl = "https://youtu.be/gXFATcwrO-U",
	} = item || {};
	const href = `/services/${slug || id}`;

	return (
		<div className="h6-hero-card">
			<div className="h6-hero-card-banner">
				<Image src={img} alt={title || 'Service hero'} width={600} height={400} style={{ height: 'auto', width: '100%' }} />
				<PopupVideo>
					<Link
						className="h6-hero-card-video video-popup glightbox"
						href={videoUrl}
						data-autoplay="true"
						data-vbtype="video"
					>
						<i className="tji-play"></i>
					</Link>
				</PopupVideo>
			</div>
			<div className="h6-hero-card-content">
				<h5 className="h6-hero-card-title">
					<Link href={href}>{title}</Link>
				</h5>
			</div>
		</div>
	);
};

export default HeroCard;

