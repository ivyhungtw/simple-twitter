import { apiHelper } from './../utils/helpers'

export default {
  getAllFollowedTweets() {
    return apiHelper.get('tweets')
  },
  createNewTweet(payload) {
    return apiHelper.post('/tweets', payload)
  },
  deleteTweet({ tweetId }) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  },
  getUserTweet({ tweetId }) {
    console.log(tweetId)
    return apiHelper.get(`/users/${tweetId}/tweets`)
  },
  getUserFollowersTweet({ tweetId }) {
    console.log(tweetId)
    return apiHelper.get(`/users/${tweetId}/followers`)
  },
  createReply(tweetId, payload) {
    return apiHelper.post(`/tweets/${tweetId}/replies`, payload)
  },
  likeTweet(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`)
  },
  unlikeTweet(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`)
  },
}