<template>
  <div id="app">
    <Slide>
      <div class="circle"></div>
    </Slide>
  </div>
</template>

<script>
import { gsap } from "gsap";
import Slide from "./components/Slide";
export default {
  name: "App",
  components: {
    Slide,
  },
  mounted: function() {
    gsap.to(".circle", { x: 100 });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.circle {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
</style>
