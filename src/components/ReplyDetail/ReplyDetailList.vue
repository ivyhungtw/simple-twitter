<template>
  <div class="container">
    <ul class="tweetList">
      <li class="commentItem" v-for="comment in comments" :key="comment.id">
        <div class="commentInfo">
          <div class="avatar">
            <img :src="comment.image | emptyImageFilter" alt="" />
          </div>
          <div class="commentContent">
            <div class="userTitle">
              <p>{{ comment.name }}</p>
              <p>{{ comment.account }}</p>
              <span class="mx-1">&#xb7;</span>
              <p>{{ comment.createdAt | fromNow }}</p>
            </div>
            <div class="replyTarget">
              <p>
                回復 <span>{{ tweetTarget }}</span>
              </p>
            </div>
            <div class="textContent">
              <p>{{ comment.replyContent }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import TweetItem from "../TweetItem";
import { emptyImageFilter } from "../../utils/mixins";
import { fromNowFilter } from "../../utils/mixins";

export default {
  name: "ReplyDetailList",
  props: {
    comments: {
      type: Array,
    },
    tweetTarget: {
      type: String,
      required: true,
    },
  },
  mixins: [emptyImageFilter, fromNowFilter],
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #e6ecf0;
  padding: 0;
  /* height: calc(100vh - 460px); */
  width: 100%;
}

.commentItem {
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
  padding: 18px 15px;
  /* border: 1px solid #000; */
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

.commentInfo {
  display: flex;
}

p {
  margin: 0;
}

.userTitle {
  display: flex;
}

.userTitle span,
.userTitle p {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}

.userTitle p:first-child {
  font-weight: 700;
  font-size: 15px;
  color: #1c1c1c;
  margin-right: 5px;
}

.replyTarget p {
  font-size: 15px;
  font-weight: 700;
  color: #657786;
}

.replyTarget {
  margin-bottom: 5px;
}

.replyTarget span {
  font-weight: 500;
  color: #ff6600;
}

.textContent p {
  /* word-wrap: break-word; */
  word-break: break-all;
  font-weight: 400;
  font-size: 15px;
  color: #1c1c1c;
}
</style>