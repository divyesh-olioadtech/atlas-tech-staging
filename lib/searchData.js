import { menuData } from "../components/menuData";
import { productCatalog } from "../data/product/productCatalog";

// Build a flat list of all searchable items from menu + product catalog
export function getSearchableItems() {
  const items = [];

  // 1. Extract all menu items (pages + submenu links)
  menuData.forEach((menu) => {
    if (menu.link) {
      items.push({
        name: menu.name,
        link: menu.link,
        category: "Page",
      });
    }
    if (menu.subMenu) {
      menu.subMenu.forEach((sub) => {
        sub.items?.forEach((item) => {
          items.push({
            name: item.name,
            link: item.link,
            category: sub.label || menu.name,
          });
        });
      });
    }
  });

  // 2. Extract all products from productCatalog
  Object.values(productCatalog).forEach((cat) => {
    Object.values(cat.subcategories).forEach((subcat) => {
      subcat.products?.forEach((product) => {
        items.push({
          name: product.title || product.name,
          link: product.url,
          category: subcat.title || cat.title,
        });
      });
    });
  });

  // 3. Static pages
  items.push(
    { name: "About Us", link: "/about", category: "Page" },
    { name: "Contact Us", link: "/contact-us", category: "Page" },
    { name: "Blog", link: "/blog", category: "Page" }
  );

  return items;
}

// Simple fuzzy search: match if query words appear in name
export function searchItems(query, items) {
  if (!query || query.trim().length === 0) return [];

  const words = query.toLowerCase().trim().split(/\s+/);

  return items.filter((item) => {
    const text = `${item.name} ${item.category}`.toLowerCase();
    return words.every((word) => text.includes(word));
  });
}