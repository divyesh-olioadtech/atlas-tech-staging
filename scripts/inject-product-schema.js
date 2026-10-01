/**
 * Injects <ProductSchema> into all individual product pages.
 * Run once: node scripts/inject-product-schema.js
 * Safe to re-run — skips pages already patched.
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PAGES_DIR = path.join(PROJECT_ROOT, "src", "pages");

// Directories that contain individual product pages (non-index files)
const PRODUCT_PAGE_DIRS = [
  "asphalt-plants/stationary-asphalt-batching-plant",
  "asphalt-plants/mobile-asphalt-batching-plant",
  "asphalt-plants/asphalt-drum-mix-plant",
  "asphalt-plants/mobile-asphalt-drum-mix-plant",
  "asphalt-plants/counter-flow-asphalt-plant",
  "asphalt-plants/double-drum-asphalt-plant",
  "bitumen-sprayer",
  "bitumen-decanter",
  "mini-bitumen-sprayer",
  "wet-mix-plant",
  "concrete-plants/stationary-concrete-batching-plant",
  "concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer",
  "concrete-plants/mobile-concrete-batching-plant-pan-mixer",
  "concrete-plants/mobile-concrete-batching-plant-planetary-mixer",
  "concrete-plants/mini-concrete-batching-plant",
  "concrete-plants/reversible-mixer-concrete-plant",
  "concrete-plants/stationary-concrete-batching-plant-pan-mixer",
  "concrete-plants/stationary-concrete-batching-plant-planetary-mixer",
  "concrete-mixer",
  "concrete-pump",
  "kerb-cutting-machine",
  "other-products/kerb-laying-machine",
  "other-products/hydraulic-broomer",
  "other-products/groove-cutter",
  "other-products/vacuum-dewatering-systems",
];

function getProductPageFiles() {
  const files = [];
  for (const dir of PRODUCT_PAGE_DIRS) {
    const absDir = path.join(PAGES_DIR, dir);
    if (!fs.existsSync(absDir)) continue;
    for (const file of fs.readdirSync(absDir)) {
      if (
        (file.endsWith(".js") || file.endsWith(".jsx")) &&
        file !== "index.js" &&
        file !== "index.jsx"
      ) {
        files.push(path.join(absDir, file));
      }
    }
  }
  return files;
}

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

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  // Skip if already using the ProductSchema component
  if (content.includes("ProductSchema")) {
    console.log(`  SKIP (already patched): ${path.relative(PROJECT_ROOT, filePath)}`);
    return false;
  }

  // Skip if page already has a manually written Product JSON-LD schema
  if (
    content.includes("application/ld+json") &&
    (content.includes('"Product"') || content.includes("'Product'"))
  ) {
    console.log(`  SKIP (manual schema exists): ${path.relative(PROJECT_ROOT, filePath)}`);
    return false;
  }

  const importPrefix = getImportPrefix(filePath);
  const pageUrl = getPageUrl(filePath);

  // Extract video data if a <Video component exists
  const hasVideo = /<Video[\s\S]{0,300}videoUrl=/.test(content);
  const videoUrl = hasVideo ? extractVideoProp(content, "videoUrl") : null;
  const videoThumbnail = hasVideo ? extractVideoProp(content, "thumbnail") : null;

  // Build the schema tag props
  const videoProp = videoUrl ? `\n      videoUrl="${videoUrl}"` : "";
  const thumbProp = videoThumbnail ? `\n      videoThumbnail="${videoThumbnail}"` : "";
  const schemaTag = `      <ProductSchema\n        product={product}\n        faqData={faqData}${videoProp}${thumbProp}\n        pageUrl="${pageUrl}"\n      />`;

  // Inject after </Head> in the return block
  const headClosePattern = /<\/Head>/;
  if (!headClosePattern.test(content)) {
    console.log(`  WARN (no </Head> found): ${path.relative(PROJECT_ROOT, filePath)}`);
    return false;
  }

  content = content.replace(headClosePattern, `</Head>\n${schemaTag}`);

  // Add import at the top (after the last existing import line)
  const schemaImport = `import ProductSchema from "${importPrefix}components/schema/ProductSchema";`;
  const lastImportMatch = [...content.matchAll(/^import .+$/gm)].pop();
  if (lastImportMatch) {
    const insertAt = lastImportMatch.index + lastImportMatch[0].length;
    content = content.slice(0, insertAt) + "\n" + schemaImport + content.slice(insertAt);
  } else {
    content = schemaImport + "\n" + content;
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`  PATCHED: ${path.relative(PROJECT_ROOT, filePath)}`);
  return true;
}

function main() {
  const files = getProductPageFiles();
  console.log(`\nFound ${files.length} product page files.\n`);

  let patched = 0;
  let skipped = 0;

  for (const filePath of files) {
    const result = patchFile(filePath);
    if (result) patched++;
    else skipped++;
  }

  console.log(`\nDone. Patched: ${patched} | Skipped: ${skipped}`);
}

main();
