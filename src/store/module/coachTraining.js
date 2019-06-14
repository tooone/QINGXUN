import request from '../../api/actions'

const state = {

}

const getters = {}

const mutations = {

}

const actions = {
  // 获取线上列表
  fetchOnlineList ({ commit }, data) {
    return request ({
      url: '/course/getTrainShowList',
      methods: 'POST',
      params: data
    })
  },

  // 获取线下列表
  fetchUnderList ({ commit }, data) {
    return request ({
      url: '/course/getTrainInfoList',
      methods: 'POST',
      params: data
    })
  },

  // 获取教案详情
  fetchTrainingDetail ({ commit }, data) {
    return request ({
      url: '/course/getTrainShowList',
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