import "./globals.css";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { ReactNode } from "react";
import type { Metadata } from "next";
import ConditionalNavbar from "./globalComponents/ConditionalNavbar";
import { Analytics } from "@vercel/analytics/next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const socialPreview = "https://www.sfhacks.io/logo-horizontal.png?v=2027";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.sfhacks.io"),
	title: "SF Hacks 2027",
	description:
		"SF Hacks 2027 — San Francisco State University's student-run hackathon.",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://www.sfhacks.io",
		siteName: "SF Hacks",
		title: "SF Hacks 2027",
		description:
			"Join student builders at San Francisco State University for SF Hacks 2027.",
		images: [
			{
				url: socialPreview,
				width: 6279,
				height: 1718,
				alt: "SF Hacks logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "SF Hacks 2027",
		description:
			"Join student builders at San Francisco State University for SF Hacks 2027.",
		images: [socialPreview],
	},
	icons: {
		icon: `${basePath}/favicon.ico`,
		shortcut: `${basePath}/favicon.ico`,
		apple: `${basePath}/icon.png`,
		other: {
			rel: `${basePath}apple-touch-icon-precomposed`,
			url: `${basePath}/icon.png`,
		},
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link
					href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&family=Archivo:wght@400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="min-h-screen antialiased">
				<ConditionalNavbar />
				{children}
				<MLHBanner />
				<Analytics />
			</body>
		</html>
	);
}
