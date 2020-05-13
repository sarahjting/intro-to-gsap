<template>
  <div id="app">
    <IntroToTweenSlide />
  </div>
</template>

<script>
import IntroToTweenSlide from "./components/IntroToTweenSlide";
export default {
  name: "App",
  components: {
    IntroToTweenSlide,
  },
};
</script>

<style>
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
  font-size: 5vw;
}
</style>
