import { loadCart } from '$lib/server/cart';

export async function load(){
  const cart = await loadCart();
  return {cart};
}