export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="text-sm font-bold uppercase tracking-wider text-amber-accent-dark">
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            invert ? "text-slate-300" : "text-charcoal-700"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
