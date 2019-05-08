import axios from 'axios'

export default {
  async login (userId, password) {
    try {
      axios.get('/endpoint-for-login', {
        params: {
          'userId': userId,
          'password': password
        }
      })
        .then((resp) => {
          console.log(resp)
          return resp
        })
        .catch((err) => {
          console.error(err)
        })
    } catch (err) {
      console.error(err)
    }
  }
}
