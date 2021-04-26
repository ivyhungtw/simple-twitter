import { apiHelper } from './../utils/helpers'

export default {
  getAllFollowedTweets() {
    return apiHelper.get('tweets')
  },
  createNewTweet(payload) {
    return apiHelper.post('/tweets', payload)
  },
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`)
  },
  getTweetReplies(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`)
  },
  getAllTweetsByUserId(userId) {
    return apiHelper.get(`/users/${userId}/tweets`)
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