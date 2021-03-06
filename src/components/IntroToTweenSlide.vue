<template>
  <Slide :timeline="tl" slideName="tween" slideCount="5">
    <h1>What is a tween?</h1>
    <div class="circle-wrapper">
      <div class="circle circle-left stagger-0"></div>
      <div class="arrows">
        <i class="stagger-2 fa fa-chevron-right"></i>
        <i class="stagger-2 fa fa-chevron-right"></i>
        <i class="stagger-2 fa fa-chevron-right"></i>
      </div>
      <div class="circle circle-right stagger-1"></div>
    </div>
    <div class="stats-wrapper">
      <div class="stats stagger-0">
        <div class="stat">
          <span>x:</span>
          <span>{{ Math.floor(progress) }}px</span>
        </div>
      </div>
      <div class="stats stagger-1">
        <div class="stat">
          <span>x:</span>
          <span>100px</span>
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "IntroToTweenSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null,
    progress: 0
  }),
  computed: mapState(["slideWidth"]),
  watch: {
    slideWidth: function() {
      if (this.$data.tl) {
        this.$data.tl.kill();
      }
      this.$data.tl = new TimelineMax();
      this.$data.tl
        .to({}, { duration: 2 })
        .staggerFrom(".slide-tween .stagger-0", 1, { x: -100, opacity: 0 }, 0.1)
        .to({}, { duration: 2 })
        .staggerFrom(".slide-tween .stagger-1", 1, { x: -100, opacity: 0 }, 0.1)
        .to({}, { duration: 2 })
        .staggerFrom(
          ".slide-tween .stagger-2",
          1,
          { x: -100, opacity: 0 },
          0.1,
          "fade"
        )
        .to({}, { duration: 2 })
        .to(this.$data, { progress: 100, duration: 3 }, "slide")
        .to(
          ".slide-tween .circle",
          {
            left: this.slideWidth * 0.7,
            duration: 3
          },
          "slide"
        )
        .staggerTo(
          ".slide-tween .stagger-2",
          1,
          { x: 100, opacity: 0 },
          0.1,
          "slide"
        )
        .to({}, { duration: 3 });
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.circle-wrapper {
  width: 100%;
  height: sw(20);
  position: relative;
}
.circle {
  position: absolute;
}
.circle-left {
  left: sw(10);
  z-index: 100;
}
.arrows {
  height: sw(20);
  width: sw(100);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrows i {
  margin: 0.25em;
  color: lightgray;
}
.circle-right {
  left: sw(70);
  opacity: 0.1;
}
.stats-wrapper {
  padding: sw(2.5);
  width: var(--slide-width);
  display: flex;
  justify-content: space-between;
}
.stats {
  width: sw(40);
  background-color: #eee;
  border: #aaa sw(0.5) solid;
  border-radius: sw(5);
  padding: sw(2.5);
}
.stat {
  display: flex;
}
.stat span {
  flex: 1;
}
</style>
