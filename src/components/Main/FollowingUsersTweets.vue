<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div class="container">
    <ul class="tweetList">
      <!-- $attrs：從祖父曾物件來的資料 -->
      <!-- 子層要發事件給祖父曾使用 $emit，父層用 $listeners -->
      <!-- 找尋更好的方法 -->
      <TweetItem
        v-for="tweet in $attrs.tweets"
        :key="tweet.tweetId"
        :tweet="tweet"
        v-on="$listeners"
      ></TweetItem>
    </ul>
  </div>
</template>

<script>
import TweetItem from "../TweetItem";
export default {
  name: "FollowingUsersTweets",
  prop: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  components: {
    TweetItem,
  },
  created() {
    // this.fetchFollowedTweets();
  },
  data() {
    return {
      followedTweets: [],
    };
  },
  methods: {
    fetchFollowedTweets() {
      // async
      // this.followedTweets = this.tweets;
    },
    afterToggleLike() {
      // 使用 $attrs 所以本地不需要處理
    },
  },
  watch: {
    // tweets(newVal) {
    //   this.fetchFollowedTweets(newVal);
    // },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  height: calc(100% - 175px);
  width: 100%;
}

.tweetList {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
}

/* for Chrome, Safari and Opera */
.tweetList::-webkit-scrollbar {
  display: none;
}

.tweetList {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>