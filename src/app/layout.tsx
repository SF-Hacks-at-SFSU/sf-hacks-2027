import "./globals.css";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { ReactNode } from "react";
import ConditionalNavbar from "./globalComponents/ConditionalNavbar";
import { Analytics } from "@vercel/analytics/next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata = {
	title: "SF Hacks 2027",
	description: "Bigger, Better, with more Air Fryers",
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
