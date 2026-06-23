"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import "./styles.css";
import SiteNav from "./globalComponents/SiteNav";

const SPLASH_SVG =
	'<svg viewBox="0 0 150 60" width="100%" height="100%" style="display:block;overflow:visible;">' +
	'<g fill="#FCFBF8">' +
	'<ellipse cx="75" cy="52" rx="62" ry="11"/>' +
	'<path d="M40 52 C42 40 47 32 52 28 C53 38 50 46 48 52 Z"/>' +
	'<path d="M110 52 C108 40 103 32 98 28 C97 38 100 46 102 52 Z"/>' +
	'<circle cx="30" cy="34" r="3.4"/><circle cx="120" cy="32" r="3.4"/>' +
	'<circle cx="56" cy="22" r="2.6"/><circle cx="94" cy="20" r="2.6"/><circle cx="75" cy="16" r="2.4"/>' +
	"</g></svg>";

const BLOW_SVG =
	'<svg viewBox="0 0 44 76" width="100%" height="100%" style="display:block;overflow:visible;">' +
	'<g fill="#FCFBF8">' +
	'<ellipse cx="22" cy="64" rx="5" ry="8"/>' +
	'<ellipse cx="18" cy="46" rx="6.5" ry="11"/>' +
	'<ellipse cx="26" cy="30" rx="7.5" ry="12"/>' +
	'<ellipse cx="21" cy="14" rx="6" ry="10"/>' +
	"</g></svg>";

function useWhaleAnimation(
	stageRef: React.RefObject<HTMLDivElement | null>,
	whaleRef: React.RefObject<HTMLDivElement | null>
) {
	const alive = useRef(true);
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		alive.current = true;

		function blow(stage: HTMLDivElement, x: number, scale: number) {
			const d = document.createElement("div");
			d.style.cssText = `position:absolute;left:${x}px;bottom:${44 * scale}px;width:${26 * scale}px;height:${50 * scale}px;transform-origin:50% 100%;pointer-events:none;opacity:0.85;`;
			d.innerHTML = BLOW_SVG;
			stage.appendChild(d);
			const a = d.animate(
				[
					{ opacity: 0, transform: "translateY(8px) scaleY(0.35)" },
					{ opacity: 0.85, transform: "translateY(0) scaleY(1)", offset: 0.4 },
					{ opacity: 0, transform: "translateY(-10px) scaleY(1.25)" },
				],
				{ duration: 1100, easing: "ease-out" }
			);
			a.onfinish = () => d.remove();
		}

		function splash(stage: HTMLDivElement, x: number, scale: number) {
			const d = document.createElement("div");
			const w = 120 * scale,
				h = 48 * scale;
			d.style.cssText = `position:absolute;left:${x - w / 2}px;bottom:-8px;width:${w}px;height:${h}px;transform-origin:50% 100%;pointer-events:none;`;
			d.innerHTML = SPLASH_SVG;
			stage.appendChild(d);
			const a = d.animate(
				[
					{ opacity: 0, transform: "scaleX(0.45) scaleY(0.55)" },
					{ opacity: 0.95, transform: "scaleX(0.9) scaleY(1)", offset: 0.32 },
					{ opacity: 0.55, transform: "scaleX(1.2) scaleY(0.88)", offset: 0.7 },
					{ opacity: 0, transform: "scaleX(1.5) scaleY(0.62)" },
				],
				{ duration: 820, easing: "ease-out" }
			);
			a.onfinish = () => d.remove();
		}

		function ripple(stage: HTMLDivElement, x: number, scale: number) {
			const d = document.createElement("div");
			d.style.cssText = `position:absolute;left:${x - 26 * scale}px;bottom:-9px;width:${82 * scale}px;height:${20 * scale}px;border:2px solid rgba(255,255,255,0.65);border-radius:50%;pointer-events:none;`;
			stage.appendChild(d);
			const a = d.animate(
				[
					{ opacity: 0, transform: "scale(0.5)" },
					{ opacity: 0.5, transform: "scale(1)", offset: 0.4 },
					{ opacity: 0, transform: "scale(1.9)" },
				],
				{ duration: 950, easing: "ease-out" }
			);
			a.onfinish = () => d.remove();
		}

		function breach() {
			if (!alive.current) return;
			const stage = stageRef.current;
			const whale = whaleRef.current;
			if (!stage || !whale) {
				timer.current = setTimeout(breach, 200);
				return;
			}

			const sw = stage.clientWidth || 600;
			const wW = 172;
			const dir = Math.random() < 0.5 ? 1 : -1;
			const size = 0.7 + Math.random() * 0.26;
			const dx = 36 + Math.random() * 30;
			const rotMax = 4 + Math.random() * 4;
			const Tsub = 150;
			const peakShow = 16 + Math.random() * 12;
			const Tapex = 108 - peakShow;
			const span = sw - wW;
			const x0 = (0.27 + Math.random() * 0.3) * span;

			const N = 72;
			const frames: Keyframe[] = [];
			for (let i = 0; i < N; i++) {
				const p = i / (N - 1);
				const e = Math.sin(Math.PI * p);
				const y = Tsub - (Tsub - Tapex) * e;
				const rot = -rotMax * Math.cos(Math.PI * p) * dir;
				const x = x0 + dir * dx * p;
				frames.push({
					transform: `translate(${x}px, ${y}px) rotate(${rot}deg) scale(${size}) scaleX(${dir})`,
					offset: p,
				});
			}

			const dur = 4200 + Math.random() * 1400;
			whale.style.transform = frames[0].transform as string;
			const anim = whale.animate(frames, {
				duration: dur,
				easing: "cubic-bezier(.42,0,.58,1)",
				fill: "forwards",
			});

			const cx = (p: number) => x0 + dir * dx * p + wW * size * 0.5;
			const tEmerge = dur * 0.2;
			const tSink = dur * 0.8;

			const t2 = setTimeout(() => {
				if (alive.current) splash(stage, cx(0.2), size * 0.82);
			}, tEmerge);
			const t3 = setTimeout(() => {
				if (alive.current) {
					splash(stage, cx(0.8), size);
					ripple(stage, cx(0.8), size);
				}
			}, tSink);
			const headX = x0 + dir * dx * 0.5 + (dir > 0 ? 124 * size : 48 * size);
			const t4 = setTimeout(() => {
				if (alive.current) blow(stage, headX, size);
			}, dur * 0.46);

			anim.onfinish = () => {
				if (!alive.current) return;
				anim.cancel();
				whale.style.transform = "translate(0,300px)";
				const pause = 1800 + Math.random() * 3400;
				timer.current = setTimeout(breach, pause);
			};

			return () => {
				clearTimeout(t2);
				clearTimeout(t3);
				clearTimeout(t4);
			};
		}

		timer.current = setTimeout(breach, 900);

		return () => {
			alive.current = false;
			if (timer.current) clearTimeout(timer.current);
		};
	}, [stageRef, whaleRef]);
}

type TrafficCarData = {
	top: string;
	color: string;
	width: string;
	duration: string;
	delay: string;
	reverse?: boolean;
	extra?: boolean;
};

// Outer (approach) hangers — x positions along left and right approach spans
const outerHangers = [42, 96, 150, 204, 1198, 1252, 1306, 1360];

// Inner (main span) hangers — every 40px between the two towers
const innerHangers = Array.from({ length: 22 }, (_, i) => 298 + i * 40);

const traffic: TrafficCarData[] = [
	{
		top: "56.6%",
		color: "#2c2e33",
		width: "38px",
		duration: "8.5s",
		delay: "0s",
		reverse: true,
	},
	{
		top: "56.6%",
		color: "#e7e1d4",
		width: "42px",
		duration: "7.4s",
		delay: "-1.60s",
		reverse: true,
	},
	{
		top: "56.6%",
		color: "#b8473a",
		width: "36px",
		duration: "9.2s",
		delay: "-3.81s",
		reverse: true,
	},
	{
		top: "56.6%",
		color: "#4a5b66",
		width: "40px",
		duration: "8s",
		delay: "-5.11s",
		reverse: true,
	},
	{
		top: "56.6%",
		color: "#c9a23f",
		width: "41px",
		duration: "6.8s",
		delay: "-6.01s",
		reverse: true,
	},
	{
		top: "56.6%",
		color: "#8a8f86",
		width: "37px",
		duration: "9.6s",
		delay: "-9.85s",
		reverse: true,
	},
	{
		top: "57.7%",
		color: "#4a5b66",
		width: "39px",
		duration: "9s",
		delay: "0s",
		extra: true,
	},
	{
		top: "57.7%",
		color: "#c9a23f",
		width: "37px",
		duration: "7.8s",
		delay: "-1.81s",
		extra: true,
	},
	{
		top: "57.7%",
		color: "#8a8f86",
		width: "42px",
		duration: "8.6s",
		delay: "-3.89s",
		extra: true,
	},
	{
		top: "57.7%",
		color: "#34465a",
		width: "38px",
		duration: "6.6s",
		delay: "-4.83s",
		extra: true,
	},
	{
		top: "57.7%",
		color: "#cfc8ba",
		width: "36px",
		duration: "9.4s",
		delay: "-8.31s",
		extra: true,
	},
	{
		top: "57.7%",
		color: "#2c2e33",
		width: "41px",
		duration: "8.2s",
		delay: "-9.38s",
		extra: true,
	},
];

// y-coordinate on the cable for a given x, matching dc.html exactly
function cableY(x: number) {
	if (x <= 270) return 412 - (332 * x) / 270;
	if (x >= 1170) return 80 + (332 * (x - 1170)) / 270;
	const n = (x - 720) / 450;
	return 388 - 308 * n * n;
}

// Exact catenary path: straight-line approaches + parabolic main span (matches dc.html L-point path)
function cablePath() {
	const pts: string[] = ["M0,412", "L270,80"];
	for (let x = 286; x < 1170; x += 16) {
		pts.push(`L${x},${cableY(x).toFixed(1)}`);
	}
	pts.push("L1170,80", "L1440,412");
	return pts.join(" ");
}

// Truss zigzag with 11px step to match dc.html exactly
function trussPath() {
	const pts: string[] = [];
	for (let x = 0; x <= 1452; x += 11) {
		const y = (x / 11) % 2 === 0 ? 442 : 424;
		pts.push(`${x},${y}`);
	}
	return "M" + pts.join(" L");
}

// X positions of truss peaks (y=424) where dc.html draws vertical lines
const trussPeaks = Array.from({ length: 66 }, (_, i) => i * 22);

function BridgeTower({ c }: { c: number }) {
	const acc = "var(--sf-accent)";
	return (
		<g>
			{/* Tower legs */}
			<polygon
				points={`${c - 44},588 ${c - 24},588 ${c - 12},80 ${c - 32},80`}
				fill={acc}
			/>
			<polygon
				points={`${c - 44},588 ${c - 24},588 ${c - 12},80 ${c - 32},80`}
				fill="url(#legShade)"
			/>
			<line
				x1={c - 34}
				y1="588"
				x2={c - 22}
				y2="80"
				stroke="#000"
				strokeOpacity="0.12"
				strokeWidth="2"
			/>

			<polygon
				points={`${c + 24},588 ${c + 44},588 ${c + 32},80 ${c + 12},80`}
				fill={acc}
			/>
			<polygon
				points={`${c + 24},588 ${c + 44},588 ${c + 32},80 ${c + 12},80`}
				fill="url(#legShade)"
			/>
			<line
				x1={c + 34}
				y1="588"
				x2={c + 22}
				y2="80"
				stroke="#000"
				strokeOpacity="0.12"
				strokeWidth="2"
			/>

			{/* Horizontal beams */}
			{[
				{ y: 103, w: 29.4, x: -14.7 },
				{ y: 175, w: 32.9, x: -16.45 },
				{ y: 253, w: 36.7, x: -18.35 },
				{ y: 341, w: 40.9, x: -20.45 },
				{ y: 403, w: 43.9, x: -21.95 },
				{ y: 501, w: 44.1, x: -22.05 },
			].map(({ y, w, x }) => (
				<g key={`${c}-beam-${y}`}>
					<rect
						x={c + x}
						y={y}
						width={w}
						height={14}
						fill={acc}
					/>
					<rect
						x={c + x}
						y={y}
						width={w}
						height={14}
						fill="url(#beamShade)"
					/>
				</g>
			))}

			{/* Top cap blocks */}
			<rect
				x={c - 32}
				y={66}
				width={64}
				height={14}
				fill={acc}
			/>
			<rect
				x={c - 21}
				y={56}
				width={42}
				height={11}
				fill={acc}
			/>
			<rect
				x={c - 13}
				y={48}
				width={26}
				height={9}
				fill={acc}
			/>
			<rect
				x={c - 5}
				y={42}
				width={10}
				height={7}
				fill={acc}
			/>

			{/* Upper X-bracing */}
			<line
				x1={c - 15}
				y1="120"
				x2={c + 18}
				y2="250"
				stroke={acc}
				strokeWidth="4"
				strokeOpacity="0.85"
			/>
			<line
				x1={c + 15}
				y1="120"
				x2={c - 18}
				y2="250"
				stroke={acc}
				strokeWidth="4"
				strokeOpacity="0.85"
			/>

			{/* Pedestals */}
			<polygon
				points={`${c - 50},538 ${c - 18},538 ${c - 6},582 ${c - 62},582`}
				fill={acc}
			/>
			<polygon
				points={`${c - 50},538 ${c - 18},538 ${c - 6},582 ${c - 62},582`}
				fill="url(#pedShade)"
			/>
			<rect
				x={c - 65}
				y={580}
				width={62}
				height={13}
				fill={acc}
			/>
			<rect
				x={c - 65}
				y={580}
				width={62}
				height={13}
				fill="url(#pedShade)"
			/>

			<polygon
				points={`${c + 18},538 ${c + 50},538 ${c + 62},582 ${c + 6},582`}
				fill={acc}
			/>
			<polygon
				points={`${c + 18},538 ${c + 50},538 ${c + 62},582 ${c + 6},582`}
				fill="url(#pedShade)"
			/>
			<rect
				x={c + 3}
				y={580}
				width={62}
				height={13}
				fill={acc}
			/>
			<rect
				x={c + 3}
				y={580}
				width={62}
				height={13}
				fill="url(#pedShade)"
			/>

			{/* Base reflections */}
			<ellipse
				cx={c - 34}
				cy={591}
				rx={35}
				ry={8}
				fill="#fff"
				opacity="0.95"
			/>
			<ellipse
				cx={c - 49}
				cy={587}
				rx={18}
				ry={5}
				fill="#fff"
				opacity="0.85"
			/>
			<ellipse
				cx={c - 18}
				cy={588}
				rx={15}
				ry={4.5}
				fill="#fff"
				opacity="0.82"
			/>
			<ellipse
				cx={c + 34}
				cy={591}
				rx={35}
				ry={8}
				fill="#fff"
				opacity="0.95"
			/>
			<ellipse
				cx={c + 19}
				cy={587}
				rx={18}
				ry={5}
				fill="#fff"
				opacity="0.85"
			/>
			<ellipse
				cx={c + 50}
				cy={588}
				rx={15}
				ry={4.5}
				fill="#fff"
				opacity="0.82"
			/>
			<ellipse
				cx={c}
				cy={597}
				rx={96}
				ry={6}
				fill="#fff"
				opacity="0.35"
			/>
		</g>
	);
}

function TrafficCar({ car }: { car: TrafficCarData }) {
	const style = {
		"--car-color": car.color,
		"--car-width": car.width,
		"--car-duration": car.duration,
		"--car-delay": car.delay,
		top: car.top,
	} as CSSProperties;

	return (
		<div
			className={`sf-car${car.reverse ? " sf-car--reverse" : ""}${car.extra ? " sf-car--extra" : ""}`}
			style={style}
			aria-hidden="true"
		>
			<span className="sf-car__shadow" />
			<span className="sf-car__wheel sf-car__wheel--front" />
			<span className="sf-car__wheel sf-car__wheel--back" />
			<span className="sf-car__roof" />
			<span className="sf-car__window" />
			<span className="sf-car__body" />
			<span className="sf-car__headlight" />
			<span className="sf-car__taillight" />
		</div>
	);
}

function BridgeScene() {
	const acc = "var(--sf-accent)";
	const cable = cablePath();
	const stageRef = useRef<HTMLDivElement>(null);
	const whaleRef = useRef<HTMLDivElement>(null);
	useWhaleAnimation(stageRef, whaleRef);

	return (
		<div
			className="sf-scene"
			aria-hidden="true"
		>
			<div className="sf-sun" />

			{/* Clouds */}
			<div className="sf-cloud sf-cloud--1">
				<svg
					viewBox="0 0 260 100"
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
				>
					<ellipse
						cx="130"
						cy="86"
						rx="124"
						ry="18"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="68"
						cy="68"
						rx="52"
						ry="36"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="128"
						cy="52"
						rx="66"
						ry="50"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="192"
						cy="64"
						rx="50"
						ry="36"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="232"
						cy="76"
						rx="36"
						ry="26"
						fill="#FCFBF8"
					/>
				</svg>
			</div>
			<div className="sf-cloud sf-cloud--2">
				<svg
					viewBox="0 0 200 80"
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
				>
					<ellipse
						cx="100"
						cy="68"
						rx="96"
						ry="16"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="54"
						cy="54"
						rx="42"
						ry="30"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="104"
						cy="44"
						rx="54"
						ry="42"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="156"
						cy="54"
						rx="40"
						ry="30"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="186"
						cy="64"
						rx="28"
						ry="20"
						fill="#FCFBF8"
					/>
				</svg>
			</div>
			<div className="sf-cloud sf-cloud--3">
				<svg
					viewBox="0 0 160 68"
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
				>
					<ellipse
						cx="80"
						cy="58"
						rx="76"
						ry="13"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="48"
						cy="46"
						rx="36"
						ry="26"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="90"
						cy="36"
						rx="46"
						ry="36"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="132"
						cy="46"
						rx="32"
						ry="24"
						fill="#FCFBF8"
					/>
				</svg>
			</div>
			<div className="sf-cloud sf-cloud--4">
				<svg
					viewBox="0 0 180 72"
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
				>
					<ellipse
						cx="90"
						cy="62"
						rx="86"
						ry="14"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="46"
						cy="50"
						rx="38"
						ry="28"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="96"
						cy="40"
						rx="50"
						ry="38"
						fill="#FCFBF8"
					/>
					<ellipse
						cx="144"
						cy="50"
						rx="36"
						ry="26"
						fill="#FCFBF8"
					/>
				</svg>
			</div>

			<div className="sf-fog sf-fog--back" />

			<div className="sf-bridge-layer">
				<div className="sf-water">
					<div className="sf-water__top-line" />
					<div className="sf-water__shimmer sf-water__shimmer--h" />
					<div className="sf-water__shimmer sf-water__shimmer--left" />
					<div className="sf-water__shimmer sf-water__shimmer--right" />
				</div>

				<svg
					className="sf-bridge"
					viewBox="0 0 1440 700"
					preserveAspectRatio="none"
					role="img"
					aria-label="Golden Gate Bridge illustration"
				>
					<defs>
						<linearGradient
							id="legShade"
							x1="0"
							y1="0"
							x2="1"
							y2="0"
						>
							<stop
								offset="0"
								stopColor="#000"
								stopOpacity="0.26"
							/>
							<stop
								offset="0.16"
								stopColor="#000"
								stopOpacity="0"
							/>
							<stop
								offset="0.44"
								stopColor="#fff"
								stopOpacity="0.24"
							/>
							<stop
								offset="0.6"
								stopColor="#fff"
								stopOpacity="0"
							/>
							<stop
								offset="1"
								stopColor="#000"
								stopOpacity="0.22"
							/>
						</linearGradient>
						<linearGradient
							id="beamShade"
							x1="0"
							y1="0"
							x2="0"
							y2="1"
						>
							<stop
								offset="0"
								stopColor="#fff"
								stopOpacity="0.18"
							/>
							<stop
								offset="0.5"
								stopColor="#000"
								stopOpacity="0"
							/>
							<stop
								offset="1"
								stopColor="#000"
								stopOpacity="0.28"
							/>
						</linearGradient>
						<linearGradient
							id="pedShade"
							x1="0"
							y1="0"
							x2="1"
							y2="0"
						>
							<stop
								offset="0"
								stopColor="#000"
								stopOpacity="0.30"
							/>
							<stop
								offset="0.3"
								stopColor="#000"
								stopOpacity="0.05"
							/>
							<stop
								offset="0.55"
								stopColor="#fff"
								stopOpacity="0.26"
							/>
							<stop
								offset="0.72"
								stopColor="#fff"
								stopOpacity="0"
							/>
							<stop
								offset="1"
								stopColor="#000"
								stopOpacity="0.26"
							/>
						</linearGradient>
					</defs>

					{/* Main cable */}
					<path
						d={cable}
						fill="none"
						stroke={acc}
						strokeWidth="6"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					{/* Cable highlight */}
					<g transform="translate(0,-1.8)">
						<path
							d={cable}
							fill="none"
							stroke="#fff"
							strokeOpacity="0.28"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>

					{/* Inner hanger cables */}
					{innerHangers.map((x) => (
						<line
							key={x}
							x1={x}
							y1={cableY(x)}
							x2={x}
							y2={406}
							stroke={acc}
							strokeWidth="1.8"
							strokeOpacity="0.72"
							strokeLinecap="round"
						/>
					))}

					{/* Outer (approach) hanger cables */}
					{outerHangers.map((x) => (
						<line
							key={x}
							x1={x}
							y1={cableY(x)}
							x2={x}
							y2={406}
							stroke={acc}
							strokeWidth="1.5"
							strokeOpacity="0.5"
							strokeLinecap="round"
						/>
					))}

					{/* Towers */}
					<BridgeTower c={270} />
					<BridgeTower c={1170} />

					{/* Roadway deck */}
					<rect
						x="0"
						y="412"
						width="1440"
						height="4"
						fill="#d6553f"
					/>
					<rect
						x="0"
						y="416"
						width="1440"
						height="8"
						fill={acc}
					/>

					{/* Truss zigzag */}
					<path
						d={trussPath()}
						fill="none"
						stroke={acc}
						strokeWidth="4"
						strokeOpacity="0.95"
					/>
					{/* Truss vertical drops at each peak */}
					{trussPeaks.map((x) => (
						<line
							key={x}
							x1={x}
							y1={424}
							x2={x}
							y2={442}
							stroke={acc}
							strokeWidth="2.6"
							strokeOpacity="0.85"
						/>
					))}

					<rect
						x="0"
						y="442"
						width="1440"
						height="6"
						fill={acc}
					/>
					<rect
						x="0"
						y="448"
						width="1440"
						height="2.5"
						fill="#000"
						opacity="0.15"
					/>
				</svg>

				<div className="sf-traffic">
					{traffic.map((car) => (
						<TrafficCar
							key={`${car.color}-${car.delay}-${car.top}`}
							car={car}
						/>
					))}
				</div>
			</div>

			{/* Whale breaching animation */}
			<div
				ref={stageRef}
				className="sf-whale-stage"
			>
				<div
					ref={whaleRef}
					className="sf-whale-body"
					style={{ transform: "translate(0,300px)" }}
				>
					<svg
						viewBox="0 0 260 230"
						width="172"
						height="150"
						style={{ display: "block", overflow: "visible" }}
					>
						<path
							d="M236 88 C232 68 213 55 187 53 C148 50 106 58 76 73 C64 79 56 84 49 88 L55 98 C60 102 67 106 79 110 C111 124 151 128 179 124 C207 121 229 110 236 96 Z"
							fill="#33474F"
						/>
						<path
							d="M236 96 C229 109 209 119 181 123 C153 127 117 124 88 113 C99 119 132 123 160 121 C190 119 222 110 236 99 Z"
							fill="#CBD7D6"
						/>
						<g
							stroke="#9FB0AF"
							strokeWidth="1.4"
							opacity="0.55"
							fill="none"
							strokeLinecap="round"
						>
							<path d="M120 119 C150 124 186 122 214 112" />
							<path d="M126 124 C156 129 190 127 216 117" />
							<path d="M134 128 C162 133 192 131 215 122" />
						</g>
						<path
							d="M55 90 C41 84 27 78 15 69 C8 64 3 55 5 47 C15 54 30 66 46 78 C36 82 27 92 22 104 C30 99 44 92 57 90 Z"
							fill="#2D3F46"
						/>
						<path
							d="M150 116 C151 140 161 170 181 192 C188 199 197 203 203 202 C198 186 188 154 178 130 C170 120 159 115 150 116 Z"
							fill="#DCE4E3"
							stroke="#B5C3C2"
							strokeWidth="1.4"
						/>
						<g fill="#2A3C43">
							<circle
								cx="221"
								cy="74"
								r="2.6"
							/>
							<circle
								cx="229"
								cy="82"
								r="2.4"
							/>
							<circle
								cx="212"
								cy="69"
								r="2.4"
							/>
						</g>
						<circle
							cx="214"
							cy="92"
							r="3"
							fill="#1A2226"
						/>
					</svg>
				</div>
			</div>

			<div className="sf-fog sf-fog--front" />
		</div>
	);
}

export default function Home() {
	return (
		<main
			id="home"
			className="sf-landing"
		>
			<section className="sf-hero">
				<BridgeScene />

				<div className="sf-hero__content">
					<SiteNav />

					<div className="sf-hero__headline-outer">
						<div className="sf-hero__headline">
							<h1 className="sf-hero__title">
								<span>SF&nbsp;Hacks</span>
								<span>2027</span>
							</h1>
							<p className="sf-hero__subtitle">
								Feb 2027&nbsp;<span aria-hidden="true">·</span>&nbsp;San
								Francisco State University
							</p>
							<div className="sf-hero__actions">
								{/* <a
									className="sf-button sf-button--primary"
									href="https://app.sfhacks.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Apply now&nbsp;<span aria-hidden="true">→</span>
								</a> */}
								<a
									className="sf-button sf-button--primary"
									href="https://tally.so/r/RG2rP4"
									target="_blank"
									rel="noopener noreferrer"
								>
									Get notified&nbsp;<span aria-hidden="true">→</span>
								</a>
								<a
									className="sf-button sf-button--link"
									href="https://www.youtube.com/watch?v=gNIjTGIuQFY"
									target="_blank"
									rel="noopener noreferrer"
								>
									Watch trailer
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer className="sf-footer">
				<div className="sf-footer__inner">
					<div className="sf-footer__brand">
						<Image
							src="/icon.png"
							alt="SF Hacks"
							width={20}
							height={20}
						/>
						<span>SF&nbsp;Hacks&nbsp;2027</span>
					</div>
					<div className="sf-footer__links">
						<a
							href="https://discord.gg/P5PsDR6G7W"
							target="_blank"
							rel="noopener noreferrer"
						>
							Discord
						</a>
						<a
							href="https://www.instagram.com/sf.hacks/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>
						<span className="sf-footer__season">MLH 2026 Season</span>
					</div>
				</div>
			</footer>
		</main>
	);
}
