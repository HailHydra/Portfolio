import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/page-shell";
import { achievements, faqs, projects, services, timeline } from "@/lib/site-data";

export default function Home() {
  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <div className="flex flex-col gap-2 border-b border-[var(--line)] pb-4 text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
            <span>Personal Portfolio</span>
            <span className="max-w-full text-left sm:text-right">AI Engineer / Machine Learning / Web Development</span>
          </div>

          <div className="relative min-h-[640px] overflow-hidden px-2 pb-8 pt-8 sm:px-6 lg:min-h-[860px]">
            <div className="pointer-events-none absolute inset-x-0 top-16 text-center sm:top-20">
              <p className="text-[3.2rem] font-semibold uppercase leading-none tracking-[-0.08em] text-black sm:text-[6rem] lg:text-[11rem]">
                Think
              </p>
              <p className="display-outline -mt-2 text-[3.2rem] font-semibold uppercase leading-none tracking-[-0.08em] sm:-mt-3 sm:text-[6rem] lg:text-[11rem]">
                In Systems
              </p>
            </div>

            <div className="relative z-10 grid gap-6 pt-20 sm:pt-24 lg:grid-cols-[0.28fr_0.44fr_0.28fr] lg:items-end">
              <div className="order-2 self-end lg:order-1">
                <div className="max-w-xs">
                  <p className="eyebrow">Selected Focus</p>
                  <h2 className="mt-4 text-3xl font-semibold uppercase leading-none sm:text-4xl">
                    AI systems with product-ready execution.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    I build LLM workflows, machine learning projects, and supporting software systems,
                    while using web development as one delivery layer for interactive products.
                  </p>
                </div>
              </div>

              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative h-[360px] w-full max-w-[520px] sm:h-[500px] lg:h-[680px]">
                  <div className="absolute left-1/2 top-8 h-[64%] w-[52%] -translate-x-[18%] rounded-[10rem] border border-[var(--line)] bg-[linear-gradient(180deg,#d9d9d9,#8f8f8f)] opacity-55 grayscale" />
                  <div className="absolute left-1/2 top-[18%] h-[72%] w-[56%] -translate-x-1/2 rounded-[3rem] border border-black bg-[linear-gradient(180deg,#373737,#0f0f0f)] shadow-[0_30px_80px_rgba(0,0,0,0.16)]" />
                  <div className="absolute inset-x-[20%] bottom-0 h-[78%] rounded-t-[12rem] border border-black bg-[linear-gradient(180deg,#181818,#050505)]" />
                  <div className="absolute left-1/2 top-[14%] h-24 w-24 -translate-x-1/2 rounded-full border border-[rgba(255,255,255,0.45)]" />
                  <div className="absolute bottom-6 left-1/2 w-[74%] -translate-x-1/2 border-t border-[rgba(255,255,255,0.18)]" />
                </div>
              </div>

              <div className="order-3 lg:self-end">
                <div className="ml-auto max-w-xs">
                  <p className="eyebrow">Current Season</p>
                  <h2 className="mt-4 text-3xl font-semibold uppercase leading-none sm:text-4xl">
                    AI Engineer Profile
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    LLM systems, machine learning, and full-stack delivery brought together in one concise,
                    editorial portfolio built around your actual resume and project work.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex flex-wrap gap-3 lg:mt-0">
              <Link href="/projects" className="mono-button px-6 py-3 text-xs font-medium uppercase tracking-[0.2em]">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="mono-button-secondary px-6 py-3 text-xs font-medium uppercase tracking-[0.2em]"
              >
                Open About
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="paper-panel p-6 sm:p-8">
            <p className="eyebrow">Direction</p>
            <h2 className="mt-4 text-3xl font-semibold uppercase leading-none sm:text-5xl">
              AI engineering first. Web development as a subset.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="paper-panel p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{service.title}</p>
                <p className="mt-6 text-sm leading-7 text-[var(--muted)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="editorial-frame p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.34fr_0.66fr]">
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="mt-4 text-4xl font-semibold uppercase leading-none sm:text-6xl">
                Selected work
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`border-t border-[var(--line)] p-5 ${index === 1 ? "bg-black text-white" : "bg-[var(--paper)]"
                    }`}
                >
                  <p
                    className={`text-xs uppercase tracking-[0.22em] ${index === 1 ? "text-white/60" : "text-[var(--muted)]"
                      }`}
                  >
                    {project.stack.join(" / ")}
                  </p>
                  <h3 className="mt-6 text-2xl font-semibold uppercase leading-none">{project.title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/70" : "text-[var(--muted)]"}`}>
                    {project.summary}
                  </p>
                  <p className={`mt-8 text-xs uppercase tracking-[0.22em] ${index === 1 ? "text-white" : "text-black"}`}>
                    {project.outcome}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="editorial-frame p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">About Preview</p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[0.58fr_0.42fr]">
              <div>
                <h2 className="text-3xl font-semibold uppercase leading-none sm:text-5xl lg:text-6xl">
                  AI engineer. builder. problem solver.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--muted)]">
                  I build across LLM systems, machine learning, data workflows, APIs, and web products
                </p>
                <Link href="/about" className="mono-button mt-8 px-6 py-3 text-xs font-medium uppercase tracking-[0.2em]">
                  Go to About <ArrowRight size={16} />
                </Link>
              </div>

              <div className="paper-panel relative min-h-[320px] overflow-hidden">
                <Image
                  src="/aditya-portrait.jpeg"
                  alt="Portrait of Aditya Ghag"
                  fill
                  className="object-cover object-center grayscale"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/70">About Preview</p>
                  <p className="mt-3 text-2xl font-semibold uppercase leading-none">Aditya Ghag</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {timeline.map((item) => (
              <article key={item.title} className="paper-panel p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{item.period}</p>
                <h3 className="mt-4 text-2xl font-semibold uppercase leading-none">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.company}</p>
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
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">Achievement</p>
              <h3 className="mt-4 text-2xl font-semibold uppercase leading-none">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((item) => (
            <article key={item.question} className="paper-panel p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">FAQ</p>
              <h3 className="mt-4 text-2xl font-semibold uppercase leading-none">{item.question}</h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
