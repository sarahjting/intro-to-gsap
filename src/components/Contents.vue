<template>
  <div class="contents">
    <div class="rocket"><span>🚀</span></div>
    <div
      class="checkpoint"
      :pos="i"
      :key="i"
      v-for="i in [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"
    >
      <i class="fa fa-star"></i>
    </div>
    <svg id="motionPath" viewBox="-20 0 100 275">
      <path
        id="path"
        fill="none"
        stroke="#000"
        stroke-width="1"
        stroke-dasharray="5,5"
        d="M-20.847,-2.348 C-4.025,6.268 28.89,22.242 27.175,40.609 24.294,71.155 -5.006,72.679 0.062,100.359 4.566,124.954 -15.788,144.643 -15.841,159.079 -15.896,174.304 -7.256,180.346 12.999,192.948 47.13,214.182 22.096,261.56 -4.729,259.314 "
      />
    </svg>
    <svg id="backgroundPath" viewBox="-20 0 100 275">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:royalblue;stop-opacity:1" />
          <stop offset="100%" style="stop-color:lightskyblue;stop-opacity:1" />
        </linearGradient>
      </defs>
      <path
        id="background"
        fill="url(#grad1)"
        d="M-21.516,-23.787 C-14.873,-31.912 12.972,-36.136 22.92,-24.966 39.962,-5.832 18.251,28.484 17.61,38.648 16.679,53.411 20.4,62.631 21.587,77.251 25.312,123.119 0.238,123.542 2.657,168.359 3.714,187.927 31.253,241.97 29.178,266.135 26.984,291.494 -1.924,341.177 -22.659,322.891 "
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

    // Get the coordinates of the point that is the fraction 'pos' along the path
    const path = document.getElementById("path");
    const pathLength = path.getTotalLength();

    // Make a div
    document.getElementsByClassName("checkpoint").forEach(x => {
      const loc = path.getPointAtLength(
        (x.attributes.pos.value / 100) * pathLength
      );
      x.style.left = (loc.x + 13) * 3.6 + "px";
      x.style.top = (loc.y - 7) * 3.6 + "px";
      console.log(loc);
    });
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

  .checkpoint {
    position: absolute;
  }

  #motionPath {
    height: 100vh;
    position: absolute;
    left: 0;
    z-index: -100;
    #path {
      position: absolute;
      z-index: -100;
      opacity: 0.2;
    }
    #background {
      position: absolute;
      z-index: -1000;
    }
  }
  #backgroundPath {
    height: 100vh;
    position: absolute;
    left: 0;
    z-index: -1000;
    #background {
      position: absolute;
      z-index: -1000;
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
