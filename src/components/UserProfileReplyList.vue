<template>
  <div class="container">
    <ul class="tweetList" v-if="loaded">
      <TweetItem
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
      ></TweetItem>
    </ul>
  </div>
</template>

<script>
import TweetItem from "../components/TweetItem";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import usersAPI from "../apis/users";

export default {
  name: "UserProfileReplyList",
  components: { TweetItem },
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
      loaded: false,
    };
  },
  methods: {
    fetchUser(newVal) {
      this.user = newVal;
    },
    async fetchALlRepliedTweets(userId) {
      console.log("fetchUserTweets in List");
      console.log("fetchUser:" + userId);
      try {
        const { data } = await tweetsAPI.getTweetReplies(userId);
        console.log(data);
        this.tweets = data;
        if (data.status !== "success") {
          throw new Error();
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試！",
        });
      }
    },
    async fetchAllReplyUsers() {
      // 根據取得的回覆中所帶的 UserId 取得回覆者資料
      this.tweets = await Promise.all(
        this.tweets.map(async (tweet) => {
          try {
            console.log("get user");
            const { data } = await usersAPI.getUser(tweet.UserId);
            const { avatar, name, account } = data;
            return {
              ...tweet,
              avatar,
              name,
              account,
            };
          } catch (error) {
            console.log(error);
            Toast.fire({
              icon: "error",
              title: "無法取得完整回覆資料，請稍後再試！",
            });
          }
        })
      );
      this.loaded = true;
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
          await this.fetchALlRepliedTweets(userId);
          await this.fetchAllReplyUsers();
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
</style>