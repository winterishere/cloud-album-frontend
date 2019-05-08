import * as types from './mutation_types'

export default {
  [types.USER_ID] (state, userId) {
    state.userId = userId
  },
  [types.EMAIL] (state, email) {
    state.email = email
  },
  [types.NAME] (state, name) {
    state.name = name
  },
  [types.IS_AUTH] (state, isAuth) {
    state.isAuth = isAuth
  }
}
