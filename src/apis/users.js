import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  signUp(payload) {
    return apiHelper.post('/users', payload)
  },
  setUser(payload) {
    return apiHelper.post('/users', payload)
  }
}