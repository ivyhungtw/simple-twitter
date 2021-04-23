import { apiHelper } from './../utils/helpers'

export default {
  signIn(payload) {
    return apiHelper.post('/users/login', payload)
  },
  signUp(payload) {
    return apiHelper.post('users', payload)
  }
}