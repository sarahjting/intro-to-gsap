<template>
  <Slide :timeline="tl" slideName="self-intro" slideCount="1">
    <h1>Hi! I'm Sarah!</h1>
    <div class="content">
      <ul>
        <li><span class="bullet">🇦🇺</span> Australian webdev</li>
        <li><span class="bullet">🦋</span> CC11 graduate</li>
        <li><span class="bullet">🥰</span> PHP, JavaScript</li>
      </ul>
      <img src="/sarah.png" />
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
      .to({}, { duration: 2 })
      .staggerFrom(
        ".slide-self-intro li",
        1,
        {
          opacity: 0,
          y: 100
        },
        3
      )
      .to({}, { duration: 3 });
  }
};
</script>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  max-height: 50vh;
  border-radius: sw(10);
}
</style>
