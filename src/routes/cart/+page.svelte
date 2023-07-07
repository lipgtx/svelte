<script>
// @ts-nocheck

  export let data;
  let cart=[];
  $:({cart} = data);
</script>

<article>
  <section>
    <p>カートにある商品一覧</p>
  </section>
  <section>
    {#each cart as car}
      <li>{car}</li>
    {/each}
  </section>
</article>