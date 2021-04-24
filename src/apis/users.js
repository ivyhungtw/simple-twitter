import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser() {
    return apiHelper.get('/users/current_user')
  },
  signUp(payload) {
    return apiHelper.post('/users', payload)
  },
  setUser(payload) {
    return apiHelper.post('/users', payload)
  }
}