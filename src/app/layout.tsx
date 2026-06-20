import "./globals.css";
import { MLHBanner } from "./globalComponents/MLHBanner";
import { ReactNode } from "react";
import Navbar from "./globalComponents/NavBar";
// Optional: if you’re using fonts
// import { Anaheim } from "next/font/google";
// const anaheim = Anaheim({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const metadata = {
	title: "SF Hacks 2027",
	description: "Bigger, Better, with more Air Fryers",
	icons: {
		// I honestly don't have a good reason to use ico files here but might as well
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
			{/* Add a global class or font variable if needed */}
			<body
				className="min-h-screen bg-[#030528] text-white antialiased"
				style={
					{
						// 	// backgroundColor: "var(--background-color-solid)",
						// 	backgroundSize: "160px",
						// 	backgroundPosition: "top",
						// 	backgroundImage: `
						// url("${basePath}/img/background-grid.png")`,
					}
				}
			>
				<Navbar></Navbar>
				{children}
				<MLHBanner></MLHBanner>
			</body>
		</html>
	);
}
