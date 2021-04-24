import { apiHelper } from './../utils/helpers'

export default {
  getAllFollowedTweets() {
    return apiHelper.get('tweets')
  },
  createNewTweet(payload) {
    return apiHelper.post('/tweets', payload)
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