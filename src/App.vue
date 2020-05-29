<template>
  <div id="app" :style="cssVars">
    <div class="content" ref="content">
      <Contents />
      <TitleSlide />
      <SelfIntroSlide />
      <WhyGSAPSlide />
      <WhyGSAPAnimationSlide />
      <WhyGSAPAlternativesSlide />
      <WhyGSAPComparisonsSlide />
      <IntroToTweenSlide />
      <AnatomyOfGSAPSlide />
      <SpecialOptionsSlide />
      <ConclusionSlide />
    </div>
  </div>
</template>

<script>
import Contents from "./components/Contents";
import TitleSlide from "./components/TitleSlide";
import SelfIntroSlide from "./components/SelfIntroSlide";
import WhyGSAPSlide from "./components/WhyGSAPSlide";
import WhyGSAPAnimationSlide from "./components/WhyGSAPAnimationSlide";
import WhyGSAPAlternativesSlide from "./components/WhyGSAPAlternativesSlide";
import WhyGSAPComparisonsSlide from "./components/WhyGSAPComparisonsSlide";
import IntroToTweenSlide from "./components/IntroToTweenSlide";
import AnatomyOfGSAPSlide from "./components/AnatomyOfGSAPSlide";
import SpecialOptionsSlide from "./components/SpecialOptionsSlide";
import ConclusionSlide from "./components/ConclusionSlide";
export default {
  name: "App",
  components: {
    Contents,
    TitleSlide,
    WhyGSAPSlide,
    WhyGSAPAnimationSlide,
    WhyGSAPAlternativesSlide,
    WhyGSAPComparisonsSlide,
    IntroToTweenSlide,
    AnatomyOfGSAPSlide,
    SpecialOptionsSlide,
    SelfIntroSlide,
    ConclusionSlide
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
  max-width: 1000px;
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
