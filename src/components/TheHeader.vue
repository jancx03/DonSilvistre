<template>
  <header>
    <div class="navbar">
      <h1>LOGO</h1>
      <div class="nav-items">
        <BaseButton mode="flat" label="Home" />
        <BaseButton mode="flat" label="Face" />
        <BaseButton mode="flat" label="Body" />
        <BaseButton mode="flat" label="About" />
      </div>
      <div>
        <FontAwsomeIcon class="icon" icon="search" />
        <FontAwsomeIcon class="icon" icon="user" />
        <FontAwsomeIcon class="icon" icon="shopping-cart"/>
        <FontAwsomeIcon class="menu-icon icon" icon="bars" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faUser, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faUser, faSearch, faBars);
</script>

<style scoped>
header {
  margin-bottom: 7rem;
}

.navbar {
  width: 100%;
  height: 7rem;
  position: fixed;
  background-color: aliceblue;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.icon {
  font-size: 1.6rem;
  color: black;
  font-weight: 100;
  margin-right: 2rem;
}

.menu-icon {
  display: none;
}

@media all and (max-width: 768px) {
  .nav-items {
    display: none;
  }
  .menu-icon {
    display: inline-block;
  }
 }
</style>