"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
	{ name: "About Us", href: "/about-us", newTab: false },
	{ name: "Sponsors", href: "/past-sponsors", newTab: false },
	{ name: "FAQs", href: "/faqs", newTab: false },
	{ name: "Judges", href: "https://tally.so/r/GxxKpL", newTab: true },
	{ name: "Mentors", href: "https://tally.so/r/Gx6BMk", newTab: true },
];

const REGISTER_LINK = {
	name: "Register",
	href: "https://app.sfhacks.io/events/sfhacks-2027",
};

function NavLink({
	href,
	children,
	newTab,
	onClick,
	className = "",
}: {
	href: string;
	newTab: boolean;
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
}) {
	const base =
		"transition-colors duration-200 hover:text-purple-200 text-[#FFBD52]";
	if (newTab) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				onClick={onClick}
				className={`${base} ${className}`}
			>
				{children}
			</a>
		);
	}
	return (
		<Link
			href={href}
			onClick={onClick}
			className={`${base} ${className}`}
		>
			{children}
		</Link>
	);
}

function DesktopLinks() {
	return (
		<div className="hidden md:flex w-full justify-center pb-5">
			<div className="pointer-events-auto mx-auto max-w-6xl px-4">
				<div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-2xl px-4 py-2 bg-[#0b0f2e]/75 backdrop-blur-sm shadow-lg ring-1 ring-white/10">
					<Link
						href="/"
						className="flex items-center"
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
							alt="SF Hacks logo"
							width={36}
							height={36}
							className="h-9 w-9 transition-transform duration-150 hover:scale-105"
							priority
						/>
					</Link>

					<div className="flex items-center justify-center">
						<div className="flex items-center gap-5 text-sm md:text-base lg:text-lg font-audiowide">
							{NAV_LINKS.map((link) => (
								<NavLink
									key={link.name}
									href={link.href}
									newTab={link.newTab}
								>
									{link.name}
								</NavLink>
							))}
						</div>
					</div>

					<div className="flex items-center gap-3">
						<a
							href="https://discord.gg/P5PsDR6G7W"
							target="_blank"
							className="hidden md:inline-flex items-center rounded-full bg-[#6FD9FF] text-[#1b1e3f] px-4 py-1 text-sm font-semibold"
						>
							Discord
						</a>
						<a
							href="https://www.instagram.com/sf.hacks/"
							target="_blank"
							className="hidden md:inline-flex"
						>
							<Image
								src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/instagram.svg`}
								alt="instagram icon"
								width={22}
								height={22}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

function MobileNav({
	isOpen,
	onToggle,
}: {
	isOpen: boolean;
	onToggle: () => void;
}) {
	return (
		<>
			{!isOpen && (
				<div className="md:hidden fixed top-2 right-4 z-50">
					<button
						onClick={onToggle}
						aria-label="Open menu"
						className="
              inline-flex items-center justify-center
              rounded-xl p-2.5
              bg-[#0b0f2e]/80 text-[#FFBD52]
              ring-1 ring-white/10 shadow-md backdrop-blur-md
              transition-transform active:scale-95
            "
					>
						<Menu size={22} />
					</button>
				</div>
			)}

			{isOpen && (
				<>
					{/* top-left logo that returns home and closes the menu */}
					<Link
						href="/"
						onClick={onToggle}
						aria-label="Go home"
						className="
              md:hidden fixed top-2 left-4 z-50
              inline-flex items-center justify-center rounded-xl p-1.5
              bg-[#0b0f2e]/80 ring-1 ring-white/10 shadow-md backdrop-blur-md
            "
					>
						<Image
							src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/logo.svg`}
							alt="SF Hacks logo"
							width={28}
							height={28}
							className="h-7 w-7"
						/>
					</Link>

					{/* top-right close button */}
					<button
						onClick={onToggle}
						aria-label="Close menu"
						className="
              md:hidden fixed top-2 right-4 z-50
              inline-flex items-center justify-center rounded-xl p-2.5
              bg-[#0b0f2e]/80 text-[#FFBD52]
              ring-1 ring-white/10 shadow-md backdrop-blur-md
              transition-transform active:scale-95
            "
					>
						<X size={24} />
					</button>
				</>
			)}

			<div
				className={`md:hidden fixed inset-0 z-40 bg-[#0b0f2e]/95 backdrop-blur-sm transition-transform duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="h-12" />

				<div className="flex flex-col items-center justify-center gap-6 h-[calc(100%-3rem)] font-audiowide text-[#FFBD52] text-2xl">
					{NAV_LINKS.map((link) => (
						<NavLink
							key={link.name}
							href={link.href}
							newTab={link.newTab}
							onClick={onToggle}
						>
							{link.name}
						</NavLink>
					))}

					<a
						href={REGISTER_LINK.href}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-2 bg-[#6FD9FF] text-[#43457F] rounded-full font-semibold text-lg active:scale-95"
					>
						{REGISTER_LINK.name}
					</a>

					<div className="flex gap-5 mt-6 items-center">
						<a
							href="https://discord.gg/P5PsDR6G7W"
							target="_blank"
							className="inline-flex"
						>
							<Image
								src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/discord.svg`}
								alt="discord icon"
								width={30}
								height={30}
							/>
						</a>
						<a
							href="https://www.instagram.com/sf.hacks/"
							target="_blank"
							className="inline-flex"
						>
							<Image
								src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icons/instagram.svg`}
								alt="instagram icon"
								width={30}
								height={30}
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-40 w-full py-2">
			<DesktopLinks />
			<MobileNav
				isOpen={isOpen}
				onToggle={() => setIsOpen((p) => !p)}
			/>
		</nav>
	);
}
