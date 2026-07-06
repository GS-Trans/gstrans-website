import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React from "react";
const HeroInner = ({ title, text, breadcrums = [], backgroundImage = '/images/bg/pheader-bg.webp', backgroundVideo = null }) => {
	return (
		<section
			className="tj-page-header"
			style={!backgroundVideo ? { backgroundImage: `url('${backgroundImage}')` } : {}}
		>
			{backgroundVideo && (
				<video
					className="hero-video-background"
					autoPlay
					muted
					loop
					playsInline
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						objectFit: 'cover',
						zIndex: 0,
					}}
				>
					<source src={backgroundVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
			<div className="container" style={backgroundVideo ? { position: 'relative', zIndex: 2 } : {}}>
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{title}</h1>
							<div className="tj-page-link">
								<span>
									<i className="tji-home"></i>
								</span>
								<span>
									<Link href="/">Home</Link>
								</span>
								<span>
									<i className="tji-arrow-right"></i>
								</span>
								{breadcrums?.length
									? breadcrums?.map(({ name, path }, idx) => (
											<React.Fragment key={idx}>
												<span>
													<Link href={path ? path : "/"}>{name}</Link>
												</span>
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</React.Fragment>
									  ))
									: ""}
								<span>
									<span>{sliceText(text, 28, true)}</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{!backgroundVideo && (
				<div
					className="page-header-overlay"
					style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
				></div>
			)}
			{backgroundVideo && (
				<div
					className="page-header-overlay"
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						backgroundColor: 'rgba(0, 0, 0, 0.4)',
						zIndex: 1,
					}}
				></div>
			)}
		</section>
	);
};

export default HeroInner;

