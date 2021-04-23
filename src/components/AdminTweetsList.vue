<template>
  <div class="container">
    <div class="avatar">
      <img :src="tweet.avatar" alt="" />
    </div>
    <div class="tweet-info">
      <div class="title">
        <span>{{ tweet.name }}</span> @{{ tweet.account }}・{{
          tweet.createdAt | fromNow
        }}
      </div>
      <p>
        {{ tweet.tweetContent }}
      </p>
    </div>
    <div class="delete" @click.stop.prevent="handleDeleteButtonClick(tweet.id)">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "AdminTweetItem",
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      // 使用 moment 提供的 fromNow 方法
      return moment(datetime).fromNow();
    },
  },
  props: {
    Tweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.Tweet,
    };
  },
  methods: {
    handleDeleteButtonClick(tweetId) {
      console.log("handleDeleteButtonClick", tweetId);
      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit("after-delete-tweet", tweetId);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: auto;
  min-height: 120px;
  padding: 15px 15px 25px;
  border-bottom: 1px solid #e6ecf0;
  margin: 5px;
}

.tweet-info {
  width: 100%;
}
.tweet-info span {
  font-weight: 900;
  height: auto;
}
.avatar {
  min-width: 50px;
  height: 50px;
  margin-right: 10px;
}
.avatar img {
  min-width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
}

.title {
  color: gray;
}

.delete {
  cursor: pointer;
}
</style>