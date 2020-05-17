<template>
  <div class="contents">
    <div class="rocket"><span>🚀</span></div>
    <svg id="motionPath" viewBox="100 10 100 200">
      <path
        id="path"
        fill="none"
        stroke="#000"
        stroke-width="1"
        stroke-dasharray="5,5"
        d="M82.363,3.083 C110.769,2.358 125.05,17.7 130.365,35.965 135.347,53.084 122.086,63.322 126.674,80.912 131.226,98.409 131.985,93.765 157.73,117.818 178.745,137.452 168.055,173.857 146.092,189.934 "
      />
    </svg>
  </div>
</template>

<script>
import gsap, { TimelineMax } from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { ScrollScene } from "scrollscene";

gsap.registerPlugin(MotionPathPlugin);

export default {
  name: "Contents",
  data: () => ({
    tl: null,
    ss: null
  }),
  computed: {
    slideCount: function() {
      return this.$store.state.slideCount;
    }
  },
  watch: {
    slideCount: function() {
      this.startScroll();
    }
  },
  methods: {
    startScroll: function() {
      if (this.ss) this.ss.destroy();
      this.ss = new ScrollScene({
        //   triggerElement: this.$refs.slide,
        //   triggerHook: "onLeave",
        duration: document.documentElement.clientHeight * (this.slideCount + 5),
        offset: 0,
        gsap: { timeline: this.tl },
        useGlobalController: false
      });
    }
  },
  mounted: function() {
    this.tl = new TimelineMax();
    this.tl.to(".rocket", {
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 50
      },
      transformOrigin: "50% 50%",
      duration: 5,
      ease: "none"
    });
    this.startScroll();
    document
      .getElementById("app")
      .addEventListener("resize", () => console.log("asdfdsf"));
  }
};
</script>

<style scoped lang='scss'>
.contents {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  #motionPath {
    height: 100vh;
    position: absolute;
    left: 0;
    #path {
      z-index: -100;
      opacity: 0.2;
    }
  }

  .rocket {
    position: absolute;
    display: inline-block;
    z-index: 1;
    font-size: sw(10);
    span {
      transform: rotate(40deg);
    }
  }
}
</style>
