import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

const TITLE = "Delete Your Foocus Account";
const DESCRIPTION =
  "How to permanently delete your Foocus account and what happens to your data when you do.";

export const Route = createFileRoute("/delete-account")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/delete-account" },
    ],
    links: [{ rel: "canonical", href: "/delete-account" }],
  }),
  component: DeleteAccountPage,
});

function DeleteAccountPage() {
  return (
    <LegalLayout
      title="Delete Your Foocus Account"
      updated={new Date("2026-09-08").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      intro="You can request permanent deletion of your Foocus account and associated personal data at any time. This page explains how."
      relatedLabel="Privacy Policy"
      relatedHref="/privacy"
      sections={[
        {
          id: "how-to-request",
          heading: "How to request deletion",
          body: (
            <p>
              Email us at{" "}
              <a className="text-primary underline" href="mailto:foocus.app@gmail.com">
                foocus.app@gmail.com
              </a>{" "}
              from the email address associated with your Foocus account. In your message, clearly
              state that you want to delete your account and associated data. If you no longer have
              access to that email address, include as much identifying information as you can so we
              can verify ownership before processing your request.
            </p>
          ),
        },
        {
          id: "what-gets-deleted",
          heading: "What gets deleted",
          body: (
            <ul>
              <li>Your account profile and authentication record.</li>
              <li>Tasks, groups, and any content you created inside the app.</li>
              <li>Assistant conversation history used to create tasks.</li>
              <li>Usage signals such as completion history, streaks, and analytics figures.</li>
              <li>Subscription entitlement information tied to your account.</li>
            </ul>
          ),
        },
        {
          id: "what-we-may-retain",
          heading: "What we may retain",
          body: (
            <p>
              We will delete your account and associated personal data as requested, but we may
              need to keep certain information for legitimate legal, security, fraud-prevention, or
              operational purposes. For example, we may retain billing records or transaction logs if
              required by applicable law, or anonymised data that cannot reasonably be used to
              identify you.
            </p>
          ),
        },
        {
          id: "processing-time",
          heading: "Processing time",
          body: (
            <p>
              We aim to process deletion requests within 30 days of verifying your identity. You will
              receive a confirmation email once your account has been permanently deleted. Until then,
              avoid creating a new account with the same credentials if you want deletion to complete
              cleanly.
            </p>
          ),
        },
        {
          id: "app-store-subscriptions",
          heading: "App store subscriptions",
          body: (
            <p>
              Deleting your Foocus account does not automatically cancel a subscription purchased
              through the Apple App Store or Google Play Store. To stop future charges, cancel your
              subscription directly in the store where you bought it before requesting account
              deletion.
            </p>
          ),
        },
        {
          id: "need-help",
          heading: "Need help?",
          body: (
            <p>
              If you have questions about deleting your account or what data we hold, contact us at{" "}
              <a className="text-primary underline" href="mailto:foocus.app@gmail.com">
                foocus.app@gmail.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
