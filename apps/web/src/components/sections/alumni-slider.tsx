import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@momkiddis/ui/components/button";
import { cn } from "@momkiddis/ui/lib/utils";

export type AlumniReview = {
	id: string | number;
	name: string;
	batchLabel: string;
	quote: string;
	imageSrc: string;
	thumbnailSrc: string;
};

const imageVariants = {
	enter: (dir: "left" | "right") => ({
		y: dir === "right" ? "100%" : "-100%",
		opacity: 0,
	}),
	center: { y: 0, opacity: 1 },
	exit: (dir: "left" | "right") => ({
		y: dir === "right" ? "-100%" : "100%",
		opacity: 0,
	}),
};

const textVariants = {
	enter: (dir: "left" | "right") => ({
		x: dir === "right" ? 50 : -50,
		opacity: 0,
	}),
	center: { x: 0, opacity: 1 },
	exit: (dir: "left" | "right") => ({
		x: dir === "right" ? -50 : 50,
		opacity: 0,
	}),
};

interface AlumniSliderProps {
	reviews: AlumniReview[];
	className?: string;
}

export function AlumniSlider({ reviews, className }: AlumniSliderProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	const active = reviews[currentIndex];

	const handleNext = () => {
		setDirection("right");
		setCurrentIndex((p) => (p + 1) % reviews.length);
	};

	const handlePrev = () => {
		setDirection("left");
		setCurrentIndex((p) => (p - 1 + reviews.length) % reviews.length);
	};

	const handleThumb = (index: number) => {
		setDirection(index > currentIndex ? "right" : "left");
		setCurrentIndex(index);
	};

	const thumbnails = reviews.filter((_, i) => i !== currentIndex).slice(0, 3);

	return (
		<div
			className={cn(
				"relative w-full min-h-[620px] md:min-h-[560px] overflow-hidden rounded-2xl border border-border bg-card p-8 md:p-12",
				className,
			)}
		>
			<div className="grid h-full grid-cols-1 gap-8 md:grid-cols-12">
				{/* ── Left: counter + thumbnails ── */}
				<div className="order-2 flex flex-col justify-between md:order-1 md:col-span-3">
					<div className="flex flex-row justify-between space-x-4 md:flex-col md:justify-start md:space-x-0 md:space-y-4">
						<span className="font-mono text-sm text-muted-foreground">
							{String(currentIndex + 1).padStart(2, "0")} /{" "}
							{String(reviews.length).padStart(2, "0")}
						</span>
						<h2 className="hidden text-sm font-medium uppercase tracking-widest [writing-mode:vertical-rl] md:block rotate-180">
							Alumni
						</h2>
					</div>

					{/* Thumbnails */}
					<div className="mt-8 flex space-x-2 md:mt-0">
						{thumbnails.map((review) => {
							const idx = reviews.findIndex((r) => r.id === review.id);
							return (
								<button
									key={review.id}
									type="button"
									onClick={() => handleThumb(idx)}
									aria-label={`Lihat alumni ${review.name}`}
									className="h-20 w-16 overflow-hidden rounded-lg opacity-60 transition-opacity duration-300 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary md:h-24 md:w-20"
								>
									<img
										src={review.thumbnailSrc}
										alt={review.name}
										className="h-full w-full object-cover"
									/>
								</button>
							);
						})}
					</div>
				</div>

				{/* ── Center: main image ── */}
				<div className="relative order-1 h-80 min-h-[380px] md:order-2 md:col-span-4 md:min-h-[460px]">
					<AnimatePresence initial={false} custom={direction}>
						<motion.img
							key={currentIndex}
							src={active.imageSrc}
							alt={active.name}
							custom={direction}
							variants={imageVariants}
							initial="enter"
							animate="center"
							exit="exit"
							transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
							className="absolute inset-0 h-full w-full rounded-xl object-cover"
						/>
					</AnimatePresence>
				</div>

				{/* ── Right: text + navigation ── */}
				<div className="order-3 flex flex-col justify-between md:col-span-5 md:pl-8">
					<div className="relative min-h-[180px] overflow-hidden pt-4 md:pt-20">
						<AnimatePresence initial={false} custom={direction} mode="wait">
							<motion.div
								key={currentIndex}
								custom={direction}
								variants={textVariants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
							>
								<p className="text-sm font-medium text-muted-foreground">
									{active.batchLabel}
								</p>
								<h3 className="mt-1 text-xl font-semibold text-foreground">
									{active.name}
								</h3>
								<blockquote className="mt-6 text-xl font-medium leading-snug text-foreground md:text-2xl">
									"{active.quote}"
								</blockquote>
							</motion.div>
						</AnimatePresence>
					</div>

					{/* Nav buttons */}
					<div className="mt-8 flex items-center gap-2 md:mt-0">
						<Button
							variant="outline"
							size="icon"
							onClick={handlePrev}
							aria-label="Sebelumnya"
							className="h-12 w-12"
						>
							<ArrowLeft className="h-5 w-5" />
						</Button>
						<Button
							variant="default"
							size="icon"
							onClick={handleNext}
							aria-label="Berikutnya"
							className="h-12 w-12"
						>
							<ArrowRight className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
