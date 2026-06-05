import { motion } from "framer-motion";
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
		<section className="border-b bg-muted/30 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
			<div className="mx-auto max-w-7xl">
				{breadcrumbs && breadcrumbs.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
					>
						<Breadcrumb className="mb-4">
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink render={<Link to="/" />}>Beranda</BreadcrumbLink>
								</BreadcrumbItem>
								{breadcrumbs.map((crumb) => (
									<Fragment key={crumb.label}>
										<BreadcrumbSeparator />
										<BreadcrumbItem>
											{crumb.to ? (
												<BreadcrumbLink render={<Link to={crumb.to} />}>
													{crumb.label}
												</BreadcrumbLink>
											) : (
												<BreadcrumbPage>{crumb.label}</BreadcrumbPage>
											)}
										</BreadcrumbItem>
									</Fragment>
								))}
							</BreadcrumbList>
						</Breadcrumb>
					</motion.div>
				)}
				<motion.h1
					className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
				>
					{title}
				</motion.h1>
				{subtitle && (
					<motion.p
						className="mt-2 max-w-2xl text-base text-muted-foreground"
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
					>
						{subtitle}
					</motion.p>
				)}
			</div>
		</section>
	);
}
