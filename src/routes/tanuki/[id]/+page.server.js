export async function load({params}){
  const tanukiId = params.id;
  const tanukiData = await getTanukiProductsFromDatabase(tanukiId);
  return { tanukiData };
}

async function loadTanuki(){
  return[
    {
      id:"hare",
      name:"Super Kunkun",
      move:"run",
      sampo_time:120
    },
    {
      id:"ame",
      name:"O TA NU",
      move:"walk",
      sampo_time:60
    }
  ]
}

/**
 * @param {string} tanukiId
 */
async function getTanukiProductsFromDatabase(tanukiId){
  const products = await loadTanuki();
  return products.find((tanuki) => tanukiId === tanuki.id);
}