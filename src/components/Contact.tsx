export default function Contact() {
	return (
		<section
			id="vdf-contact"
			className="min-h-screen flex items-center justify-center bg-neutral-950 px-8 py-32 relative overflow-hidden"
		>
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[160px] animate-pulse" />
				<div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[140px]" />
			</div>
			<div className="relative z-10 w-full max-w-4xl text-center vdf-reveal">
				<p className="mb-6 font-mono text-sm tracking-[0.5em] text-red-500 uppercase">
					Available for opportunities
				</p>
				<h3 className="mb-12 text-6xl font-black tracking-tight uppercase md:text-9xl leading-[0.9]">
					Let's Build
					<br />
					<span className="text-transparent outline-title [-webkit-text-stroke:1px_white]">
						Something
					</span>
					<br />
					Great.
				</h3>

				<div className="flex flex-col items-center gap-12 mt-20">
					<a
						href="mailto:coreyburns@outlook.com"
						className="group relative inline-flex items-center gap-6 px-12 py-6 text-xl md:text-2xl font-bold tracking-tighter text-white uppercase transition-all duration-500 bg-red-600 hover:bg-red-700 hover:-translate-y-1"
					>
						<span className="relative z-10">coreyburns@outlook.com</span>
						<div className="absolute inset-0 w-full h-full bg-red-800 translate-x-3 translate-y-3 -z-10 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
					</a>

					<div className="flex flex-wrap justify-center gap-12 mt-8">
						<a
							href="https://github.com/corey-burns-dev"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-4 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110 group/social"
						>
							<div className="p-4 border rounded-full border-white/10 group-hover/social:border-white/30 group-hover/social:bg-white/5">
								<img
									src="/icons/github.svg"
									alt="GitHub"
									className="w-8 h-8 invert"
								/>
							</div>
							<span className="font-mono text-xs tracking-widest uppercase">
								GitHub
							</span>
						</a>
						<a
							href="https://linkedin.com/in/corey-burns"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center gap-4 transition-all duration-300 opacity-50 hover:opacity-100 hover:scale-110 group/social"
						>
							<div className="p-4 border rounded-full border-white/10 group-hover/social:border-white/30 group-hover/social:bg-white/5">
								<img
									src="/icons/linkedin.svg"
									alt="LinkedIn"
									className="w-8 h-8 invert"
								/>
							</div>
							<span className="font-mono text-xs tracking-widest uppercase">
								LinkedIn
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
