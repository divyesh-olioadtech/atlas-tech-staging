// ---------------------------------------------------------------------------
// BROCHURE CONFIGURATION
// ---------------------------------------------------------------------------
// Each page gets its own brochure list, keyed by a URL segment. Lookup walks
// the path from the deepest segment upward, so model pages inherit their
// parent product's brochures:
//
//   /asphalt-plants/asphalt-drum-mix-plant/dm200-180-200-tph
//     -> "dm200-180-200-tph"        no key
//     -> "asphalt-drum-mix-plant"   MATCH
//
// A model page can override by adding its own key - the deepest match wins.
//
// The `url` is the file's location inside /public, with "public" removed:
//   public/static/brochure/wet-mix-plant/wmmcata.pdf
//        -> "/static/brochure/wet-mix-plant/wmmcata.pdf"
//
// Folder names under /public do NOT have to match the keys here.
// ---------------------------------------------------------------------------
// TO REPLACE A PDF
//   Overwrite the file in public/static/brochure/<folder>/ keeping the same
//   filename. No code change needed.
//   Different filename -> update the `url` on that entry.
//
// TO ADD A PAGE
//   Add a new key matching any segment of that page's URL.
//
// NOTE ON `name`
//   Set to the PDF's filename. It is shown in the modal, used as the
//   downloaded file's name, and sent to /api/brochure-lead as `brochureName`.
//   Edit these strings to change what customers and your sales team see.
// ---------------------------------------------------------------------------

/**
 * Standard drum-mix brochures. Used by the drum mix plant page and shared by
 * the drum-type pages that have no brochures of their own.
 */
const DRUM_MIX_DEFAULT = [
  {
    id: "admp-1",
    name: "asphaltdrummixplantcata",
    url: "/static/brochure/asphalt-drum-mix-plant/asphaltdrummixplantcata.pdf",
  },
  {
    id: "admp-2",
    name: "stationary-mobileasphaltdrummix",
    url: "/static/brochure/asphalt-drum-mix-plant/stationary-mobileasphaltdrummix.pdf",
  },
];

/** Mobile concrete batching plant - shared by both slug variants. */
const MOBILE_CONCRETE = [
  {
    id: "mcbp-1",
    name: "mobileconcretebatchplantcata",
    url: "/static/brochure/mobile-concrete-batching-plant/mobileconcretebatchplantcata.pdf",
  },
  {
    id: "mcbp-2",
    name: "mobileconcretebatchingplantcata2",
    url: "/static/brochure/mobile-concrete-batching-plant/mobileconcretebatchingplantcata2.pdf",
  },
];

/** Mechanical broomer - lives under the hydraulic broomer section. */
const MECHANICAL_BROOM = [
  {
    id: "mb-1",
    name: "mechanicalbroomcata",
    url: "/static/brochure/mechanical-broomer/mechanicalbroomcata.pdf",
  },
  {
    id: "mb-2",
    name: "mechanicalbroomcata2",
    url: "/static/brochure/mechanical-broomer/mechanicalbroomcata2.pdf",
  },
];

export const brochuresBySlug = {
  // === ASPHALT PLANTS =====================================================

  "asphalt-drum-mix-plant": DRUM_MIX_DEFAULT,

  // No brochures of their own - these fall back to the drum-mix set.
  "double-drum-asphalt-plant": DRUM_MIX_DEFAULT,
  "counter-flow-asphalt-plant": DRUM_MIX_DEFAULT,

  "mobile-asphalt-drum-mix-plant": [
    {
      id: "madmp-1",
      name: "mobileasphaltdrummixplantcata",
      url: "/static/brochure/mobile-asphalt-drum-mix-plant/mobileasphaltdrummixplantcata.pdf",
    },
    {
      id: "madmp-2",
      name: "stationary-mobileasphaltdrummix",
      url: "/static/brochure/mobile-asphalt-drum-mix-plant/stationary-mobileasphaltdrummix.pdf",
    },
  ],

  "stationary-asphalt-batching-plant": [
    {
      id: "sabp-1",
      name: "sabpcata",
      url: "/static/brochure/stationary-asphalt-batch-plant/sabpcata.pdf",
    },
  ],

  "mobile-asphalt-batching-plant": [
    {
      id: "mabp-1",
      name: "mabpcata",
      url: "/static/brochure/mobile-asphalt-batch-plant/mabpcata.pdf",
    },
    {
      id: "mabp-2",
      name: "mabpcata2",
      url: "/static/brochure/mobile-asphalt-batch-plant/mabpcata2.pdf",
    },
  ],

  // === WET MIX ============================================================

  "wet-mix-plant": [
    {
      id: "wmp-1",
      name: "wmmcata",
      url: "/static/brochure/wet-mix-plant/wmmcata.pdf",
    },
    {
      id: "wmp-2",
      name: "wmmcata2",
      url: "/static/brochure/wet-mix-plant/wmmcata2.pdf",
    },
  ],

  // === CONCRETE PLANTS ====================================================

  "stationary-concrete-batching-plant": [
    {
      id: "scbp-1",
      name: "stationaryconcreteplantcata",
      url: "/static/brochure/stationary-concrete-batching-plant/stationaryconcreteplantcata.pdf",
    },
  ],

  // Real route is /concrete-plants/mobile-concrete-batching-plant-twin-shaft-mixer
  // Both keys listed so either URL resolves.
  "mobile-concrete-batching-plant-twin-shaft-mixer": MOBILE_CONCRETE,
  "mobile-concrete-batching-plant": MOBILE_CONCRETE,

  // === SPRAYERS & BROOMERS ================================================

  "bitumen-sprayer": [
    {
      id: "bs-1",
      name: "bitumensprayercata",
      url: "/static/brochure/bitumen-sprayer/bitumensprayercata.pdf",
    },
  ],

  "mini-bitumen-sprayer": [
    {
      id: "mbs-1",
      name: "minibitumensprayercata",
      url: "/static/brochure/mini-bitumen-sprayer/minibitumensprayercata.pdf",
    },
    {
      id: "mbs-2",
      name: "minibitumensprayercata2",
      url: "/static/brochure/mini-bitumen-sprayer/minibitumensprayercata2.pdf",
    },
  ],

  // The /other-products/hydraulic-broomer category page covers BOTH broomers,
  // and its child model pages (mechanical-broom, hydraulic-broom) have no
  // banner of their own - so all three brochures are offered here.
  "hydraulic-broomer": [
    {
      id: "hb-1",
      name: "hydraulicbroomcata",
      // folder on disk is "hydraulic-broome" (missing final r)
      url: "/static/brochure/hydraulic-broome/hydraulicbroomcata.pdf",
    },
    ...MECHANICAL_BROOM,
  ],

  // Kept in case a mechanical broomer page with a banner is added later.
  "mechanical-broom": MECHANICAL_BROOM,
  "mechanical-broomer": MECHANICAL_BROOM,
};

/**
 * Returns the brochures for a full URL path, walking from the most specific
 * segment to the least so child model pages inherit their parent's brochures.
 * Unknown path -> [] (the banner then hides the Download Brochure button).
 */
export function getBrochuresForPath(path) {
  const segments = String(path || "")
    .split(/[?#]/)[0]
    .split("/")
    .filter(Boolean)
    .map((seg) => seg.trim().toLowerCase());

  for (let i = segments.length - 1; i >= 0; i--) {
    const hit = brochuresBySlug[segments[i]];
    if (hit && hit.length) return hit;
  }
  return [];
}

/** Exact single-slug lookup, no parent fallback. */
export function getBrochuresForSlug(slug) {
  if (!slug) return [];
  return brochuresBySlug[String(slug).trim().toLowerCase()] || [];
}

/** True if this path has anything to offer. */
export function hasBrochures(path) {
  return getBrochuresForPath(path).length > 0;
}