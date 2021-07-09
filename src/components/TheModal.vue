<template>
  <div class="image"></div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.image {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80");
  width: 100%;
  height: 375px;
  display: flex;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
}
</style>
