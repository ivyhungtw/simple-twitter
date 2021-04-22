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
              <p>{{ comment.createdAt }}</p>
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
export default {
  name: "ReplyDetailList",
  props: {
    comments: {
      type: Array,
    },
  },
  mixins: [emptyImageFilter],
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #e6ecf0;
  /* overflow-y: scroll; */
  padding: 15px 0;
  /* height: calc(100vh - 460px); */
}

.commentItem {
  border-bottom: 1px solid #e6ecf0;
  border: 1px solid #000;
  padding: 18px 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border: 1px solid #000;
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
  border: 1px solid #000;
}

.textContent p {
  width: 100%;
  word-wrap: break-word;
  border: 1px solid #000;
}
</style>