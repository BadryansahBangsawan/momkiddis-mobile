const STATS = [
	{ value: "500+", label: "Ibu Terlatih" },
	{ value: "5", label: "Program Unggulan" },
	{ value: "20+", label: "Batch Selesai" },
	{ value: "4.9/5", label: "Rating Peserta" },
] as const;

export default function StatsBar() {
	return (
		<section className="border-y bg-muted/30 px-4 py-6 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{STATS.map(({ value, label }, i) => (
						<div
							key={label}
							className="flex flex-col items-center text-center"
							style={{ animationDelay: `${i * 80}ms` }}
						>
							<span className="text-2xl font-bold text-primary sm:text-3xl">
								{value}
							</span>
							<span className="mt-0.5 text-xs text-muted-foreground">
								{label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
