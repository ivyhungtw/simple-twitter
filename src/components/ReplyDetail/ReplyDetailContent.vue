<template>
  <div class="container">
    <div class="userInfo">
      <div class="avatar">
        <img :src="tweetInfo.image | emptyImageFilter" alt="" />
      </div>
      <div class="userTitle">
        <p>{{ tweetInfo.name }}</p>
        <p>{{ tweetInfo.account }}</p>
      </div>
    </div>

    <div class="textContent">
      <p>{{ tweetInfo.tweetContent }}</p>
    </div>
    <div class="updatedAt">
      <p class="tweetUpdateAt">{{ tweetInfo.updatedAt | fromNow }}</p>
    </div>
    <div class="feedbackCount">
      <p>{{ tweetInfo.commentsCount }} 回復</p>
      <p>{{ tweetInfo.likeCount }} 喜歡次數</p>
    </div>
    <div class="tweetPanel">
      <div class="comments">
        <img src="../../assets/commentCount.svg" alt="" />
      </div>
      <div class="likes">
        <img
          v-if="!tweetInfo.isLiked"
          :class="{ liked: tweetInfo.isLiked }"
          src="../../assets/likeCount.svg"
          alt=""
          @click="toggleLike(tweet)"
        />
        <img
          v-else
          src="../../assets/likedLikeCount.svg"
          alt=""
          @click="toggleLike(tweet)"
        />
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";
import { fromNowFilter } from "../../utils/mixins";

export default {
  name: "ReplyDetailContent",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    tweetInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #e6ecf0;
  padding: 15px;
}

.userInfo {
  /* border: 1px solid #000; */
  display: flex;
}

.userTitle {
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.userTitle p {
  flex: 1;
  font-weight: 700;
  font-size: 15px;
  color: #1c1c1c;
}

.userTitle p:last-child {
  font-weight: 500;
  color: #657786;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.avatar img {
  min-width: 100%;
  height: 100%;
  border-radius: 50%;
}

/* textContent */
.textContent {
  margin: 15px 0 15px;
  /* background-color: #333; */
}

.textContent p {
  font-size: 23px;
}

/* updatedAt */
.updatedAt {
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 15px;
}
.updatedAt p {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

/* feedbackCount */
.feedbackCount {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e6ecf0;
}

.feedbackCount p:first-child {
  margin-right: 20px;
}

/* tweetPanel */
.tweetPanel {
  padding-top: 20px;
  display: flex;
}

.tweetPanel img {
  height: 25px;
  width: 25px;
}
</style>