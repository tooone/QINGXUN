import Vue from 'vue'
import Vuex from 'vuex'
import Login from './store/module/Login'
import myCourse from './store/module/myCourse'
import coachTraining from './store/module/coachTraining'
import myDate from './store/module/myDate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    Login,
    myCourse,
    coachTraining,
    myDate
  }
})
