<template>
  <div class="top">
    <TheModal />
  </div>
  <div class="middle">
    <TheTestimonials />
  </div>
  <div>
    <BaseGrid />
  </div>
</template>

<script setup>
import TheHeader from "/src/components/TheHeader.vue";
import TheModal from "/src/components/TheModal.vue";
import TheTestimonials from "/src/components/TheTestimonials.vue";
import BaseGrid from "/src/components/BaseGrid.vue";
</script>
<style>
.middle {
  padding-bottom: 55px;
}
</style>
