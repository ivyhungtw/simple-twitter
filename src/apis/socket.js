import { apiHelper } from './../utils/helpers'

export default {
  getPublicRoom() {
    // getPublicRoom
    return apiHelper.get('/rooms/4')
  },
  createPrivateRoom(userId) {
    return apiHelper.post('/rooms', { userId })
  },
  // 未完成
  getPrivateRoom(userId) {
    return apiHelper.get(`/rooms/${userId}`)
  },
  getNotification() {
    return apiHelper.get('/rooms/notifications')
  },
  getRoom(roomId) {
    return apiHelper.get(`/rooms/${roomId}`)
  },
  getRoomsByUser() {
    // get all chats by rooms
    return apiHelper.get('/rooms')
  },
  getAvailableUsers() {
    return apiHelper.get('rooms/availableUsers')
  },
  getUnread() {
    return apiHelper.get('/private/unread')
  }
}