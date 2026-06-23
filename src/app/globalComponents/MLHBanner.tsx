/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";

export function MLHBanner() {
	const pathname = usePathname();

	if (
		pathname === "/" ||
		pathname === "/about-us" ||
		pathname === "/faqs" ||
		pathname === "/sponsors"
	)
		return null;

	return (
		<a
			id="mlh-trust-badge"
			style={{
				display: "block",
				maxWidth: "60px",
				minWidth: "40px",
				position: "absolute",
				left: "30px",
				top: 0,
				width: "10%",
				// zIndex: 10000,
			}}
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
			target="_blank"
		>
			<img
				src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
				alt="Major League Hacking 2026 Hackathon Season"
				style={{ width: "100%" }}
			/>
		</a>
	);
}
