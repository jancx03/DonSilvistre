<template>
  <div class="container">
    <div class="image"></div>
    <div class="image"></div>
    <div class="image"></div>
    <div class="image"></div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px;
  justify-items: center;
  column-gap: 10px;
  row-gap: 15px;
}
.image {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
  width: 240px;
  height: 120px;
}
</style>