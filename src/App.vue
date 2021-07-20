<template>
  <TheHeader style="z-index: 99; position:relative;" class="header" key="header" @displayMenu="setMenu"/>
  <transition name="menu" mode="in-out">
  <TheMenu style="z-index: 1;" key="menu" v-if="displayMenu"/>
  </transition>
  <router-view key="view" ></router-view>
  <TheFooter />
</template>

<script setup>
import { ref } from 'vue';
import TheHeader from '/src/components/TheHeader.vue'
import TheMenu from '/src/components/TheMenu.vue'
import TheFooter from '/src/components/TheFooter.vue'

const displayMenu = ref(false);

const setMenu = () => {
  displayMenu.value = !displayMenu.value;
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  box-sizing: border-box;
}

/* .menu-leave-to
.menu-enter-from   -> starting state

.menu-leave-from   -> initial state   -> end state
.menu-enter-to     -> ending state */

.menu-enter-active {
  animation: slide-in 1s ease-in;
}
.menu-leave-active {
  animation: slide-in 1s ease-out reverse;
}

.view {
  transition: all 1s ease-in-out;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@keyframes slide-in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
