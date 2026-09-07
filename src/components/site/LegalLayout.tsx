import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export function LegalLayout({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: { id: string; heading: string; body: ReactNode }[];
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <div className="border-b border-border bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Legal</p>
            <h1 className="mt-3 text-3xl font-semibold md:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <p className="mt-6 text-xs text-muted-foreground">Last updated: {updated}</p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8 md:py-20">
          <nav aria-label="On this page" className="hidden md:block">
            <div className="sticky top-24">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                On this page
              </h2>
              <ul className="mt-4 space-y-2 border-l border-border">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-ink"
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="max-w-[68ch]">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24 border-b border-border py-8 first:pt-0 last:border-b-0">
                <h2 className="text-xl font-semibold md:text-2xl">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-[0.975rem] leading-7 text-foreground/90 [&_li]:leading-7 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                  {s.body}
                </div>
              </section>
            ))}

            <div className="mt-10 border border-border bg-primary-soft/60 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                Questions about this page? Email{" "}
                <a className="font-medium text-primary underline" href="mailto:support@foocus.app">
                  support@foocus.app
                </a>{" "}
                or read the{" "}
                <Link className="font-medium text-primary underline" to="/terms">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-primary-soft px-1.5 py-0.5 font-mono text-[0.8rem] text-accent-foreground">
      [{children}]
    </mark>
  );
}
