import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser(userId) {
    console.log('userId: ' + userId)
    return apiHelper.get(`/users/${userId}`)
  }
}