import type { CARA_KERJA } from "@/lib/programs-content";

interface StepsSectionProps {
	steps: typeof CARA_KERJA;
}

export default function StepsSection({ steps }: StepsSectionProps) {
	return (
		<section className="px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
						Cara Mendaftar
					</h2>
					<p className="mt-2 text-sm text-muted-foreground">
						Empat langkah mudah untuk memulai perjalanan belajar bersama Momkiddy
					</p>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{steps.map(({ step, title, description }, i) => (
						<div key={step} className="relative flex flex-col items-center text-center">
							{/* Connector line */}
							{i < steps.length - 1 && (
								<div className="absolute top-6 left-[calc(50%+1.75rem)] hidden h-px w-[calc(100%-3.5rem)] bg-border lg:block" />
							)}

							{/* Step Number */}
							<div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
								<span className="text-sm font-bold text-primary">{step}</span>
							</div>

							{/* Content */}
							<h3 className="mt-4 text-sm font-semibold text-foreground">
								{title}
							</h3>
							<p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
								{description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
