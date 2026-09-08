import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

const TITLE = "Privacy Policy — Foocus";
const DESCRIPTION =
  "How Foocus handles the tasks you create, the messages you send to the assistant, and the choices you have over your data.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={new Date("2026-09-08").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      intro="This page explains what Foocus collects, why, and what you can ask us to do with it."
      relatedLabel="Terms of Service"
      relatedHref="/terms"
      sections={[
        {
          id: "who-we-are",
          heading: "Who we are",
          body: (
            <p>
              Foocus is an AI-assisted productivity app operated under the Foocus name. Foocus is
              based in Pakistan. You can reach us at{" "}
              <a className="text-primary underline" href="mailto:foocus.app@gmail.com">
                foocus.app@gmail.com
              </a>
              .
            </p>
          ),
        },
        {
          id: "what-we-collect",
          heading: "What we collect",
          body: (
            <ul>
              <li>
                <strong>Task content.</strong> The tasks you create, their categories, and whether
                they are complete.
              </li>
              <li>
                <strong>Assistant messages.</strong> The text you send to the in-app assistant so it
                can create tasks for you.
              </li>
              <li>
                <strong>Usage signals inside the app.</strong> Completion history, streaks and the
                figures shown on the analytics screen.
              </li>
              <li>
                <strong>Account and purchase state.</strong> Account identifiers and authentication
                information needed to provide your Foocus account and sync your data — such as your
                account/user ID and authentication-related information — and whether an active
                subscription exists.
              </li>
            </ul>
          ),
        },
        {
          id: "how-we-use-it",
          heading: "How we use it",
          body: (
            <ul>
              <li>To show your tasks, history and analytics back to you.</li>
              <li>To let the assistant turn your messages into tasks.</li>
              <li>To apply free-plan limits and recognise an active Pro subscription.</li>
              <li>To fix problems and improve the app.</li>
            </ul>
          ),
        },
        {
          id: "service-providers",
          heading: "Service providers",
          body: (
            <p>
              Foocus relies on third parties to run parts of the service — for example an AI
              provider for the assistant and app stores for payments. The current list includes
              third-party AI services, Supabase for backend/database and authentication services,
              Vercel for website hosting, Apple App Store and Google Play for app distribution and
              subscription purchases, and RevenueCat for subscription entitlement management. We do
              not sell your data.
            </p>
          ),
        },
        {
          id: "retention",
          heading: "Retention and deletion",
          body: (
            <p>
              Your tasks stay available until you delete them or request deletion of your account.
              Foocus does not promise a fixed retention period for backups, security logs, or
              operational records because retention may vary depending on technical, security,
              legal, and operational requirements. When you request account or data deletion, Foocus
              will take reasonable steps to delete the applicable data, subject to information that
              must be retained for legitimate legal, security, fraud-prevention, or operational
              purposes. To request deletion, email{" "}
              <a className="text-primary underline" href="mailto:foocus.app@gmail.com">
                foocus.app@gmail.com
              </a>
              .
            </p>
          ),
        },
        {
          id: "your-rights",
          heading: "Your choices",
          body: (
            <ul>
              <li>Delete individual tasks at any time from inside the app.</li>
              <li>Request a copy of your data or its deletion by email.</li>
              <li>
                Depending on where you live, you may have additional rights under applicable privacy
                laws.
              </li>
            </ul>
          ),
        },
        {
          id: "children",
          heading: "Children",
          body: (
            <p>
              Foocus is not intended for children under 13, and we do not knowingly collect their
              data.
            </p>
          ),
        },
        {
          id: "changes",
          heading: "Changes to this policy",
          body: (
            <p>
              If this policy changes in a meaningful way, we will update this page and adjust the
              "last updated" date above.
            </p>
          ),
        },
      ]}
    />
  );
}
