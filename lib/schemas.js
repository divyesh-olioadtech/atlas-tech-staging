// Single global Organization node. Rendered ONCE in src/pages/_document.js.
// Every page-specific graph (see lib/pageSchemas.js) references this entity by
// its @id (https://www.atlastechnologiesindia.com/#org), so there is exactly
// one Organization definition across the whole site. Source: CSV schema sheet.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.atlastechnologiesindia.com/#org",
  name: "Atlas Technologies Pvt. Ltd.",
  url: "https://www.atlastechnologiesindia.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.atlastechnologiesindia.com/images/comman/logo/atlas-technologies-pvt-ltd.jpg",
  },
  foundingDate: "1986",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Block No. 97, Mehsana-Ahmedabad Highway, Behind Bhupendra Crane House, At & Po. Ditasan",
    addressLocality: "Mehsana",
    addressRegion: "Gujarat",
    postalCode: "382710",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-97238-10565",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["en"],
  },
  sameAs: [
    "https://www.youtube.com/@AtlasTechnologiesPvt.Ltd.",
    "https://www.instagram.com/atlas_technologies_pvt._ltd",
    "https://www.facebook.com/share/1CNVa1Zsad/",
    "https://www.linkedin.com/company/81609326",
  ],
};
