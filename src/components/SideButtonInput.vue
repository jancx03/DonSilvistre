<template>
  <div class="wrapper">
    <input type="text" class="input">
    <BaseButton class="btn" mode="outline" label="Subscribe"/>
  </div>
</template>

<style scoped>
.input {
  width: 20vw;
  padding-left: 1rem;
  border: 1px solid black;
  border-right: none;
  height: 2rem;
  font-size: 1.1rem;
}

.input:focus {
  outline:0;
}

.btn {
  height: 2.1rem;
  border-radius: 0;

}

@media all and (max-width: 1024px) {
  .input {
    width: 30vw;
  }
}
</style>