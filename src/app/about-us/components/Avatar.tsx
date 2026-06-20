import Image from "next/image";
import React from "react";
import type * as aboutUsTypes from "../types";

interface AvatarProps {
	member: aboutUsTypes.member;
}

export default function Avatar({ member }: AvatarProps) {
	if (!member) {
		console.warn("Avatar rendered without valid member data");
		return null;
	}

	const imgSrc = member.img.startsWith("http")
		? member.img
		: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${member.img}`;

	const href = member.link
		? member.link.startsWith("http")
			? member.link
			: `https://${member.link}`
		: undefined;

	const content = (
		<div className="flex flex-col items-center gap-2.5 group">
			<div className="relative w-28 h-28 md:w-42 md:h-42 rounded-full overflow-hidden ring-2 ring-white/10 transition-all duration-300 group-hover:ring-[#FF76FE]/60 group-hover:shadow-[0_0_20px_rgba(255,118,254,0.3)]">
				<Image
					src={imgSrc}
					alt={member.name}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-105"
					sizes="(max-width: 640px) 7rem, 8rem"
					loading="lazy"
				/>
			</div>
			<span className="font-anaheim text-sm md:text-[15px] tracking-wide text-[#E6E7FF]/80 group-hover:text-white transition-colors duration-200">
				{member.name}
			</span>
		</div>
	);

	return href ? (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="no-underline hover:no-underline"
		>
			{content}
		</a>
	) : (
		content
	);
}
