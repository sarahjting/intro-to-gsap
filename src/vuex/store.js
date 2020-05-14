import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    slideWidth: 0,
  },
  mutations: {
    setSlideWidth: (state, slideWidth) => {
      state.slideWidth = slideWidth;
    },
  },
  actions: {},
});
