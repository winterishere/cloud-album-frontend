import * as types from './mutation_types'

export default {
  [types.SET_USER_ID] (state, userId) {
    state.userId = userId
  },
  [types.SET_EMAIL] (state, email) {
    state.email = email
  },
  [types.SET_NAME] (state, name) {
    state.name = name
  }
}
