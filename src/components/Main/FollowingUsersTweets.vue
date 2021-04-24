<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div class="container">
    <ul class="tweetList">
      <!-- $attrs：data from grandparent element -->
      <!-- when emitting event to grandparent element -->
      <!-- parentElement: $listeners -->
      <!-- find better way -->
      <TweetItem
        v-for="tweet in $attrs.tweets"
        :key="tweet.id"
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
    this.fetchFollowedTweets();
  },
  data() {
    return {
      followedTweets: [],
    };
  },
  methods: {
    fetchFollowedTweets() {
      this.followedTweets = this.tweets;
    },
  },
  watch: {
    tweets(newVal) {
      this.fetchFollowedTweets(newVal);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  /* height: calc(100% - 175px); */
  width: 100%;
}

.tweetList {
  /* overflow-y: scroll; */
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