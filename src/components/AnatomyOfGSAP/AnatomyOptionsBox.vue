<template>
  <div class="anatomy-options-detail">
    <div>
      <div class="content">
        ...to('.circle', <span class="options">{x: 100}</span>)
      </div>
      <div class="animation">
        <div class="circle moving-circle" ref="movingCircle"></div>
      </div>
    </div>
    <div>
      <div class="content">
        ...to('.circle', <span class="options">{color: red}</span>)
      </div>
      <div class="animation">
        <div class="circle" ref="blueCircle"></div>
      </div>
    </div>
    <div>
      <div class="content">
        ...to('.circle', <span class="options">{opacity: 0}</span>)
      </div>
      <div class="animation">
        <div class="circle" ref="fadeCircle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { TimelineMax } from 'gsap';
export default {
  name: 'AnatomyOptionsBox',
  computed: mapState(['slideWidth']),
  methods: {},
  data: () => ({
    loops: [],
  }),
  watch: {
    slideWidth: function() {
      if (this.loops.moving) this.loops.moving.kill();
      this.loops.moving = new TimelineMax({ repeat: -1 });
      this.loops.moving.to(this.$refs.movingCircle, {
        left: this.$store.state.slideWidth * 0.5,
        duration: 3,
      });
    },
  },
  mounted: function() {
    this.loops.color = new TimelineMax({ repeat: -1 });
    this.loops.color.to(this.$refs.blueCircle, {
      backgroundColor: 'red',
      duration: 3,
    });
    this.loops.fade = new TimelineMax({ repeat: -1 });
    this.loops.fade.to(this.$refs.fadeCircle, { opacity: 0, duration: 3 });
  },
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
}
.options {
  font-weight: 600;
  color: teal;
  border-bottom: sw(0.5) turquoise solid;
  padding: sw(1);
}
.anatomy-options-detail {
  font-size: 0.5em;
  margin: 0 sw(5);

  & > div {
    display: flex;
    margin-bottom: sw(5);
    .content {
      flex: 1;
      margin-right: sw(5);
      white-space: nowrap;
    }
    .animation {
      flex: 2;
      position: relative;
      padding: sw(5);
      border-radius: sw(2.5);
      background-color: turquoise;
      color: teal;
      display: flex;
      .circle {
        border: sw(0.5) turquoise solid;
        background-color: teal;
        position: absolute;
        width: sw(5);
        height: sw(5);
      }
      .circle.moving-circle {
        left: 0;
      }
    }
  }
}
</style>
