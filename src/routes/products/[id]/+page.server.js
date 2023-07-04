export async function load({params}){
  const productId = params.id;
  const product = await getProductFromDatabase(productId);
  const relatedProducts = await getRelatedProductsFromDatabase(productId);
  return {product, relatedProducts}
}

async function loadProducts(){
  return[
    {
      id:"svelte-book",
      name: 'Svelte Guide',
      price: 3500,
      images:[
        "https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-1.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-2.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/svelte-book-3.png",
      ]
    },
    {
      id:"react-book",
      name: 'React Guide',
      price: 4500,
      images:[
        "https://github.com/svelte-book/sample-app/raw/main/static/react-book-1.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/react-book-2.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/react-book-3.png",
      ]
    },
    {
      id:"vue-book",
      name: 'Vue Guide',
      price: 5500,
      images:[
        "https://github.com/svelte-book/sample-app/raw/main/static/vue-book-1.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/vue-book-2.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/vue-book-3.png",
      ]
    },
    {
      id:"angular-book",
      name: 'Angular Guide',
      price: 6500,
      images:[
        "https://github.com/svelte-book/sample-app/raw/main/static/angular-book-1.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/angular-book-2.png",
        "https://github.com/svelte-book/sample-app/raw/main/static/angular-book-3.png",
      ]
    },

  ]
}

async function getProductFromDatabase(productId){
  const products = await loadProducts();
  return products.find((product) => productId === product.id);
}

async function getRelatedProductsFromDatabase(productId){
  const products = await loadProducts();
  return products.filter((product)=> productId !== product.id);
}