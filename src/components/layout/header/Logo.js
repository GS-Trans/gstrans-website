"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<div style={{ display: 'flex', alignItems: 'center', gap: '15px', whiteSpace: 'nowrap' }}>
					<Image
						src="/images/logo.png"
						alt="GS Trans Logo"
						width={100}
						height={100}
						style={{ height: 'auto' }}
					/>
					<div style={{ minWidth: 'fit-content' }}>
						<h3 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: '700', color: '#D4AF37', whiteSpace: 'nowrap' }}>
							GS Trans
						</h3>
						<p style={{ margin: '0', fontSize: '11px', color: '#E8C547', fontWeight: '500', whiteSpace: 'nowrap' }}>
							Gamma Smart Trans Pvt Ltd
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Logo;

