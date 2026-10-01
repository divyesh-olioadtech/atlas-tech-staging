/**
 * Dry-run audit: checks which product pages have schema and which don't.
 * Does NOT modify any files.
 * Run: node scripts/check-product-schema.js
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PAGES_DIR = path.join(PROJECT_ROOT, "src", "pages");

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

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const rel = path.relative(PROJECT_ROOT, filePath).replace(/\\/g, "/");

  if (content.includes("ProductSchema")) {
    return { rel, status: "PATCHED", note: "Uses ProductSchema component" };
  }

  if (
    content.includes("application/ld+json") &&
    (content.includes('"Product"') || content.includes("'Product'"))
  ) {
    return { rel, status: "MANUAL", note: "Has manually written Product schema" };
  }

  if (content.includes("application/ld+json")) {
    return { rel, status: "PARTIAL", note: "Has JSON-LD but NOT a Product schema" };
  }

  return { rel, status: "MISSING", note: "No schema at all" };
}

function main() {
  const files = getProductPageFiles();
  const results = files.map(checkFile);

  const patched  = results.filter((r) => r.status === "PATCHED");
  const manual   = results.filter((r) => r.status === "MANUAL");
  const partial  = results.filter((r) => r.status === "PARTIAL");
  const missing  = results.filter((r) => r.status === "MISSING");

  console.log("\n========================================");
  console.log(" PRODUCT PAGE SCHEMA AUDIT");
  console.log("========================================\n");

  if (patched.length) {
    console.log(`✅ PATCHED (${patched.length}) — already using ProductSchema component:`);
    patched.forEach((r) => console.log(`   ${r.rel}`));
    console.log();
  }

  if (manual.length) {
    console.log(`🟡 MANUAL SCHEMA (${manual.length}) — will be skipped by inject script:`);
    manual.forEach((r) => console.log(`   ${r.rel}`));
    console.log();
  }

  if (partial.length) {
    console.log(`🔵 PARTIAL (${partial.length}) — has other JSON-LD but no Product schema:`);
    partial.forEach((r) => console.log(`   ${r.rel}`));
    console.log();
  }

  if (missing.length) {
    console.log(`❌ MISSING (${missing.length}) — no schema, will be patched:`);
    missing.forEach((r) => console.log(`   ${r.rel}`));
    console.log();
  }

  console.log("========================================");
  console.log(` SUMMARY: ${files.length} total pages`);
  console.log(`   ✅ Patched   : ${patched.length}`);
  console.log(`   🟡 Manual    : ${manual.length}`);
  console.log(`   🔵 Partial   : ${partial.length}`);
  console.log(`   ❌ Missing   : ${missing.length}`);
  console.log("========================================\n");
}

main();
