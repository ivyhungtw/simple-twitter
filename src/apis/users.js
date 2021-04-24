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
  },
  getRecommendedFollowers() {
    return apiHelper.get('/users')
  },
  followUser(payload) {
    console.log(payload)
    return apiHelper.post('/followships', payload)
  },
  unfollowUser(userId) {
    return apiHelper.delete(`/followships/${userId}`)
  }
}