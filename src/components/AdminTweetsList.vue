<template>
  <div class="container">
    <div class="avatar">
      <img :src="tweet.user.avatar | emptyImageFilter" alt="" />
    </div>
    <div class="tweet-info">
      <div class="title">
        <span>{{ tweet.user.name }}</span> @{{ tweet.user.account }}・{{
          tweet.createdAt | fromNow
        }}
      </div>
      <p>
        {{ tweet.description | slice }}
      </p>
    </div>
    <div class="delete" @click.stop.prevent="handleDeleteButtonClick(tweet.id)">
      <i class="fas fa-times"></i>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminTweetItem",
  mixins: [fromNowFilter, emptyImageFilter],

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
    async handleDeleteButtonClick(tweetId) {
      try {
        this.$emit("after-delete-tweet", tweetId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法將餐廳移除最愛，請稍後再試",
        });
        console.log("error", error);
      }
    },
  },
  filters: {
    slice(description) {
      if (!description) return "-";
      return description.slice(0, 50);
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
  min-width: 1062px;
  max-width: 1062px;
}

.tweet-info {
  width: 100%;
}
.tweet-info span {
  font-weight: 900;
  height: auto;
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