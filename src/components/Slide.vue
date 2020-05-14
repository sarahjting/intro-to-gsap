<template>
  <div class="slide" v-on:click="onClick">
    <div :class="`wrapper slide-${slideName}`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: ['timeline', 'slideName'],
  methods: {
    onClick: function() {
      if (this.$props.timeline) {
        this.$props.timeline.play();
      }
    },
  },
};
</script>

<style>
.slide {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
