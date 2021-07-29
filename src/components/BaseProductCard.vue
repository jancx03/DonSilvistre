<template>
  <div class="product-card">
    <div class="product-image">
      <img class="image" :src="image" />
    </div>
    <div class="product-info">
      <h5>{{ name }}</h5>
      <h6>${{price}} USD</h6>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { name, price, image } = defineProps({
  name: {
    type: String,
    required: true,
    default: 'NAME MISSING!!!'
  },
  price: {
    type: Number,
    requred: true,
    default: -1
  },
  image: {
    type: String,
    required: true,
    default: 'product-image'
  }
});
</script>

<style scoped>
.image {
  width: 15rem;
}
</style>