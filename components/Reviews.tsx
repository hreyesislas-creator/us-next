import { SectionHeading } from "./SectionHeading";
import { StarIcon } from "./icons";

const reviews = [
  {
    quote: "Professional, fast, and easy to work with.",
    name: "Homeowner Review",
    detail: "Verified customer placeholder",
  },
  {
    quote: "Great communication and fair pricing.",
    name: "Homeowner Review",
    detail: "Verified customer placeholder",
  },
  {
    quote:
      "They helped us get multiple projects done without the stress.",
    name: "Homeowner Review",
    detail: "Verified customer placeholder",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted for Home Repairs & Improvement Projects"
          subtitle="What homeowners value most about working with U.S. Next."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-charcoal-700/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div
                className="flex gap-1 text-amber-accent"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg font-medium leading-relaxed text-navy-950">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-charcoal-700/10 pt-4">
                <span className="block text-sm font-bold text-navy-950">
                  {review.name}
                </span>
                <span className="block text-xs text-charcoal-700">
                  {review.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-charcoal-700">
          Reviews shown are placeholders and will be replaced with real
          customer reviews as they are collected.
        </p>
      </div>
    </section>
  );
}
