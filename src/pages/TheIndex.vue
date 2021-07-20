<template>
  <div class="top">
    <TheModal />
  </div>
  <div class="middle">
    <TheTestimonials />
  </div>
</template>

<script setup>
import TheHeader from "/src/components/TheHeader.vue";
import TheModal from "/src/components/TheModal.vue";
import TheTestimonials from "/src/components/TheTestimonials.vue";
</script>
<style>
.middle {
  padding-bottom: 55px;
}
</style>
