<template>
  <div id="app" :style="cssVars">
    <div class="content" ref="content">
      <TitleSlide />
      <SelfIntroSlide />
      <IntroToTweenSlide />
      <AnatomyOfGSAPSlide />
      <SpecialOptionsSlide />
      <TimelineSlide />
    </div>
  </div>
</template>

<script>
import TitleSlide from "./components/TitleSlide";
import IntroToTweenSlide from "./components/IntroToTweenSlide";
import AnatomyOfGSAPSlide from "./components/AnatomyOfGSAPSlide";
import SpecialOptionsSlide from "./components/SpecialOptionsSlide";
import TimelineSlide from "./components/TimelineSlide";
import SelfIntroSlide from "./components/SelfIntroSlide";
export default {
  name: "App",
  components: {
    TitleSlide,
    IntroToTweenSlide,
    AnatomyOfGSAPSlide,
    SpecialOptionsSlide,
    TimelineSlide,
    SelfIntroSlide
  },
  computed: {
    cssVars() {
      return {
        "--slide-width": this.$store.state.slideWidth + "px"
      };
    }
  },
  mounted: function() {
    window.addEventListener("resize", this.setSlideWidth);
    this.setSlideWidth();
  },
  methods: {
    setSlideWidth: function() {
      this.$store.commit("setSlideWidth", this.$refs.content.clientWidth);
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  overflow-x: hidden;
}
.content {
  width: 100%;
  max-width: 800px;
  align-self: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: sw(5);
  display: flex;
  justify-content: center;
}
.circle {
  width: sw(20);
  height: sw(20);
  background-color: red;
  border-radius: 50%;
  border: darkred solid sw(0.5);
}
h1,
h2 {
  text-align: center;
  width: 100%;
  margin-bottom: sw(5);
}
ul {
  list-style: none;
  margin-left: 0;
  li {
    margin-bottom: sw(5);
    .bullet {
      margin-right: sw(2.5);
    }
  }
}
</style>
