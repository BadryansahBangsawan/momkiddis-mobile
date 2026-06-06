import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@momkiddis/ui/components/breadcrumb";
import { Link } from "@tanstack/react-router";
import { Fragment } from "react";

interface Crumb {
	label: string;
	to?: string;
}

interface PageHeroProps {
	title: string;
	subtitle?: string;
	breadcrumbs?: Crumb[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
	return (
		<section className="px-4 pb-5 pt-4">
			<div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#123d73] via-[#17689e] to-[#22a5bd] p-5 text-white shadow-[0_16px_38px_rgba(18,61,115,0.18)]">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<div>
						<Breadcrumb className="mb-3">
							<BreadcrumbList className="text-white/60">
								<BreadcrumbItem>
									<BreadcrumbLink
										className="text-white/65 hover:text-white"
										render={<Link to="/" />}
									>
										Beranda
									</BreadcrumbLink>
								</BreadcrumbItem>
								{breadcrumbs.map((crumb) => (
									<Fragment key={crumb.label}>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											{crumb.to ? (
												<BreadcrumbLink
													className="text-white/65 hover:text-white"
													render={<Link to={crumb.to} />}
												>
													{crumb.label}
												</BreadcrumbLink>
											) : (
												<BreadcrumbPage className="text-white">
													{crumb.label}
												</BreadcrumbPage>
											)}
										</BreadcrumbItem>
									</Fragment>
								))}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				)}
				<h1
					className="text-[1.65rem] font-black leading-tight tracking-[-0.035em] text-white"
				>
					{title}
				</h1>
				{subtitle && (
					<p className="mt-2 text-xs font-medium leading-relaxed text-white/72">
						{subtitle}
					</p>
				)}
			</div>
		</section>
	);
}
