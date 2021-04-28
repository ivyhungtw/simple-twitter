import { apiHelper } from './../utils/helpers'

export default {
  putUser(userId, payload) {
    return apiHelper.put(`/users/${userId}`, payload)
  },
  getCurrentUser() {
    return apiHelper.get('/users/current_user')
  },
  getTotalUser() {
    return apiHelper.get('/admin/users')
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`)
  },
  setUser(payload) {
    return apiHelper.post('/users', payload)
  },
  getRecommendedFollowers() {
    return apiHelper.get('/users')
  },
  followUser(payload) {
    return apiHelper.post('/followships', payload)
  },
  unfollowUser(userId) {
    return apiHelper.delete(`/followships/${userId}`)
  }
}

