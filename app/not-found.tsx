import Link from "next/link";
import { CallButton } from "@/components/CallButton";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-6 text-center text-white">
      <span className="text-sm font-bold uppercase tracking-wider text-amber-accent">
        404
      </span>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on track — or give us a call.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <CallButton size="md" />
        <Link
          href="/"
          className="text-sm font-semibold text-slate-200 underline-offset-4 hover:text-amber-accent hover:underline"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
