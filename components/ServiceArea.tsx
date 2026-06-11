import { CallButton } from "./CallButton";
import { MapPinIcon } from "./icons";

export function ServiceArea() {
  return (
    <section id="service-area" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-14 text-center text-white shadow-xl sm:px-12 lg:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-accent/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-navy-700/40 blur-3xl" />
          </div>

          <div className="relative">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-accent/15 text-amber-accent">
              <MapPinIcon className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Serving Local Homeowners
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">
              U.S. Next provides handyman, remodeling, and home improvement
              services for homeowners in the local service area.
            </p>
            <p className="mt-6 text-base font-semibold text-amber-accent">
              Call today to confirm availability in your area.
            </p>
            <div className="mt-8 flex justify-center">
              <CallButton size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
