<template>
  <section class="products">
    <BaseProductCard  />
  </section>
</template>

<script>
import products from '/src/mockProducts.js'
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: row;
  margin: 7%;
  padding: 2%;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
}
</style>