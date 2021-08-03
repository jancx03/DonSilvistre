<template>
  <div class="container">
    <BaseTestimonial :testimonials="testimonial" :name="name" />
  </div>
</template>

<script>
export default {};
import BaseTestimonial from "/src/components/BaseTestimonial.vue";
import { ref } from "vue";

const name = ref("Julio Cesar");

const testimonial = ref("This product is great!");
</script>

<style scoped>
.container {
  display: flex;
  padding-left: 55px;
  padding-right: 55px;
}
p {
  color: #788188;
  margin: 0 0 19.44444px;
  font-size: 1.10938em;
  font-weight: 400;
  font-style: normal;
}
.small {
  width: 1.2rem;
  line-height: 1.5;
}
</style>