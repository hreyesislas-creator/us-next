import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

type Variant = "primary" | "light" | "outline";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-accent/40 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber-accent text-navy-950 hover:bg-amber-accent-dark hover:text-white shadow-[var(--shadow-cta)] hover:shadow-[0_10px_30px_-6px_rgba(217,119,6,0.6)]",
  light:
    "bg-white text-navy-900 hover:bg-sand-100 shadow-card hover:shadow-card-hover",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-navy-900",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function CallButton({
  variant = "primary",
  size = "md",
  className = "",
  label,
  showPrefix = true,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  showPrefix?: boolean;
}) {
  return (
    <Link
      href={site.phoneHref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={`Call U.S. Next at ${site.phoneDisplay}`}
    >
      <PhoneIcon className="h-[1.1em] w-[1.1em] shrink-0" />
      <span>
        {label ?? (
          <>
            {showPrefix && <span className="font-bold">Call Now: </span>}
            {site.phoneDisplay}
          </>
        )}
      </span>
    </Link>
  );
}
