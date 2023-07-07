// @ts-nocheck
import { addToCart, loadCart } from '$lib/server/cart';
import { readFile } from 'fs/promises';

/**
 * +page.svelteに書かれているmethod="POST"をここで受ける
 * actionsというのはお約束の名前らしい
 * defaultという名前でrequestをいうパラメーターを受け取る
 * 
 */
export const actions ={
  default: async ({request}) => {
    const data = await request.formData();
    await addToCart(data.get('productId')); // ex react-book, angular-book, vue-book
  }

}



export async function load({params}){
  const products = await loadProducts();
  const product = products.find((product) => product.id === params.id);
  const relatedProducts = products.filter((product) => product.id !== params.id);
  const cart = await loadCart();
  return {product, relatedProducts, cart};
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


