import { useEffect, useRef } from "react";
import gsap from "gsap";

interface NavProps {
	activeSection: string;
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
	scrollTo: (id: string) => void;
	navItems: { id: string; label: string }[];
}

export default function Navigation({
	activeSection,
	isMenuOpen,
	setIsMenuOpen,
	scrollTo,
	navItems,
}: NavProps) {
	const menuRef = useRef<HTMLDivElement>(null);
	const menuOverlayRef = useRef<HTMLButtonElement>(null);
	const menuLinksRef = useRef<(HTMLButtonElement | null)[]>([]);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
			gsap.to(menuOverlayRef.current, {
				opacity: 1,
				pointerEvents: "auto",
				duration: 0.5,
				ease: "power3.out",
			});
			gsap.to(menuRef.current, {
				x: 0,
				duration: 0.6,
				ease: "power4.out",
			});
			gsap.fromTo(
				menuLinksRef.current,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					stagger: 0.1,
					ease: "power4.out",
					delay: 0.2,
				},
			);
		} else {
			document.body.style.overflow = "auto";
			gsap.to(menuRef.current, {
				x: "100%",
				duration: 0.5,
				ease: "power3.in",
			});
			gsap.to(menuOverlayRef.current, {
				opacity: 0,
				pointerEvents: "none",
				duration: 0.5,
				ease: "power3.in",
			});
		}
	}, [isMenuOpen]);

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-12 md:py-8 transition-all duration-300">
				<div className="absolute inset-0 bg-neutral-950/20 backdrop-blur-md border-b border-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<button
					type="button"
					onClick={() => scrollTo("hero")}
					className="relative z-10 text-2xl font-black tracking-tighter uppercase text-white mix-blend-difference"
				>
					CB<span className="text-red-500">.</span>
				</button>
				
				<div className="relative z-10 items-center hidden md:flex gap-10">
					{navItems.map((item) => (
						<button
							type="button"
							key={item.id}
							onClick={() => scrollTo(item.id)}
							className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-300 ${
								activeSection === item.id
									? "text-red-500"
									: "text-white/40 hover:text-white"
							} hover:tracking-[0.4em]`}
						>
							{item.label}
						</button>
					))}
				</div>

				<button
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="relative z-10 flex flex-col gap-1.5 md:hidden p-2 group"
					aria-label="Toggle Menu"
				>
					<span
						className={`w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? "rotate-45 translate-y-2 bg-red-500!" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? "opacity-0" : ""
						}`}
					/>
					<span
						className={`w-6 h-0.5 bg-white transition-all duration-300 ${
							isMenuOpen ? "-rotate-45 -translate-y-2 bg-red-500!" : ""
						}`}
					/>
				</button>
			</nav>

			<button
				type="button"
				ref={menuOverlayRef}
				className="fixed inset-0 z-50 transition-opacity pointer-events-none bg-neutral-950/90 backdrop-blur-md opacity-0 border-none w-full h-full text-transparent cursor-default"
				onClick={() => setIsMenuOpen(false)}
				aria-label="Close Menu"
			/>

			<div
				ref={menuRef}
				className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[400px] bg-neutral-900 z-50 translate-x-full flex flex-col justify-center px-12 border-l border-white/5"
			>
				<div className="flex flex-col gap-8">
					{navItems.map((item, index) => (
						<button
							type="button"
							key={item.id}
							ref={(el) => {
								menuLinksRef.current[index] = el;
							}}
							onClick={() => scrollTo(item.id)}
							className={`text-left text-3xl font-black uppercase tracking-tighter transition-colors duration-300 ${
								activeSection === item.id ? "text-red-500" : "text-white"
							}`}
						>
							<span className="mr-4 text-xs font-mono text-red-500/40">
								{String(index + 1).padStart(2, "0")}
							</span>
							{item.label}
						</button>
					))}
				</div>

				<div className="absolute bottom-12 left-12 right-12">
					<div className="w-full h-px mb-8 bg-white/5" />
					<div className="flex gap-6">
						<a
							href="https://github.com/corey-burns-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="opacity-50 hover:opacity-100 transition-opacity"
						>
							<img
								src="/icons/github.svg"
								alt="GitHub"
								className="w-6 h-6 invert"
							/>
						</a>
						<a
							href="https://linkedin.com/in/corey-burns"
							target="_blank"
							rel="noopener noreferrer"
							className="opacity-50 hover:opacity-100 transition-opacity"
						>
							<img
								src="/icons/linkedin.svg"
								alt="LinkedIn"
								className="w-6 h-6 invert"
							/>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
