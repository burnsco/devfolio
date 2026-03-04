export default function About() {
	return (
		<section id="vdf-about" className="relative px-8 py-32 lg:px-24 overflow-hidden">
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
			<div className="grid items-center gap-20 vdf-reveal lg:grid-cols-2">
				<div className="order-2 lg:order-1">
					<p className="mb-4 font-mono text-xs tracking-[0.4em] text-red-500 uppercase font-bold">
						The Person Behind the Code
					</p>
					<h2 className="mb-10 text-6xl font-black tracking-tighter uppercase md:text-8xl">
						About <span className="outline-title">Me</span>
					</h2>
					<div className="space-y-8 text-lg leading-relaxed text-neutral-400 font-medium">
						<p className="relative">
							<span className="absolute -left-6 top-0 text-red-500/20 text-4xl font-black">"</span>
							I am a full-stack developer who lives at the intersection of
							technical precision and aesthetic design. My expertise spans from
							architecting robust systems to crafting fluid, high-fidelity user
							interfaces, always aiming to blend deep-level engineering with a
							polished, modern feel.
						</p>
						<p>
							My journey started in the terminal, long before I ever touched a
							web browser. Operating Linux-based IRC and FTP servers was my
							introduction to the world of system orchestration and digital
							infrastructure. That early hands-on experience still informs my
							work today as I build modern applications with Next.js, React, and
							TypeScript.
						</p>
						<p>
							I'm especially passionate about the visual and interactive side of
							development. I believe that a great site should be as beautiful as
							it is functional, so I dedicate a lot of my focus to creating
							seamless, intuitive frontends. Bridging the gap between a
							rock-solid backend and a stunning user experience is what drives
							my creative process.
						</p>
						<p className="text-base text-neutral-500 italic">
							When I'm not writing code or managing systems, you can find me
							exploring the worlds of anime, diving into great TV and movies, or
							gaming on my Steam Deck. I also believe in maintaining a healthy
							balance by staying active through biking, hiking, and hitting the
							gym.
						</p>
					</div>
				</div>
				<div className="relative vdf-reveal order-1 lg:order-2">
					<div className="relative group">
						<div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-neutral-900 grayscale hover:grayscale-0 transition-all duration-700">
							<img
								src="/images/photo.jpg"
								alt="Portrait of Corey Burns"
								width={627}
								height={639}
								loading="lazy"
								decoding="async"
								className="object-cover object-center w-full h-full scale-105 group-hover:scale-100 transition-transform duration-700"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-transparent to-red-500/5" />
						</div>
						<div className="absolute -inset-4 border border-red-500/20 rounded-lg -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
					</div>
				</div>
			</div>
		</section>
	);
}
