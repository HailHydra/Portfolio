import PageShell from "@/components/page-shell";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="section-wrap pt-8 sm:pt-10">
        <div className="editorial-frame px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">
            AI, ML, and applied software projects.
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-[var(--muted)]">
            This section now reflects your current resume projects and leaves two dedicated empty slots
            for future Git-based additions.
          </p>
        </div>
      </section>

      <section className="section-wrap py-6 sm:py-8">
        <div className="grid gap-4 lg:grid-cols-[0.62fr_0.38fr]">
          <article className="editorial-frame p-6 sm:p-8">
            <p className="display-outline text-[3rem] font-semibold uppercase leading-none tracking-[-0.08em] sm:text-[5rem] lg:text-[7rem]">
              Work
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.slice(0, 3).map((project) => (
                <article key={project.title} className="paper-panel p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{project.stack.join(" / ")}</p>
                  <h2 className="mt-5 text-2xl font-semibold uppercase leading-none">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
                  <p className="mt-7 text-xs uppercase tracking-[0.22em]">{project.outcome}</p>
                </article>
              ))}
            </div>
          </article>

          <div className="space-y-4">
            {projects.slice(3).map((project) => (
              <article key={`${project.title}-${project.outcome}`} className="border-t border-black bg-black p-6 text-white sm:p-8">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  {project.placeholder ? "Reserved" : "Featured"}
                </p>
                <h2 className="mt-5 text-4xl font-semibold uppercase leading-none">{project.title}</h2>
                <p className="mt-5 text-sm leading-8 text-white/72">{project.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.12em]">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-10 text-xs uppercase tracking-[0.22em] text-white">{project.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
