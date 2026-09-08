import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const NAV = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm transition-colors",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:flex md:justify-between md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Foocus home">
          <img
            src="/images/foocus-logo.png"
            alt="Foocus logo"
            width={36}
            height={36}
            className="h-9 w-9 shrink-0"
          />
          <span className="truncate text-[1.05rem] font-semibold tracking-tight text-ink">
            Foocus
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/#get-foocus"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
          >
            Get Foocus
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="justify-self-end rounded-md border border-border p-2 text-ink transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-5 pb-6 pt-3 md:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-base font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/privacy"
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 text-base font-medium text-ink"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              onClick={() => setOpen(false)}
              className="border-b border-border py-3.5 text-base font-medium text-ink"
            >
              Terms
            </Link>
          </nav>
          <a
            href="/#get-foocus"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Get Foocus
          </a>
        </div>
      )}
    </header>
  );
}
