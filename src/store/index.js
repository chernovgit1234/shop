import { createStore } from "vuex";
import catalog  from './catalog'
import cart  from './cart'

export default createStore({
  namespaced: true,
  state: {
    //test: 'test'
  },
  mutations: {},
  actions: {},
  modules: {catalog, cart},
  getters: {
    //test: s => s.test
  }
});
