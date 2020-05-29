<template>
  <Slide :timeline="tl" slideName="timeline" slideCount="5">
    <h1 ref="test">Sequential tweens?</h1>
    <div class="animation-wrapper">
      <Animation1 ref="animation1" />
      <Animation2 ref="animation2" />
      <Animation3 ref="animation3" />
    </div>
    <div class="content-wrapper">
      <Content1 ref="content1" />
      <Content2 ref="content2" />
      <Content3 ref="content3" />
      <Content4 ref="content4" />
    </div>
  </Slide>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
import Animation1 from "./Timeline/Animation1";
import Animation2 from "./Timeline/Animation2";
import Animation3 from "./Timeline/Animation3";
import Content1 from "./Timeline/Content1";
import Content2 from "./Timeline/Content2";
import Content3 from "./Timeline/Content3";
import Content4 from "./Timeline/Content4";
import Slide from "./Slide";
export default {
  name: "TimelineSlide",
  components: {
    Slide,
    Animation1,
    Animation2,
    Animation3,
    Content1,
    Content2,
    Content3,
    Content4
  },
  data: () => ({
    tl: null,
    progress: 0,
    animation1: 1,
    animation2: 0,
    animation3: 0
  }),
  computed: mapState(["slideWidth"]),
  watch: {
    slideWidth: function() {
      this.$data.tl = new TimelineMax();
      this.$data.tl
        .to({}, { duration: 1 })
        .to(this.$refs.content1.$el, { opacity: 0, y: 100 }, "c1")
        .from(this.$refs.content2.$el, { opacity: 0, y: -100 }, "c1")
        .to({}, { duration: 1 })
        .to(this.$refs.animation1.$el, { opacity: 0, y: 100 }, "a1")
        .from(this.$refs.animation2.$el, { opacity: 0, y: -100 }, "a1")
        .to({}, { duration: 1 })
        .to(this.$refs.content2.$el, { opacity: 0, y: 100 }, "c2")
        .from(this.$refs.content3.$el, { opacity: 0, y: -100 }, "c2")
        .to(this.$refs.animation2.$el, { opacity: 0, y: 100 }, "c2")
        .from(this.$refs.animation3.$el, { opacity: 0, y: -100 }, "c2")
        .to({}, { duration: 1 })
        .to(this.$refs.content3.$el, { opacity: 0, y: 100 }, "c3")
        .from(this.$refs.content4.$el, { opacity: 0, y: -100 }, "c3")
        .to({}, { duration: 2 });
    }
  }
};
</script>

<style scoped lang="scss">
.animation-wrapper,
.content-wrapper {
  width: 100%;
  height: sw(25);
  display: flex;
  align-items: center;
  position: relative;
}
.animation-wrapper {
  .animation {
    display: flex;
    align-items: center;
    position: absolute;
  }
}
.content-wrapper {
  .content {
    position: absolute;
    background-color: #eee;
    border-radius: sw(5);
    padding: sw(5);
    font-size: 0.8em;
  }
}
</style>
