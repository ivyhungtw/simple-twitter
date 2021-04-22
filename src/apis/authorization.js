import { apiHelper } from './../utils/helpers'

export default {
  signIn(payload) {
    return apiHelper.post('/user/login', payload)
  },
  signUp(payload) {
    return apiHelper.post('signup', payload)
  }
}