<template>
  <div>
    <h1>Регистрация</h1>
    <input type="email"
    name="email"
    placeholder="E-mail"
    v-model="email">
    <br>
    <input type="password"
    name="password"
    placeholder="Password"
    v-model="password">
    <br>
    <button @click="register">Зарегистрироваться</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      // console.log('register button was clicked', this.email, this.password)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
