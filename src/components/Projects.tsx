import type { CSSProperties } from "react";

interface Project {
	id: string;
	title: string;
	category: string;
	color: string;
	tech: string;
	description: string;
	url: string;
	repo: string;
}

interface ProjectsProps {
	projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
	return (
		<section id="vdf-projects" className="px-8 py-32 lg:px-24">
			<div className="flex items-end justify-between mb-20 vdf-reveal">
				<div>
					<p className="mb-2 font-mono text-sm tracking-widest text-red-500 uppercase">
						Featured Work
					</p>
					<h2 className="text-5xl font-black tracking-tighter uppercase md:text-7xl">
						Projects
					</h2>
				</div>
				<p className="hidden font-mono text-sm md:block text-neutral-500">
					{String(projects.length).padStart(2, "0")} Selected
				</p>
			</div>
			<div className="flex flex-col gap-24">
				{projects.map((project) => (
					<div
						key={project.id}
						className="relative w-full p-0 pt-12 text-left bg-transparent border-t vdf-reveal group border-neutral-800"
						style={{ "--project-color": project.color } as CSSProperties}
					>
						<div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
							<div className="text-left bg-transparent border-none vdf-skew grow">
								<div className="flex items-center justify-between gap-4 mb-4">
									<span className="font-mono text-sm text-red-500">
										{project.id}
									</span>
									<a
										href={project.repo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3 px-4 py-2 transition-all duration-300 border rounded-full border-white/10 hover:border-white/40 hover:bg-white/5 group/repo"
										title="View Repository"
									>
										<img
											src="/icons/github.svg"
											alt="GitHub"
											className="w-5 h-5 transition-opacity opacity-50 group-hover/repo:opacity-100 invert"
										/>
										<span className="font-mono text-xs tracking-widest uppercase text-neutral-500 group-hover/repo:text-white">
											Repository
										</span>
									</a>
								</div>
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group/title block w-full"
								>
									<h3 className="text-5xl font-black tracking-tighter uppercase transition-all duration-500 md:text-8xl group-hover/title:translate-x-4 text-white [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover/title:[-webkit-text-stroke:0px] group-hover/title:text-(--project-color)">
										{project.title}
									</h3>
								</a>
								<p className="max-w-xl mt-6 text-lg leading-relaxed text-neutral-400 font-medium">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mt-6">
									{project.tech.split(" · ").map((t) => (
										<span key={t} className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase border border-white/10 rounded-full text-neutral-500 bg-white/5">
											{t}
										</span>
									))}
								</div>
							</div>
							<div className="text-right vdf-skew shrink-0 md:mb-2">
								<p className="text-xl font-bold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors duration-300">
									{project.category}
								</p>
								<div
									className="h-[1px] mt-4 transition-all duration-700 ease-out bg-(--project-color) w-0 group-hover:w-full"
									style={{ backgroundColor: project.color }}
								/>
							</div>
						</div>
						<div
							className="absolute inset-0 transition-all duration-700 opacity-0 -z-10 group-hover:opacity-[0.03] bg-(--project-color) blur-3xl rounded-full scale-50 group-hover:scale-110"
							style={{ backgroundColor: project.color }}
						/>
					</div>
				))}
			</div>
		</section>
	);
}
