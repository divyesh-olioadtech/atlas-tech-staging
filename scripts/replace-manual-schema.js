/**
 * Replaces manual Product schema on the 20 pages with the ProductSchema component.
 * Preserves the price field — reads from product.price automatically.
 * Safe to re-run — skips pages already using the component.
 * Run: node scripts/replace-manual-schema.js
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PAGES_DIR = path.join(PROJECT_ROOT, "src", "pages");

const MANUAL_PAGES = [
  "asphalt-plants/stationary-asphalt-batching-plant/1500kg-twin-shaft-mixer-120-tph.jsx",
  "asphalt-plants/stationary-asphalt-batching-plant/1750kg-twin-shaft-mixer-140-tph.jsx",
  "asphalt-plants/stationary-asphalt-batching-plant/2250kg-twin-shaft-mixer-180-tph.jsx",
  "asphalt-plants/stationary-asphalt-batching-plant/3000kg-twin-shaft-mixer-240-260-tph.jsx",
  "asphalt-plants/stationary-asphalt-batching-plant/5000kg-twin-shaft-mixer-240-260-tph.jsx",
  "asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-50.jsx",
  "asphalt-plants/mobile-asphalt-drum-mix-plant/mdm-60.jsx",
  "asphalt-plants/double-drum-asphalt-plant/ddm-45-40-60-tph.jsx",
  "asphalt-plants/double-drum-asphalt-plant/ddm-50-60-90-tph.jsx",
  "asphalt-plants/double-drum-asphalt-plant/ddm-60-90-120-tph.jsx",
  "asphalt-plants/double-drum-asphalt-plant/ddm-65-120-150-tph.jsx",
  "asphalt-machines/wet-mix-plant/wm-160.jsx",
  "concrete-plants/stationary-concrete-batching-plant/atmix-pro-120.js",
  "concrete-plants/stationary-concrete-batching-plant/atmix-pro-45.js",
  "concrete-plants/stationary-concrete-batching-plant/atmix-pro-75.js",
  "concrete-plants/stationary-concrete-batching-plant/atmix-pro-90.js",
  "concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-30.js",
  "concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer/mobmix-pro-45.js",
  "other-products/kerb-laying-machine/XL-400.js",
  "other-products/kerb-laying-machine/XL-550.js",
];

function getImportPrefix(filePath) {
  const fileDir = path.dirname(filePath);
  const rel = path.relative(fileDir, PROJECT_ROOT).replace(/\\/g, "/");
  return rel + "/";
}

function getPageUrl(filePath) {
  const rel = path.relative(PAGES_DIR, filePath).replace(/\\/g, "/");
  return "/" + rel.replace(/\.(js|jsx)$/, "");
}

function extractVideoProp(content, propName) {
  const regex = new RegExp(`${propName}="([^"]+)"`, "i");
  const match = content.match(regex);
  return match ? match[1] : null;
}

function patchFile(relPath) {
  const filePath = path.join(PAGES_DIR, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`  MISSING FILE: ${relPath}`);
    return false;
  }

  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes("ProductSchema")) {
    console.log(`  SKIP (already using component): ${relPath}`);
    return false;
  }

  // Remove the manual schema block: {product.price && ( <script ... /> )}
  const manualSchemaPattern = /\{product\.price && \(\s*<script[\s\S]*?\/>\s*\)\}/;
  if (!manualSchemaPattern.test(content)) {
    console.log(`  WARN (manual schema pattern not found): ${relPath}`);
    return false;
  }

  content = content.replace(manualSchemaPattern, "");

  // Build ProductSchema tag
  const importPrefix = getImportPrefix(filePath);
  const pageUrl = getPageUrl(filePath);

  const hasVideo = /<Video[\s\S]{0,300}videoUrl=/.test(content);
  const videoUrl = hasVideo ? extractVideoProp(content, "videoUrl") : null;
  const videoThumbnail = hasVideo ? extractVideoProp(content, "thumbnail") : null;

  const videoProp = videoUrl ? `\n        videoUrl="${videoUrl}"` : "";
  const thumbProp = videoThumbnail ? `\n        videoThumbnail="${videoThumbnail}"` : "";

  const schemaTag = `      <ProductSchema\n        product={product}\n        faqData={faqData}${videoProp}${thumbProp}\n        pageUrl="${pageUrl}"\n      />`;

  // Inject after </Head>
  if (!content.includes("</Head>")) {
    console.log(`  WARN (no </Head> found): ${relPath}`);
    return false;
  }

  content = content.replace("</Head>", `</Head>\n${schemaTag}`);

  // Add import after last existing import line
  const schemaImport = `import ProductSchema from "${importPrefix}components/schema/ProductSchema";`;
  const lastImportMatch = [...content.matchAll(/^import .+$/gm)].pop();
  if (lastImportMatch) {
    const insertAt = lastImportMatch.index + lastImportMatch[0].length;
    content = content.slice(0, insertAt) + "\n" + schemaImport + content.slice(insertAt);
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`  REPLACED: ${relPath}`);
  return true;
}

function main() {
  console.log("\n========================================");
  console.log(" REPLACING MANUAL SCHEMA (20 pages)");
  console.log("========================================\n");

  let replaced = 0;
  let skipped = 0;

  for (const relPath of MANUAL_PAGES) {
    const result = patchFile(relPath);
    if (result) replaced++;
    else skipped++;
  }

  console.log("\n========================================");
  console.log(`  Replaced : ${replaced}`);
  console.log(`  Skipped  : ${skipped}`);
  console.log("========================================\n");
}

main();
