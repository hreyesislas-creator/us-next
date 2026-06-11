import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-950/95 p-3 backdrop-blur lg:hidden">
      <Link
        href={site.phoneHref}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-amber-accent px-6 py-3.5 text-base font-bold tracking-tight text-navy-950 shadow-[var(--shadow-cta)] transition-colors active:bg-amber-accent-dark"
        aria-label={`Call U.S. Next at ${site.phoneDisplay}`}
      >
        <PhoneIcon className="h-5 w-5" />
        Call Now: {site.phoneDisplay}
      </Link>
    </div>
  );
}
