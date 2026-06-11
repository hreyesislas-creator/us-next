import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { src: "/images/project-1.jpg", label: "Kitchen Remodel" },
  { src: "/images/project-2.jpg", label: "Bathroom Renovation" },
  { src: "/images/project-3.jpg", label: "Deck & Outdoor Build" },
  { src: "/images/project-4.jpg", label: "Interior Painting" },
];

export function Gallery() {
  return (
    <section className="bg-navy-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Real Work. Real Results."
          subtitle="A look at the kind of quality home projects U.S. Next delivers for local homeowners."
          invert
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {projects.map((project) => (
            <figure
              key={project.src}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 shadow-xl"
            >
              <Image
                src={project.src}
                alt={`U.S. Next project — ${project.label}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className="text-sm font-bold text-white">
                  {project.label}
                </span>
                <span className="mt-0.5 block text-xs text-slate-400">
                  Sample project
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Photos shown are sample placeholders. Real project photos will be
          added here soon.
        </p>
      </div>
    </section>
  );
}
