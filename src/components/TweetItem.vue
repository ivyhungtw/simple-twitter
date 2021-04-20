<template>
  <div class="tweet">
    <div class="avatar">
      <img :src="tweet.image | emptyImageFilter" alt="" />
    </div>
    <div class="tweetInfo">
      <div class="userInfo">
        <p>{{ tweet.name }}</p>
      </div>
      <div class="tweetContent">
        <p>{{ tweet.tweet.tweetContent }}</p>
      </div>
      <div class="tweetPanel">
        <div class="comments">{{ tweet.tweet.commentsCount }}</div>
        <div class="likes">{{ tweet.tweet.likeCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
export default {
  name: "TweetItem",
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  mixins: [emptyImageFilter],
};
</script>

<style scoped>
.tweet {
  border: 1px solid #000;
  display: flex;
}
.avatar {
  width: 50px;
  height: 50px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
