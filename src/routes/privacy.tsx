import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout, Placeholder } from "@/components/site/LegalLayout";

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
      updated={<Placeholder>date</Placeholder> as unknown as string}
      intro="This page explains what Foocus collects, why, and what you can ask us to do with it. Anything marked in brackets still needs to be confirmed before publishing."
      sections={[
        {
          id: "who-we-are",
          heading: "Who we are",
          body: (
            <p>
              Foocus is a productivity app operated by <Placeholder>legal entity name</Placeholder>,
              based in <Placeholder>country / jurisdiction</Placeholder>. You can reach us at{" "}
              <a className="text-primary underline" href="mailto:support@foocus.app">
                support@foocus.app
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
                <strong>Account and purchase state.</strong>{" "}
                <Placeholder>account identifiers you actually store</Placeholder> and whether an
                active subscription exists.
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
              provider for the assistant and an app store for payments. The current list is{" "}
              <Placeholder>AI provider, hosting/database provider, app stores</Placeholder>. We do
              not sell your data.
            </p>
          ),
        },
        {
          id: "retention",
          heading: "Retention and deletion",
          body: (
            <p>
              Your tasks stay available until you delete them or ask us to delete your account.
              Our current retention period for backups and logs is{" "}
              <Placeholder>retention period</Placeholder>. To request deletion, email{" "}
              <a className="text-primary underline" href="mailto:support@foocus.app">
                support@foocus.app
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
                Depending on where you live, you may have additional rights under{" "}
                <Placeholder>applicable law, e.g. GDPR / CCPA</Placeholder>.
              </li>
            </ul>
          ),
        },
        {
          id: "children",
          heading: "Children",
          body: (
            <p>
              Foocus is not intended for children under{" "}
              <Placeholder>minimum age</Placeholder>, and we do not knowingly collect their data.
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
