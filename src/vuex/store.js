import Vue from "vue";
import Vuex from "vuex";
import ScrollMagic from "scrollmagic";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slideWidth: 0,
    slideCount: 0,
    smController: new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: "onLeave"
      }
    })
  },
  mutations: {
    setSlideWidth: (state, slideWidth) => {
      state.slideWidth = slideWidth;
    },
    incrementSlideCount: (state, slideCount) => {
      state.slideCount += Number(slideCount);
    }
  },
  actions: {}
});
