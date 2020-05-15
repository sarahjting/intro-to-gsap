<template>
  <div class="content">
    <div>
      gsap.to(".ball1", {x: 100, rotation: 360})
    </div>
    <div>
      gsap.to(".ball2", {x: 50, rotation: 180,
      <span class="highlight">delay: 1</span>})
    </div>
    <div>
      gsap.to(".ball3", {x: 25, rotation: 90,
      <span class="highlight">delay: 2</span>});
    </div>
  </div>
</template>

<script>
export default {
  name: "Content3"
};
</script>

<style scoped lang="scss">
.highlight {
  background-color: palegoldenrod;
  border-bottom: sw(0.5) solid gold;
}
</style>
