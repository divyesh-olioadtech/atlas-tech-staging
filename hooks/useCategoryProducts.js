import { productCatalog } from "../data/product/productCatalog";

export default function useCategoryProducts() {
  const getProducts = (main, sub) => {
    return productCatalog[main]?.subcategories[sub]?.products || [];
  };

  const getProduct = (main, sub, productId) => {
    const items = getProducts(main, sub);
    return items.find((p) => p.id === productId);
  };

  const getOtherProducts = (main, sub, productId) => {
    const items = getProducts(main, sub);
    return items.filter((p) => p.id !== productId);
  };

  return {
    getProducts,
    getProduct,
    getOtherProducts,
  };
}
