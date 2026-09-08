import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/foocus-logo.png"
                alt="Foocus logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-base font-semibold tracking-tight text-ink">Foocus</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              An AI-assisted task app that turns what you say into a clear plan for the day, so you
              spend less time managing tasks and more time doing them.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { label: "Features", href: "/#features" },
              { label: "How it works", href: "/#how-it-works" },
              { label: "FAQ", href: "/#faq" },
              { label: "Get Foocus", href: "/#get-foocus" },
            ]}
          />

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground transition-colors hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/delete-account"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Support
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:foocus.app@gmail.com"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  foocus.app@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="/#get-foocus"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  Get Foocus
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Foocus. All rights reserved.</p>
          <p>Built for calmer, clearer days.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-foreground transition-colors hover:text-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
