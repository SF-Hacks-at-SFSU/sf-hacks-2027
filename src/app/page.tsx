import "./styles.css";

export default function Home() {
	return (
		<main
			id="home"
			className="relative min-h-[100svh] md:min-h-screen overflow-hidden"
		>
			{/* Background */}
			<div
				className="
					absolute inset-0 z-0
					bg-[url('/SunGridDesktop.svg')] bg-no-repeat bg-bottom
					[background-size:var(--bg-zoom)_auto]
					md:bg-cover md:bg-center
					max-[380px]:[--bg-zoom:190%]
					max-[400px]:[--bg-zoom:185%]
					max-[440px]:[--bg-zoom:180%]
					sm:[--bg-zoom:170%]
					md:[--bg-zoom:120%]
					lg:[--bg-zoom:110%]
					xl:[--bg-zoom:100%]
				"
				style={{ ["--bg-zoom"]: "180%" } as React.CSSProperties}
			/>

			{/* Hero content */}
			<div className="relative z-10 flex min-h-[100svh] md:min-h-screen items-center justify-center px-6">
				<div className="flex flex-col items-center gap-4 md:gap-5 w-full max-w-2xl -mt-[8svh] md:-mt-[6vh]">
					{/* Date + venue badge */}
					<div className="flex items-center gap-2.5 border border-[#030528]/50 bg-[#FF76FE]/10 backdrop-blur-sm rounded-full px-4 py-1.5">
						<p className="font-anaheim text-[#030528] text-sm sm:text-base md:text-lg tracking-wide text-center">
							February 2027 &nbsp;·&nbsp; Student Life Events Center / Annex
						</p>
					</div>

					{/* Title */}
					<h1
						className="
							text-[#FFBD52] font-audiowide text-center leading-[1.1]
							text-5xl sm:text-6xl md:text-7xl lg:text-8xl
							drop-shadow-[0_0_40px_rgba(255,189,82,0.5)]
						"
					>
						SF Hacks
						<br />
						2027
					</h1>

					{/* Tagline */}
					<p className="font-anaheim text-white text-center text-sm sm:text-base md:text-lg tracking-widest uppercase drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
						San Francisco State University&apos;s Annual Hackathon
					</p>

					{/* CTA Buttons */}
					<div className="flex gap-3 md:gap-4 justify-center flex-wrap mt-1">
						<a
							className="
								bg-[#6FD9FF] text-black rounded-full
								px-8 md:px-12 py-2.5 md:py-3
								font-anaheim font-semibold text-base md:text-lg
								transition-all duration-200
								hover:scale-105 hover:shadow-[0_0_24px_rgba(111,217,255,0.55)]
							"
							href="https://app.sfhacks.io/"
							target="_blank"
						>
							Apply
						</a>
						<a
							className="
								border border-white/25 bg-black/40 backdrop-blur-sm text-white rounded-full
								px-8 md:px-12 py-2.5 md:py-3
								font-anaheim font-semibold text-base md:text-lg
								transition-all duration-200
								hover:scale-105 hover:border-white/50 hover:bg-black/60
							"
							href="https://www.youtube.com/watch?v=gNIjTGIuQFY&feature=youtu.be"
							target="_blank"
						>
							Trailer
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
