import request from '../../api/actions'

const state = {
  userStatus: null
}

const getters = {}

const mutations = {
  setLoginStatus (state, data) {
    state.userStatus = data || null
  },

  clearLoginStatus (state, data) {
    state.userStatus = null
  }
}

const actions = {
  logOut ( { commit } ,data) {
    return request ({
      url: '/user/logout',
      methods: 'GET'
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}