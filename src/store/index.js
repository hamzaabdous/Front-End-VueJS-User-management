import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./usersModule";

Vue.use(Vuex);

let store = null;
export default function () {
  store = new Vuex.Store({
    modules: {
      usersModule,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [],
  });
  return store;
}
export { store };
