import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_GOOD: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        // eslint-disable-next-line no-unused-vars
        let goodinmycart = false;
        // eslint-disable-next-line array-callback-return
        state.cart.map((item) => {
          if (item.id_product === product.id_product) {
            goodinmycart = true;
            // eslint-disable-next-line no-param-reassign,no-plusplus
            item.quant++;
          }
        });
        if (!goodinmycart) {
          state.cart.push(product);
        }
      } else {
        state.cart.push(product);
      }
    },
    REMOVE_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
  },
  actions: {
    fetchGoodData({ commit }) {
      // eslint-disable-next-line no-undef
      return axios('http://localhost:3000/products', { method: 'GET' })
        .then((products) => {
          commit('SET_GOOD', products.data);
          return products;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });
    },
    cartAdd({ commit }, product) {
      commit('SET_CART', product);
    },
    // eslint-disable-next-line no-unused-vars
    deleteProductFromCart({ commit }, index) {
      commit('REMOVE_CART', index);
    },
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
  },
  modules: {
  },
});
