<template>
  <Slide :timeline="tl" slideName="conclusion" slideCount="2">
    <h1>Thanks!</h1>
    <div class="content">
      <ul>
        <li><i class="bullet fab fa-github"></i> sarahjting</li>
        <li><i class="bullet fab fa-twitter"></i> sarahjting</li>
        <li><i class="bullet fab fa-linkedin"></i> sarahjting</li>
      </ul>
      <div class="svg">
        <img src="/qr-code.svg" />
      </div>
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
      .from(".slide-conclusion .svg", {
        opacity: 0,
        y: 100
      })
      .staggerFrom(
        ".slide-conclusion li",
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
.content {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  .svg {
    width: sw(40);
    img {
      max-width: 100%;
    }
  }
}
</style>
