<template>
  <div class="animation">
    <div class="circle circle-left" ref="ball1"></div>
    <div class="circle circle-middle" ref="ball2"></div>
    <div class="circle circle-right" ref="ball3"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
export default {
  name: "Animation1",
  props: ["opacity"],
  data: () => ({
    tl: null,
    progress: 0
  }),
  computed: mapState(["slideWidth"]),
  watch: {
    slideWidth: function() {
      this.startAnimation();
    },
    opacity: function() {
      this.startAnimation();
    }
  },
  methods: {
    startAnimation: function() {
      if (this.$data.tl) {
        this.$data.tl.kill();
      }
      this.$data.tl = new TimelineMax({ repeat: -1 });
      this.$data.tl
        .to({}, { duration: 2 })
        .to(
          this.$refs.ball1,
          {
            left: this.slideWidth * 0.23,
            duration: 1,
            rotation: 360,
            ease: "none"
          },
          "1"
        )
        .to(
          this.$refs.ball2,
          {
            left: this.slideWidth * 0.56,
            duration: 1,
            rotation: 360,
            ease: "none"
          },
          "1"
        )
        .to(
          this.$refs.ball3,
          {
            left: this.slideWidth * 0.9,
            duration: 1,
            rotation: 360,
            ease: "none"
          },
          "1"
        );
    }
  }
};
</script>

<style scoped lang="scss">
.animation {
  width: 100%;
  height: sw(20);
  display: flex;
  align-items: center;
  position: relative;
}
.circle {
  position: absolute;
  overflow: hidden;
  width: sw(10);
  height: sw(10);
  border-color: teal;
  background-color: turquoise;
  &::before {
    content: "";
    background-color: white;
    width: 100%;
    height: 50%;
    display: block;
  }
}
.content {
  background-color: #eee;
  border-radius: sw(5);
  padding: sw(5);
}
.circle-left {
  left: 0;
}
.circle-middle {
  left: sw(33);
}
.circle-right {
  left: sw(66);
}
</style>
