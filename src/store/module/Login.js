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
    sessionStorage.removeItem('statusId')
    sessionStorage.removeItem('headPic')
    sessionStorage.removeItem('nikename')
    sessionStorage.removeItem('id')
  }
}

const actions = {
  logOut ( { commit }, data) {
    return request ({
      url: '/user/logout',
      methods: 'GET'
    })
  },

  passwordReset ( { commit }, data) {
    console.log(data)
    return request ({
      url: '/user/password',
      methods: 'POST',
      params: data
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