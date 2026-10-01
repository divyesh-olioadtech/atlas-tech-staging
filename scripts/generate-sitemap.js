// scripts/generate-sitemap.js
// Auto-generate sitemap for your construction machinery website (DEBUG VERSION)

const fs = require("fs");
const path = require("path");

// CHANGE THIS TO YOUR ACTUAL DOMAIN
const baseUrl = "https://www.atlastechnologiesindia.com";

// Routes to exclude from sitemap
const excludedRoutes = ["/api", "/_app", "/_document", "/404", "/500"];

// Function to get all blog posts by reading only ACTIVE posts from allPosts array
// Function to get all blog posts by reading only ACTIVE posts from allPosts array
function getBlogRoutes() {
  try {
    console.log("\n📝 Fetching blog posts...");

    const blogsIndexPath = path.join(
      process.cwd(),
      "data",
      "blogs",
      "index.js"
    );
    console.log(`   Reading blogs index file: ${blogsIndexPath}`);

    if (!fs.existsSync(blogsIndexPath)) {
      console.log("   ⚠️  Blogs index file not found");
      return [];
    }

    // Read the index.js file content
    const indexContent = fs.readFileSync(blogsIndexPath, "utf-8");

    // Create a map of variable names to filenames from imports
    const importMap = new Map();
    const importRegex = /import\s+(\w+)\s+from\s+['"]\.\/([\w-]+)['"]/g;
    let match;

    while ((match = importRegex.exec(indexContent)) !== null) {
      const varName = match[1]; // e.g., "how_to_choose_right_asphalt_plant_for_construction_project"
      const filename = match[2]; // e.g., "how-to-choose-right-asphalt-plant-for-construction-project"
      importMap.set(varName, filename);
    }

    console.log(`   Found ${importMap.size} total imports`);

    // Find the ACTIVE allPosts array (not commented out)
    const allPostsMatch = indexContent.match(
      /export const allPosts = \[([\s\S]*?)\];/
    );
    if (!allPostsMatch) {
      console.log("   ⚠️  Could not find allPosts array");
      return [];
    }

    const allPostsContent = allPostsMatch[1];

    // Extract only active (non-commented) post variable names
    const activePostVars = [];
    const lines = allPostsContent.split("\n");

    for (const line of lines) {
      const trimmed = line.trim();

      // Skip empty lines and comments (lines starting with //)
      if (!trimmed || trimmed.startsWith("//")) {
        continue;
      }

      // Match variable name (with or without comma)
      const varMatch = trimmed.match(/^([a-zA-Z_]\w*),?\s*$/);
      if (varMatch) {
        const varName = varMatch[1];
        activePostVars.push(varName);
      }
    }

    console.log(
      `   Found ${activePostVars.length} active posts in allPosts array`
    );

    // For each active post, get the filename and read the blog file
    const blogRoutes = [];

    for (const varName of activePostVars) {
      const filename = importMap.get(varName);

      if (!filename) {
        console.log(`   ⚠️  No filename found for variable: ${varName}`);
        continue;
      }

      try {
        const blogFilePath = path.join(
          process.cwd(),
          "data",
          "blogs",
          `${filename}.js`
        );

        if (fs.existsSync(blogFilePath)) {
          const blogContent = fs.readFileSync(blogFilePath, "utf-8");

          // Extract the SLUG from the blog file (this is the actual URL slug)
          const slugMatch = blogContent.match(/slug:\s*['"]([^'"]+)['"]/);
          const slug = slugMatch ? slugMatch[1] : filename;

          // Extract date from the blog file
          const dateMatch = blogContent.match(/date:\s*['"]([\d-]+)['"]/);
          const date = dateMatch
            ? dateMatch[1]
            : new Date().toISOString().split("T")[0];

          // Extract title for logging
          const titleMatch = blogContent.match(/title:\s*['"]([^'"]+)['"]/);
          const title = titleMatch ? titleMatch[1] : slug;

          const route = `/blog/${slug}`;

          console.log(`   ✅ Blog: ${route}`);
          console.log(`      Title: ${title}`);
          console.log(`      Date: ${date}`);

          blogRoutes.push({
            route: route,
            date: date,
          });
        } else {
          console.log(`   ⚠️  File not found: ${filename}.js`);
        }
      } catch (error) {
        console.log(`   ⚠️  Error reading ${filename}: ${error.message}`);
      }
    }

    console.log(`\n📊 Successfully processed ${blogRoutes.length} blog posts`);
    return blogRoutes;
  } catch (error) {
    console.error("⚠️  Error loading blog posts:", error.message);
    console.log("   Stack trace:", error.stack);
    console.log("   Continuing without blog posts...");
    return [];
  }
}
// Function to get all files recursively
function getAllFiles(dir, files = []) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} not found`);
    return files;
  }

  const items = fs.readdirSync(dir);
  console.log(`📂 Reading directory: ${dir}`);
  console.log(`   Contents: ${items.join(", ")}`);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip special directories
      if (!item.startsWith(".") && item !== "node_modules") {
        console.log(`📁 Entering subdirectory: ${item}`);
        getAllFiles(fullPath, files);
      } else {
        console.log(`⏭️  Skipping directory: ${item}`);
      }
    } else if (item.match(/\.(js|jsx|ts|tsx)$/)) {
      console.log(`📄 Found page file: ${fullPath}`);
      files.push(fullPath);
    } else {
      console.log(`⏭️  Skipping non-page file: ${item}`);
    }
  }

  return files;
}
// Get all static routes from src/pages
function getStaticRoutes() {
  try {
    const pagesDir = path.join(process.cwd(), "src", "pages");
    console.log(`\n🔍 Starting scan of: ${pagesDir}`);

    if (!fs.existsSync(pagesDir)) {
      console.log(`❌ Pages directory not found: ${pagesDir}`);
      return [];
    }

    const pageFiles = getAllFiles(pagesDir);

    console.log(`\n📁 Total files found: ${pageFiles.length}`);
    console.log("📋 Complete file list:");
    pageFiles.forEach((file, index) => {
      console.log(`   ${index + 1}. ${file}`);
    });

    console.log("\n🔄 Converting files to routes:");
    const routes = pageFiles
      .map((file) => {
        // IMPORTANT: Convert absolute path to relative path first
        const relativePath = path.relative(pagesDir, file);

        // Convert file path to route
        let route = relativePath
          .replace(/\.(js|jsx|ts|tsx)$/, "") // Remove extension
          .replace(/\\/g, "/") // Convert Windows backslashes to forward slashes
          .replace(/\/index$/, "") // Remove /index
          .replace(/^index$/, ""); // Remove root index

        // Handle root route
        if (route === "" || route === "/") {
          route = "/";
        } else if (!route.startsWith("/")) {
          route = "/" + route;
        }

        console.log(`   📄 ${file} → ${route}`);

        // Skip dynamic routes and special files
        if (
          route.includes("[") ||
          route.includes("]") ||
          route.includes("_app") ||
          route.includes("_document") ||
          route.includes("404") ||
          route.includes("500")
        ) {
          console.log(`   ❌ Skipping: ${route} (special file)`);
          return null;
        }

        // Check if route should be excluded
        const shouldExclude = excludedRoutes.some(
          (excluded) => route.startsWith(excluded) || route === excluded
        );
        if (shouldExclude) {
          console.log(`   ❌ Excluding: ${route} (in excluded list)`);
          return null;
        }

        console.log(`   ✅ Keeping: ${route}`);
        return { route: route, date: new Date().toISOString() };
      })
      .filter(Boolean);

    console.log(`\n✅ Final routes after filtering:`);
    routes.forEach((item, index) => {
      console.log(`   ${index + 1}. ${item.route}`);
    });

    // Remove duplicates
    const uniqueRoutes = Array.from(
      new Map(routes.map((item) => [item.route, item])).values()
    );

    return uniqueRoutes;
  } catch (error) {
    console.error("Error getting static routes:", error);
    return [];
  }
}

// Generate the sitemap XML with proper SEO priorities
function generateSitemapXML(routeObjects) {
  const currentDate = new Date().toISOString();

  const urlEntries = routeObjects
    .map((routeObj) => {
      const route = routeObj.route;
      const lastmod = routeObj.date || currentDate;

      // Set priority based on route importance for construction machinery website
      let priority = "0.5";
      let changefreq = "monthly";

      // Homepage - highest priority
      if (route === "/") {
        priority = "1.0";
        changefreq = "weekly";
      }
      // Main pages - high priority
      else if (["/about-us", "/contact-us", "/products"].includes(route)) {
        priority = "0.9";
        changefreq = "monthly";
      }
      // Blog listing page
      else if (route === "/blog") {
        priority = "0.8";
        changefreq = "daily";
      }
      // Individual blog posts - important for SEO
      else if (route.startsWith("/blog/")) {
        priority = "0.7";
        changefreq = "monthly";
      }
      // Product categories - very important for business
      else if (
        route.includes("/asphalt-") ||
        route.includes("/concrete-") ||
        route.includes("/road-construction") ||
        route.includes("/groove-cutter") ||
        route.includes("/hydraulic-breaker") ||
        route.includes("/kerb-")
      ) {
        priority = "0.8";
        changefreq = "weekly";
      }
      // Other pages
      else {
        priority = "0.6";
        changefreq = "monthly";
      }

      return `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Main function
async function generateSitemap() {
  console.log("🚀 Generating sitemap for construction machinery website...");
  console.log("🔍 DEBUG MODE: Will show detailed scanning process\n");
  console.log(`📁 Working directory: ${process.cwd()}\n`);

  try {
    // Get all routes from your pages
    const staticRoutes = getStaticRoutes();

    // Get all blog post routes
    const blogRoutes = getBlogRoutes();

    // Add any additional manual routes if needed
    const manualRoutes = [
      // Add any extra routes here if needed
      // '/special-offers',
      // '/dealer-network'
    ].map((route) => ({ route: route, date: new Date().toISOString() }));

    const allRoutes = [...staticRoutes, ...blogRoutes, ...manualRoutes];

    console.log(`\n📊 SUMMARY:`);
    console.log(`   📄 Static pages: ${staticRoutes.length}`);
    console.log(`   📝 Blog posts: ${blogRoutes.length}`);
    console.log(`   ➕ Manual routes: ${manualRoutes.length}`);
    console.log(`   📊 Total routes: ${allRoutes.length}`);
    console.log(`\n   🔍 All routes included in sitemap:`);
    allRoutes.forEach((routeObj, index) => {
      console.log(`      ${index + 1}. ${routeObj.route}`);
    });

    if (allRoutes.length === 0) {
      console.warn("\n⚠️  No routes found! Sitemap will be empty.");
    }

    // Generate sitemap XML
    const sitemapXML = generateSitemapXML(allRoutes);

    const publicSitemapPath = path.join(process.cwd(), "public", "sitemap.xml");

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      console.log(`\n📁 Creating public directory: ${publicDir}`);
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(publicSitemapPath, sitemapXML);

    console.log("\n✅ Sitemap generated successfully!");
    console.log(`📄 Created: ${publicSitemapPath}`);
    console.log(`🌐 Available at: ${baseUrl}/sitemap.xml`);
    console.log(`📊 Total pages: ${allRoutes.length}`);

    // Show file size
    const stats = fs.statSync(publicSitemapPath);
    console.log(`📏 File size: ${stats.size} bytes`);

    // Show first few lines of sitemap for verification
    console.log(`\n📄 Sitemap preview (first 30 lines):`);
    const lines = sitemapXML.split("\n").slice(0, 30);
    lines.forEach((line) => console.log(`   ${line}`));
    if (sitemapXML.split("\n").length > 30) {
      console.log(`   ... (${sitemapXML.split("\n").length - 30} more lines)`);
    }
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
    console.error("Stack trace:", error.stack);
    console.warn("⚠️  Build will continue without sitemap");
  }
}

// Run the generator
generateSitemap();
