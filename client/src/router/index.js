import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
<<<<<<< HEAD
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
=======
>>>>>>> parent of f396e71 (AddRegister component)
    }
  ]
})
