import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from '../apis/users'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [
  //   createPersistedState({
  //     paths: ['currentUser.id'],
  //   })],
  state: {
    currentUser: {
      account: '',
      avatar: '',
      cover: '',
      email: "",
      id: undefined,
      introdcution: '',
      name: "",
      role: 'user',
    },
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser // 透過API取得
      }
      state.isAuthenticated = true
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        console.log('fetchCurrentUser')
        const userId = localStorage.getItem('userId')
        // 應該是使用 token 驗證才對
        const { data } = await usersAPI.getCurrentUser(userId)

        console.log(data)
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { account, id, name, email, avatar, role } = data

        commit('setCurrentUser', {
          account, id, name, email, avatar, role
        })

        // signin success
        return true
      } catch (error) {
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        console.log(error.message)
        return false
      }
    }
  },
  modules: {
  }
})
