import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'tokenapp',
  storage: localStorage,
});

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin,
  ],
  state: {
    token: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    logout(state) {
      state.token = null;
    },
  },
});

