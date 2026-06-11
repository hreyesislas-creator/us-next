import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Footer } from "./Footer";
import { CallButton } from "./CallButton";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-50 bg-navy-950">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link
            href="/"
            className="flex items-center"
            aria-label="U.S. Next — Home"
          >
            <Image
              src="/images/logo.png"
              alt="U.S. Next — You dream it, we build it."
              width={48}
              height={48}
              priority
              className="h-10 w-10 lg:h-12 lg:w-12"
            />
          </Link>
          <CallButton size="sm" label={`Call ${site.phoneDisplay}`} />
        </div>
      </header>

      <main className="bg-sand-50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/"
            className="text-sm font-semibold text-amber-accent-dark hover:underline"
          >
            &larr; Back to home
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-950 sm:text-5xl">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-3 text-sm text-charcoal-700">
              Last updated: {lastUpdated}
            </p>
          )}
          <div className="legal-prose mt-10">{children}</div>

          <div className="mt-14 rounded-2xl border border-amber-accent/20 bg-white p-8 text-center shadow-card">
            <p className="text-lg font-semibold text-navy-950">
              Have a question or a project in mind?
            </p>
            <div className="mt-5 flex justify-center">
              <CallButton size="md" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
