<template>
  <div id="app" :style="cssVars">
    <div class="content" ref="content">
      <IntroToTweenSlide />
      <AnatomyOfGSAPSlide />
    </div>
  </div>
</template>

<script>
import IntroToTweenSlide from './components/IntroToTweenSlide';
import AnatomyOfGSAPSlide from './components/AnatomyOfGSAPSlide';
export default {
  name: 'App',
  components: {
    IntroToTweenSlide,
    AnatomyOfGSAPSlide,
  },
  computed: {
    cssVars() {
      return {
        '--slide-width': this.$store.state.slideWidth + 'px',
      };
    },
  },
  mounted: function() {
    window.addEventListener('resize', this.setSlideWidth);
    this.setSlideWidth();
  },
  methods: {
    setSlideWidth: function() {
      this.$store.commit('setSlideWidth', this.$refs.content.clientWidth);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: sw(5);
}
.circle {
  width: sw(20);
  height: sw(20);
  background-color: red;
  border-radius: 50%;
  border: darkred solid sw(0.5);
}
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: sw(5);
}
</style>
