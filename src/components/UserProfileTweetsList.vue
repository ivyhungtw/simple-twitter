<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div class="container">
    <ul class="tweetList">
      <!-- $attrs：data from grandparent element -->
      <!-- when emitting event to grandparent element -->
      <!-- parentElement: $listeners -->
      <!-- find better way -->
      <TweetItem
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
      ></TweetItem>
    </ul>
  </div>
</template>

<script>
import TweetItem from "./TweetItem";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

export default {
  name: "UserProfileTweetsList.vue",
  components: {
    TweetItem,
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchCurrentUser();
    this.fetchUserTweets(this.user.id);
    console.log("currentUserID", this.user);
  },
  data() {
    return {
      tweets: [],
      user: {},
    };
  },
  methods: {
    async fetchUserTweets(tweetId) {
      try {
        console.log(tweetId);
        const { data } = await tweetsAPI.getUserTweet({ tweetId });
        this.tweets = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    fetchCurrentUser() {
      this.user = this.currentUser;
    },
  },
  watch: {
    tweets(newVal) {
      this.fetchUserTweets(newVal);
      console.log("currentUserID", this.user.id);
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