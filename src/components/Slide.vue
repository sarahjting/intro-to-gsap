<template>
  <div class="slide" v-on:click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: ["timeline"],
  methods: {
    onClick: function() {
      this.$props.timeline.play();
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
</style>
