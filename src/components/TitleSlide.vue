<template>
  <Slide :timeline="tl" slideName="title" slideCount="1">
    <h1>
      Javascript Animation with <span>the </span
      ><b
        >G<span>reen </span>S<span>ock </span>A<span>nimation </span>P<span
          >latform</span
        ></b
      >
      🧦
    </h1>
    <h2>Sarah Ting</h2>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "TitleSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .to(".slide-title h1 span", { text: "" })
      .to(".slide-title h1 b", { color: "green" })
      .to({}, { duration: 2 });
  }
};
</script>

<style scoped lang="scss">
h2 {
  opacity: 0.5;
}
</style>
