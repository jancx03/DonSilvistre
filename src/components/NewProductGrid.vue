<template>
  <section class="products">
    <div class="product-card" v-for="items in 5" :key="items">
      <div class="product-image">
        <img class="image" src="/src/assets/img/soap.jpg" />
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
  flex-direction: row;
  margin: 6.3rem;
  padding: 3.44rem;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
}

.image {
  width: 15rem;
}
</style>