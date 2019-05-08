import { EMAIL, NAME, IS_AUTH } from './mutation_types';
import auth from '../services/auth'

const setEmail = ({ commit }, data) => {
  commit(EMAIL, data)
}

const setName = ({ commit }, data) => {
  commit(NAME, data)
}

const setIsAuth = ({ commit }, data) => {
  commit(IS_AUTH, data)
}

const processLoginResponse = (store, {name, email}) => {
  setEmail(store, email)
  setName(store, name)
  setIsAuth(store, true)
}

export default {
  async login (store, { userId, password }) {
    const loginResponse = await auth.login(userId, password)
    processLoginResponse(loginResponse)
    console.log('login')
  },
  logout () {
    console.log('logout')
  }
}
