import { useEffect, useState } from "react";

interface SideNavProps {
	navItems: { id: string; label: string }[];
}

export default function SideNav({ navItems }: SideNavProps) {
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleSectionChange = (e: any) => {
			setActiveSection(e.detail);
		};
		window.addEventListener("sectionChange", handleSectionChange);
		return () => window.removeEventListener("sectionChange", handleSectionChange);
	}, []);

	const scrollTo = (id: string) => {
		const event = new CustomEvent("scrollTo", { detail: id });
		window.dispatchEvent(event);
	};

	return (
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
	);
}
