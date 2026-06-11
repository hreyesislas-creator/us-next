import { SectionHeading } from "./SectionHeading";
import { CallButton } from "./CallButton";

const services = [
  {
    title: "Handyman Repairs",
    desc: "Quick, dependable fixes for the everyday issues around your home.",
    icon: "🔧",
  },
  {
    title: "Home Remodeling",
    desc: "Transform rooms and full homes with quality craftsmanship.",
    icon: "🏗️",
  },
  {
    title: "Kitchen & Bathroom Remodeling",
    desc: "Modern, functional spaces built to fit your budget and style.",
    icon: "🚿",
  },
  {
    title: "Interior & Exterior Painting",
    desc: "Clean, even finishes that refresh and protect your home.",
    icon: "🎨",
  },
  {
    title: "Drywall Repair & Installation",
    desc: "Patches, repairs, and new walls finished smooth and ready.",
    icon: "🧱",
  },
  {
    title: "Flooring & Tile Installation",
    desc: "Tile, hardwood, laminate, and more installed to last.",
    icon: "🪵",
  },
  {
    title: "Fences, Decks & Porches",
    desc: "Outdoor builds that add comfort, privacy, and curb appeal.",
    icon: "🪚",
  },
  {
    title: "Concrete Driveways & Repairs",
    desc: "Durable driveways, walkways, and concrete repair work.",
    icon: "🛣️",
  },
  {
    title: "Landscaping & Outdoor Living",
    desc: "Yards and outdoor spaces designed for everyday enjoyment.",
    icon: "🌿",
  },
  {
    title: "Roofing, Siding & Windows",
    desc: "Protect and upgrade your home's exterior, inside and out.",
    icon: "🏚️",
  },
  {
    title: "Plumbing & Water Heater Installation",
    desc: "Reliable installs and repairs to keep water flowing.",
    icon: "🚰",
  },
  {
    title: "Junk Removal & Hauling",
    desc: "Clear clutter and debris fast, with no heavy lifting for you.",
    icon: "🚚",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Home Improvement Services We Can Help With"
          subtitle="One trusted local team for repairs, remodels, and everything in between."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-charcoal-700/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-2xl transition-colors group-hover:bg-amber-accent">
                <span aria-hidden="true">{service.icon}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy-950">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                {service.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Note + CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-amber-accent/20 bg-white p-8 text-center shadow-card sm:flex-row sm:justify-between sm:text-left">
          <p className="text-lg font-semibold text-navy-950">
            Don&apos;t see your project listed?{" "}
            <span className="text-charcoal-700 font-normal">
              Call us and ask — we likely handle it.
            </span>
          </p>
          <CallButton size="md" className="shrink-0" />
        </div>
      </div>
    </section>
  );
}
