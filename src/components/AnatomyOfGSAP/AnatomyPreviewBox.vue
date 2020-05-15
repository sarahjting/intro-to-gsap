<template>
  <div class="animation">
    <div class="circle" ref="circle"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
export default {
  name: "AnatomyPreviewBox",
  computed: mapState(["slideWidth"]),
  data: () => ({
    loop: null
  }),
  watch: {
    slideWidth: function() {
      if (!this.slideWidth) return;
      if (this.loop) this.loop.kill();
      this.loop = new TimelineMax({ repeat: -1 });
      this.loop.to(
        this.$refs.circle,
        { left: this.$store.state.slideWidth * 0.8, duration: 3 },
        "loop"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.animation {
  position: relative;
}
.circle {
  position: absolute;
  left: 0;
}
</style>
