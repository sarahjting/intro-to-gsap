<template>
  <div class="anatomy-selector-detail">
    <div>
      <div class="content">
        gsap.to(<span class="selector">'.ball'</span>, {...})
      </div>
      <div class="animation">
        <div class="square"></div>
        <div class="circle"></div>
        <div class="square"></div>
        <div class="circle"></div>
        <div class="square"></div>
      </div>
    </div>
    <div>
      <div class="content">
        gsap.to(<span class="selector"
          >document.getElementsByClassName('ball')</span
        >, {...})
      </div>
      <div class="animation">
        <div class="square"></div>
        <div class="circle"></div>
        <div class="square"></div>
        <div class="circle"></div>
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineMax } from "gsap";
export default {
  name: "AnatomySelectorBox",
  mounted: function() {
    const tl = new TimelineMax();
    tl.to(".anatomy-selector-detail .circle", {
      y: -50,
      ease: "circ",
      yoyo: true,
      repeat: -1
    });
  }
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
}
.selector {
  font-weight: 600;
  color: orange;
  border-bottom: sw(0.5) moccasin solid;
}
.anatomy-selector-detail {
  font-size: 0.65em;
  margin: 0 sw(5);

  & > div {
    margin-top: sw(5);
    text-align: left;
    .content {
      margin-bottom: sw(2);
      white-space: nowrap;
    }
    .animation {
      position: relative;
      padding: sw(6) sw(0) sw(2) sw(0);
      border-radius: sw(2.5);
      background-color: moccasin;
      color: orange;
      display: flex;
      justify-content: space-around;
      .circle,
      .square {
        border: sw(0.5) moccasin solid;
        background-color: orange;
        width: sw(5);
        height: sw(5);
      }
    }
  }
}
</style>
