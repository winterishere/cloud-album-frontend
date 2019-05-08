import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  userId: '',
  email: '',
  name: '',
  isAuth: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
