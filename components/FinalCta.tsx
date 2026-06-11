import { CallButton } from "./CallButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-accent to-amber-accent-dark py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.25),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl lg:text-[2.75rem]">
          Need Help With a Home Project?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg font-medium leading-relaxed text-navy-900/80">
          Call U.S. Next today and schedule a free no-obligation estimate.
        </p>
        <div className="mt-8 flex justify-center">
          <CallButton variant="light" size="lg" label="Call (512) 986-0287" />
        </div>
      </div>
    </section>
  );
}
