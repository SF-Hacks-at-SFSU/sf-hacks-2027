"use client";

import { usePathname } from "next/navigation";
import Navbar from "./NavBar";

export default function ConditionalNavbar() {
	const pathname = usePathname();
	if (pathname === "/" || pathname === "/about-us" || pathname === "/faqs")
		return null;
	return <Navbar />;
}
