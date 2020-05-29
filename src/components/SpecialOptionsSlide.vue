<template>
  <Slide :timeline="tl" slideName="anatomy" slideCount="3">
    <h1>Special Options</h1>
    <div class="content-wrapper">
      <div class="content">
        gsap.to('.ball', {x: 100,
        <span class="highlight">
          <i class="duration"></i>
          <i class="delay" ref="delayHighlight"></i>
          <i class="ease" ref="easeHighlight"></i>
          <span ref="contentSpan">{{ content }}</span> </span
        >});
      </div>
    </div>
    <div class="animation-wrapper">
      <DurationAnimation ref="durationAnimation" />
      <DelayAnimation ref="delayAnimation" />
      <EaseAnimation ref="easeAnimation" />
    </div>
  </Slide>
</template>

<script>
import gsap, { TimelineMax } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import DurationAnimation from "./SpecialOptions/DurationAnimation";
import DelayAnimation from "./SpecialOptions/DelayAnimation";
import EaseAnimation from "./SpecialOptions/EaseAnimation";
import Slide from "./Slide";

gsap.registerPlugin(TextPlugin);

export default {
  name: "IntroToTweenSlide",
  components: {
    Slide,
    DurationAnimation,
    DelayAnimation,
    EaseAnimation
  },
  data: () => ({
    tl: null,
    content: "duration: 1"
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .to(this.$refs.contentSpan, { text: "delay: 0" }, "1")
      .to(this.$refs.durationAnimation.$el, { y: 100, opacity: 0 }, "1")
      .from(this.$refs.delayAnimation.$el, { y: -100, opacity: 0 }, "1")
      .fromTo(
        this.$refs.delayHighlight,
        { width: "0%" },
        { width: "100%" },
        "1"
      )
      .to({}, { duration: 2 }, "1.5")
      .to(this.$refs.contentSpan, { text: `ease: "none"` }, "2")
      .to(this.$refs.delayAnimation.$el, { y: 100, opacity: 0 }, "2")
      .from(this.$refs.easeAnimation.$el, { y: -100, opacity: 0 }, "2")
      .fromTo(
        this.$refs.easeHighlight,
        { width: "0%" },
        { width: "100%" },
        "2"
      );
  }
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
  text-align: center;
}
.highlight {
  cursor: pointer;
  position: relative;
  color: #000;
  span {
    z-index: 2;
    position: relative;
  }
  i {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--hover);
    border-bottom: solid var(--color) sw(0.5);
  }
}
.duration {
  --hover: lightskyblue;
  --color: royalblue;
}
.delay {
  --hover: pink;
  --color: orangered;
}
.ease {
  --hover: paleturquoise;
  --color: teal;
}
.content {
  margin-bottom: sw(5);
}
.animation-wrapper {
  height: 40vh;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  display: flex;
  position: relative;
}
.animation {
  width: 100%;
  position: absolute;
}
</style>
