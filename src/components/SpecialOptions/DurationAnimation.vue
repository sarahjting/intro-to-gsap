<template>
  <div class="animation">
    <div class="regular">
      <div class="content">
        <span class="anatomy-part anatomy-duration">
          ...to('.ball', {x: 100,
          <span class="duration">duration: 0.5</span>})
        </span>
      </div>
      <div class="animation-box">
        <div class="circle" ref="fastCircle"></div>
      </div>
    </div>
    <div class="slow">
      <div class="content">
        ...to('.ball', {x: 100,
        <span class="duration">duration: 1</span>})
      </div>
      <div class="animation-box">
        <div class="circle" ref="regularCircle"></div>
      </div>
    </div>
    <div class="fast">
      <div class="content">
        <span class="anatomy-part anatomy-duration">
          ...to('.ball', {x: 100,
          <span class="duration">duration: 3</span>})
        </span>
      </div>
      <div class="animation-box">
        <div class="circle" ref="slowCircle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
export default {
  name: "DurationAnimation",
  computed: mapState(["slideWidth"]),
  methods: {
    startAnimations() {
      const offset = this.$store.state.slideWidth * 0.35;
      Object.keys(this.circles).forEach(k => {
        if (this.loops[k]) this.loops[k].kill();
        this.loops[k] = new TimelineMax({ repeat: -1 });
        this.loops[k].to(
          this.$refs[k],
          { left: offset, duration: this.circles[k] },
          "loop"
        );
      });
    }
  },
  data: () => ({
    loops: [],
    circles: {
      slowCircle: 3,
      regularCircle: 1,
      fastCircle: 0.5
    }
  }),
  watch: {
    slideWidth: function() {
      this.startAnimations();
    }
  },
  mounted: function() {
    this.startAnimations();
  }
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
}
.duration {
  font-weight: 600;
  color: royalblue;
  border-bottom: sw(0.5) lightskyblue solid;
  padding: sw(1);
}
.animation {
  font-size: 0.65em;

  & > div {
    display: flex;
    margin-bottom: sw(5);
    .content {
      flex: 1;
      margin-right: sw(5);
      white-space: nowrap;
    }
    .animation-box {
      flex: 2;
      position: relative;
      padding: sw(5);
      border-radius: sw(2.5);
      background-color: lightskyblue;
      color: royalblue;
      display: flex;
      .circle {
        left: 0;
        border: sw(0.5) lightskyblue solid;
        background-color: royalblue;
        position: absolute;
        width: sw(5);
        height: sw(5);
      }
    }
  }
}
</style>
