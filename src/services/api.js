export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const apiJson = await result.json();
  return apiJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId && query) {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const productByCategory = await result.json();
    return productByCategory;
  }
  if (categoryId && !query) {
    const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const productByQuery = await result.json();
    return productByQuery;
  }
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categoryAndQuery = await result.json();
  return categoryAndQuery;
}
