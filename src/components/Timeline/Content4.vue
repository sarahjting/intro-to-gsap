<template>
  <div class="content">
    <div>
      <span class="highlight">const tl = new TimelineMax();</span>
    </div>
    <div>
      tl.to(".ball1", {x: 100, rotation: 360})
    </div>
    <div><span class="hide">tl</span>.to(".ball2", {x: 50, rotation: 180})</div>
    <div><span class="hide">tl</span>.to(".ball3", {x: 25, rotation: 90});</div>
  </div>
</template>

<script>
export default {
  name: "Content4"
};
</script>

<style scoped lang="scss">
.highlight {
  background-color: palegoldenrod;
  border-bottom: sw(0.5) solid gold;
}
.hide {
  color: transparent;
}
</style>
