<template>
  <div class="anatomy-selector-detail">
    <div class="content">
      This is a CSS Selector! Read more at
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">
        MDN</a
      >.
    </div>
  </div>
</template>

<script>
export default {
  name: "AnatomySelectorBox"
};
</script>

<style lang="scss" scoped>
.anatomy-selector-detail {
  font-size: 0.65em;
  margin: 0 sw(5);
  .content {
    flex: 2;
    position: relative;
    padding: sw(5);
    border-radius: sw(2.5);
    background-color: moccasin;
    color: orangered;
    display: flex;
    a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
