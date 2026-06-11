import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | U.S. Next",
  description:
    "Terms of Service for the U.S. Next website and home improvement services.",
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 10, 2026";

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the
        U.S. Next website. By accessing or using this website, you agree to
        these Terms. If you do not agree, please do not use the website.
      </p>

      <h2>Informational Purposes Only</h2>
      <p>
        The information provided on this website is for general informational
        purposes only. While we strive to keep the content accurate and up to
        date, it should not be relied upon as the sole basis for any decision.
      </p>

      <h2>Estimates &amp; Pricing</h2>
      <p>
        Any pricing, timelines, or estimates referenced on this website or
        provided over the phone are not final quotes. Estimates are subject to
        the specific details of your project, on-site inspection, project
        location, materials selected, and current availability. A final price
        is provided only after we have reviewed the details of your project.
      </p>

      <h2>Service Availability</h2>
      <p>
        Contacting U.S. Next, including calling us, does not guarantee service
        availability. Availability depends on scheduling, location, and the
        scope of work. We will do our best to confirm whether we can assist
        with your project during your call.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        This website may contain links to third-party websites. U.S. Next is
        not responsible for the content, accuracy, policies, or practices of
        any third-party websites. Accessing third-party links is at your own
        risk.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree to use this website only for lawful purposes and in a manner
        that does not infringe the rights of, or restrict or inhibit the use of
        this website by, any other party.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, U.S. Next shall not be liable
        for any damages arising from your use of, or inability to use, this
        website or its content.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these Terms, contact U.S. Next by phone at{" "}
        <Link href={site.phoneHref}>{site.phoneDisplay}</Link>.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the
        website after changes are posted constitutes acceptance of the updated
        Terms.
      </p>
    </LegalLayout>
  );
}
