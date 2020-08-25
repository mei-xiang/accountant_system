const state = {
  tabsList: []
}

const mutations = {
  ADD_TAB_IN_TABLIST(state, data) {
    if(data.fullPath === '/') return;
    if (state.tabsList.some(v => v.path === data.path)) return
    state.tabsList.push(data)
  },
  DEL_TAB_FROM_TABLIST(state, curTab) {
    // console.log(, 'entries')
    for (const [index, value] of state.tabsList.entries()) {
      // entries 将数组的每一项再次变为一个数组,其中包含两项索引跟value
      // [1,2,3] => [[0,1], [0,2], [0,3]]
      // 数组的解构赋值 const [index, value] = value 上面用到的
      // console.log(index, 'index')
      console.log(value, 'vlaue')
      if (value.path === curTab.path) {
        state.tabsList.splice(index, 1)
        break
      }
    }
  }
}
const actions = {
  delTab({ dispatch, state }, curTab) {
    return new Promise(resolve => {
      dispatch('delVisitedView', curTab)
      resolve({
        tagList: [...state.tabsList]
      })
    })
  },
  delVisitedView({ commit, state }, curTab) {
    return new Promise(resolve => {
      commit('DEL_TAB_FROM_TABLIST', curTab)
      resolve([...state.tabsList])
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
