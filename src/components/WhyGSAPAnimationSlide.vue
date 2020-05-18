<template>
  <Slide :timeline="tl" slideName="why-animation" slideCount="3">
    <h1>Why animate?</h1>
    <div class="content">
      <div class="why why-2" ref="why2">
        <div class="fill">
          <i class="fa fa-star"></i>
        </div>
        <div class="emoji"><i class="fa fa-book"></i></div>
        <div class="caption">
          Usability
        </div>
      </div>
      <div class="why why-1" ref="why1">
        <div class="fill">
          <i class="fa fa-star"></i>
        </div>
        <div class="emoji"><i class="fa fa-smile"></i></div>
        <div class="caption">
          Retention
        </div>
      </div>
      <div class="why why-3" ref="why3">
        <div class="fill">
          <i class="fa fa-star"></i>
        </div>
        <div class="emoji"><i class="fa fa-cat"></i></div>
        <div class="caption">
          Coolness
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "WhyGSAPAnimationSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .from(this.$refs.why1, { x: "100vw" })
      .to({}, { duration: 1 })
      .from(this.$refs.why2, { x: "100vw" })
      .to({}, { duration: 1 })
      .from(this.$refs.why3, { x: "100vw" })
      .to({}, { duration: 2 });
  }
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  height: sw(50);
}
.why {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: absolute;
  overflow: hidden;

  width: sw(40);
  height: sw(40);
  border-radius: 20%;
  font-weight: 750;
  box-shadow: sw(1) sw(1) sw(1) rgba(0, 0, 0, 0.4);

  .emoji {
    line-height: 0;
    font-size: sw(20);
    margin-bottom: sw(1);
  }
  .fill {
    position: absolute;
    z-index: -1;
    font-size: sw(50);
    opacity: 0.5;
    color: white;
  }
  &.why-1 {
    left: sw(-5);
    transform: rotate(-20deg);
    background-color: turquoise;
    color: teal;
    .fill {
      margin-right: sw(10);
      transform: rotate(-20deg);
    }
  }
  &.why-2 {
    transform: rotate(5deg);
    top: sw(20);
    left: sw(30);
    background-color: palegoldenrod;
    color: goldenrod;
    .fill {
      margin-right: sw(-10);
      transform: rotate(-30deg);
    }
  }
  &.why-3 {
    transform: rotate(-5deg);
    left: sw(65);
    background-color: palevioletred;
    color: darkred;
    .fill {
      margin-right: sw(5);
      transform: rotate(-30deg);
    }
  }
}
</style>
