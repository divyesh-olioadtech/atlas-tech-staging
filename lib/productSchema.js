import React from "react";

function childrenToText(node) {
  if (!node) return "";
  if (typeof node === "string") return node.trim();
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    return node.map(childrenToText).filter(Boolean).join(" ");
  }
  if (React.isValidElement(node)) {
    return childrenToText(node.props.children);
  }
  return "";
}

const BASE_URL = "https://www.atlastechnologiesindia.com";

export function generateProductSchema({
  product,
  faqData,
  videoUrl,
  videoThumbnail,
  pageUrl,
  includeProduct = true,
}) {
  const fullPageUrl = `${BASE_URL}${pageUrl}`;
  const description = Array.isArray(product.description)
    ? product.description.join(" ")
    : product.description || "";

  const schema = {
    "@context": "https://schema.org/",
    "@graph": [
      // The Product node is omitted on pages where includeProduct is false
      // (e.g. priced pages) while the FAQPage node below is always kept.
      ...(includeProduct
        ? [
      {
        "@type": "Product",
        "@id": `${fullPageUrl}#product`,
        name: product.title,
        description,
        image: (product.images || []).map((img) =>
          img.startsWith("http") ? img : `${BASE_URL}${img}`
        ),
        brand: {
          "@type": "Brand",
          name: "Atlas Technologies",
          "@id": `${BASE_URL}/#org`,
        },
        manufacturer: {
          "@type": "Organization",
          name: "Atlas Technologies Pvt. Ltd.",
          "@id": `${BASE_URL}/#org`,
        },
        // Products with a public price carry a full Offer; products without a
        // price omit the offers block entirely (per the canonical schema spec).
        ...(product.price
          ? {
              offers: {
                "@type": "Offer",
                price: String(product.price).replace(/,/g, ""),
                priceCurrency: "INR",
                priceValidUntil: "2027-12-31",
                availability: "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
                url: fullPageUrl,
                seller: {
                  "@type": "Organization",
                  name: "Atlas Technologies Pvt. Ltd.",
                  "@id": `${BASE_URL}/#org`,
                },
              },
            }
          : {}),
        url: fullPageUrl,
        ...(videoUrl && {
          subjectOf: {
            "@type": "VideoObject",
            name: `${product.title} – Product Video`,
            description: `Watch the ${product.title} in action.`,
            contentUrl: videoUrl,
            thumbnailUrl: videoThumbnail
              ? videoThumbnail.startsWith("http")
                ? videoThumbnail
                : `${BASE_URL}${videoThumbnail}`
              : undefined,
            embedUrl: videoUrl,
            uploadDate: "2024-01-01",
          },
        }),
      },
          ]
        : []),
      ...(faqData && faqData.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${fullPageUrl}#faq`,
              mainEntity: faqData.map((faq) => ({
                "@type": "Question",
                name: faq.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: childrenToText(faq.content),
                },
              })),
            },
          ]
        : []),
    ],
  };

  return schema;
}
