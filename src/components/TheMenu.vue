<template>
  <div class="menu">
    <div class="menu-items">
      <div v-for="item in menuItems" :key="item.label" class="menu-item">
        <BaseButton mode="flat" :label="item.label" class="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import menuItems from '/src/menuItems';
</script>

<style>
.menu {
  width: 100%;
  display: none;
  text-align: left;
}

.menu-item {
  display: block;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.menu-item:first-child {
  border-top: 1px solid rgba(0,0,0,0.1);
}

.item {
  margin: 1.5rem 0;
}

@media all and (max-width: 768px) {
  .menu {
    display: block;
  }
}
</style>