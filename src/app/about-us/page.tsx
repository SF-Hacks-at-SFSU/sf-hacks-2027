"use client";

import React from "react";
import Image from "next/image";
import SiteNav from "../globalComponents/SiteNav";

const ACCENT = "#C0362C";
const SKY_TOP = "#F2F0EA";
const SKY_MID = "#E6EAE9";
const SKY_BOTTOM = "#D8DFDE";

interface Member {
	name: string;
	img: string;
	link?: string;
	role?: string;
}

const execTeam: Member[] = [
	{
		name: "Josue Cruz",
		img: "/team/josue.png",
		link: "https://www.linkedin.com/in/j-crz/",
		role: "Outreach Chair",
	},
	{
		name: "Bahara Mehry",
		img: "/team/bahara.png",
		link: "https://www.linkedin.com/in/bahara-mehry-517510300/",
		role: "President",
	},
	{
		name: "Dev Gohil",
		img: "/team/dev.png",
		link: "https://www.linkedin.com/in/gohildev/",
		role: "Tech Lead",
	},
	{
		name: "Rushali Patel",
		img: "/team/rushali.png",
		link: "https://www.linkedin.com/in/rushalipatel028/",
		role: "Director",
	},
	{
		name: "Serafim Sharkov",
		img: "/team/serafim.JPG",
		link: "https://www.linkedin.com/in/serafim-sharkov/",
		role: "Treasure",
	},
	{
		name: "Abha Deshpande",
		img: "/team/abha.jpg",
		link: "https://www.linkedin.com/in/abha-deshpande-2303b7224/",
		role: "Vice President",
	},
];

const fullTeam: Member[] = [
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

function SkylineSVG() {
	return (
		<div
			className="sf-skyline"
			style={{
				position: "absolute",
				left: 0,
				right: 0,
				bottom: 0,
				height: "64%",
			}}
		>
			<svg
				viewBox="0 0 1440 460"
				preserveAspectRatio="none"
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					display: "block",
				}}
			>
				{/* Background / distant buildings */}
				<g>
					<rect
						x="40"
						y="310"
						width="70"
						height="150"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="130"
						y="255"
						width="54"
						height="205"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="300"
						y="290"
						width="64"
						height="170"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="470"
						y="210"
						width="80"
						height="250"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="700"
						y="260"
						width="58"
						height="200"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="900"
						y="160"
						width="74"
						height="300"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="1040"
						y="240"
						width="60"
						height="220"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="1180"
						y="200"
						width="90"
						height="260"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="1320"
						y="270"
						width="70"
						height="190"
						fill={ACCENT}
						opacity="0.30"
					/>
					<rect
						x="1400"
						y="310"
						width="60"
						height="150"
						fill={ACCENT}
						opacity="0.30"
					/>
				</g>
				{/* Foreground buildings */}
				<g>
					{/* Building 1 */}
					<rect
						x="150"
						y="230"
						width="86"
						height="230"
						fill={ACCENT}
						opacity="0.95"
					/>
					{[168.4, 187.9, 207.4].map((cx) =>
						[259.2, 282.2, 305.2, 328.2, 351.2, 374.2, 397.2, 420.2].map(
							(cy) => (
								<rect
									key={`${cx}-${cy}`}
									x={cx}
									y={cy}
									width="10.1"
									height="10.6"
									fill={SKY_TOP}
									opacity="0.5"
								/>
							)
						)
					)}
					{/* Building 2 */}
					<rect
						x="250"
						y="290"
						width="60"
						height="170"
						fill={ACCENT}
						opacity="0.95"
					/>
					{[264.5, 284.9].map((cx) =>
						[313.1, 335.8, 358.5, 381.1, 403.8, 426.5].map((cy) => (
							<rect
								key={`b2-${cx}-${cy}`}
								x={cx}
								y={cy}
								width="10.6"
								height="10.4"
								fill={SKY_TOP}
								opacity="0.5"
							/>
						))
					)}
					{/* Transamerica-style pyramid */}
					<rect
						x="340"
						y="274"
						width="40"
						height="186"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="334"
						y="258"
						width="52"
						height="22"
						fill={ACCENT}
						opacity="0.95"
					/>
					{[348, 357, 366].map((x) => (
						<rect
							key={`py-${x}`}
							x={x}
							y={284}
							width="5"
							height="14"
							rx="2.5"
							fill={SKY_TOP}
							opacity="0.55"
						/>
					))}
					{/* Building 4 */}
					<rect
						x="420"
						y="260"
						width="70"
						height="200"
						fill={ACCENT}
						opacity="0.95"
					/>
					{[435.0, 450.9, 466.7].map((cx) =>
						[286.2, 309.0, 331.9, 354.7, 377.6, 400.5, 423.3].map((cy) => (
							<rect
								key={`b4-${cx}-${cy}`}
								x={cx}
								y={cy}
								width="8.3"
								height="10.5"
								fill={SKY_TOP}
								opacity="0.5"
							/>
						))
					)}
					{/* Building 5 */}
					<rect
						x="500"
						y="310"
						width="54"
						height="150"
						fill={ACCENT}
						opacity="0.95"
					/>
					{/* Salesforce Tower */}
					<polygon
						points="565,460 715,460 647,100 633,100"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="637.5"
						y="54"
						width="5"
						height="48"
						fill={ACCENT}
						opacity="0.95"
					/>
					{/* More buildings */}
					<rect
						x="760"
						y="280"
						width="58"
						height="180"
						fill={ACCENT}
						opacity="0.95"
					/>
					<path
						d="M 834 460 L 834 120 Q 834 68 852.4 64 Q 880 54 907.6 64 Q 926 68 926 120 L 926 460 Z"
						fill={ACCENT}
						opacity="0.95"
					/>
					<ellipse
						cx="880"
						cy="62"
						rx="20"
						ry="9"
						fill="#F1E3C8"
						opacity="0.5"
					/>
					<rect
						x="960"
						y="210"
						width="76"
						height="250"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="1050"
						y="300"
						width="58"
						height="160"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="1120"
						y="160"
						width="96"
						height="300"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="1230"
						y="260"
						width="64"
						height="200"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="1310"
						y="225"
						width="80"
						height="235"
						fill={ACCENT}
						opacity="0.95"
					/>
					<rect
						x="1400"
						y="295"
						width="60"
						height="165"
						fill={ACCENT}
						opacity="0.95"
					/>
				</g>
			</svg>
		</div>
	);
}

function MemberCard({ member, large }: { member: Member; large?: boolean }) {
	const cardContent = (
		<div style={{ display: "flex", flexDirection: "column" as const }}>
			<div
				style={{
					aspectRatio: "1/1",
					background: `linear-gradient(160deg, #fff 0%, ${SKY_TOP} 100%)`,
					border: "1px solid #E4DED2",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Image
					src={member.img}
					alt={member.name}
					fill
					sizes={large ? "33vw" : "20vw"}
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
				<span
					style={{
						position: "absolute",
						left: 0,
						bottom: 0,
						width: 46,
						height: 6,
						background: ACCENT,
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
					gap: 12,
					marginTop: 16,
				}}
			>
				<div
					style={{
						fontFamily: "'Instrument Serif', Georgia, serif",
						fontSize: large ? 28 : 20,
						lineHeight: 1,
						color: "#211E1A",
					}}
				>
					{member.name}
				</div>
				{member.link ? (
					<a
						href={member.link}
						target="_blank"
						rel="noopener noreferrer"
						onClick={(e) => e.stopPropagation()}
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 11,
							letterSpacing: "0.1em",
							textTransform: "uppercase" as const,
							textDecoration: "none",
							color: ACCENT,
						}}
					>
						LinkedIn ↗
					</a>
				) : null}
			</div>
			<div
				style={{
					fontFamily: "'Space Mono', monospace",
					fontSize: 11,
					letterSpacing: "0.08em",
					textTransform: "uppercase" as const,
					color: "#6b665e",
					marginTop: 6,
				}}
			>
				{member.role || "Executive Team"}
			</div>
		</div>
	);

	return cardContent;
}

function FullMemberCard({ member }: { member: Member }) {
	return (
		<div style={{ display: "flex", flexDirection: "column" as const }}>
			<div
				style={{
					aspectRatio: "1/1",
					background: `linear-gradient(160deg, #fff 0%, ${SKY_TOP} 100%)`,
					border: "1px solid #E4DED2",
					position: "relative",
					overflow: "hidden",
				}}
			>
				<Image
					src={member.img}
					alt={member.name}
					fill
					sizes="20vw"
					style={{ objectFit: "cover", objectPosition: "top" }}
				/>
				<span
					style={{
						position: "absolute",
						left: 0,
						bottom: 0,
						width: 30,
						height: 4,
						background: ACCENT,
					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "baseline",
					justifyContent: "space-between",
					gap: 8,
					marginTop: 10,
				}}
			>
				<div
					style={{
						fontFamily: "'Instrument Serif', Georgia, serif",
						fontSize: 18,
						lineHeight: 1,
						color: "#211E1A",
					}}
				>
					{member.name}
				</div>
				{member.link && (
					<a
						href={member.link}
						target="_blank"
						rel="noopener noreferrer"
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 10,
							letterSpacing: "0.1em",
							textTransform: "uppercase" as const,
							textDecoration: "none",
							color: ACCENT,
							flexShrink: 0,
						}}
					>
						↗
					</a>
				)}
			</div>
		</div>
	);
}

export default function AboutPage() {
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
					minHeight: "78vh",
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
					background: `linear-gradient(180deg, ${SKY_TOP} 0%, ${SKY_MID} 56%, ${SKY_BOTTOM} 100%)`,
				}}
			>
				{/* Scene */}
				<div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
					{/* Sun */}
					<div
						style={{
							position: "absolute",
							top: "12%",
							right: "14%",
							width: "clamp(150px,20vw,280px)",
							height: "clamp(150px,20vw,280px)",
							borderRadius: "50%",
							background:
								"radial-gradient(circle at 50% 50%, #F1E3C8 0%, #F1E3C8 40%, transparent 72%)",
							opacity: 0.55,
						}}
					/>
					{/* Hill */}
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: "-6%",
							width: "50%",
							height: "clamp(120px,20%,200px)",
							background: "#C7C0AC",
							borderRadius: "90% 100% 0 0 / 100% 100% 0 0",
							opacity: 0.55,
						}}
					/>
					<SkylineSVG />
					{/* Ground line */}
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 0,
							height: 3,
							background: ACCENT,
							opacity: 0.9,
						}}
					/>
					{/* Fog */}
					<div
						style={{
							position: "absolute",
							bottom: "7%",
							left: "-8%",
							width: "118%",
							height: 120,
							background:
								"linear-gradient(180deg, transparent 0%, rgba(249,249,247,0.92) 55%, rgba(249,249,247,0.92) 100%)",
							filter: "blur(12px)",
							opacity: 0.4,
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
							height: 90,
							background: "rgba(249,249,247,0.92)",
							filter: "blur(14px)",
							opacity: 0.34,
							animation: "sfFogDrift2 30s ease-in-out infinite",
							willChange: "transform",
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
							alignItems: "flex-start",
							justifyContent: "center",
							minHeight: 0,
							paddingTop: "clamp(10px,5vh,58px)",
						}}
					>
						<div
							style={{
								maxWidth: 1320,
								width: "100%",
								margin: "0 auto",
								padding: "0 clamp(20px,5vw,56px)",
								textAlign: "center",
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
									marginBottom: 22,
								}}
							>
								Who we are
							</div>
							<h1
								style={{
									fontFamily: "'Instrument Serif', Georgia, serif",
									fontWeight: 400,
									fontSize: "clamp(46px,8vw,116px)",
									lineHeight: 0.9,
									letterSpacing: "-0.015em",
									margin: 0,
									color: "#211E1A",
								}}
							>
								About&nbsp;Us
							</h1>
							<p
								style={{
									fontFamily: "'Space Mono', monospace",
									fontWeight: 400,
									fontSize: "clamp(13px,1.5vw,16px)",
									lineHeight: 1.5,
									color: "#34302a",
									maxWidth: 620,
									margin: "22px auto 0",
								}}
							>
								Bigger, better, with more air&nbsp;fryers.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== MISSION ===== */}
			<section
				style={{ background: "#FBF8F3", borderTop: `1.5px solid ${ACCENT}` }}
			>
				<div
					style={{
						maxWidth: 1100,
						margin: "0 auto",
						padding: "clamp(56px,9vw,120px) clamp(20px,5vw,56px)",
					}}
				>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 11,
							letterSpacing: "0.16em",
							textTransform: "uppercase",
							color: ACCENT,
							marginBottom: 28,
						}}
					>
						Our mission
					</div>
					<p
						style={{
							fontFamily: "'Instrument Serif', Georgia, serif",
							fontWeight: 400,
							fontSize: "clamp(28px,4.4vw,52px)",
							lineHeight: 1.18,
							letterSpacing: "-0.01em",
							margin: 0,
							color: "#211E1A",
						}}
					>
						SF&nbsp;Hacks is more than just an event — we&apos;re a team of
						passionate individuals dedicated to hosting San Francisco
						State&apos;s premier&nbsp;hackathon.
					</p>
				</div>
			</section>

			{/* ===== EXECUTIVE TEAM ===== */}
			<section
				style={{ background: "#FBF8F3", borderTop: `1.5px solid ${ACCENT}` }}
			>
				<div
					style={{
						maxWidth: 1320,
						margin: "0 auto",
						padding: "clamp(56px,8vw,104px) clamp(20px,5vw,56px)",
					}}
				>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 11,
							letterSpacing: "0.16em",
							textTransform: "uppercase",
							color: ACCENT,
							marginBottom: 18,
						}}
					>
						The people
					</div>
					<h2
						style={{
							fontFamily: "'Instrument Serif', Georgia, serif",
							fontWeight: 400,
							fontSize: "clamp(32px,5vw,64px)",
							lineHeight: 1,
							letterSpacing: "-0.01em",
							margin: "0 0 clamp(34px,5vw,56px)",
							color: "#211E1A",
						}}
					>
						Executive Team
					</h2>
					<div
						className="sf-exec-grid"
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
							gap: "clamp(28px,4vw,52px)",
						}}
					>
						{execTeam.map((m) => (
							<MemberCard
								key={m.name}
								member={m}
								large
							/>
						))}
					</div>

					{/* Full team */}
					{/* <div
						style={{
							marginTop: "clamp(44px,6vw,72px)",
							paddingTop: 32,
							borderTop: "1px solid #E4DED2",
						}}
					>
						<h3
							style={{
								fontFamily: "'Instrument Serif', Georgia, serif",
								fontWeight: 400,
								fontSize: "clamp(24px,3.5vw,44px)",
								lineHeight: 1,
								letterSpacing: "-0.01em",
								margin: "0 0 clamp(24px,4vw,40px)",
								color: "#211E1A",
							}}
						>
							Full Team
						</h3>
						<div
							className="sf-full-grid"
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
								gap: "clamp(16px,2.5vw,28px)",
							}}
						>
							{fullTeam.map((m) => (
								<FullMemberCard
									key={m.name}
									member={m}
								/>
							))}
						</div>
					</div> */}

					{/* Discord CTA */}
					<div
						className="sf-discord-cta"
						style={{
							marginTop: "clamp(44px,6vw,72px)",
							paddingTop: 32,
							borderTop: "1px solid #E4DED2",
							display: "flex",
							flexWrap: "wrap" as const,
							alignItems: "center",
							justifyContent: "space-between",
							gap: 18,
						}}
					>
						<p
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 13,
								lineHeight: 1.6,
								color: "#6b665e",
								maxWidth: 460,
								margin: 0,
							}}
						>
							Want to help build SF&nbsp;Hacks 2027? We&apos;re always looking
							for organizers, mentors, and judges.
						</p>
						<a
							href="mailto:sfhacksteam@gmail.com"
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
							Email us →
						</a>
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
