// @ts-nocheck
import { addToCart, loadCartItem } from '$lib/server/cart';
import { loadProducts } from '$lib/server/product.js';

/**
 * +page.svelteに書かれているmethod="POST"をここで受ける
 * actionsというのはお約束の名前らしい
 * defaultという名前でrequestをいうパラメーターを受け取る
 * 
 */
export const actions ={
  default: async ({locals, request}) => {
    if(locals.currentUser){
      const data = await request.formData();
      await addToCart(locals.currentUser.userId, data.get("productId"));
    }
  }
}

export async function load({locals, params}){
  const product = products.find((product) => product.id === params.id);
  const relatedProducts = products.filter((product) => product.id !== params.id);

  let cart=[];
  if(locals.currentUser){
    cart = await loadCartItems(locals.currentUser.userId);
  }
  return {product, relatedProducts, cart};
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


