import loginAPI from './loginAPI'

export default {
  async login (userId, password) {
    try {
      const loginResponse = await loginAPI.login(userId, password)
      return loginResponse
    } catch (err) {
      console.error(err)
    }
  }
}
