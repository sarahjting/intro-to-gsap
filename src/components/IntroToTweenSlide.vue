<template>
  <Slide :timeline="tl">
    <div class="wrapper slide-tween">
      <div class="header">What is a tween?</div>
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
            <span>width:</span>
            <span>100px</span>
          </div>
          <div class="stat">
            <span>height:</span>
            <span>100px</span>
          </div>
          <div class="stat">
            <span>left:</span>
            <span>{{ Math.floor(progress * 3) }}px</span>
          </div>
        </div>
        <div class="stats stagger-1">
          <div class="stat">
            <span>width:</span>
            <span>100px</span>
          </div>
          <div class="stat">
            <span>height:</span>
            <span>100px</span>
          </div>
          <div class="stat">
            <span>left:</span>
            <span>300px</span>
          </div>
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax, Power4 } from "gsap";
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
  mounted: function() {
    this.$data.tl = new TimelineMax({ paused: true });
    this.$data.tl
      .staggerFrom(".slide-tween .stagger-0", 1, { x: -100, opacity: 0 }, 0.1)
      .addPause()
      .staggerFrom(".slide-tween .stagger-1", 1, { x: -100, opacity: 0 }, 0.1)
      .addPause()
      .staggerFrom(
        ".slide-tween .stagger-2",
        1,
        { x: -100, opacity: 0 },
        0.1,
        "fade"
      )
      .to(".circle-right", { opacity: 0.1 }, "fade")
      .addPause()
      .to(
        this.$data,
        { progress: 100, duration: 3, ease: Power4.easeOut },
        "slide"
      )
      .to(
        ".slide-tween .circle",
        { left: "70vw", duration: 3, ease: Power4.easeOut },
        "slide"
      )
      .staggerTo(
        ".slide-tween .stagger-2",
        1,
        { x: 100, opacity: 0 },
        0.1,
        "slide"
      );
  }
};
</script>

<style>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10vw 0;
}
.circle-wrapper {
  width: 100vw;
  height: 20vw;
  position: relative;
}
.circle {
  position: absolute;
  width: 20vw;
  height: 20vw;
  background-color: red;
  border-radius: 50%;
  border: black solid 1vw;
}
.circle-left {
  left: 10vw;
  z-index: 100;
}
.arrows {
  height: 20vw;
  width: 100vw;
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
  right: 10vw;
}

.stats-wrapper {
  padding: 5vw;
  width: 100vw;
  display: flex;
  justify-content: space-between;
}
.stats {
  width: 40vw;
  background-color: #eee;
  border: #aaa 1vw solid;
  border-radius: 5vw;
  padding: 2.5vw;
}
.stat {
  display: flex;
}
.stat span {
  flex: 1;
}
</style>
