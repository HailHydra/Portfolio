import PageShell from "@/components/page-shell";
import { contactPoints } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
            Direct contact and profile details.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]">
            Contact details and profile summary are now aligned with your resume. LinkedIn and more links can be added later.
          </p>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 md:grid-cols-3">
          {contactPoints.map((item, index) => {
            const content = (
              <>
                <p className={`text-xs uppercase tracking-[0.22em] ${index === 1 ? "text-white/60" : "text-[var(--muted)]"}`}>
                  {item.title}
                </p>
                <h2 className="mt-5 break-words text-2xl font-semibold uppercase leading-none sm:text-3xl">{item.value}</h2>
              </>
            );

            if (item.href === "#") {
              return (
                <article key={item.title} className="paper-panel p-6 sm:p-8">
                  {content}
                </article>
              );
            }

            return (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={`border-t p-6 sm:p-8 ${
                  index === 1 ? "border-black bg-black text-white" : "border-[var(--line)] bg-white/75 text-black"
                }`}
              >
                {content}
              </a>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
