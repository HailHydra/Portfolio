import type { ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="page-glow page-glow-one" />
      <div className="page-glow page-glow-two" />
      <Navbar />
      <main className="pb-12">{children}</main>
      <Footer />
    </div>
  );
}
