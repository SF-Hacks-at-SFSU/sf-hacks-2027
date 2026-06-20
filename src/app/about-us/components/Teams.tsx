"use client";

import React, { useState } from "react";
import Avatar from "./Avatar";
import type * as aboutUsTypes from "../types";

interface TeamsProps {
	teams: aboutUsTypes.team[];
	members: aboutUsTypes.member[];
}

export default function Teams({ teams, members }: TeamsProps) {
	const [activeTab, updateActiveTab] = useState(0);

	return (
		<div className="w-full">
			{/* Tabs — only show when there are multiple teams */}
			{teams.length > 1 && (
				<div className="flex flex-nowrap overflow-x-auto justify-center gap-2 mb-10 no-scrollbar">
					{teams.map((team, i) => (
						<TeamTab
							teamIndex={i}
							activeIndex={activeTab}
							handleClick={updateActiveTab}
							key={i}
						>
							{team.name}
						</TeamTab>
					))}
				</div>
			)}

			{/* Members grid */}
			<div className="flex flex-wrap justify-center gap-8 md:gap-12">
				{teams[activeTab].memberIndices.map((memberIndex, i) => (
					<Avatar
						member={members[memberIndex]}
						key={i}
					/>
				))}
			</div>
		</div>
	);
}

interface TeamTabProps {
	children: React.ReactNode;
	teamIndex: number;
	activeIndex: number;
	handleClick: (teamindex: number) => void;
}

function TeamTab({
	teamIndex,
	activeIndex,
	handleClick,
	children,
}: TeamTabProps) {
	const isActive = teamIndex === activeIndex;
	return (
		<button
			className={`shrink-0 rounded-full px-5 py-1.5 font-anaheim text-sm md:text-base transition-all duration-200 ${
				isActive
					? "bg-[#FF76FE]/20 text-[#FF76FE] ring-1 ring-[#FF76FE]/50"
					: "text-white/50 hover:text-white/80"
			}`}
			onClick={() => handleClick(teamIndex)}
		>
			{children}
		</button>
	);
}
