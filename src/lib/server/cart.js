// @ts-nocheck
import {readFile, writeFile} from 'fs/promises';

const dataPath = "data/cart.json";

export async function addToCart(productId){
  const cart = await loadCart();
  if(!cart.includes(productId)){
    cart.push(productId);
  }
  await writeFile(dataPath, JSON.stringify(cart), {encoding: 'utf-8'});
}

export async function loadCart(){
  try{
    const content = await readFile(dataPath);
    return JSON.parse(content);
  }catch(err){
    if(err.code === 'EN0ENT'){
      return [];
    }else{
      throw err;
    }
  }

}
