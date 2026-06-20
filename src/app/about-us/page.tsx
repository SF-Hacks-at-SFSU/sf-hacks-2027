import React from "react";
import Image from "next/image";
import Teams from "./components/Teams";

import type * as aboutUsTypes from "./types";

const members: aboutUsTypes.member[] = [
	{
		name: "Josue",
		img: "/team/josue.png",
	},
	{
		name: "Bahara",
		img: "/team/bahara.png",
		link: "https://www.linkedin.com/in/bahara-mehry-517510300/",
	},
	{
		name: "Dev",
		img: "/team/dev.png",
		link: "https://www.linkedin.com/in/gohildev/",
	},
	{
		name: "Louella",
		img: "/team/louella.jpg",
		link: "https://www.linkedin.com/in/louella-mortel-04b24a309",
	},
	{
		name: "Hillary",
		img: "/team/hillary.jpg",
		link: "https://www.linkedin.com/in/hilarylui17/",
	},
	{
		name: "Ria",
		img: "/team/ria.jpg",
		link: "https://www.linkedin.com/in/ria-thakker/",
	},
	{
		name: "Hemasri",
		img: "/team/hemasri.jpg",
		link: "https://www.linkedin.com/in/hemasri-bavisetty-43a370169",
	},
	{
		name: "Vireak",
		img: "/team/v.jpg",
		link: "https://www.linkedin.com/in/vireak-ny/",
	},
	{
		name: "Gavin",
		img: "/team/gavin.jpg",
		link: "https://www.linkedin.com/in/gavinwren",
	},
	{
		name: "Grishma",
		img: "/team/grishma.jpg",
		link: "https://www.linkedin.com/in/gthumar/",
	},
	{
		name: "John",
		img: "/team/john.jpg",
		link: "https://www.linkedin.com/in/johnmikkovelasquez",
	},
	{
		name: "Said",
		img: "/team/said.jpeg",
		link: "https://www.linkedin.com/in/saidmasbahullahsf/",
	},
	{
		name: "Kareem",
		img: "/team/kareem.jpeg",
		link: "https://www.linkedin.com/in/kareem-amin",
	},
	{
		name: "Cecil",
		img: "/team/cecil.JPEG",
		link: "https://www.linkedin.com/in/cecilemanuelle",
	},
	{
		name: "Hiro",
		img: "/team/hiro.jpg",
		link: "https://www.linkedin.com/in/hiro-design",
	},
	{
		name: "Akim",
		img: "/team/akim.jpg",
		link: "https://www.linkedin.com/in/akim-tarasov-2b1072298/",
	},
	{
		name: "Om",
		img: "/team/om.jpeg",
		link: "https://www.linkedin.com/in/om-pandya-9a5014272",
	},
	{
		name: "Krrish",
		img: "/team/Krrish.jpeg",
		link: "http://linkedin.com/in/krrish-puri-2b2827332",
	},
	{ name: "Kunj", img: "/team/gator.jpeg" },
	{
		name: "Rohith",
		img: "/team/rohith.jpeg",
		link: "https://www.linkedin.com/in/gannoju-rohith/",
	},
	{
		name: "Tin",
		img: "/team/tin.jpg",
		link: "https://www.linkedin.com/in/tin-ngo-30a994309/",
	},
	{
		name: "Aaryan",
		img: "/team/aaryan.jpeg",
		link: "https://www.linkedin.com/in/aaryan-sehgal-5b8b13327",
	},
	{
		name: "Palak",
		img: "/team/palak.jpeg",
		link: "https://www.linkedin.com/in/palak-ardak-137065321",
	},
	{
		name: "Sophia",
		img: "/team/sophia.jpg",
		link: "https://www.linkedin.com/in/sophia-lee-e",
	},
	{
		name: "Jim",
		img: "/team/jim.jpg",
		link: "https://www.linkedin.com/in/ymc9298",
	},
	{
		name: "Arpan",
		img: "/team/Arpan.jpg",
		link: "https://www.linkedin.com/in/arpan-savani-0923b8292/",
	},
	{
		name: "Atiksha",
		img: "/team/Atiksha.jpeg",
		link: "https://www.linkedin.com/in/atiksha-antil-1677142b0",
	},
];

enum membersEnum {
	Josue,
	Bahara,
	Dev,
	Louella,
	Hillary,
	Ria,
	Hemasri,
	Vireak,
	Gavin,
	Grishma,
	John,
	Said,
	Kareem,
	Cecil,
	Hiro,
	Akim,
	Om,
	Krrish,
	Kunj,
	Rohith,
	Tin,
	Aaryan,
	Palak,
	Sophia,
	Jim,
	Arpan,
	Atiksha,
}

const teams: aboutUsTypes.team[] = [
	{
		name: "Executive",
		memberIndices: [membersEnum.Josue, membersEnum.Bahara, membersEnum.Dev],
	},
];

export default function Page() {
	return (
		<main className="w-full">
			{/* Hero image — full width with gradient fade */}
			<div className="relative w-full h-[320px] md:h-[420px] lg:h-[480px]">
				<Image
					src="/team/sfhacks_team.jpg"
					alt="SF Hacks Team"
					fill
					sizes="100vw"
					className="object-cover object-top"
					priority
				/>
				{/* gradient fades into page background */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#171324]" />
			</div>

			{/* Content — floats below the faded image */}
			<div className="mx-auto w-full max-w-4xl px-6 md:px-8 -mt-16 md:-mt-24 relative z-10">
				{/* Title */}
				<h1 className="text-center font-audiowide text-3xl md:text-4xl text-[#FFBD52] drop-shadow-[0_0_20px_rgba(255,189,82,0.4)]">
					About Us
				</h1>

				{/* Description */}
				<p className="mt-5 text-center text-[#E6E7FF]/70 leading-7 text-base md:text-lg max-w-2xl mx-auto">
					SF Hacks is more than just an event — we&apos;re a team of passionate
					individuals dedicated to hosting San Francisco State&apos;s premier
					hackathon. Our team spans logistics, design, tech, social engagement,
					marketing, and outreach.
				</p>

				{/* Divider */}
				<div className="mt-10 flex items-center gap-4">
					<div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
					<span className="font-anaheim text-[#FF76FE] text-sm tracking-widest uppercase">
						Executive Team
					</span>
					<div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
				</div>

				{/* Team members */}
				<section className="mt-10 pb-16">
					<Teams
						teams={teams}
						members={members}
					/>
				</section>
			</div>
		</main>
	);
}
