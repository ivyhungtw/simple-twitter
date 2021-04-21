<template>
  <div class="tweet">
    <div class="avatar">
      <img :src="tweet.image | emptyImageFilter" alt="" />
    </div>
    <div class="tweetInfo">
      <div class="userInfo">
        <p class="userName mr-1">{{ tweet.name }}</p>
        <p class="userAccount">{{ tweet.account }}</p>
        <span class="mx-1">&#xb7;</span>
        <p class="tweetUpdateAt">{{ tweet.updatedAt | fromNow }}</p>
      </div>
      <div class="tweetContent">
        <p>{{ tweet.tweetContent }}</p>
      </div>
      <div class="tweetPanel">
        <div class="comments">
          <img src="../assets/commentCount.svg" alt="" />
          <p>
            {{ tweet.commentsCount }}
          </p>
        </div>
        <div class="likes">
          <img src="../assets/likeCount.svg" alt="" />
          <p>
            {{ tweet.likeCount }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
export default {
  name: "TweetItem",
  mixins: [fromNowFilter, emptyImageFilter],
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.tweet {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.tweetInfo {
  width: 510px;
}

.userInfo {
  display: flex;
  height: 22px;
}

.userInfo p {
  font-size: 15px;
  height: 100%;
}

.userInfo .userName {
  font-weight: 700;
}
.userInfo .userAccount,
.userInfo .tweetUpdateAt,
.userInfo span {
  font-weight: 500;
  color: #657786;
  line-height: 22px;
}

.tweetContent {
  width: 100%;
  margin-bottom: 15px;
}

.tweetContent p {
  margin: 0;
}

.tweetPanel {
  /* border: 1px solid #000; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: 0;
}

.tweetPanel .comments,
.tweetPanel .likes {
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tweetPanel img {
  margin-right: 10px;
}
.tweetPanel p {
  margin: 0px;
}
</style>
