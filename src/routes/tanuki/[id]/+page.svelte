<script>
// @ts-nocheck

  export let data;
  $:({tanukiData} = data);
</script>

<header class="header">
  <p>ここはおたぬエリアです</p>

  <h4>名前 : {tanukiData.name}</h4>
  <h4>方法 : {tanukiData.move}</h4>
  <h4>時間 : {tanukiData.sampo_time}分</h4>
  
</header>