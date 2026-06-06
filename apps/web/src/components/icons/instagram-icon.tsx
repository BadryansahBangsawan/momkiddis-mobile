interface InstagramIconProps {
	className?: string;
}

export function InstagramIcon({ className }: InstagramIconProps) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.9"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			aria-hidden="true"
		>
			<rect x="3" y="3" width="18" height="18" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}
