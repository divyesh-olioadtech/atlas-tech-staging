import Head from "next/head";
import { generateProductSchema } from "../../lib/productSchema";

export default function ProductSchema({
  product,
  faqData,
  videoUrl,
  videoThumbnail,
  pageUrl,
  includeProduct = true,
}) {
  const schema = generateProductSchema({
    product,
    faqData,
    videoUrl,
    videoThumbnail,
    pageUrl,
    includeProduct,
  });

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
}
