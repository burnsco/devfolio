import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

// Data
import { projects } from "./data/projects";
import { skills } from "./data/skills";

// Components
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
	{ id: "hero", label: "Home" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "about", label: "About" },
	{ id: "contact", label: "Contact" },
];

export default function App() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeSection, setActiveSection] = useState("hero");
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Skew effect on scroll
			const proxy = { skew: 0 };
			const skewSetter = gsap.quickSetter(".vdf-skew", "skewY", "deg");
			const clamp = gsap.utils.clamp(-20, 20);

			ScrollTrigger.create({
				onUpdate: (self) => {
					const skew = clamp(self.getVelocity() / -300);
					if (Math.abs(skew) > Math.abs(proxy.skew)) {
						proxy.skew = skew;
						gsap.to(proxy, {
							skew: 0,
							duration: 0.8,
							ease: "power3",
							overwrite: true,
							onUpdate: () => skewSetter(proxy.skew),
						});
					}
				},
			});

			// Reveal animations
			gsap.utils.toArray<HTMLElement>(".vdf-reveal").forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, y: 50 },
					{
						opacity: 1,
						y: 0,
						duration: 1.2,
						ease: "power4.out",
						scrollTrigger: {
							trigger: el,
							start: "top 90%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			// Stagger animations
			gsap.utils.toArray<HTMLElement>(".vdf-stagger").forEach((el) => {
				gsap.fromTo(
					el,
					{ opacity: 0, x: -20 },
					{
						opacity: 1,
						x: 0,
						duration: 0.8,
						ease: "power3.out",
						scrollTrigger: {
							trigger: el,
							start: "top 95%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			// Section tracking
			NAV_ITEMS.forEach((item) => {
				ScrollTrigger.create({
					trigger: `#vdf-${item.id}`,
					start: "top center",
					end: "bottom center",
					onEnter: () => setActiveSection(item.id),
					onEnterBack: () => setActiveSection(item.id),
				});
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const scrollTo = (id: string) => {
		const element = document.getElementById(`vdf-${id}`);
		if (element) {
			const offset = 0; // Adjust if header height changes
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMenuOpen(false);
	};

	return (
		<div
			ref={containerRef}
			className="min-h-screen overflow-x-hidden text-white bg-[#0a0a0a] selection:bg-red-500/30 font-sans"
		>
			<div className="noise" />

			<Navigation
				activeSection={activeSection}
				isMenuOpen={isMenuOpen}
				setIsMenuOpen={setIsMenuOpen}
				scrollTo={scrollTo}
				navItems={NAV_ITEMS}
			/>

			<main className="relative z-10">
				<Hero
					scrollTo={scrollTo}
					navItems={NAV_ITEMS}
					activeSection={activeSection}
				/>
				<div className="mx-auto max-w-400">
					<Projects projects={projects} />
					<Skills skills={skills} />
					<About />
					<Contact />
				</div>
			</main>

			<Footer />
		</div>
	);
}
