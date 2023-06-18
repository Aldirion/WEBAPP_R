<template>
  <div>
    <h1>REGISTER</h1>
    <input type="email"
    name="email"
    v-model="email"
    placeholder="E-mail"/>
    <br>
    <input type="password"
    name="pwd"
    v-model="password"
    placeholder="password"/>
    <br>
    <button @click="register">Регистрация!</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      // console.log('register button was clicked')
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
