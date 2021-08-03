<template>
<div class="products-title">
  <p>FEATURED PRODUCTS</p>
</div>
  <section class="products">
    <div class="product" v-for="product in products" :key="product.name">
      <BaseProductCard :name="product.name" :price="product.price" :image="product.image" />
    </div>
  </section>

</template>

<script setup>
import products from '/src/mockProducts.js'
</script>

<style scoped>
.products-title {
  width: 100%;
  text-align: center;
  margin: 5rem 0;
  font-size: 1.5rem;
  letter-spacing: .1rem;
}

.products {
  display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  padding: 0 9%;
  text-align: center;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;
}

.product {
}

/* Grid */
@media screen and (max-width: 528px) {
  .products {
    grid-template-columns:  1fr;
  }
}
@media screen and (min-width: 768px) {
  .products {
    grid-template-columns:  repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  .products {
    grid-template-columns:  repeat(3, 1fr);
  }
}
@media screen and (min-width: 1256px) {
  .products {
    grid-template-columns:  repeat(4, 1fr);
  }
}
@media screen and (min-width: 1500px) {
  .products {
    grid-template-columns:  repeat(5, 1fr);
  }
}

</style>