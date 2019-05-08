<template>
  <v-flex xs12 md7 offset-md1>
    <div class="login">
      <h3>LOG IN</h3>
      <v-form>
        <v-text-field type="text" v-model="userId" placeholder="User ID"></v-text-field>
        <v-text-field type="password" v-model="password" placeholder="Password"></v-text-field>
      </v-form>
      <v-btn v-on:click="submit">Login</v-btn>
    </div>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data: function () {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      let loginResult = await this.login({userId: this.userId, password: this.password})
      console.log(loginResult)
      console.log(this.userId)
      console.log(this.password)
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  margin-top: 20px;
  width: 10%;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
