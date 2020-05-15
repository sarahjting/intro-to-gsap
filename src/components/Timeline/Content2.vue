<template>
  <div class="content">
    <div>
      gsap.to(".ball1", {x: 100, rotation: 360});
    </div>
    <div>
      gsap.to(".ball2", {x: 50, rotation: 180});
    </div>
    <div>
      gsap.to(".ball3", {x: 25, rotation: 90});
    </div>
  </div>
</template>

<script>
export default {
  name: "Content2"
};
</script>
