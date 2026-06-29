"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "../globalComponents/SiteNav";
import "../styles.css";

const HOUSES = [
	{
		body: "#E7A9B0",
		roof: "#7E5A86",
		trim: "#F6E7C8",
		door: "#6E3D52",
		ar: 0.608,
	},
	{
		body: "#E8C98A",
		roof: "#B07D3E",
		trim: "#F7EEDA",
		door: "#7A4B25",
		ar: 0.642,
	},
	{
		body: "#7FB7B2",
		roof: "#3E6F6A",
		trim: "#F2E7C9",
		door: "#2E5450",
		ar: 0.608,
	},
	{
		body: "#9DC0DA",
		roof: "#3E6E96",
		trim: "#F4ECD6",
		door: "#2B4F6E",
		ar: 0.624,
	},
	{
		body: "#AEC58C",
		roof: "#5E7E3E",
		trim: "#F2EED6",
		door: "#3E5826",
		ar: 0.592,
	},
	{
		body: "#BCAFD2",
		roof: "#6E5A8E",
		trim: "#F4ECDC",
		door: "#4A3A66",
		ar: 0.633,
	},
	{
		body: "#E0A276",
		roof: "#A85A38",
		trim: "#F6E8CE",
		door: "#7A3A20",
		ar: 0.608,
	},
	{
		body: "#EBD489",
		roof: "#B89A3E",
		trim: "#FAF1D6",
		door: "#7E6322",
		ar: 0.651,
	},
	{
		body: "#8FA9C4",
		roof: "#45627E",
		trim: "#EFE9D6",
		door: "#2E4258",
		ar: 0.616,
	},
];

function PaintedLady({
	body,
	roof,
	trim,
	door,
	ar,
	cls,
}: (typeof HOUSES)[0] & { cls?: string }) {
	return (
		<div
			className={cls}
			style={{
				flex: "1 1 0",
				aspectRatio: String(ar),
				maxHeight: 480,
				["--body" as string]: body,
				["--roof" as string]: roof,
				["--trim" as string]: trim,
				["--door" as string]: door,
			}}
		>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					filter: "drop-shadow(-4px 0 5px rgba(40,34,28,0.16))",
				}}
			>
				{/* Roof / Pediment */}
				<div style={{ position: "relative", height: "22%", flex: "none" }}>
					<div
						style={{
							position: "absolute",
							left: "48.6%",
							top: "-6%",
							width: "2.6%",
							height: "16%",
							background: "var(--trim,#efe7d8)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "47%",
							top: "-9%",
							width: "6%",
							height: "6%",
							borderRadius: "50%",
							background: "var(--trim,#efe7d8)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "3%",
							right: "3%",
							top: "8%",
							bottom: 0,
							background: "var(--roof,#7c7060)",
							clipPath: "polygon(50% 0,100% 100%,0 100%)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "50%",
							right: "3%",
							top: "8%",
							bottom: 0,
							background: "rgba(40,34,28,0.17)",
							clipPath: "polygon(0 100%,100% 100%,100% 0)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "11%",
							right: "11%",
							top: "20%",
							bottom: "13%",
							background: "var(--trim,#efe7d8)",
							clipPath: "polygon(50% 0,100% 100%,0 100%)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "15.5%",
							right: "15.5%",
							top: "31%",
							bottom: "20%",
							background: "var(--body,#b7ae9c)",
							clipPath: "polygon(50% 0,100% 100%,0 100%)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "42%",
							right: "42%",
							bottom: "17%",
							height: "28%",
							background: "linear-gradient(150deg,#FBF4E2,#E3D6B8)",
							boxShadow: "inset 0 0 0 1.5px var(--roof,#7c7060)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "3%",
							right: "3%",
							bottom: 0,
							height: "7%",
							background:
								"repeating-linear-gradient(90deg, var(--roof,#7c7060) 0 2px, transparent 2px 6px)",
							opacity: 0.6,
						}}
					/>
				</div>
				{/* Cornice */}
				<div
					style={{
						position: "relative",
						height: "5%",
						flex: "none",
						background: "var(--trim,#efe7d8)",
						boxShadow: "0 1px 2px rgba(40,34,28,0.2)",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 0,
							bottom: "42%",
							background:
								"repeating-linear-gradient(90deg, transparent 0 7%, var(--roof,#7c7060) 7% 9.2%, transparent 9.2% 16%)",
							opacity: 0.5,
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							bottom: 0,
							height: "42%",
							background:
								"repeating-linear-gradient(90deg, var(--roof,#7c7060) 0 2px, transparent 2px 7px)",
							opacity: 0.55,
						}}
					/>
				</div>
				{/* Facade */}
				<div
					style={{
						position: "relative",
						flex: 1,
						minHeight: 0,
						background: "var(--body,#b7ae9c)",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							left: 0,
							width: "4%",
							background:
								"repeating-linear-gradient(180deg, var(--trim,#efe7d8) 0 5.5%, rgba(40,34,28,0.12) 5.5% 6.5%, var(--trim,#efe7d8) 6.5% 12%)",
							opacity: 0.92,
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: 0,
							bottom: 0,
							right: 0,
							width: "4%",
							background:
								"repeating-linear-gradient(180deg, var(--trim,#efe7d8) 0 5.5%, rgba(40,34,28,0.12) 5.5% 6.5%, var(--trim,#efe7d8) 6.5% 12%)",
							opacity: 0.92,
						}}
					/>
					{/* Upper windows */}
					<WindowRow />
					<WindowRow />
					{/* Ground floor */}
					<div
						style={{
							position: "relative",
							height: "16%",
							flex: "none",
							background: "var(--body,#b7ae9c)",
							borderTop: "2px solid var(--trim,#efe7d8)",
						}}
					>
						<div
							style={{
								position: "absolute",
								top: 2,
								left: 0,
								right: 0,
								height: "6%",
								background: "rgba(40,34,28,0.1)",
							}}
						/>
						<div
							style={{
								position: "absolute",
								left: 0,
								right: 0,
								bottom: 0,
								top: "11%",
								display: "flex",
								alignItems: "flex-end",
								justifyContent: "space-between",
								padding: "0 8%",
							}}
						>
							<div
								style={{
									width: "46%",
									height: "45%",
									background: "var(--trim,#efe7d8)",
									boxShadow: "inset 0 0 0 2px var(--roof,#7c7060)",
									display: "flex",
									gap: "8%",
									padding: "11% 9%",
								}}
							>
								<div style={{ flex: 1, background: "rgba(40,34,28,0.13)" }} />
								<div style={{ flex: 1, background: "rgba(40,34,28,0.13)" }} />
								<div style={{ flex: 1, background: "rgba(40,34,28,0.13)" }} />
							</div>
							<div
								style={{
									width: "36%",
									height: "94%",
									position: "relative",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "flex-end",
								}}
							>
								<div
									style={{
										width: "86%",
										height: "8%",
										background: "var(--roof,#7c7060)",
									}}
								/>
								<div
									style={{
										width: "78%",
										height: "9%",
										background: "linear-gradient(150deg,#FBF4E2,#E3D6B8)",
										boxShadow: "inset 0 0 0 1px var(--roof,#7c7060)",
									}}
								/>
								<div
									style={{
										width: "74%",
										height: "60%",
										background:
											"linear-gradient(170deg, var(--door,#6b5a47), rgba(0,0,0,0.32))",
										borderRadius: "46% 46% 0 0 / 18% 18% 0 0",
										boxShadow: "inset 0 0 0 2.5px var(--trim,#efe7d8)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: 0,
										width: "110%",
										height: "9%",
										background: "var(--trim,#efe7d8)",
										opacity: 0.78,
									}}
								/>
								<div
									style={{
										position: "absolute",
										bottom: "9%",
										width: "94%",
										height: "6%",
										background: "var(--trim,#efe7d8)",
										opacity: 0.55,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function WindowRow() {
	return (
		<div
			style={{
				position: "relative",
				flex: 1,
				minHeight: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "5% 10% 2%",
			}}
		>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					background: "var(--body,#b7ae9c)",
					boxShadow:
						"-3px 4px 7px rgba(40,34,28,0.18), inset 0 4px 0 var(--trim,#efe7d8)",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(100deg, rgba(255,255,255,0.18) 0 16%, transparent 38%, rgba(40,34,28,0.16) 100%)",
						pointerEvents: "none",
					}}
				/>
				<div style={{ flex: 1, display: "flex", padding: "13% 5% 0" }}>
					{[0, 1, 2].map((i) => (
						<React.Fragment key={i}>
							<div
								style={{
									width: "3.4%",
									alignSelf: "stretch",
									marginTop: "2%",
									background:
										"linear-gradient(90deg, var(--trim,#efe7d8), rgba(40,34,28,0.13))",
								}}
							/>
							<div style={{ position: "relative", flex: 1 }}>
								<div
									style={{
										position: "absolute",
										top: "-15%",
										left: "-9%",
										right: "-9%",
										height: "8%",
										background: "var(--roof,#7c7060)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										top: "-8%",
										left: "-5%",
										right: "-5%",
										height: "4.5%",
										background: "var(--trim,#efe7d8)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										inset: 0,
										background: "var(--trim,#efe7d8)",
										boxShadow: "0 1px 2px rgba(40,34,28,0.25)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										inset: "13%",
										background:
											"linear-gradient(150deg,#FBF4E2 0%,#E3D6B8 100%)",
										boxShadow: "inset 0 0 0 1px rgba(40,34,28,0.18)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										left: "49.2%",
										top: "13%",
										bottom: "13%",
										width: "1.4px",
										background: "var(--trim,#efe7d8)",
									}}
								/>
								<div
									style={{
										position: "absolute",
										top: "49.2%",
										left: "13%",
										right: "13%",
										height: "1.4px",
										background: "var(--trim,#efe7d8)",
									}}
								/>
							</div>
						</React.Fragment>
					))}
					<div
						style={{
							width: "3.4%",
							alignSelf: "stretch",
							marginTop: "2%",
							background:
								"linear-gradient(90deg, var(--trim,#efe7d8), rgba(40,34,28,0.13))",
						}}
					/>
				</div>
				<div
					style={{
						height: "15%",
						margin: "5% 7% 0",
						background: "var(--trim,#efe7d8)",
						opacity: 0.85,
						display: "flex",
						gap: "7%",
						alignItems: "center",
						justifyContent: "center",
						padding: "0 9%",
					}}
				>
					<div
						style={{
							flex: 1,
							height: "42%",
							background: "rgba(40,34,28,0.15)",
						}}
					/>
					<div
						style={{
							flex: 1,
							height: "42%",
							background: "rgba(40,34,28,0.15)",
						}}
					/>
					<div
						style={{
							flex: 1,
							height: "42%",
							background: "rgba(40,34,28,0.15)",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

// Tiered sponsor data — largest to smallest.
// `dark: true` means the logo art is light/white, so it needs a dark card.
type Sponsor = { name: string; src: string; dark?: boolean };
const LOGO_DIR = "/sponsor-logos/updated_logos_spons";
const SPONSOR_TIER1: Sponsor[] = [
	{ name: "Meta", src: `${LOGO_DIR}/meta-normalized.png` },
	{ name: "JFF Ventures", src: `${LOGO_DIR}/jff-ventures-normalized.png` },
	{ name: "Actian", src: `${LOGO_DIR}/actian-normalized.png` },
	{ name: "IBM", src: `${LOGO_DIR}/ibm-normalized.png` },
];
const SPONSOR_TIER2: Sponsor[] = [
	{ name: "Gilead", src: `${LOGO_DIR}/gilead-normalized.png` },
	{ name: "Fastly", src: `${LOGO_DIR}/fastly-normalized.png` },
];
const SPONSOR_TIER3: Sponsor[] = [
	{ name: "BrowserBase", src: `${LOGO_DIR}/browserbase-normalized.png` },
	{ name: "CodePath", src: `${LOGO_DIR}/codepath-normalized.png` },
	{
		name: "Inductive Automation",
		src: `${LOGO_DIR}/inductive-automation-normalized.png`,
	},
	{ name: "MedSender", src: `${LOGO_DIR}/medsender-normalized.png` },
	{ name: "TensorStax", src: `${LOGO_DIR}/tensorstax-normalized.png` },
];
const SPONSOR_TIER4: Sponsor[] = [
	{ name: "Backboard", src: `${LOGO_DIR}/backboard-normalized.png` },
	{ name: "Upstreman", src: `${LOGO_DIR}/upstreman-normalized.png` },
	{ name: "OpenMind", src: `${LOGO_DIR}/openmind-normalized.png` },
	{ name: "Shipyard", src: `${LOGO_DIR}/shipyard-normalized.png` },
	{ name: "Arena Club", src: `${LOGO_DIR}/arena-club-normalized.png` },
	{ name: "Broxi", src: `${LOGO_DIR}/broxi-ai-normalized.png` },
	{
		name: "Stand Out Stickers",
		src: `${LOGO_DIR}/standout-stickers-normalized.png`,
	},
	{ name: "Dead Eye", src: `${LOGO_DIR}/dead-eye-coffee-normalized.png` },
	{ name: "MLT", src: `${LOGO_DIR}/mlt-normalized.png` },
	{ name: "ACM", src: `${LOGO_DIR}/acm-normalized.png` },
	{ name: "CoSE", src: `${LOGO_DIR}/sf-state-cose-normalized.png` },
];

// Size hierarchy for the sponsor wall — bigger card = higher tier
const SPONSOR_TIERS = [
	{ logos: SPONSOR_TIER1, card: 300, pad: 30 },
	{ logos: SPONSOR_TIER2, card: 280, pad: 28 },
	{ logos: SPONSOR_TIER3, card: 230, pad: 24 },
	{ logos: SPONSOR_TIER4, card: 185, pad: 18 },
];

export default function SponsorsPage() {
	return (
		<div
			style={{
				fontFamily: "Archivo, system-ui, sans-serif",
				color: "#211E1A",
				WebkitFontSmoothing: "antialiased",
				minHeight: "100vh",
				background: "#D8DFDE",
				overflowX: "hidden",
			}}
		>
			{/* ── Hero ── */}
			<div style={{ position: "relative" }}>
				{/* Diagonal accent stripe along the clip edge */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						pointerEvents: "none",
						background: "var(--sf-accent)",
						clipPath:
							"polygon(0 calc(100% - 3px), 100% calc(91% - 3px), 100% 91%, 0 100%)",
						zIndex: 10,
					}}
				/>
				<section
					style={{
						position: "relative",
						minHeight: "88vh",
						display: "flex",
						flexDirection: "column",
						overflow: "hidden",
						background:
							"linear-gradient(180deg, #F2F0EA 0%, #E6EAE9 56%, #D8DFDE 100%)",
						clipPath: "polygon(0 0, 100% 0, 100% 91%, 0 100%)",
					}}
				>
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
					{/* Nav + text */}
					<div
						style={{
							position: "relative",
							zIndex: 2,
							display: "flex",
							flexDirection: "column",
							flex: 1,
						}}
					>
						<SiteNav />
						<div
							style={{
								flex: 1,
								display: "flex",
								alignItems: "flex-start",
								justifyContent: "center",
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
										color: "var(--sf-accent)",
										marginBottom: 22,
									}}
								>
									Partner with us
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
									Past Sponsors
								</h1>
								<p
									style={{
										fontFamily: "'Space Mono', monospace",
										fontWeight: 400,
										fontSize: "clamp(13px,1.5vw,16px)",
										lineHeight: 1.5,
										color: "#34302a",
										maxWidth: 600,
										margin: "22px auto 0",
									}}
								>
									Help 400+ students build something over one
									foggy&nbsp;weekend.
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* Painted Ladies — outside clip so they overlay the diagonal edge */}
				<div
					style={{
						position: "absolute",
						left: "-9%",
						right: "-9%",
						bottom: 0,
						transform: "rotate(-3.8deg)",
						transformOrigin: "50% 100%",
						zIndex: 15,
						pointerEvents: "none",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							justifyContent: "stretch",
						}}
					>
						{HOUSES.map((h, i) => {
							const hideCls = [
								"",
								"sf-lady--h-lg",
								"sf-lady--h-sm",
								"sf-lady--h-md",
								"",
								"sf-lady--h-md",
								"sf-lady--h-sm",
								"sf-lady--h-lg",
								"",
							][i];
							return (
								<PaintedLady
									key={i}
									{...h}
									cls={hideCls}
								/>
							);
						})}
					</div>
				</div>
			</div>

			{/* ── Tiers ── */}
			<section
				style={{
					background: "#F2F0EA",
					borderTop: "1.5px solid var(--sf-accent)",
					display: "none",
				}}
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
							color: "var(--sf-accent)",
							marginBottom: 18,
						}}
					>
						Tiers
					</div>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							alignItems: "flex-end",
							justifyContent: "space-between",
							gap: 18,
							marginBottom: "clamp(34px,5vw,56px)",
						}}
					>
						<h2
							style={{
								fontFamily: "'Instrument Serif', Georgia, serif",
								fontWeight: 400,
								fontSize: "clamp(32px,5vw,64px)",
								lineHeight: 1,
								letterSpacing: "-0.01em",
								margin: 0,
								color: "#211E1A",
							}}
						>
							Ways to partner
						</h2>
						<p
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 13,
								lineHeight: 1.6,
								color: "#6b665e",
								maxWidth: 360,
								margin: 0,
							}}
						>
							Every tier includes logo placement, on-site presence, and access
							to our resume&nbsp;book.
						</p>
					</div>
					<div
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
							gap: "clamp(16px,2.4vw,28px)",
						}}
					>
						{[
							{
								label: "Headline",
								name: "Golden Gate",
								price: "$5,000+",
								accent: true,
								perks: [
									"Premier logo on stage, shirts & site",
									"Keynote or workshop slot",
									"Dedicated sponsor prize track",
									"Full resume book + 1:1 recruiting",
								],
							},
							{
								label: "Featured",
								name: "Bay",
								price: "$2,500+",
								accent: false,
								perks: [
									"Logo on shirts & site",
									"Tech talk or demo table",
									"Sponsor prize track",
									"Resume book access",
								],
							},
							{
								label: "Supporting",
								name: "Fog",
								price: "$1,000+",
								accent: false,
								perks: [
									"Logo on site & banners",
									"Mentors at the event",
									"Swag in hacker bags",
								],
							},
							{
								label: "In-kind",
								name: "Cove",
								price: "Product / food",
								accent: false,
								perks: [
									"API credits or tooling",
									"Meals, snacks or coffee",
									"Logo on site",
								],
							},
						].map((tier) => (
							<div
								key={tier.name}
								style={{
									background: "#fff",
									border: "1px solid #E4DED2",
									borderTop: `5px solid ${tier.accent ? "var(--sf-accent)" : "#C7C0AC"}`,
									borderRadius: 2,
									padding: "clamp(26px,3vw,36px) clamp(24px,2.6vw,30px)",
									display: "flex",
									flexDirection: "column",
								}}
							>
								<div
									style={{
										fontFamily: "'Space Mono', monospace",
										fontWeight: 700,
										fontSize: 11,
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										color: tier.accent ? "var(--sf-accent)" : "#8a8270",
									}}
								>
									{tier.label}
								</div>
								<div
									style={{
										fontFamily: "'Instrument Serif', Georgia, serif",
										fontSize: "clamp(30px,3.4vw,40px)",
										lineHeight: 1.04,
										color: "#211E1A",
										marginTop: 10,
									}}
								>
									{tier.name}
								</div>
								<div
									style={{
										fontFamily: "'Space Mono', monospace",
										fontSize: 13,
										color: "#6b665e",
										marginTop: 14,
									}}
								>
									{tier.price}
								</div>
								<div
									style={{ height: 1, background: "#E4DED2", margin: "22px 0" }}
								/>
								<ul
									style={{
										listStyle: "none",
										margin: 0,
										padding: 0,
										display: "flex",
										flexDirection: "column",
										gap: 13,
									}}
								>
									{tier.perks.map((p) => (
										<li
											key={p}
											style={{
												display: "flex",
												gap: 11,
												fontFamily: "'Space Mono', monospace",
												fontSize: 12,
												lineHeight: 1.5,
												color: "#34302a",
											}}
										>
											<span style={{ color: "var(--sf-accent)", flex: "none" }}>
												→
											</span>
											{p}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── Past sponsors ── */}
			<section style={{ background: "#FBF8F3" }}>
				<div
					style={{
						maxWidth: 1280,
						margin: "0 auto",
						padding: "clamp(72px,10vw,130px) clamp(24px,5vw,72px)",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 11,
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "var(--sf-accent)",
							marginBottom: 20,
						}}
					>
						In good company
					</div>
					<h2
						style={{
							fontFamily: "'Instrument Serif', Georgia, serif",
							fontWeight: 400,
							fontSize: "clamp(32px,5vw,64px)",
							lineHeight: 1.05,
							margin: "0 auto",
							color: "#211E1A",
						}}
					>
						Past sponsors
					</h2>
					<p
						style={{
							fontFamily: "'Space Mono', monospace",
							fontSize: 13,
							lineHeight: 1.7,
							color: "#8a837a",
							maxWidth: 400,
							margin: "18px auto 0",
						}}
					>
						Companies that backed past SF&nbsp;Hacks builders. Your logo could
						be next.
					</p>

					<div
						style={{
							background: "#F2F0EA",
							borderRadius: "1rem",
							marginTop: "2.5rem",
							padding: "clamp(28px,5vw,56px) clamp(20px,4vw,40px)",
						}}
					>
						{SPONSOR_TIERS.map((tier, ti) => (
							<div
								key={ti}
								style={{
									display: "flex",
									flexWrap: "wrap",
									alignItems: "stretch",
									justifyContent: "center",
									gap: "clamp(14px,2vw,24px)",
									marginTop: ti === 0 ? 0 : "clamp(28px,4vw,52px)",
								}}
							>
								{tier.logos.map(({ name, src }) => (
									<div
										key={name}
										style={{
											flex: `0 1 ${tier.card}px`,
											maxWidth: tier.card,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Image
											src={src}
											alt={name}
											width={tier.card}
											height={Math.round((tier.card * 7) / 16)}
											style={{
												objectFit: "contain",
												width: "100%",
												height: "auto",
												maxHeight: Math.round((tier.card * 7) / 16),
											}}
											unoptimized
										/>
									</div>
								))}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ── CTA ── */}
			<section
				style={{
					background: "#211E1A",
					borderTop: "1.5px solid var(--sf-accent)",
				}}
			>
				<div
					style={{
						maxWidth: 860,
						margin: "0 auto",
						padding: "clamp(64px,9vw,112px) clamp(20px,5vw,56px)",
						textAlign: "center",
					}}
				>
					<div
						style={{
							fontFamily: "'Space Mono', monospace",
							fontWeight: 700,
							fontSize: 11,
							letterSpacing: "0.2em",
							textTransform: "uppercase",
							color: "var(--sf-accent)",
							marginBottom: 20,
						}}
					>
						Become a Sponsor
					</div>
					<h2
						style={{
							fontFamily: "'Instrument Serif', Georgia, serif",
							fontWeight: 400,
							fontSize: "clamp(30px,4.8vw,60px)",
							lineHeight: 1.08,
							letterSpacing: "-0.01em",
							margin: 0,
							color: "#fff",
						}}
					>
						Want your brand in front of 400+ student builders?
					</h2>
					<p
						style={{
							fontFamily: "'Space Mono', monospace",
							fontSize: "clamp(12px,1.2vw,14px)",
							lineHeight: 1.8,
							color: "#cfc9bf",
							margin: "24px auto 0",
							maxWidth: 540,
						}}
					>
						Drop us an email and we&apos;ll put together something that fits
						your goals.
					</p>

					{/* Email callout */}
					<div
						style={{
							margin: "40px auto 0",
							display: "inline-flex",
							alignItems: "center",
							gap: 16,
							background: "#2a2622",
							border: "1px solid #3d3830",
							borderRadius: 8,
							padding: "18px 28px",
							flexWrap: "wrap",
							justifyContent: "center",
						}}
					>
						<span
							style={{
								fontFamily: "'Space Mono', monospace",
								fontSize: 13,
								color: "#9d9690",
								letterSpacing: "0.04em",
							}}
						>
							Reach us at
						</span>
						<a
							href="mailto:sfhacksteam@gmail.com"
							style={{
								fontFamily: "'Space Mono', monospace",
								fontWeight: 700,
								fontSize: "clamp(14px,1.6vw,17px)",
								color: "#fff",
								letterSpacing: "0.04em",
								textDecoration: "none",
								borderBottom: "1.5px solid var(--sf-accent)",
								paddingBottom: 1,
							}}
						>
							sfhacksteam@gmail.com
						</a>
						<a
							href="mailto:sfhacksteam@gmail.com"
							style={{
								fontFamily: "'Space Mono', monospace",
								fontWeight: 700,
								fontSize: 12,
								letterSpacing: "0.1em",
								textTransform: "uppercase",
								textDecoration: "none",
								background: "var(--sf-accent)",
								padding: "10px 20px",
								borderRadius: 4,
								color: "#fff",
								whiteSpace: "nowrap",
							}}
						>
							Send email →
						</a>
					</div>
				</div>
			</section>

			{/* ── Footer ── */}
			<footer
				data-sf-footer
				style={{
					background: "#211E1A",
					color: "#cfc9bf",
					borderTop: "1px solid #34302a",
				}}
			>
				<div
					style={{
						maxWidth: 1320,
						margin: "0 auto",
						padding: "22px clamp(20px,5vw,56px)",
						display: "flex",
						flexWrap: "wrap",
						alignItems: "center",
						justifyContent: "space-between",
						gap: 16,
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: 9 }}>
						<Image
							src="/icon.png"
							alt="SF Hacks"
							width={20}
							height={20}
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
		</div>
	);
}
