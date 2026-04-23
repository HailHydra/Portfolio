"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="section-wrap sticky top-0 z-50 pt-4">
      <nav className="editorial-frame mx-auto flex items-center justify-between px-5 py-4 sm:px-7">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.34em] text-black">
          Aditya
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs uppercase tracking-[0.24em] ${
                  active ? "text-black" : "text-[var(--muted)] hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="mono-button px-5 py-3 text-xs font-medium uppercase tracking-[0.2em]">
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center border border-[var(--line-strong)] md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="editorial-frame mt-3 p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm ${
                    active ? "bg-black text-white" : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mono-button mt-2 justify-center px-5 py-3 text-xs font-medium uppercase tracking-[0.2em]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
