import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import SignUp from '../views/SignUp.vue'
import NotFound from '../views/NotFound.vue'
import AdminSignIn from '../views/AdminSignIn.vue'
import store from './../store'

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
    path: '/admin',
    name: 'admin-root',
    redirect: '/admin/signin'
  },
  {
    path: '/admin/signin',
    name: 'admin-sign-in',
    component: AdminSignIn
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/accountEdit',
    name: 'AccountEdit',
    component: () => import('../views/AccountEdit.vue')
  },
  {
    path: '/userprofile',
    name: 'user-profile',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/userprofile/replies',
    name: 'user-profile-replies',
    component: () => import('../views/UserProfileReply.vue')
  },
  {
    path: '/userprofile/likes',
    name: 'user-profile-Likes',
    component: () => import('../views/UserProfileLike.vue')
  },
  {
    path: '/userprofile/followers',
    name: 'user-profile-followers',
    component: () => import('../views/UserFollowers.vue')
  },
  {
    path: '/userprofile/following',
    name: 'user-profile-following',
    component: () => import('../views/UserFollowing.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminTweets.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  },

]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  // do something
  store.dispatch('fetchCurrentUser')
  console.log(to)
  next()
})

export default router
