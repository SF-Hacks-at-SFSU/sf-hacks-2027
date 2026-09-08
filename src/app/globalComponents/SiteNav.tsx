"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles.css";

const NAV_LINKS = [
	{ label: "About", href: "#about" },
	{ label: "Sponsors", href: "#sponsors" },
	{ label: "FAQs", href: "#faqs" },
];

export default function SiteNav() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		if (pathname !== "/") return;
		const sections = ["home", "about", "sponsors", "faqs"]
			.map((id) => document.getElementById(id))
			.filter((section): section is HTMLElement => Boolean(section));
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible?.target.id) setActiveSection(visible.target.id);
			},
			{ rootMargin: "-18% 0px -58%", threshold: [0, 0.15, 0.35] }
		);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, [pathname]);

	const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

	return (
		<>
			<nav
				className="sf-home-nav"
				aria-label="Primary navigation"
			>
				<a
					href={pathname === "/" ? "#home" : "/#home"}
					className="sf-home-nav__brand"
					aria-label="SF Hacks home"
				>
					<Image
						src="/icon.png"
						alt="SF Hacks"
						width={24}
						height={24}
					/>
					<span>SF&nbsp;Hacks</span>
				</a>

				{/* Desktop links */}
				<div className="sf-home-nav__links">
					{NAV_LINKS.map(({ label, href }) => (
						<a
							key={label}
							href={sectionHref(href)}
							style={
								activeSection === href.slice(1)
									? {
											color: "var(--sf-accent)",
											borderBottom: "1.5px solid var(--sf-accent)",
											paddingBottom: "2px",
										}
									: undefined
							}
						>
							{label}
						</a>
					))}
					<a
						className="sf-home-nav__register"
						href="https://app.sfhacks.io/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Apply
					</a>
				</div>

				{/* Hamburger button (mobile only) */}
				<button
					className="sf-nav-burger"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((v) => !v)}
				>
					<span
						className={`sf-nav-burger__bar${open ? " sf-nav-burger__bar--open" : ""}`}
					/>
				</button>
			</nav>

			{/* Mobile drawer */}
			{open && (
				<div
					className="sf-nav-drawer"
					onClick={() => setOpen(false)}
				>
					<div
						className="sf-nav-drawer__inner"
						onClick={(e) => e.stopPropagation()}
					>
						<a
							href={pathname === "/" ? "#home" : "/#home"}
							className="sf-nav-drawer__brand"
							onClick={() => setOpen(false)}
						>
							<Image
								src="/icon.png"
								alt="SF Hacks"
								width={20}
								height={20}
							/>
							<span>SF&nbsp;Hacks</span>
						</a>
						{NAV_LINKS.map(({ label, href }) => (
							<a
								key={label}
								href={sectionHref(href)}
								className="sf-nav-drawer__link"
								style={
									activeSection === href.slice(1)
										? { color: "var(--sf-accent)" }
										: undefined
								}
								onClick={() => setOpen(false)}
							>
								{label}
							</a>
						))}
						<a
							href="https://app.sfhacks.io/"
							className="sf-nav-drawer__register"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
						>
							Apply
						</a>
					</div>
				</div>
			)}
		</>
	);
}
