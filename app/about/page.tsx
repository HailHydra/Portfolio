import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/page-shell";
import { achievements, capabilities, heroStats } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-between">
              <div>
                <p className="eyebrow">About</p>
                <h1 className="mt-4 text-4xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
                  AI engineer. builder. problem solver.
                </h1>
                <p className="mt-6 max-w-md text-sm leading-8 text-[var(--muted)]">
                  Based in Mumbai, I am building across LLM systems, machine learning, data workflows,
                  APIs, and web products. The visual slot for your portrait stays open until you send it.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="mono-button px-6 py-3 text-xs font-medium uppercase tracking-[0.2em]">
                  Contact Me <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden border-t border-[var(--line)] bg-[linear-gradient(180deg,#fafafa,#ededed)] sm:min-h-[560px]">
              <div className="absolute left-4 top-4 right-4 z-10 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-white/72">
                <span>About Me</span>
                <span>Portrait</span>
              </div>
              <Image
                src="/aditya-portrait.jpeg"
                alt="Portrait of Aditya Ghag"
                fill
                className="object-cover object-[58%_center] grayscale"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent px-5 pb-6 pt-20 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">Mumbai, Maharashtra</p>
                <p className="mt-3 text-3xl font-semibold uppercase leading-none sm:text-4xl">Aditya Ghag</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="paper-panel p-6 sm:p-8">
            <p className="eyebrow">Description Placeholder</p>
            <h2 className="mt-4 text-2xl font-semibold uppercase leading-none sm:text-4xl lg:text-5xl">
              Resume-aligned profile.
            </h2>
            <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
              B.Tech student in Artificial Intelligence and Machine Learning at SVKM D.J. Sanghvi College
              of Engineering, with experience at Ivana Tech and project work spanning LLM memory systems,
              speech AI, data analysis, and interactive web applications.
            </p>
          </article>

          <div className="grid gap-4">
            {heroStats.map((stat) => (
              <article key={stat.label} className="paper-panel p-5">
                <p className="text-3xl font-semibold uppercase leading-none">{stat.value}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{stat.label}</p>
              </article>
            ))}
            {capabilities.map((item) => (
              <article key={item.title} className="paper-panel p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{item.title}</p>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {achievements.map((item) => (
            <article key={item.title} className="paper-panel p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Recognition</p>
              <h3 className="mt-4 text-2xl font-semibold uppercase leading-none">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
