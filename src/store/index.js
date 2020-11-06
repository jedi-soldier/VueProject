import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
  },
  actions: {

  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
  },
  modules: {
  },
});
