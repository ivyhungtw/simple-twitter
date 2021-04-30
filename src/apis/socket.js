import { apiHelper } from './../utils/helpers'

export default {
  getPublicRoom() {
    // getPublicRoom
    return apiHelper.get('/rooms/4')
  },
}