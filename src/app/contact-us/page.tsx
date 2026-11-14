import type { Metadata } from "next";
import { Envelope, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { TrackedLink } from "@/components/tracked-link";
import { seo, siteConfig } from "@/content/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(seo.contact);

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" eyebrow="Leaning Oak Ranch" image="/wp-content/uploads/2017/09/Untitled-design-8.jpg" compact>
        <p>Email Barbara to ask about your event or schedule a tour.</p>
      </PageHero>
      <section className="contact-section section-shell">
        <div className="contact-details">
          <p className="eyebrow green">Get in Touch</p>
          <h2>Let’s Talk About Your Event</h2>
          <p>Contact Barbara directly by email for available dates, package details, or a private tour of the ranch.</p>
          <div className="contact-methods">
            <section className="contact-email"><Envelope size={26} weight="light" aria-hidden="true" /><div><h3>Email Barbara</h3><TrackedLink href={`mailto:${siteConfig.email}`} event="click_email">{siteConfig.email}</TrackedLink></div></section>
            <section><Phone size={26} weight="light" aria-hidden="true" /><div><h3>Call Us</h3><TrackedLink href={`tel:${siteConfig.phoneHref}`} event="click_to_call">{siteConfig.phoneDisplay}</TrackedLink></div></section>
            <section><MapPin size={26} weight="light" aria-hidden="true" /><div><h3>Venue Location</h3><address>{siteConfig.address.streetAddress}<br />{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}</address></div></section>
          </div>
        </div>
      </section>
      <JsonLd data={[
        breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact-us/" }]),
        serviceJsonLd("Venue Tours and Event Inquiries", seo.contact.description, "/contact-us/"),
      ]} />
    </>
  );
}
