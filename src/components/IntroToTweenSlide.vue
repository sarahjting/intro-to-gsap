<template>
  <Slide :timeline="tl">
    <div class="wrapper">
      <div>
        <div class="circle"></div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "IntroToTweenSlide",
  components: {
    Slide,
  },
  data: () => ({
    tl: null,
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax({ paused: true });
    this.$data.tl
      .to(".circle", { x: 100 })
      .addPause()
      .to(".circle", { x: 200, y: 100, opacity: 0.5 })
      .addPause()
      .to(".circle", { x: 300 });
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.wrapper div {
  padding: 20px;
}
.circle {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
.circle-stat {
  text-align: left;
  font-size: 4rem;
  padding: 10px;
  background-color: #eee;
  border: #aaa 1px solid;
  border-radius: 5px;
}
</style>
