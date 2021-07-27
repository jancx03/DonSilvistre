<template>
  <section class="products">
    <div class="product-card">
      <div class="product-image">
        <img src="/src/assets/img/soap.jpg" />
      </div>
      <div class="product-info">
        <h5>Jabon Don Selvatico</h5>
        <h6>$22.28 USD</h6>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.products {
  display: flex;
  /* flex-wrap: wrap; */
}

/* .product-card {
  padding: 2%;
  flex-grow: 1;
  flex-basis: 16%;

  display: flex; so child elements can use flexbox */
/* } */
.product-image img {
  max-width: 80%;
}
/* .product-info {
  margin-top: auto;
} */
/* @media (max-width: 920px) {
  .product-card {
    flex: 1 21%;
  }
} */
</style>