const state = {
  addRoutes: []
};

const mutations = {
  PERMISSION_ROUTES(state, data) {
    state.addRoutes = data;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
//   actions
};
