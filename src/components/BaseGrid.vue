<template>
  <div class="main">Cool</div>
</template>

<script>
export default {};
</script>

<style scoped>
 display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  transition: all .3s linear;
}

/* Grid */
@media screen and (max-width: 528px) {
  main {
    grid-template-columns:  1fr;
  }
}
@media screen and (min-width: 768px) {
  main {
    grid-template-columns:  repeat(2, 1fr);
  }
}
@media screen and (min-width: 1024px) {
  main {
    grid-template-columns:  repeat(3, 1fr);
  }
}
@media screen and (min-width: 1256px) {
  main {
    grid-template-columns:  repeat(4, 1fr);
  }
}
@media screen and (min-width: 1500px) {
  main {
    grid-template-columns:  repeat(5, 1fr);
  }
}
</style>