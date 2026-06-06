import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
	return (
		<footer className="px-5 pb-7 pt-3 text-center">
			<div className="flex items-center justify-center gap-2">
				<img
					src="/circle-logo.png"
					alt=""
					className="size-7 rounded-xl bg-orange-50"
				/>
				<p className="text-xs font-black text-slate-700">Momkiddis Indonesia</p>
			</div>
			<div className="mt-3 flex items-center justify-center gap-4 text-[0.62rem] font-bold text-slate-400">
				<Link to="/programs">Course</Link>
				<Link to="/kontak">Contact</Link>
				<span>&copy; {new Date().getFullYear()}</span>
			</div>
		</footer>
	);
}
