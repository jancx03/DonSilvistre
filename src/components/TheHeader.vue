<template>
  <header>
    <div class="navbar">
      <h1>LOGO</h1>
      <div class="nav-items">
        <BaseButton mode="flat" label="link" />
        <BaseButton mode="flat" label="link" />
        <BaseButton mode="flat" label="link" />
        <BaseButton mode="flat" label="link" />
      </div>
      <h1>ICONS</h1>
    </div>
  </header>
</template>

<script setup>

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

@media all and (max-width: 480px) {
  .nav-items {
    display: none;
  }
 }
</style>