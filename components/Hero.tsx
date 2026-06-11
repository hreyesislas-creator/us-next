import { CallButton } from "./CallButton";
import { CheckIcon } from "./icons";

const trustBullets = [
  "Free no-obligation estimates",
  "Transparent pricing",
  "Fast response time",
  "Local home improvement professionals",
];

const visualCards = [
  { title: "Repairs", emoji: "🛠️" },
  { title: "Remodeling", emoji: "🏠" },
  { title: "Outdoor Projects", emoji: "🌳" },
  { title: "Home Improvements", emoji: "✨" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-navy-700/40 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-amber-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-10%,rgba(27,49,104,0.55),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-accent" />
            Local Home Improvement Pros
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Reliable Handyman &amp; Remodeling Services{" "}
            <span className="text-amber-accent">You Can Actually Count On</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            From small repairs to full home improvement projects, U.S. Next
            helps homeowners get quality work done fast, clean, and with
            transparent pricing.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton size="lg" />
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {trustBullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-center gap-2.5 text-sm font-medium text-slate-200"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-accent/15 text-amber-accent">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {visualCards.map((card, i) => (
              <div
                key={card.title}
                className={`group flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${
                  i % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <span
                  aria-hidden="true"
                  className="text-3xl sm:text-4xl"
                >
                  {card.emoji}
                </span>
                <span className="mt-8 text-base font-bold tracking-tight text-white sm:mt-12 sm:text-lg">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/10 bg-navy-900 px-5 py-3 shadow-xl shadow-navy-950/50">
            <div className="flex flex-col">
              <span className="text-lg font-extrabold leading-none text-amber-accent">
                One Call
              </span>
              <span className="text-xs text-slate-300">
                Many home projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
