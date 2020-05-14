<template>
  <div class="anatomy-method-detail">
    <div>
      <div class="content">
        gsap.<span class="method">to</span>('.circle', {x: 100})
      </div>
      <div class="animation">
        <div class="circle moving-circle" ref="toCircle"></div>
      </div>
    </div>
    <div>
      <div class="content">
        gsap.<span class="method">from</span>('.circle', {x: 100})
      </div>
      <div class="animation">
        <div class="circle" ref="fromCircle"></div>
      </div>
    </div>
    <div>
      <div class="content">
        gsap.<span class="method">fromTo</span>('.circle', {x: -100}, {x: 100})
      </div>
      <div class="animation">
        <div class="circle" ref="fromToCircle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { TimelineMax } from 'gsap';
export default {
  name: 'AnatomyMethodBox',
  computed: mapState(['slideWidth']),
  methods: {},
  data: () => ({
    loops: [],
  }),
  watch: {
    slideWidth: function() {
      this.loops.forEach((x) => x.kill());

      console.log(this.$store.state.slideWidth);

      this.loops.to = new TimelineMax({ repeat: -1 });
      this.loops.to.to(this.$refs.toCircle, {
        x: this.$store.state.slideWidth * 0.3,
        duration: 3,
      });

      this.loops.from = new TimelineMax({ repeat: -1 });
      this.loops.from.from(this.$refs.fromCircle, {
        x: this.$store.state.slideWidth * 0.3,
        duration: 3,
      });

      this.loops.fromTo = new TimelineMax({ repeat: -1 });
      this.loops.fromTo.fromTo(
        this.$refs.fromToCircle,
        {
          x: -this.$store.state.slideWidth * 0.3,
          duration: 3,
        },
        {
          x: this.$store.state.slideWidth * 0.3,
          duration: 3,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
}
.method {
  font-weight: 600;
  color: firebrick;
  border-bottom: sw(0.5) lightsalmon solid;
  padding: sw(1);
}
.anatomy-method-detail {
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
      background-color: lightsalmon;
      color: firebrick;
      display: flex;
      .circle {
        border: sw(0.5) lightsalmon solid;
        background-color: firebrick;
        position: absolute;
        width: sw(5);
        height: sw(5);
      }
    }
  }
}
</style>
