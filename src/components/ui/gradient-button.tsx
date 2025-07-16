import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

export default function AnimatedGradientButton({
  children,
  className,
  onClick,
  borderColor,
}: {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  borderColor?: string;
}) {
  const gradientColors = borderColor ? borderColor : "bg-gradient";

  return (
    <div
      onClick={onClick}
      className={cn(
        className,
        "w-full md:w-auto hover:-translate-y-0.5 transition duration-200 hover:cursor-pointer group relative flex max-w-fit flex-row items-center justify-center rounded-full bg-white/40 px-4 py-2.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40"
      )}
    >
      <div
        className={cn(
          gradientColors,
          "absolute inset-0 block h-full w-full bg-[length:var(--bg-size)_100%] animate-gradient p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
        )}
      />
      {children}
    </div>
  );
}
