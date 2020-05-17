<template>
  <Slide :timeline="tl" slideName="self-intro" slideCount="1">
    <h1>Hi! I'm Sarah!</h1>
    <div class="content">
      <ul>
        <li><span class="bullet">🦋</span> CC11 graduate!</li>
        <li><span class="bullet">🎮</span> Last time I talked about Unity</li>
        <li><span class="bullet">👯‍♀️</span> Talk to me about Arknights</li>
      </ul>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "SelfIntroSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .staggerFrom(
        ".slide-self-intro li",
        1,
        {
          opacity: 0,
          y: 100
        },
        1
      )
      .to({}, { duration: 2 });
  }
};
</script>

<style scoped lang="scss">
</style>
