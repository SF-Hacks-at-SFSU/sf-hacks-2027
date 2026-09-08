"use client";

import Image from "next/image";
import { useState } from "react";

const team = [
	{ name: "Bahara Mehry", role: "President", image: "/team/bahara.png" },
	{ name: "Abha Deshpande", role: "Vice President", image: "/team/abha.jpg" },
	{ name: "Dev Gohil", role: "Tech Lead", image: "/team/dev.png" },
	{ name: "Serafim Sharkov", role: "Treasurer", image: "/team/serafim.JPG" },
	{ name: "Josue Cruz", role: "Outreach Chair", image: "/team/josue.png" },
];

const sponsorTiers = [
	{
		name: "Title partners",
		cardWidth: 300,
		logos: [
			["Meta", "meta-normalized.png"],
			["JFF Ventures", "jff-ventures-normalized.png"],
			["Actian", "actian-normalized.png"],
			["IBM", "ibm-normalized.png"],
		],
	},
	{
		name: "Platinum partners",
		cardWidth: 280,
		logos: [
			["Gilead", "gilead-normalized.png"],
			["Fastly", "fastly-normalized.png"],
		],
	},
	{
		name: "Gold partners",
		cardWidth: 230,
		logos: [
			["BrowserBase", "browserbase-normalized.png"],
			["CodePath", "codepath-normalized.png"],
			["Inductive Automation", "inductive-automation-normalized.png"],
			["MedSender", "medsender-normalized.png"],
			["TensorStax", "tensorstax-normalized.png"],
		],
	},
	{
		name: "Community partners",
		cardWidth: 185,
		logos: [
			["Backboard", "backboard-normalized.png"],
			["Upstreman", "upstreman-normalized.png"],
			["OpenMind", "openmind-normalized.png"],
			["Shipyard", "shipyard-normalized.png"],
			["Arena Club", "arena-club-normalized.png"],
			["Broxi", "broxi-ai-normalized.png"],
			["Stand Out Stickers", "standout-stickers-normalized.png"],
			["Dead Eye Coffee", "dead-eye-coffee-normalized.png"],
			["MLT", "mlt-normalized.png"],
			["ACM", "acm-normalized.png"],
			["SF State CoSE", "sf-state-cose-normalized.png"],
		],
	},
];

const faqs = [
	[
		"What is a hackathon?",
		"A hackathon is a time-bound build sprint. At SF Hacks, you'll have about 36 hours to form a team, dream up a project, and build it from scratch before presenting it to our judges.",
	],
	[
		"I have no prior hacking experience — can I still participate?",
		"Absolutely. SF Hacks is beginner-friendly, and many of our hackers are first-timers. Mentors, beginner workshops, and starter resources will help you ship your first project.",
	],
	[
		"Who can attend, and do I have to know how to code?",
		"All students are welcome, from high school through university. Designers, writers, product thinkers, and first-time coders all have a place on a team.",
	],
	[
		"Are there travel reimbursements?",
		"We offer limited travel reimbursements for eligible attendees. Exact amounts and the application open closer to the event, so follow our Discord for announcements.",
	],
	[
		"Do I work by myself or with teams?",
		"Either works. You can go solo or team up with as many as four people. If you arrive without a team, we'll help you find one at kickoff.",
	],
	[
		"Who will I meet at the event?",
		"You'll meet student hackers, industry mentors, sponsor representatives, judges, and the SF Hacks organizing team — plenty of people to learn from and build with.",
	],
	[
		"Is there a theme for the project?",
		"There's no required theme. Build whatever excites you, or choose one of our optional tracks and sponsor challenges for extra direction and prizes.",
	],
	[
		"How do I prepare?",
		"Bring your laptop, charger, student ID, and any hardware you want to use. Get some rest, join the Discord early, and show up curious.",
	],
	[
		"Is there a code of conduct?",
		"Yes. SF Hacks follows the MLH Code of Conduct, and every attendee, mentor, judge, and sponsor is expected to help keep the event welcoming.",
	],
	[
		"Where can I contact you?",
		"Reach us in our Discord, message @sf.hacks on Instagram, or email sfhacksteam@gmail.com.",
	],
];

function SectionHeader({
	eyebrow,
	title,
	copy,
}: {
	eyebrow: string;
	title: string;
	copy: string;
}) {
	return (
		<header className="sf-section-heading">
			<p className="sf-section-heading__eyebrow">{eyebrow}</p>
			<h2>{title}</h2>
			<p className="sf-section-heading__copy">{copy}</p>
		</header>
	);
}

export default function HomeSections() {
	const [openFaq, setOpenFaq] = useState<number | null>(0);

	return (
		<>
			<section
				id="about"
				className="sf-page-section sf-about-section"
				aria-labelledby="about-title"
			>
				<div className="sf-section-shell">
					<div className="sf-about-intro">
						<div>
							<p className="sf-section-heading__eyebrow">Who we are</p>
							<h2 id="about-title">
								Built by students,
								<br />
								for students.
							</h2>
							<p className="sf-about-intro__copy">
								SF Hacks is San Francisco State University&apos;s flagship
								hackathon: a foggy weekend where curious people turn bold ideas
								into real projects.
							</p>
						</div>
						<figure className="sf-about-photo">
							<Image
								src="/team/sfhacks_team.jpg"
								alt="The SF Hacks organizing team together on campus"
								fill
								sizes="(max-width: 800px) 100vw, 50vw"
							/>
							<figcaption>Community first. Always.</figcaption>
						</figure>
					</div>

					<div
						className="sf-stats"
						aria-label="SF Hacks at a glance"
					>
						<div>
							<strong>400+</strong>
							<span>student builders</span>
						</div>
						<div>
							<strong>36</strong>
							<span>hours to create</span>
						</div>
						<div>
							<strong>1</strong>
							<span>unforgettable weekend</span>
						</div>
					</div>

					<div className="sf-team-heading">
						<p className="sf-section-heading__eyebrow">Meet the team</p>
						<h3>The people behind SF Hacks</h3>
					</div>
					<div className="sf-team-grid">
						{team.map((member) => (
							<article
								className="sf-team-card"
								key={member.name}
							>
								<div className="sf-team-card__image">
									<Image
										src={member.image}
										alt={member.name}
										fill
										sizes="(max-width: 640px) 50vw, 16vw"
									/>
								</div>
								<h4>{member.name}</h4>
								<p>{member.role}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section
				id="sponsors"
				className="sf-page-section sf-sponsors-section"
				aria-labelledby="sponsors-title"
			>
				<div className="sf-section-shell">
					<SectionHeader
						eyebrow="In good company"
						title="Past sponsors"
						copy="The companies and communities that helped our hackers think bigger, build faster, and bring their ideas to life."
					/>
					<div className="sf-sponsor-wall">
						{sponsorTiers.map((tier) => (
							<div
								className="sf-sponsor-tier"
								key={tier.name}
							>
								<div className="sf-sponsor-tier__logos">
									{tier.logos.map(([name, file]) => (
										<div
											className="sf-sponsor-card"
											key={name}
											style={{
												flexBasis: tier.cardWidth,
												maxWidth: tier.cardWidth,
											}}
										>
											<Image
												src={`/sponsor-logos/updated_logos_spons/${file}`}
												alt={name}
												width={tier.cardWidth}
												height={Math.round((tier.cardWidth * 7) / 16)}
												unoptimized
											/>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="sf-sponsor-cta">
						<div>
							<p className="sf-section-heading__eyebrow">Become a sponsor</p>
							<h3>
								Put your brand in front of the Bay Area&apos;s next generation
								of builders.
							</h3>
						</div>
						<a href="mailto:sfhacksteam@gmail.com">
							Partner with us <span aria-hidden="true">→</span>
						</a>
					</div>
				</div>
			</section>

			<section
				id="faqs"
				className="sf-page-section sf-faq-section"
				aria-labelledby="faqs-title"
			>
				<div className="sf-section-shell sf-faq-shell">
					<SectionHeader
						eyebrow="Need to know"
						title="Frequently asked questions"
						copy="Everything you need to know before the weekend begins — and a few things you didn't know you needed."
					/>
					<div className="sf-faq-list">
						{faqs.map(([question, answer], index) => {
							const isOpen = openFaq === index;
							return (
								<div
									className="sf-faq-item"
									key={question}
								>
									<button
										type="button"
										aria-expanded={isOpen}
										aria-controls={`faq-answer-${index}`}
										onClick={() => setOpenFaq(isOpen ? null : index)}
									>
										<span className="sf-faq-item__number">
											{String(index + 1).padStart(2, "0")}
										</span>
										<span className="sf-faq-item__question">{question}</span>
										<span
											className={`sf-faq-item__icon${isOpen ? " is-open" : ""}`}
											aria-hidden="true"
										>
											+
										</span>
									</button>
									<div
										id={`faq-answer-${index}`}
										className={`sf-faq-item__answer${isOpen ? " is-open" : ""}`}
									>
										<p>{answer}</p>
									</div>
								</div>
							);
						})}
					</div>
					<div className="sf-question-cta">
						<div>
							<h3>Still have questions?</h3>
							<p>Our organizers are happy to help.</p>
						</div>
						<div>
							<a
								href="https://discord.gg/P5PsDR6G7W"
								target="_blank"
								rel="noopener noreferrer"
							>
								Ask on Discord
							</a>
							<a href="mailto:sfhacksteam@gmail.com">Email us</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
