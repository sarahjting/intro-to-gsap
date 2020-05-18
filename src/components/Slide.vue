<template>
  <div class="slide" :style="cssVars" ref="slide">
    <div :class="`wrapper slide-${slideName}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ScrollScene } from "scrollscene";

export default {
  name: "Slide",
  props: ["timeline", "slideName", "slideCount"],
  computed: {
    cssVars: function() {
      return {
        height: 100 + "vh"
      };
    }
  },
  watch: {
    timeline: function() {
      if (!this.timeline) return;
      new ScrollScene({
        triggerElement: this.$refs.slide,
        triggerHook: "onLeave",
        duration: `${Number(this.slideCount) *
          document.documentElement.clientHeight}`,
        offset: 0,
        gsap: {
          timeline: this.timeline
        },
        useGlobalController: false
      }).Scene.setPin(this.$refs.slide);
    }
  },
  mounted: function() {
    this.$store.commit("incrementSlideCount", this.slideCount);
  }
};
</script>

<style>
.slide {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
}
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
