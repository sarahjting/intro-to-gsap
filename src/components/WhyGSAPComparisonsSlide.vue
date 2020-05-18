<template>
  <Slide :timeline="tl" slideName="gsap-comparisons" slideCount="5">
    <div class="animation">
      <div class="circle" ref="ball"></div>
    </div>
    <div class="content">
      <div class="code-block css" ref="codeCss">
        <pre><code>.ball {
    animation: bounce 0.3s cubic-bezier(.5,0.05,1,.5), 
               slide 2.1s linear;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes bounce {
    from { top: 0; }
    to { top: 200px; }
}

@keyframes slide {
    from { left: 0; }
    to { left: 800px; }
}</code></pre>
      </div>
      <div class="code-block jquery" ref="codeJQuery">
        <pre><code>function bounce() {
    $('.ball').animate({ top: 200 }, {
        duration: 300, 
        queue: false, 
        easing: "easeInQuad", 
        done:  function() {
            $('.ball').animate({ top: 0 }, {
                duration: 300, 
                queue: false,
                easing: "easeOutQuad", 
                done: () => bounce(),
            });
        }
    });
}
function slide() {
    $('.ball').animate({ left: 800 }, {
        duration: 2100, 
        queue: false, 
        easing: "linear", 
        done:  function() {
            $('.ball').animate({ left: 0 }, {
                duration: 2100, 
                queue: false,
                easing: "linear", 
                done: () => slide(),
            });
        }
    });
}
bounce();
slide();</code></pre>
      </div>

      <div class="code-block gsap" ref="codeGsap">
        <pre><code>new TimelineMax()
  .to(".ball", { y: 200, ease: "circ.in", duration: 0.3, repeat: -1, yoyo: 1 });
new TimelineMax()
  .to(".ball", { x: 800, ease: "none", duration: 2.1, repeat: -1, yoyo: 1 });</code></pre>
      </div>
    </div>
  </Slide>
</template>

<script>
import { TimelineMax } from "gsap";
import Slide from "./Slide";
export default {
  name: "WhyGSAPComparisonsSlide",
  components: {
    Slide
  },
  data: () => ({
    tl: null
  }),
  mounted: function() {
    this.$data.tl = new TimelineMax();
    this.$data.tl
      .to({}, { duration: 1 })
      .from(this.$refs.codeCss, { opacity: 0, y: 100 }, "a")
      .to({}, { duration: 1 })
      .to(this.$refs.codeCss, { opacity: 0, y: -100 }, "b")
      .from(this.$refs.codeJQuery, { opacity: 0, y: 100 }, "b")
      .to({}, { duration: 1 })
      .to(this.$refs.codeJQuery, { opacity: 0, y: -100 }, "c")
      .from(this.$refs.codeGsap, { opacity: 0, y: 100 }, "c")
      .to({}, { duration: 2 });

    new TimelineMax({ repeat: -1, yoyo: true }).to(this.$refs.ball, {
      y: "-200%",
      ease: "circ.out",
      duration: 0.5
    });
    new TimelineMax({ repeat: -1, yoyo: true }).to(this.$refs.ball, {
      x: "900%",
      ease: "none",
      duration: 2.5
    });
  }
};
</script>

<style scoped lang="scss">
.slide {
  padding: sw(5) 0;
  max-height: 100vh;
}
.animation {
  position: relative;
  height: sw(30);
  background-color: lightskyblue;
  border-radius: sw(5);
  margin-bottom: sw(2);
  .circle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: sw(10);
    height: sw(10);

    background-color: royalblue;
    border-color: transparent;
  }
}
.content {
  flex: 1;
  .code-block {
    position: absolute;
    width: sw(100);
    background-color: #eee;
    border-radius: sw(5);
    padding: sw(2.5);
    font-size: 0.4em;
    overflow: scroll;
    &.jquery {
      font-size: 0.35em;
    }
  }
}
</style>
