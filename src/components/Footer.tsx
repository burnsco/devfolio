export default function Footer() {
	return (
		<footer className="px-8 py-12 bg-neutral-950 border-t border-white/5">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
				<p>© {new Date().getFullYear()} Corey Burns</p>
				<p>Built with Astro & GSAP</p>
				<p>Crafted in Canada</p>
			</div>
		</footer>
	);
}
