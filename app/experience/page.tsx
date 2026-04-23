import PageShell from "@/components/page-shell";
import { timeline } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <p className="eyebrow">Experience</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
            Experience, education, and technical range.
          </h1>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="space-y-4">
          {timeline.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`grid gap-5 border-t p-6 sm:p-8 lg:grid-cols-[0.26fr_0.74fr] ${
                index === 1 ? "border-black bg-black text-white" : "border-[var(--line)] bg-white/75"
              }`}
            >
              <div>
                <p className={`text-xs uppercase tracking-[0.24em] ${index === 1 ? "text-white/60" : "text-[var(--muted)]"}`}>
                  {item.period}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold uppercase leading-none">{item.title}</h2>
                <p className={`mt-3 text-sm ${index === 1 ? "text-white/70" : "text-[var(--muted)]"}`}>{item.company}</p>
                <p className={`mt-5 text-sm leading-8 ${index === 1 ? "text-white/74" : "text-[var(--muted)]"}`}>
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
