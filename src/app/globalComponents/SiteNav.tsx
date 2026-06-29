"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles.css";

const NAV_LINKS = [
	{ label: "About", href: "/about-us" },
	{ label: "Sponsors", href: "/sponsors" },
	{ label: "FAQs", href: "/faqs" },
];

export default function SiteNav() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<>
			<nav
				className="sf-home-nav"
				aria-label="Primary navigation"
			>
				<Link
					href="/"
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
				</Link>

				{/* Desktop links */}
				<div className="sf-home-nav__links">
					{NAV_LINKS.map(({ label, href }) => (
						<Link
							key={label}
							href={href}
							style={
								pathname === href
									? {
											color: "var(--sf-accent)",
											borderBottom: "1.5px solid var(--sf-accent)",
											paddingBottom: "2px",
										}
									: undefined
							}
						>
							{label}
						</Link>
					))}
					<a
						className="sf-home-nav__register"
						href="https://tally.so/r/RG2rP4"
						target="_blank"
						rel="noopener noreferrer"
					>
						Get Notified
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
						<Link
							href="/"
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
						</Link>
						{NAV_LINKS.map(({ label, href }) => (
							<Link
								key={label}
								href={href}
								className="sf-nav-drawer__link"
								style={
									pathname === href ? { color: "var(--sf-accent)" } : undefined
								}
								onClick={() => setOpen(false)}
							>
								{label}
							</Link>
						))}
						<a
							href="https://tally.so/r/RG2rP4"
							className="sf-nav-drawer__register"
							target="_blank"
							rel="noopener noreferrer"
							onClick={() => setOpen(false)}
						>
							Get Notified
						</a>
					</div>
				</div>
			)}
		</>
	);
}
