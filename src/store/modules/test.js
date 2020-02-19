const state = {
  text: ""
};
const mutations = {
  commitChangeText(state, payload) {
    state.text = payload;
  }
};
const actions = {
  chageText({ commit }, payload) {
    commit("commitChangeText", payload);
  }
};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
