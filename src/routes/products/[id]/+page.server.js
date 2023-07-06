import { addToCart } from '$lib/server/cart';
import { readFile } from 'fs/promises';

export const actions ={
  default: async ({request}) => {
    const data = await request.formData();
    await addToCart(data.get('productId')); // ex react-book, angular-book, vue-book
  }

}



export async function load({params}){
  const productId = params.id;  // ex. react-book, angular-book, vue-book
  const product = await getProductFromDatabase(productId);
  const relatedProducts = await getRelatedProductsFromDatabase(productId);
  return {product, relatedProducts}
}

async function loadProducts(){
  const content = await readFile('data/products.json', {encoding: 'utf-8'});
  return JSON.parse(content);
}

/**
 * @param {string} productId
 * 
 * findメソッドは条件に一致した1つの値を取得する
 */
async function getProductFromDatabase(productId){
  const products = await loadProducts();
  return products.find((product) => productId === product.id);  // 一致したもの -> 1つ
}

/**
 * @param {string} productId
 * 
 * filterメソッドは条件に一致した複数の値を取得する
 */
async function getRelatedProductsFromDatabase(productId){
  const products = await loadProducts();
  return products.filter((product)=> productId !== product.id); // 不一致なもの -> 複数
}


