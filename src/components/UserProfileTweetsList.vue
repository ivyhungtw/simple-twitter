<template>
  <div class="container">
    <ul class="tweetList">
      <template v-if="isLoading">
        <p class="loading">資料讀取中...</p>
      </template>

      <template v-else>
        <p v-if="!tweets.length" class="noData">無資料</p>

        <TweetItem
          v-else
          v-for="tweet in tweets"
          :key="tweet.id"
          :tweet="tweet"
        ></TweetItem>
      </template>
    </ul>
  </div>
</template>

<script>
import TweetItem from "./TweetItem";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

export default {
  name: "UserProfileTweetsList",
  components: {
    TweetItem,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      tweets: {},
      isLoading: true,
    };
  },
  methods: {
    fetchUser(newVal) {
      this.user = newVal;
    },
    async fetchUserTweets(userId) {
      console.log("fetchUserTweets in List");
      console.log("fetchUser:" + userId);
      try {
        this.isLoading = true;
        const { data } = await tweetsAPI.getUserTweet(userId);
        this.tweets = data;

        this.tweets = this.tweets.map((tweet) => {
          return {
            ...tweet,
            UserId: this.user.id,
            user: {
              account: this.user.account,
              avatar: this.user.avatar,
              name: this.user.name,
            },
          };
        });
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試！",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    userData: {
      handler: async function (newVal) {
        try {
          this.fetchUser(newVal);
          const userId = this.user.id;
          await this.fetchUserTweets(userId);
        } catch (error) {
          console.log(error);
          Toast.fire({
            icon: "error",
            title: "無法取得推文資料，請稍後再試！",
          });
        }
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

.loading,
.noData {
  text-align: center;
  padding: 10px;
  color: #657786;
}
</style>