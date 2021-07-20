<template>
  <header>
    <div class="navbar">
      <p class="logo">don silvestre</p>
      <div class="nav-items">
        <BaseButton 
          v-for="item in menuItems" 
          :key="item.label" 
          mode="flat" 
          :label="item.label" />
      </div>
      <div>
        <BaseButton class="active-icon" mode="flat">
          <FontAwsomeIcon class="icon" icon="search" />
        </BaseButton>

        <BaseButton class="active-icon" mode="flat">
          <FontAwsomeIcon class="icon" icon="user" />
        </BaseButton>

        <BaseButton class="active-icon" mode="flat">
          <FontAwsomeIcon class="icon" icon="shopping-cart"/>
        </BaseButton>

        <BaseButton class="active-icon" mode="flat" @click="setMenu">
          <FontAwsomeIcon class="menu-icon icon" icon="bars" />
        </BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineEmit } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import menuItems from '/src/menuItems'

const emit = defineEmit(['displayMenu']);

const setMenu = () => { 
  return emit('displayMenu', true);
}

library.add(faShoppingCart, faUser, faSearch, faBars);
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 7rem;
  position: relative;
  top: 0;
  background-color: white;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 1.6rem;
  font-weight: 100;
}

.menu-icon {
  display: none;
}

.active-icon {
  margin-right: 2rem;
}

.logo {
  font-family: 'Tangerine', cursive;
  font-size: 5rem;
  margin-left: 2rem;
  color: black;
}

@font-face {
  font-family: "Tangerine";
  src: local("Tangerine"),
   url(/src/assets/Tangerine-Regular.ttf) format("truetype");
}

@media all and (max-width: 768px) {
  .nav-items {
    display: none;
  }
  .menu-icon {
    display: inline-block;
  }
  .logo {
    font-size: 3rem;
    margin-left: 1rem;
  }
  .icon {
    font-size: 1rem;
  }
}

 @media all and (max-width: 480px) {
  .logo {
    font-size: 2.5rem;
    margin-left: none;
  }
  .icon {
    font-size: .8rem;
  }
}
</style>