import {
	Users,
	Gamepad2,
	Monitor,
	Heart,
	Target,
} from "lucide-react";
import type { KEUNGGULAN } from "@/lib/programs-content";

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
	Users: ({ className }) => <Users className={className} />,
	Gamepad2: ({ className }) => <Gamepad2 className={className} />,
	Monitor: ({ className }) => <Monitor className={className} />,
	Heart: ({ className }) => <Heart className={className} />,
	Target: ({ className }) => <Target className={className} />,
};

interface KeunggulanSectionProps {
	items: typeof KEUNGGULAN;
}

export default function KeunggulanSection({ items }: KeunggulanSectionProps) {
	return (
		<section className="bg-primary px-4 py-16 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-7xl">
				<div className="text-center">
					<h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">
						Mengapa Memilih Momkiddy?
					</h2>
					<p className="mt-2 text-sm text-primary-foreground/75">
						Lima keunggulan yang membuat Momkiddy berbeda dari lembaga lain
					</p>
				</div>

				<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
					{items.map(({ icon, title, description }, i) => {
						const Icon = ICON_MAP[icon];
						return (
							<div
								key={title}
								className="flex gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm"
								style={{ animationDelay: `${i * 60}ms` }}
							>
								<div className="mt-0.5 shrink-0 rounded-lg bg-white/20 p-2">
									{Icon && <Icon className="size-4 text-primary-foreground" />}
								</div>
								<div>
									<h3 className="text-sm font-semibold text-primary-foreground">
										{title}
									</h3>
									<p className="mt-1 text-xs leading-relaxed text-primary-foreground/75">
										{description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
