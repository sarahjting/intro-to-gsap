<template>
  <Slide :timeline="tl" slideName="why-gsap" slideCount="3">
    <h1>Why GSAP?</h1>
    <div class="content">
      <div class="why why-animation">
        <div class="fill"><i class="fa fa-star"></i></div>
        <div class="emoji"><i class="fa fa-magic"></i></div>
        <div class="caption">
          Why is animation important?
        </div>
      </div>
      <div class="why why-gsap">
        <div class="fill"><i class="fa fa-star"></i></div>
        <div class="emoji"><i class="fa fa-socks"></i></div>
        <div class="caption">
          Why GSAP over alternatives?
        </div>
      </div>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "WhyGSAPSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .to({}, { duration: 2 })
      .from(".why-animation .fill", {
        y: -100,
        opacity: 0
      })
      .from(".why-gsap .fill", {
        y: -100,
        opacity: 0
      })
      .to({}, { duration: 1 })
      .from(".slide-why-gsap .why-animation .emoji, .why-animation .caption", {
        y: 100,
        opacity: 0
      })
      .to({}, { duration: 1 })
      .from(".slide-why-gsap .why-gsap .emoji, .why-gsap .caption", {
        y: 100,
        opacity: 0
      })
      .to({}, { duration: 2 });
  }
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.why {
  display: flex;
  flex-direction: column;
  position: relative;
  width: sw(40);
  font-weight: 750;

  justify-content: center;
  align-items: center;
  text-align: center;

  .emoji {
    font-size: sw(20);
  }
  .fill {
    position: absolute;
    margin: auto;
    opacity: 0.15;
    color: royalblue;
    font-size: sw(70);
    z-index: -10;
  }
  &.why-animation {
    .fill {
      margin-right: sw(10);
      transform: rotate(-20deg);
    }
  }
  &.why-gsap {
    .fill {
      font-size: sw(50);
      transform: rotate(20deg);
    }
  }
}
</style>
