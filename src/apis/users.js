import { apiHelper } from './../utils/helpers'

export default {
  getCurrentUser(userId) {
    return apiHelper.get(`/get_current_user/${userId}`)
  }
}