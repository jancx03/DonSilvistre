<template>
  <div>
    <img class="image" :src="image" alt="image" />
    <p class="name">{{ name }}</p>
    <p class="price">${{price}} USD</p>
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
  object-fit: cover;
  width: 100%;
  max-height: 100%;
}

.name {
  font-weight: 600;
}

.price {
  color: grey;
  font-size: 1.2rem;
}
</style>