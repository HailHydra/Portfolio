import Link from "next/link";
import { navItems } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="section-wrap pb-8 pt-6">
      <div className="editorial-frame px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold leading-tight">
              Minimal presentation, strong hierarchy, and room for your real work.
            </h2>
          </div>

          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-black">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--muted)]">
              <a href="mailto:adityaghagst@gmail.com" className="break-all hover:text-black">
                adityaghagst@gmail.com
              </a>
              <a href="https://github.com/HailHydra" target="_blank" rel="noreferrer" className="hover:text-black">
                GitHub
              </a>
              <p>Available for AI engineering and software work.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} Aditya Ghag
        </div>
      </div>
    </footer>
  );
}
