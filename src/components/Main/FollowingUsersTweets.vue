<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div>
    <ul class="tweetList">
      <TweetItem
        v-for="tweet in followedTweets"
        :key="tweet.id"
        :tweet="tweet"
      ></TweetItem>
    </ul>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    image: "",
    name: "user1",
    account: "user1",
    tweet: {
      tweetContent: "sdfff s we rw weerdfdf we w",
      commentsCount: 16,
      likeCount: 76,
    },
  },
  {
    id: 2,
    image: "",
    name: "user2",
    account: "user2",
    tweet: {
      tweetContent: " wefw we ef ed w w efdfsd fwe",
      commentsCount: 5,
      likeCount: 46,
    },
  },
  {
    id: 3,
    image: "",
    name: "user3",
    account: "user3",
    tweet: {
      tweetContent: "ssdf  wew 4tth  dfsw",
      commentsCount: 15,
      likeCount: 26,
    },
  },
  {
    id: 4,
    image: "",
    name: "user4",
    account: "user4",
    tweet: {
      tweetContent: "ssdf  wew 4tth  dfsw",
      commentsCount: 55,
      likeCount: 26,
    },
  },
  {
    id: 5,
    image: "",
    name: "user5",
    account: "user5",
    tweet: {
      tweetContent: "ssdf  wew 4tth  dfsw",
      commentsCount: 15,
      likeCount: 26,
    },
  },
  {
    id: 6,
    image: "",
    name: "user6",
    account: "user6",
    tweet: {
      tweetContent: "ssdf  wew 4tth  dfsw",
      commentsCount: 15,
      likeCount: 26,
    },
  },
];

import TweetItem from "../TweetItem";
export default {
  name: "FollowingUsersTweets",
  components: {
    TweetItem,
  },
  created() {
    this.fetchFollowedTweets();
  },
  data() {
    return {
      followedTweets: [],
    };
  },
  methods: {
    fetchFollowedTweets() {
      // async
      this.followedTweets = dummyData;
    },
  },
};
</script>

<style scoped>
.tweetList {
  border: 1px solid #000;
  padding: 15px;
}
</style>