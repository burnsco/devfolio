interface SkillGroup {
	category: string;
	items: { name: string; icon: string }[];
}

interface SkillsProps {
	skills: SkillGroup[];
}

export default function Skills({ skills }: SkillsProps) {
	return (
		<section
			id="vdf-skills"
			className="px-8 py-20 lg:px-24 bg-neutral-950 border-y border-white/5"
		>
			<div className="mb-12 vdf-reveal">
				<p className="mb-2 font-mono text-sm tracking-widest text-red-500 uppercase">
					Capabilities
				</p>
				<h2 className="text-4xl font-black tracking-tighter uppercase md:text-6xl">
					Skills
				</h2>
			</div>
			<div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
				{skills.map((group) => (
					<div key={group.category} className="vdf-reveal">
						<h3 className="pb-3 mb-6 font-mono text-[10px] tracking-[0.4em] text-red-500 uppercase border-b border-white/5 font-bold">
							{group.category}
						</h3>
						<ul className="grid grid-cols-3 gap-3">
							{group.items.map((skill) => (
								<li
									key={skill.name}
									className="vdf-stagger group/skill"
									title={skill.name}
								>
									<div className="relative flex flex-col items-center justify-center p-3 transition-all duration-500 rounded-lg bg-white/[0.02] border border-white/[0.03] hover:border-white/10 hover:bg-white/[0.05] group-hover/skill:-translate-y-1">
										<img
											src={skill.icon}
											alt=""
											aria-hidden="true"
											loading="lazy"
											className="object-contain w-8 h-8 mb-2 transition-all duration-500 group-hover/skill:scale-110 grayscale group-hover/skill:grayscale-0 opacity-40 group-hover/skill:opacity-100"
										/>
										<span className="text-[9px] leading-tight text-center uppercase tracking-widest text-neutral-600 group-hover/skill:text-neutral-200 transition-colors duration-500">
											{skill.name}
										</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
