import { setToken, getToken } from '@/utils/auth.js'

const state = {
  token: getToken(),
  roles: []
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ROLES(state, roles) {
    state.roles = roles
  }
}

const actions = {
  // 用戶登錄
  login({ commit }, params) {
    const { username, password } = params
    console.log(username, password)
    return new Promise((resolve, reject) => {
      // 在此處發送登錄請求獲取 token, 有登錄接口的時候在 調
      const token = 'woshitoken'
      // 將token 存儲到 cookie中
      setToken(token)
      commit('SET_TOKEN', token)
      resolve()
    })
  },

  // 獲取用戶信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      // 這裏調用接口獲取用戶信息
      const roles = ['editor', 'author']
      commit('SET_ROLES', roles)
      resolve(roles)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
