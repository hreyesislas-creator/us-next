import { SectionHeading } from "./SectionHeading";

const reasons = [
  {
    title: "Clear Communication",
    desc: "You always know what's happening, what it costs, and when it's done.",
    icon: "💬",
  },
  {
    title: "Fast Scheduling",
    desc: "Quick response times and appointments that fit your schedule.",
    icon: "⚡",
  },
  {
    title: "Honest, Transparent Pricing",
    desc: "Straightforward estimates with no surprise fees or upselling.",
    icon: "💲",
  },
  {
    title: "Quality Workmanship",
    desc: "Careful, professional work done right the first time.",
    icon: "🏅",
  },
  {
    title: "No-Pressure Estimates",
    desc: "Free, no-obligation estimates so you can decide with confidence.",
    icon: "🤝",
  },
  {
    title: "One Call for Many Home Projects",
    desc: "Skip juggling contractors — we handle a wide range of work.",
    icon: "📞",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Us"
          title="Why Homeowners Choose U.S. Next"
          subtitle="We make home projects simple, trustworthy, and stress-free from the first call."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex gap-4 rounded-2xl border border-charcoal-700/5 bg-sand-50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-2xl">
                <span aria-hidden="true">{reason.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-navy-950">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal-700">
                  {reason.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
