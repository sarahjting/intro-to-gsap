<template>
  <Slide :timeline="tl" slideName="timeline" slideCount="1">
    <h1>Sequential tweens?</h1>
    <Animation1 />
    <Animation2 />
    <Animation3 />
    <Content1 />
    <Content2 />
    <Content3 />
    <Content4 />
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
    progress: 0
  }),
  computed: mapState(["slideWidth"]),
  watch: {
    slideWidth: function() {
      this.$data.tl = new TimelineMax();
    }
  }
};
</script>

<style scoped lang="scss">
.animation {
  width: 100%;
  height: sw(20);
  display: flex;
  align-items: center;
  position: relative;
}
.content {
  background-color: #eee;
  border-radius: sw(5);
  padding: sw(5);
  font-size: 0.8em;
}
</style>
