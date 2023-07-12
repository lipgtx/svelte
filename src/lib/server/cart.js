// @ts-nocheck
import { database } from '$lib/server/mongodb';

export async function addToCart(productId){
  await database.collection("cartItems").insertOne({userId, productId});
}

export async function loadCartItems(){
  const items = await database.collection("cartItems").find({userId});
  const productIds = await items.map((item) => item.productId).toArray();
  const products = await database.collection("products").find({_id:{$in:productIds}});
  return await products.toArray();
}
