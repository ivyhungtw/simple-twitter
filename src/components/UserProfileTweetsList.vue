<template>
  <div class="container">
    <ul class="tweetList">
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

export default {
  name: "UserProfileTweetsList.vue",
  components: {
    TweetItem,
  },
  props: {
    tweets: {
      type: Array,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },
  created() {
    // this.fetchCurrentUser();
  },
  data() {
    return {
      localTweets: [],
      user: {},
    };
  },
  methods: {
    fetchUserTweets(newVal) {
      this.localTweets = newVal;
    },
    fetchCurrentUser(newVal) {
      this.user = newVal;
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    tweets: {
      handler: function (newVal) {
        this.fetchUserTweets(newVal);
      },
      deep: true,
    },
    userData: {
      handler: function (newVal) {
        this.fetchCurrentUser(newVal);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0;
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