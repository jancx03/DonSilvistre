<template>
  <button v-if="!link" :class="mode">
    <slot>
      <span class="label">{{label}}</span>
    </slot>
  </button>
  <router-link v-else :to="to || toObject" :class="mode">
    <slot>
      {{label}}
    </slot>
  </router-link>
</template>

<script setup>
const { link, to, toObject, mode, label } = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false
  },
  to: {
    type: String,
    required: false,
    default: null
  },
  toObject: {
    type: Object,
    required: false,
    default: null
  },
  mode: {
    type: String,
    required: false,
    default: null
  },
  label: {
    type: String,
    required: false,
    default: 'Label'
  }
});
</script>

<style scoped>
button,
a {
  text-decoration: none;
  font: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: .2rem;
  display: inline-block;
  font-size: 1.2rem;
}

.flat {
  background-color: transparent;
  color: rgb(17, 17, 17);
  border: none;
}

.flat:hover,
.flat:active {
  color: rgb(148, 148, 148);
}

.outline {
  background-color: olive;
  border-color: transparent;
  color: white;
}

.outline:hover,
.outline:active {
  background-color: rgb(185, 185, 158)
}

.clear {
  background-color: white;
  border-color: transparent;
  color: black;
}

.clear:hover,
.clear:active {
  background-color: rgba(255, 255, 255, 0.5);
}

.label {
  margin-right: 0.5rem;
  padding: 0.75rem 1.5rem;
}
</style>