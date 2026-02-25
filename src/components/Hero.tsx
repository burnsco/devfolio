interface HeroProps {
	scrollTo: (id: string) => void;
	navItems: { id: string; label: string }[];
	activeSection: string;
}

export default function Hero({ scrollTo, navItems, activeSection }: HeroProps) {
	return (
		<header
			id="vdf-hero"
			className="relative flex flex-col justify-center h-screen px-8 pt-20 lg:px-24"
		>
			<div className="absolute flex-col hidden gap-4 -translate-y-1/2 top-1/2 right-12 xl:flex">
				{navItems.map((item) => (
					<button
						type="button"
						key={item.id}
						onClick={() => scrollTo(item.id)}
						className="group flex items-center gap-4 text-right"
					>
						<span className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-all duration-300 ${
							activeSection === item.id ? "text-red-500 opacity-100" : "text-white opacity-0 group-hover:opacity-40"
						}`}>
							{item.label}
						</span>
						<div className={`w-12 h-px transition-all duration-500 ${
							activeSection === item.id ? "bg-red-500 w-16" : "bg-white/10 group-hover:bg-white/30"
						}`} />
					</button>
				))}
			</div>
			<p className="vdf-reveal text-red-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-8 opacity-80">
				Full-Stack Developer & Systems Enthusiast
			</p>
			<h1 className="vdf-reveal text-[13vw] lg:text-[11vw] leading-[0.8] font-black tracking-tighter uppercase mb-4">
				Corey
				<br />
				<span className="outline-title">Burns</span>
			</h1>
			<div className="vdf-reveal flex items-center gap-6 mt-12">
				<div className="w-16 h-px bg-red-500" />
				<p className="max-w-md uppercase tracking-[0.2em] text-[11px] leading-relaxed text-neutral-500 font-medium">
					Crafting digital experiences where performance meets precision.
				</p>
			</div>
			<div className="flex gap-6 mt-8">
				<button
					type="button"
					onClick={() => scrollTo("projects")}
					className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-colors duration-300 transform bg-red-600 hover:bg-red-700 hover:-skew-x-6"
				>
					View Work
				</button>
				<button
					type="button"
					onClick={() => scrollTo("contact")}
					className="px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-all duration-300 border border-white/20 hover:border-red-500 hover:text-red-500"
				>
					Contact
				</button>
			</div>
		</header>
	);
}
