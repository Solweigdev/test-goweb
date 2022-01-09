import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: null,
    product: null
  },
  mutations: {
    SET_DATA_IN_PRODUCTS: function(state, payload) {
      state.products = payload
    },
    SET_DATA_IN_PRODUCT: function(state, payload) {
      state.products.find(item => {
        item.id === parseInt(payload) ? state.product = item : null
      })
    },

    SET_UPDATE_PRODUCT: function(state, payload) {
      state.product = payload
    },

    SET_ERROR: function(state, payload) {
      state.error = payload
    }
  },
  actions: {
    FetchLimitProduct:  async function({commit}) {
      try {
        const response =  await axios.get('https://fakestoreapi.com/products?limit=7')
        commit('SET_DATA_IN_PRODUCTS', response.data)
      } catch (err) {
        commit('SET_ERROR',  err)
        throw new Error(`FetchLimitProduct: ${err}`);
      }
    },

    UpdatePriceProduct: async function({commit}, product) {
      try {
        const response =  await axios.put(`https://fakestoreapi.com/products/${product.id}`, product)
        commit('SET_UPDATE_PRODUCT', response.data)
      } catch (err) {
        commit('SET_ERROR',  err)
        throw new Error(`FetchLimitProduct: ${err}`);
      }
    }
  },
  plugins: [createPersistedState()],
})
