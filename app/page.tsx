import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { ServiceArea } from "@/components/ServiceArea";
import { Faq } from "@/components/Faq";
import { faqs } from "@/lib/faqs";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { StickyCallButton } from "@/components/StickyCallButton";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "U.S. Next",
  description:
    "Reliable handyman, remodeling, repair, and home improvement services for local homeowners.",
  url: "https://www.usnext.org/",
  telephone: "+1-512-986-0287",
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Local service area",
  },
  knowsAbout: [
    "Handyman Repairs",
    "Home Remodeling",
    "Kitchen & Bathroom Remodeling",
    "Interior & Exterior Painting",
    "Drywall Repair & Installation",
    "Flooring & Tile Installation",
    "Fences, Decks & Porches",
    "Concrete Driveways & Repairs",
    "Landscaping & Outdoor Living",
    "Roofing, Siding & Windows",
    "Plumbing & Water Heater Installation",
    "Junk Removal & Hauling",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <ServiceArea />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCallButton />
    </>
  );
}
