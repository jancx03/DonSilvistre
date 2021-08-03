<template>
  <div class="red">
    <svg
      class="small"
      aria-hidden="true"
      focusable="false"
      role="presentation"
      viewBox="0 0 41 35"
    >
      <path
        d="M10.208 17.711h6.124v16.332H0V21.684C0 8.184 5.444.956 16.332 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766zm24.498 0h6.124v16.332H24.498V21.684C24.498 8.184 29.942.956 40.83 0v6.125c-4.083 1.14-6.124 4.414-6.124 9.82v1.766z"
        fill="#000"
        fill-rule="evenodd"
      ></path>
    </svg>
    <p>{{ testimonials }}</p>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const { testimonials, name } = defineProps({
  testimonials: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
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