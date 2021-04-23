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
              <p mr-2>{{ comment.name }}</p>
              <p>{{ comment.account }}</p>
              <span class="mx-1">&#xb7;</span>
              <p>{{ comment.createdAt | fromNow }}</p>
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
  },
  mixins: [emptyImageFilter, fromNowFilter],
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #e6ecf0;
  padding: 15px 0;
  /* height: calc(100vh - 460px); */
  width: 100%;
}

.commentItem {
  width: 100%;
  border-bottom: 1px solid #e6ecf0;
  padding: 18px 15px;
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

.commentContent {
  /* border: 1px solid blue; */
}

.userTitle {
  display: flex;
}

.textContent p {
  /* word-wrap: break-word; */
  word-break: break-all;
}
</style>