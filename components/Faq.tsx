"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { CallButton } from "./CallButton";
import { ChevronDownIcon } from "./icons";
import { faqs } from "@/lib/faqs";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-sand-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to what homeowners ask us most."
        />

        <div className="mt-12 divide-y divide-charcoal-700/10 overflow-hidden rounded-2xl border border-charcoal-700/5 bg-white shadow-card">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sand-50"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-navy-950 sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-amber-accent-dark transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-base leading-relaxed text-charcoal-700">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-charcoal-700">
            Still have questions? We&apos;re happy to help.
          </p>
          <div className="mt-4 flex justify-center">
            <CallButton size="md" />
          </div>
        </div>
      </div>
    </section>
  );
}
