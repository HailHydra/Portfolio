"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageShell from "@/components/page-shell";
import { faqs } from "@/lib/site-data";

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
            Cleaner questions. More breathing room.
          </h1>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="mx-auto max-w-5xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={faq.question}
                className={`overflow-hidden border-t ${
                  isOpen ? "border-black bg-black text-white" : "border-[var(--line)] bg-white/75 text-black"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-xl font-semibold uppercase leading-none sm:text-2xl">{faq.question}</span>
                  <ChevronDown size={20} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`px-6 sm:px-8 ${isOpen ? "pb-6 sm:pb-8" : "hidden"}`}>
                  <p className={`max-w-3xl text-sm leading-8 ${isOpen ? "text-white/74" : "text-[var(--muted)]"}`}>
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
