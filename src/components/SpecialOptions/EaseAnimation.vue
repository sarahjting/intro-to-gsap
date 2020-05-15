<template>
  <div class="animation">
    <div class="regular">
      <div class="content">
        <span class="anatomy-part anatomy-duration">
          ...to('.ball', {x: 100,
          <span class="duration">ease: "none"</span>})
        </span>
      </div>
      <div class="animation-box">
        <div class="circle" ref="circle1"></div>
      </div>
    </div>
    <div class="slow">
      <div class="content">
        ...to('.ball', {x: 100,
        <span class="duration">ease: "elastic"</span>})
      </div>
      <div class="animation-box">
        <div class="circle" ref="circle2"></div>
      </div>
    </div>
    <div class="fast">
      <div class="content">
        <span class="anatomy-part anatomy-duration">
          ...to('.ball', {x: 100,
          <span class="duration">ease: "bounce"</span>})
        </span>
      </div>
      <div class="animation-box">
        <div class="circle" ref="circle3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { TimelineMax } from "gsap";
export default {
  name: "EaesAnimation",
  computed: mapState(["slideWidth"]),
  methods: {
    startAnimations() {
      const tl = new TimelineMax({ repeat: -1 });
      tl.to(
        this.$refs.circle1,
        { left: this.slideWidth * 0.3, ease: "none" },
        "1"
      )
        .to(
          this.$refs.circle2,
          { left: this.slideWidth * 0.3, ease: "elastic" },
          "1"
        )
        .to(
          this.$refs.circle3,
          { left: this.slideWidth * 0.3, ease: "bounce" },
          "1"
        )
        .to({}, { duration: 1 });
    }
  },
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
  color: teal;
  border-bottom: sw(0.5) paleturquoise solid;
  padding: sw(1);
}
.animation {
  font-size: 0.65em;

  & > div {
    display: flex;
    justify-content: space-between;
    margin-bottom: sw(5);
    .content {
      flex: 1;
      margin-right: sw(5);
      white-space: nowrap;
    }
    .animation-box {
      position: relative;
      padding: sw(5);
      border-radius: sw(2.5);
      background-color: paleturquoise;
      color: teal;
      display: flex;
      width: sw(35);
      .circle {
        left: 0;
        border: sw(0.5) paleturquoise solid;
        background-color: teal;
        position: absolute;
        width: sw(5);
        height: sw(5);
      }
    }
  }
}
</style>
