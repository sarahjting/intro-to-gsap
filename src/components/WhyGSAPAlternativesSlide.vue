<template>
  <Slide :timeline="tl" slideName="gsap-alternatives" slideCount="5">
    <h1>Why GSAP?</h1>
    <div class="content">
      <div class="column column-css">
        <div class="header" ref="headerCss">
          <div class="shine" ref="shineCss"></div>
          <div class="text">CSS</div>
        </div>
        <div class="body" ref="bodyCss">
          <ul>
            <li><span class="bullet">🥰</span> Native</li>
            <li><span class="bullet">🥰</span> Fast</li>
            <li><span class="bullet">😰</span> Inflexible</li>
          </ul>
        </div>
      </div>
      <div class="column column-jquery">
        <div class="header" ref="headerJQuery">
          <div class="shine" ref="shineJQuery"></div>
          <div class="text">jQuery</div>
        </div>
        <div class="body" ref="bodyJQuery">
          <ul>
            <li><span class="bullet">🥰</span> jQuery</li>
            <li><span class="bullet">😰</span> jQuery</li>
          </ul>
        </div>
      </div>
      <div class="column column-gsap">
        <div class="header" ref="headerGsap">
          <div class="shine" ref="shineGsap"></div>
          <div class="text">GSAP</div>
        </div>
        <div class="body" ref="bodyGsap">
          <ul>
            <li><span class="bullet">🥰</span> Fast</li>
            <li><span class="bullet">🥰</span> Pleasant</li>
            <li><span class="bullet">🥰</span> Flexible</li>
            <li><span class="bullet">😰</span> Third party</li>
          </ul>
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
    const tween = { y: 100, opacity: 0 };
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .from(this.$refs.headerCss, tween)
      .from(this.$refs.headerJQuery, tween)
      .from(this.$refs.headerGsap, tween)
      .to({}, { duration: 1 })
      .staggerFrom(".slide-gsap-alternatives .column-css li", 1, tween, 2)
      .to({}, { duration: 1 })
      .staggerFrom(".slide-gsap-alternatives .column-jquery li", 1, tween, 2)
      .to({}, { duration: 1 })
      .staggerFrom(".slide-gsap-alternatives .column-gsap li", 1, tween, 2)
      .to({}, { duration: 2 });

    const shineTl = new TimelineMax({ repeat: -1 });
    shineTl
      .fromTo(
        this.$refs.shineCss,
        { left: "-50%" },
        { left: "150%", duration: 1 },
        0
      )
      .fromTo(
        this.$refs.shineJQuery,
        { left: "-50%" },
        { left: "150%", duration: 1 },
        0.5
      )
      .fromTo(
        this.$refs.shineGsap,
        { left: "-50%" },
        { left: "150%", duration: 1 },
        1
      )
      .to({}, { duration: 6 });
  }
};
</script>

<style scoped lang="scss">
.content {
  position: relative;
  height: sw(50);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.column {
  width: sw(33);
  font-weight: 750;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    padding: sw(1);
    width: sw(25);
    height: sw(10);
    border-radius: sw(5);
    overflow: hidden;
    text-align: center;

    background-color: lightskyblue;
    color: royalblue;
    box-shadow: sw(0.5) sw(0.5) sw(0.5) royalblue;

    position: relative;

    &::before {
      font-size: sw(15);
      font-family: "Font Awesome 5 Free";
      content: "\f005";

      position: absolute;
      transform: rotate(25deg);
      left: sw(0);
      top: sw(-5);
      color: white;
      opacity: 0.25;
      z-index: 1;
    }

    .text {
      z-index: 10;
      position: absolute;
      width: 100%;
      text-align: center;
      line-height: sw(8);
    }

    .shine {
      background-color: white;
      height: sw(20);
      width: sw(5);
      top: sw(-5);
      left: sw(-10);
      opacity: 0.5;
      position: absolute;
      transform: rotate(25deg);
      z-index: 100;
    }
  }

  .body {
    text-align: left;
    margin-top: sw(5);
    li {
      margin-bottom: sw(1);
      .bullet {
        margin-right: sw(0.5);
      }
    }
  }

  &.column-css {
    .fill {
      margin-right: sw(10);
      transform: rotate(-20deg);
    }
  }
  &.column-jquery {
    .fill {
      margin-right: sw(-10);
      transform: rotate(-30deg);
    }
  }
  &.column-gsap {
    .fill {
      margin-right: sw(5);
      transform: rotate(-30deg);
    }
  }
}
</style>
