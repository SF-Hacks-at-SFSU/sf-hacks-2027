"use client";

import React, { useState } from "react";
import SiteNav from "../globalComponents/SiteNav";

const ACCENT = "#C0362C";
const SKY_TOP = "#F2F0EA";
const SKY_MID = "#E6EAE9";
const SKY_BOTTOM = "#D8DFDE";

const FAQ_DATA: [string, string][] = [
	[
		"What is a hackathon?",
		"A hackathon is a time-bound build sprint — at SF Hacks, you'll have about 36 hours to form a team, dream up a project, and build it from scratch. It's part learning, part building, and part community, ending with demos to our judges.",
	],
	[
		"I have no prior hacking experience — can I still participate?",
		"Absolutely. SF Hacks is beginner-friendly and a huge share of our hackers are first-timers. Mentors, beginner workshops, and starter resources are all there to help you ship your very first project.",
	],
	[
		"Who can attend, and do I have to know how to code?",
		"All students are welcome, from high school through university. You don't need to be a coder — designers, writers, product thinkers, and first-timers all have a place on a team.",
	],
	[
		"Are there travel reimbursements?",
		"We offer limited travel reimbursements for eligible attendees. Exact amounts and the application open closer to the event, so keep an eye on our Discord for announcements.",
	],
	[
		"Do I work by myself or with teams?",
		"Either works — you can go solo or team up with as many as four people. Most hackers form teams, and if you arrive without one we run a team-formation mixer at kickoff.",
	],
	[
		"Who will I meet at the event?",
		"Fellow student hackers, experienced industry mentors, sponsor representatives, our panel of judges, and the SF Hacks organizing team — plenty of people to learn from and build with.",
	],
	[
		"Is there a theme for the project?",
		"There's no required theme — build whatever excites you. We do offer optional tracks and sponsor challenges with their own prizes if you'd like a direction to aim for.",
	],
	[
		"How can I get project ideas?",
		"Browse our tracks and sponsor challenges, chat with mentors, or join the brainstorming session at kickoff. The best projects usually start from a problem you personally care about.",
	],
	[
		"How do I prepare in general?",
		"Bring your laptop, charger, student ID, and any hardware you want to hack on. Get some rest beforehand, join the Discord early, and show up curious — that's most of it.",
	],
	[
		"Is there a code of conduct?",
		"Yes. SF Hacks follows the MLH Code of Conduct, and every attendee, mentor, judge, and sponsor is expected to uphold it so the event stays welcoming for everyone.",
	],
	[
		"What other events happen during the weekend?",
		"Beyond hacking there are workshops, tech talks, sponsor booths, mini-games, and social activities — ways to learn new skills and recharge between building sessions.",
	],
	[
		"Where can I contact you for questions or support?",
		"Reach us anytime in our Discord or by DMing @sf.hacks on Instagram. During the event, organizers are also available at the info desk for anything you need.",
	],
];

export default function FAQsPage() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);

	return (
		<div
			style={{
				fontFamily: "Archivo, system-ui, sans-serif",
				color: "#211E1A",
				WebkitFontSmoothing: "antialiased",
				minHeight: "100vh",
				background: SKY_BOTTOM,
				overflowX: "hidden",
			}}
		>
			{/* ===== HERO ===== */}
			<section
				style={{
					position: "relative",
					minHeight: "52vh",
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
					background: `linear-gradient(180deg, ${SKY_TOP} 0%, ${SKY_MID} 60%, ${SKY_BOTTOM} 100%)`,
				}}
			>
				{/* Scene */}
				<div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
					<div
						style={{
							position: "absolute",
							top: "14%",
							right: "14%",
							width: "clamp(140px,18vw,250px)",
							height: "clamp(140px,18vw,250px)",
							borderRadius: "50%",
							background:
								"radial-gradient(circle at 50% 50%, #F1E3C8 0%, #F1E3C8 40%, transparent 72%)",
							opacity: 0.55,
						}}
					/>
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: "-8%",
							width: "118%",
							height: 120,
							background:
								"linear-gradient(180deg, transparent 0%, rgba(249,249,247,0.92) 60%, rgba(249,249,247,0.92) 100%)",
							filter: "blur(13px)",
							opacity: 0.45,
							animation: "sfFogDrift 22s ease-in-out infinite",
							willChange: "transform",
						}}
					/>
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: "-8%",
							width: "118%",
							height: 70,
							background: "rgba(249,249,247,0.92)",
							filter: "blur(14px)",
							opacity: 0.32,
							animation: "sfFogDrift2 30s ease-in-out infinite",
							willChange: "transform",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 0,
							height: 3,
							background: ACCENT,
							opacity: 0.85,
						}}
					/>
				</div>

				{/* Content */}
				<div
					style={{
						position: "relative",
						zIndex: 2,
						display: "flex",
						flexDirection: "column",
						flex: 1,
						minHeight: 0,
					}}
				>
					<SiteNav />
					<div
						style={{
							flex: 1,
							display: "flex",
							alignItems: "center",
							minHeight: 0,
						}}
					>
						<div
							style={{
								maxWidth: 1320,
								width: "100%",
								margin: "0 auto",
								padding: "clamp(24px,5vh,56px) clamp(20px,5vw,56px)",
							}}
						>
							<div
								style={{
									fontFamily: "'Space Mono', monospace",
									fontWeight: 700,
									fontSize: "clamp(11px,1.3vw,13px)",
									letterSpacing: "0.2em",
									textTransform: "uppercase",
									color: ACCENT,
									marginBottom: 20,
								}}
							>
								Need to know
							</div>
							<h1
								style={{
									fontFamily: "'Instrument Serif', Georgia, serif",
									fontWeight: 400,
									fontSize: "clamp(48px,8vw,116px)",
									lineHeight: 0.9,
									letterSpacing: "-0.015em",
									margin: 0,
									color: "#211E1A",
								}}
							>
								FAQs
							</h1>
							<p
								style={{
									fontFamily: "'Space Mono', monospace",
									fontWeight: 400,
									fontSize: "clamp(13px,1.5vw,16px)",
									lineHeight: 1.5,
									color: "#34302a",
									maxWidth: 560,
									margin: "22px 0 0",
								}}
							>
								Everything you need to know about SF&nbsp;Hacks 2027 — and a few
								things about air&nbsp;fryers.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== FAQ LIST ===== */}
			<section
				style={{ background: "#FBF8F3", borderTop: `1.5px solid ${ACCENT}` }}
			>
				<div
					style={{
						maxWidth: 920,
						margin: "0 auto",
						padding: "clamp(48px,7vw,88px) clamp(20px,5vw,56px)",
					}}
				>
					{/* Header row */}
					<div
						style={{
							display: "flex",
							flexWrap: "wrap" as const,
							alignItems: "center",
							justifyContent: "space-between",
							gap: 16,
							paddingBottom: 28,
							marginBottom: 8,
							borderBottom: "1.5px solid #211E1A",
						}}
					>
						<span
							style={{
								fontFamily: "'Space Mono', monospace",
								fontWeight: 700,
								fontSize: 12,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "#6b665e",
							}}
						>
							{FAQ_DATA.length} questions, answered
						</span>
						<a
							href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
							target="_blank"
							rel="noopener noreferrer"
							style={{
								fontFamily: "'Space Mono', monospace",
								fontWeight: 700,
								fontSize: 12,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								textDecoration: "none",
								color: ACCENT,
							}}
						>
							MLH Code of Conduct ↗
						</a>
					</div>

					{/* Accordion */}
					{FAQ_DATA.map(([q, a], i) => {
						const isOpen = openIdx === i;
						return (
							<div
								key={i}
								style={{ borderBottom: "1px solid #E4DED2" }}
							>
								<button
									onClick={() => setOpenIdx(isOpen ? null : i)}
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 20,
										width: "100%",
										background: "none",
										border: "none",
										cursor: "pointer",
										textAlign: "left",
										padding: "25px 4px",
										fontFamily: "inherit",
										color: "#211E1A",
									}}
								>
									<span
										style={{
											display: "flex",
											alignItems: "baseline",
											gap: "clamp(14px,2vw,22px)",
										}}
									>
										<span
											style={{
												fontFamily: "'Space Mono', monospace",
												fontWeight: 700,
												fontSize: 13,
												letterSpacing: "0.06em",
												color: ACCENT,
												minWidth: 26,
											}}
										>
											{String(i + 1).padStart(2, "0")}
										</span>
										<span
											style={{
												fontFamily: "'Instrument Serif', Georgia, serif",
												fontSize: "clamp(20px,2.6vw,29px)",
												lineHeight: 1.18,
											}}
										>
											{q}
										</span>
									</span>
									<span
										style={{
											fontFamily: "'Space Mono', monospace",
											fontWeight: 400,
											fontSize: 28,
											lineHeight: 1,
											color: ACCENT,
											flexShrink: 0,
											transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
											transition: "transform .22s ease",
										}}
									>
										+
									</span>
								</button>
								{isOpen && (
									<div
										style={{
											padding: "0 4px 30px clamp(40px,6vw,48px)",
											maxWidth: 680,
										}}
									>
										<p
											style={{
												fontFamily: "Archivo, system-ui, sans-serif",
												fontWeight: 400,
												fontSize: 16,
												lineHeight: 1.72,
												color: "#4a463f",
												margin: 0,
											}}
										>
											{a}
										</p>
									</div>
								)}
							</div>
						);
					})}

					{/* Contact CTA */}
					<div
						style={{
							marginTop: "clamp(44px,6vw,72px)",
							display: "flex",
							flexWrap: "wrap" as const,
							alignItems: "center",
							justifyContent: "space-between",
							gap: 22,
							background: "#211E1A",
							padding: "clamp(28px,4vw,40px) clamp(24px,4vw,44px)",
							borderRadius: 2,
						}}
					>
						<div>
							<div
								style={{
									fontFamily: "'Instrument Serif', Georgia, serif",
									fontSize: "clamp(26px,3.4vw,38px)",
									lineHeight: 1.05,
									color: "#fff",
								}}
							>
								Still have questions?
							</div>
							<p
								style={{
									fontFamily: "'Space Mono', monospace",
									fontSize: 13,
									lineHeight: 1.6,
									color: "#a8a297",
									margin: "10px 0 0",
								}}
							>
								Ping us on Discord or Instagram — organizers are around
								throughout the event.
							</p>
						</div>
						<div
							style={{ display: "flex", flexWrap: "wrap" as const, gap: 14 }}
						>
							<a
								href="https://discord.gg/P5PsDR6G7W"
								style={{
									fontFamily: "'Space Mono', monospace",
									fontWeight: 700,
									fontSize: 12,
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									textDecoration: "none",
									color: "#fff",
									background: ACCENT,
									padding: "14px 24px",
									borderRadius: 2,
								}}
							>
								Discord →
							</a>
							<a
								href="https://www.instagram.com/sf.hacks/"
								style={{
									fontFamily: "'Space Mono', monospace",
									fontWeight: 700,
									fontSize: 12,
									letterSpacing: "0.08em",
									textTransform: "uppercase",
									textDecoration: "none",
									color: "#fff",
									border: "1.5px solid #4a463f",
									padding: "14px 24px",
									borderRadius: 2,
								}}
							>
								Instagram
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* ===== FOOTER ===== */}
			<footer
				data-sf-footer
				style={{ background: "#211E1A", color: "#cfc9bf" }}
			>
				<div
					style={{
						maxWidth: 1320,
						margin: "0 auto",
						padding: "22px clamp(20px,5vw,56px)",
						display: "flex",
						flexWrap: "wrap" as const,
						alignItems: "center",
						justifyContent: "space-between",
						gap: 16,
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: 9 }}>
						<span
							style={{
								width: 9,
								height: 9,
								background: ACCENT,
								display: "inline-block",
							}}
						/>
						<span
							style={{
								fontFamily: "'Space Mono', monospace",
								fontWeight: 700,
								fontSize: 13,
								letterSpacing: "0.16em",
								color: "#fff",
							}}
						>
							SF&nbsp;HACKS&nbsp;2027
						</span>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: 24 }}>
						<a
							href="https://discord.gg/P5PsDR6G7W"
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 12,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								textDecoration: "none",
								color: "#cfc9bf",
							}}
						>
							Discord
						</a>
						<a
							href="https://www.instagram.com/sf.hacks/"
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 12,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								textDecoration: "none",
								color: "#cfc9bf",
							}}
						>
							Instagram
						</a>
						<span
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 12,
								letterSpacing: "0.08em",
								textTransform: "uppercase",
								color: "#79736a",
							}}
						>
							MLH 2026 Season
						</span>
					</div>
				</div>
			</footer>

			<style>{`
        @keyframes sfFogDrift {
          0% { transform: translateX(-2.5%); }
          50% { transform: translateX(3%); }
          100% { transform: translateX(-2.5%); }
        }
        @keyframes sfFogDrift2 {
          0% { transform: translateX(3%); }
          50% { transform: translateX(-3.5%); }
          100% { transform: translateX(3%); }
        }
      `}</style>
		</div>
	);
}
