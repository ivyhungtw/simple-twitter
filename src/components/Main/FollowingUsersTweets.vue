<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div>
    <ul>
      <TweetItem></TweetItem>
    </ul>
  </div>
</template>

<script>
// const dummyData = [
//   {
//     id: 1,
//     image: "",
//     name: "user1",
//     account: "user1",
//     tweet: {
//       tweetContent: "",
//       commentsCount: 16,
//       likeCount: 76,
//     },
//   },
// ];

import TweetItem from "../TweetItem";
export default {
  name: "FollowingUsersTweets",
  components: {
    TweetItem,
  },
};
</script>

<style scoped>
</style>