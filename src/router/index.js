import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import SignUp from '../views/SignUp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signup'
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  // do something
  console.log(to)
  next()
})

export default router
