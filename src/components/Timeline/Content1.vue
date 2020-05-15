<template>
  <div class="content">
    <div>
      gsap.to(".ball1", {x: 100, rotation: 360});
    </div>
  </div>
</template>

<script>
export default {
  name: "Content1"
};
</script>

<style lang="scss" scoped>
.content {
  background-color: pink !important;
  color: darkred;
}
</style>