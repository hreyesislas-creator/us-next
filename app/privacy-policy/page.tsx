import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | U.S. Next",
  description:
    "Privacy Policy for U.S. Next — how we collect, use, and protect your information.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 10, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Privacy Policy explains how U.S. Next (&ldquo;U.S. Next,&rdquo;
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles
        information in connection with this website and our handyman,
        remodeling, repair, and home improvement services. By using this
        website, you agree to the practices described below.
      </p>

      <h2>Information We Collect</h2>
      <p>
        U.S. Next collects basic contact information only when users
        voluntarily provide it — for example, when you call us, email us, or
        otherwise submit information to us. This may include your name, phone
        number, email address, and details about the home project you would
        like help with. We do not require you to create an account to use this
        website.
      </p>

      <h2>Cookies, Analytics &amp; Advertising</h2>
      <p>
        This site may use cookies and similar technologies, along with
        analytics tools, Google Ads conversion tracking, and remarketing
        tools. These technologies help us understand how visitors use our
        website and measure the performance of our advertising. Third-party
        providers such as Google may use cookies to serve ads based on your
        prior visits to this or other websites.
      </p>

      <h2>How We Use Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to inquiries and answer your questions</li>
        <li>Schedule estimates and home improvement services</li>
        <li>Improve our services and website experience</li>
        <li>Measure and improve our advertising performance</li>
      </ul>

      <h2>Sharing of Information</h2>
      <p>
        <strong>We do not sell your personal information.</strong> We may share
        limited information with trusted service providers (such as analytics
        and advertising platforms) only as needed to operate our website and
        advertising, or when required by law.
      </p>

      <h2>Your Choices</h2>
      <p>
        Most web browsers allow you to control or disable cookies through their
        settings. You may also opt out of certain advertising cookies through
        tools provided by Google and other advertising networks. Please note
        that disabling cookies may affect how parts of this website function.
      </p>

      <h2>Privacy Questions &amp; Contact</h2>
      <p>
        If you have questions about this Privacy Policy or how your information
        is handled, you can contact U.S. Next directly by phone at{" "}
        <Link href={site.phoneHref}>{site.phoneDisplay}</Link>.
      </p>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will
        be reflected by the &ldquo;Last updated&rdquo; date shown at the top of
        this page.
      </p>
    </LegalLayout>
  );
}
