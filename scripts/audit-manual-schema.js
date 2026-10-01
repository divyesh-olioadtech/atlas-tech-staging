/**
 * Deep audit of the 20 manually written Product schema pages.
 * Checks for common issues without modifying any files.
 * Run: node scripts/audit-manual-schema.js
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

function auditFile(relPath) {
  const filePath = path.join(PAGES_DIR, relPath);
  if (!fs.existsSync(filePath)) {
    return { relPath, issues: ["FILE NOT FOUND"] };
  }

  const content = fs.readFileSync(filePath, "utf8");
  const issues = [];
  const good = [];

  // 1. Check: Schema is conditional on product.price
  if (content.includes("product.price &&")) {
    issues.push("Schema wrapped in {product.price &&} — disappears if price is removed");
  } else {
    good.push("Schema not conditional on price");
  }

  // 2. Check: http vs https in image
  if (content.match(/image.*http:\/\//)) {
    issues.push("Image URL uses http:// instead of https://");
  } else {
    good.push("Image URL uses https://");
  }

  // 3. Check: Only first image used
  if (content.includes("product.images[0]") && !content.includes("product.images.map")) {
    issues.push("Only first image used (product.images[0]) — should use full images array");
  } else if (content.includes("product.images.map")) {
    good.push("Full images array used");
  }

  // 4. Check: Only first description used
  if (
    content.includes("product.description[0]") &&
    !content.includes("product.description.join")
  ) {
    issues.push("Only first description used — should join full description array");
  } else if (content.includes("product.description.join")) {
    good.push("Full description used");
  }

  // 5. Check: Generic offer URL
  if (
    content.includes('"https://atlastechnologiesindia.com"') ||
    content.includes('"http://atlastechnologiesindia.com"')
  ) {
    issues.push("Offer URL is generic homepage — should be page-specific URL");
  } else {
    good.push("Offer URL is page-specific");
  }

  // 6. Check: FAQPage schema
  if (!content.includes("FAQPage")) {
    issues.push("Missing FAQPage schema — FAQ data exists but not in schema");
  } else {
    good.push("Has FAQPage schema");
  }

  // 7. Check: VideoObject schema
  if (!content.includes("VideoObject")) {
    issues.push("Missing VideoObject schema — video embed exists but not in schema");
  } else {
    good.push("Has VideoObject schema");
  }

  // 8. Check: @id for entity linking
  if (!content.includes('"@id"') && !content.includes("'@id'")) {
    issues.push("Missing @id — no entity linking to Organization");
  } else {
    good.push("Has @id entity linking");
  }

  // 9. Check: manufacturer field
  if (!content.includes("manufacturer")) {
    issues.push('Missing "manufacturer" field');
  } else {
    good.push("Has manufacturer field");
  }

  return { relPath, issues, good };
}

function main() {
  console.log("\n========================================");
  console.log(" MANUAL SCHEMA DEEP AUDIT (20 pages)");
  console.log("========================================\n");

  const allResults = MANUAL_PAGES.map(auditFile);

  // Per-page report
  allResults.forEach(({ relPath, issues, good }) => {
    const filename = path.basename(relPath);
    const status = issues.length === 0 ? "✅ CLEAN" : `⚠️  ${issues.length} ISSUE(S)`;
    console.log(`${status} — ${filename}`);
    issues.forEach((i) => console.log(`     ❌ ${i}`));
    good.forEach((g) => console.log(`     ✅ ${g}`));
    console.log();
  });

  // Summary: which issues appear most
  const issueCounts = {};
  allResults.forEach(({ issues }) => {
    issues.forEach((issue) => {
      const key = issue.split("—")[0].trim();
      issueCounts[key] = (issueCounts[key] || 0) + 1;
    });
  });

  const totalIssues = allResults.reduce((sum, r) => sum + r.issues.length, 0);
  const cleanPages = allResults.filter((r) => r.issues.length === 0).length;

  console.log("========================================");
  console.log(" ISSUE FREQUENCY ACROSS ALL 20 PAGES");
  console.log("========================================");
  Object.entries(issueCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([issue, count]) => {
      console.log(`  ${count}/20 pages — ${issue}`);
    });

  console.log("\n========================================");
  console.log(` SUMMARY`);
  console.log(`   Clean pages    : ${cleanPages}/20`);
  console.log(`   Pages with issues: ${20 - cleanPages}/20`);
  console.log(`   Total issues   : ${totalIssues}`);
  console.log("========================================\n");
}

main();
