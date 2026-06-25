/* eslint-disable @next/next/no-img-element */

export function MLHBanner() {
	return (
		<a
			id="mlh-trust-badge"
			style={{
				display: "block",
				maxWidth: "56px",
				minWidth: "44px",
				position: "fixed",
				left: "20px",
				top: 0,
				width: "6%",
				zIndex: 10000,
			}}
			href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=blue"
			target="_blank"
		>
			<img
				src="https://logged-assets.s3.amazonaws.com/trust-badge/2027/mlh-trust-badge-2027-blue.svg"
				alt="Major League Hacking 2026 Hackathon Season"
				style={{ width: "100%" }}
			/>
		</a>
	);
}
