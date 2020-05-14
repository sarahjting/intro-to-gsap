<template>
  <Slide :timeline="tl" slideName="anatomy">
    <h1>Anatomy of GSAP</h1>
    <div class="header">
      gsap.<span class="anatomy-part anatomy-method" ref="anatomyMethod"
        ><i></i>to</span
      >(<span class="anatomy-part anatomy-selector" ref="anatomySelector"
        ><i></i>'.circle'</span
      >,
      <span class="anatomy-part anatomy-options" ref="anatomyOptions"
        ><i></i>{x: 100,
      </span>
      <span class="anatomy-part anatomy-duration" ref="anatomyDuration"
        ><i></i>duration: 5</span
      ><span class="anatomy-part anatomy-options"><i></i>}</span>);
    </div>
    <AnatomyPreviewBox />
    <AnatomyMethodBox />
    <AnatomySelectorBox />
    <AnatomyOptionsBox />
    <AnatomyDurationBox />
  </Slide>
</template>

<script>
import gsap from 'gsap';
import AnatomyMethodBox from './AnatomyOfGSAP/AnatomyMethodBox';
import AnatomyDurationBox from './AnatomyOfGSAP/AnatomyDurationBox';
import AnatomyPreviewBox from './AnatomyOfGSAP/AnatomyPreviewBox';
import AnatomySelectorBox from './AnatomyOfGSAP/AnatomySelectorBox';
import AnatomyOptionsBox from './AnatomyOfGSAP/AnatomyOptionsBox';
import Slide from './Slide';
export default {
  name: 'IntroToTweenSlide',
  components: {
    Slide,
    AnatomyMethodBox,
    AnatomyPreviewBox,
    AnatomyDurationBox,
    AnatomySelectorBox,
    AnatomyOptionsBox,
  },
  data: () => ({
    tl: null,
    hoverables: {
      anatomyMethod: 'anatomy-method',
      anatomySelector: 'anatomy-selector',
      anatomyOptions: 'anatomy-options',
      anatomyDuration: 'anatomy-duration',
    },
    hovered: '',
  }),
  methods: {
    underline: function(el) {
      gsap.to(`.${el} i`, { width: '100%', duration: 0.5 });
    },
    unline: function(el) {
      gsap.to(`.${el} i`, { width: '0%', duration: 0.5 });
    },
  },
  watch: {
    hovered: function() {
      Object.keys(this.hoverables).forEach((x) => {
        if (this.hovered === x) this.underline(this.hoverables[x]);
        else this.unline(this.hoverables[x]);
      });
    },
  },
  mounted: function() {
    Object.keys(this.hoverables).forEach((x) => {
      this.$refs[x].onmouseover = () => {
        this.hovered = x;
      };
      this.$refs[x].onmouseout = () => {
        this.hovered = '';
      };
    });
  },
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  justify-content: center;
  text-align: center;
}
.header {
  margin-bottom: sw(5);
}
.anatomy-part {
  cursor: pointer;
  position: relative;
  color: var(--color);
}
.anatomy-part i {
  content: '';
  position: absolute;
  width: 0;
  height: 100%;
  background-color: var(--hover);
  border-bottom: solid var(--color) sw(0.5);
  z-index: -1;
}
.anatomy-method {
  --hover: lightsalmon;
  --color: firebrick;
}
.anatomy-selector {
  --hover: moccasin;
  --color: orange;
}
.anatomy-options {
  --hover: turquoise;
  --color: teal;
}
.anatomy-duration {
  --hover: lightskyblue;
  --color: royalblue;
}
</style>
