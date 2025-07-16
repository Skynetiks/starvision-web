import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GradientText({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<span
			className={cn(
				"animate-gradient bg-gradient-to-r from-logo-primary to-logo-secondary bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
				className,
			)}>
			{children}
		</span>
	);
}
