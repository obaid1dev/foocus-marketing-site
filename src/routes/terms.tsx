import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

const TITLE = "Terms of Service — Foocus";
const DESCRIPTION =
  "The terms that apply when you use the Foocus mobile app, what you can expect from us, and what we ask of you.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated={new Date("2026-09-08").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
      intro="These terms govern your use of Foocus."
      relatedLabel="Privacy Policy"
      relatedHref="/privacy"
      sections={[
        {
          id: "acceptance",
          heading: "Acceptance of these terms",
          body: (
            <p>
              By downloading, installing, or using Foocus you agree to these Terms of Service. If
              you do not agree, do not use the app.
            </p>
          ),
        },
        {
          id: "description",
          heading: "What Foocus is",
          body: (
            <p>
              Foocus is a mobile productivity app for iOS and Android. It lets you create tasks,
              organise them into groups, and optionally use a built-in AI assistant to turn
              plain-language messages into structured tasks. Foocus is operated under the Foocus
              name.
            </p>
          ),
        },
        {
          id: "eligibility",
          heading: "Eligibility",
          body: (
            <p>
              You must be at least 13 years old to use Foocus. By using the app you confirm you meet
              this requirement.
            </p>
          ),
        },
        {
          id: "account",
          heading: "Your account",
          body: (
            <p>
              Foocus may require an account so that your tasks, settings, and related data can be
              associated with you and synchronised across supported sessions or devices.
              Authentication may be provided through the sign-in methods made available in the app.
              You are responsible for keeping your account credentials and authentication methods
              secure and for activity under your account.
            </p>
          ),
        },
        {
          id: "acceptable-use",
          heading: "Acceptable use",
          body: (
            <ul>
              <li>Use Foocus only for lawful purposes.</li>
              <li>
                Do not attempt to interfere with, disrupt, or gain unauthorised access to the app or
                its infrastructure.
              </li>
              <li>
                Do not use the AI assistant to generate content that is illegal, harmful, or
                violates third-party rights.
              </li>
              <li>
                Do not resell, redistribute, or commercially exploit the app or its content without
                written permission.
              </li>
            </ul>
          ),
        },
        {
          id: "ai-limitations",
          heading: "AI assistant limitations",
          body: (
            <p>
              The AI assistant is an experimental feature. It may occasionally produce inaccurate,
              incomplete, or unexpected results. It is not a substitute for professional advice. You
              review and take responsibility for every task the assistant creates.
            </p>
          ),
        },
        {
          id: "subscriptions",
          heading: "Subscriptions and purchases",
          body: (
            <p>
              Foocus offers a free tier with usage limits and an optional Pro subscription that
              provides access to additional/premium functionality. Subscriptions are purchased and
              managed through the Apple App Store or Google Play Store. Pricing, renewal terms,
              cancellation procedures, and applicable refund rules are governed by the terms and
              policies of the store through which the subscription was purchased. Foocus does not
              directly process mobile subscription payments.
            </p>
          ),
        },
        {
          id: "cancellation",
          heading: "Cancellation and refund",
          body: (
            <p>
              You may cancel a subscription at any time through the app store where you purchased
              it. Cancellation takes effect at the end of the current billing period. Refund
              requests are subject to the app store's refund policy. If you believe a refund is
              warranted, contact{" "}
              <a className="text-primary underline" href="mailto:foocus.app@gmail.com">
                foocus.app@gmail.com
              </a>
              .
            </p>
          ),
        },
        {
          id: "ip",
          heading: "Intellectual property",
          body: (
            <p>
              Foocus, including its code, design, logos, branding, and original content, is owned or
              licensed by the Foocus operator and protected by applicable intellectual property
              laws. Your tasks and the content you create remain yours, subject to any rights of
              third parties contained in that content.
            </p>
          ),
        },
        {
          id: "disclaimers",
          heading: "Disclaimers",
          body: (
            <p>
              Foocus is provided "as is" and "as available" without warranties of any kind, express
              or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not guarantee that the
              app will be uninterrupted, error-free, or secure.
            </p>
          ),
        },
        {
          id: "liability",
          heading: "Limitation of liability",
          body: (
            <p>
              To the fullest extent permitted by law, the Foocus operator shall not be liable for
              any indirect, incidental, special, consequential, or punitive damages, or any loss of
              profits or data, arising from your use of Foocus. Our total liability shall not exceed
              the amount you paid for Foocus during the 12 months preceding the claim.
            </p>
          ),
        },
        {
          id: "changes",
          heading: "Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time. If the changes are material we will
              notify you through the app or by email. Continued use of Foocus after changes take
              effect constitutes acceptance of the updated terms.
            </p>
          ),
        },
        {
          id: "contact",
          heading: "Contact us",
          body: (
            <p>
              Questions about these terms? Email{" "}
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
