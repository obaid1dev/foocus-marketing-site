import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  Flame,
  ListChecks,
  MessageSquareText,
  Tags,
} from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const TITLE = "Foocus — AI task management that keeps your day focused";
const DESCRIPTION =
  "Foocus is a mobile productivity app that turns plain language into organised tasks, keeps your day grouped by category, and helps you focus on what matters.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Foocus",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "iOS, Android",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Landing,
});

function Phone({
  src,
  alt,
  className = "",
  eager = false,
}: {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.6rem] border border-border-strong bg-background p-1.5 shadow-lift ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={215}
        height={466}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={eager ? "high" : undefined}
        className="block w-full rounded-[1.2rem]"
      />
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Trust />
        <Features />
        <Showcase />
        <HowItWorks />
        <Intelligence />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-40 h-80 w-80 rounded-full bg-primary/[0.07] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <p className="inline-flex items-center gap-2 border border-border bg-primary-soft px-3 py-1.5 text-xs font-medium text-accent-foreground">
            <img
              src="/images/foocus-logo.png"
              alt=""
              aria-hidden
              width={16}
              height={16}
              className="h-4 w-4"
            />
            AI-assisted task management
          </p>
          <h1 className="text-hero mt-5">
            Focus on what
            <br className="hidden sm:block" /> actually matters.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Foocus turns what you type into an organised, prioritised day. Add tasks in plain
            language, keep them grouped by category, and watch your progress without the busywork of
            maintaining a productivity system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-foocus"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
            >
              Get Foocus
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-muted"
            >
              See how it works
            </a>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Designed to make everyday productivity feel simpler.
          </p>
        </div>

        <div className="relative reveal" style={{ animationDelay: "120ms" }}>
          <div className="absolute inset-x-6 bottom-6 top-10 -z-10 border border-border bg-surface" />
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <Phone
              src="/images/app-home.png"
              alt="Foocus home screen showing progress, in-progress tasks and task groups"
              eager
            />
            <Phone
              src="/images/app-ai.png"
              alt="Foocus AI assistant chat adding five tasks from a single message"
              className="mt-8"
              eager
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Trust strip                                                                */
/* -------------------------------------------------------------------------- */

function Trust() {
  const items = [
    { icon: MessageSquareText, label: "Plain-language task capture" },
    { icon: Tags, label: "Personal, Health & Study groups" },
    { icon: Flame, label: "Daily streaks that stay gentle" },
    { icon: BarChart3, label: "Simple focus analytics" },
  ];
  return (
    <section className="border-b border-border bg-surface" aria-label="What Foocus gives you">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, label }, i) => (
          <Reveal key={label} delay={i * 60} className="flex items-center gap-3">
            <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section heading                                                            */
/* -------------------------------------------------------------------------- */

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">{title}</h2>
      {body && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Features                                                                  */
/* -------------------------------------------------------------------------- */

function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to run a day. Nothing you don't."
          body="Foocus keeps the loop short: say what needs doing, see it organised, check it off."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <article className="flex h-full flex-col justify-between gap-8 border border-border bg-surface p-7 md:flex-row md:items-center md:p-9">
              <div className="max-w-md">
                <MessageSquareText className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">Tell Foocus, don't type forms</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Write one message — "learn Python, go to the gym, do the laundry" — and the
                  assistant creates each task, assigns a sensible category, and tells you exactly
                  what it added.
                </p>
              </div>
              <Phone
                src="/images/app-ai.png"
                alt="Foocus assistant turning a sentence into five categorised tasks"
                className="w-full max-w-[220px] shrink-0 self-center"
              />
            </article>
          </Reveal>

          <Reveal delay={60}>
            <article className="flex h-full flex-col justify-between border border-border bg-primary-soft/60 p-7">
              <div>
                <BarChart3 className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold">Focus metrics, not vanity charts</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Productivity for the day, current streak, tasks done, weekly checklist score and a
                  breakdown by category.
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <Reveal delay={40}>
            <article className="h-full border border-border p-7">
              <ListChecks className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">Tasks that stay tidy</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Filter today's list by All, To-do and Done. Each task carries its category, so you
                always know whether you're looking at work, health or study.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {[
                  "Today's tasks in one list",
                  "Category labels on every task",
                  "One tap to complete or remove",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="h-full border border-border p-7">
              <Tags className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">Groups with real progress</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Personal, Health and Study each show how much is done, so a busy day still reads
                clearly at a glance.
              </p>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="h-full border border-border p-7">
              <CalendarDays className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 text-xl font-semibold">A week you can look back on</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                History shows each day of the week with what you completed and what carried over —
                no guilt, just context.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Showcase — product screens                                                 */
/* -------------------------------------------------------------------------- */

function Showcase() {
  const screens = [
    {
      src: "/images/app-tasks.png",
      alt: "Today's tasks list in Foocus with All, To-do and Done filters",
      caption: "Today",
    },
    {
      src: "/images/app-history.png",
      alt: "Foocus history screen with a week of days and completion ring",
      caption: "History",
    },
    {
      src: "/images/app-analytics.png",
      alt: "Foocus analytics with productivity, streak, weekly score and category breakdown",
      caption: "Analytics",
    },
  ];
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Product"
          title="A real app, already doing the work"
          body="Screens from Foocus: your day, your week, and the numbers behind them."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((s, i) => (
            <Reveal key={s.caption} delay={i * 80}>
              <figure>
                <Phone src={s.src} alt={s.alt} />
                <figcaption className="mt-3 text-sm font-medium text-muted-foreground">
                  {s.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  How it works                                                               */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Add what you need to get done",
      body: "Type it as a list or just say it in a sentence — the assistant handles the rest.",
    },
    {
      n: "02",
      title: "Let Foocus organise it",
      body: "Tasks land in the right group with clear labels and a progress view for the day.",
    },
    {
      n: "03",
      title: "Stay focused and finish",
      body: "Work through today's list, keep your streak, and check the week when you want context.",
    },
  ];
  return (
    <section id="how-it-works" className="scroll-mt-20 border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading eyebrow="How it works" title="Three steps, then get on with your day." />
        <ol className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.n} className="bg-background p-7 md:p-9">
              <Reveal delay={i * 80}>
                <span className="font-mono text-sm font-medium text-primary">{s.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Intelligence — AI section                                                  */
/* -------------------------------------------------------------------------- */

function Intelligence() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <Reveal>
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Intelligence</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Less managing. More doing.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Most task apps ask you to be the system administrator of your own life: pick a
              project, pick a label, pick a date. Foocus reads your intent instead. One message
              becomes several properly categorised tasks, and the assistant tells you plainly what
              it did — including when you've hit your daily limit.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  t: "Understands a sentence, not a form",
                  d: "Five things in one line become five tasks, each in the right group.",
                },
                {
                  t: "Explains itself",
                  d: "You always see what was added, so nothing appears in your list by surprise.",
                },
                {
                  t: "Stays out of the way",
                  d: "No noisy suggestions — help arrives when you ask for it.",
                },
              ].map((item) => (
                <li key={item.t} className="flex gap-3 border-l-2 border-primary/30 pl-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="font-medium text-ink">{item.t}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={100} className="justify-self-center">
          <Phone
            src="/images/app-ai.png"
            alt="Foocus assistant conversation adding tasks and reporting the remaining daily limit"
            className="max-w-[300px]"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                        */
/* -------------------------------------------------------------------------- */

const FAQS = [
  {
    q: "What is Foocus?",
    a: "Foocus is a mobile productivity app for planning your day. You add tasks — by typing them or by describing them to the built-in assistant — and Foocus organises them into groups like Personal, Health and Study, then tracks what you complete.",
  },
  {
    q: "How does Foocus use AI?",
    a: "The assistant reads a plain-language message and turns it into individual tasks with a sensible category for each one. It reports back exactly what it added, so you stay in control of your list.",
  },
  {
    q: "Which platforms is Foocus available on?",
    a: "Foocus is a native mobile app available for iOS and Android.",
  },
  {
    q: "Do I need to set up a productivity system first?",
    a: "No. Add tasks in natural language and Foocus organises everything for you. There is no setup process or system to learn.",
  },
  {
    q: "What happens to my data?",
    a: "Your tasks, history and analytics are stored so they are available when you open the app. We do not sell your data. See the full details in the Privacy Policy.",
  },
  {
    q: "How do I get support?",
    a: "Email us at support@foocus.app — we read every message.",
  },
];

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <Accordion type="single" collapsible className="w-full border-t border-border">
          {FAQS.map((f) => (
            <AccordionItem key={f.q} value={f.q} className="border-b border-border">
              <AccordionTrigger className="py-5 text-left text-base font-medium text-ink hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Final CTA                                                                  */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section id="get-foocus" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="relative overflow-hidden border border-border bg-primary-soft/70 px-6 py-14 text-center md:px-16">
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-60 [mask-image:radial-gradient(60%_70%_at_50%_50%,black,transparent)]" />
          <div className="relative mx-auto max-w-xl">
            <img
              src="/images/foocus-logo.png"
              alt=""
              aria-hidden
              width={56}
              height={56}
              className="mx-auto h-14 w-14"
            />
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Ready to focus?</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Make your tasks simpler and your day more focused with Foocus.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="mailto:support@foocus.app?subject=Get%20Foocus"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary/90"
              >
                Get Foocus
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md border border-border-strong bg-background px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-muted"
              >
                Explore the features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
