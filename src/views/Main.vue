<template>
  <div class="main">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- Main -->
    <div class="mainSection">
      <div class="title">
        <h1>首頁</h1>
      </div>
      <!-- CreateTweet -->
      <!-- <CreateTweet @afterCreateTweet="afterCreateTweet"></CreateTweet> -->
      <CreateTweet></CreateTweet>

      <!-- FollowingUsersTweets -->
      <Spinner v-if="!tweets.length"></Spinner>
      <FollowingUsersTweets
        v-else
        :tweets="tweets"
        @afterToggleLike="afterToggleLike"
      ></FollowingUsersTweets>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import CreateTweet from "../components/Main/CreateTweet";
import FollowingUsersTweets from "../components/Main/FollowingUsersTweets";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import Spinner from "../components/Spinner";

export default {
  name: "Main",
  components: {
    UserSidebar,
    RecommendedFollowers,
    CreateTweet,
    FollowingUsersTweets,
    Spinner,
  },
  created() {
    this.fetchTweets();
    // eventbus for afterCreateReply
    this.$bus.$on("afterCreateReply", (payload) => {
      this.afterCreateReply(payload);
    });
    this.$bus.$on("afterCreateTweet", (newTweet) => {
      this.afterCreateTweet(newTweet);
    });
  },
  data() {
    return {
      tweets: [],
      tweet: {
        UserId: undefined,
        created: "",
        description: "",
        id: undefined, // tweetId
        likeCount: 0,
        replyCount: 0,
        updatedAt: "",
        user: {
          account: "",
          name: "",
          avatar: "",
        },
        isLiked: false, // 要後端補
      },
    };
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getAllFollowedTweets();
        this.tweets = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試！",
        });
      }
    },
    afterCreateTweet(newTweet) {
      this.tweets.unshift({
        ...this.tweet, // set up correct properties for TweetItem
        ...newTweet,
      });
    },
    afterToggleLike(toggleTweet) {
      // rerender
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === toggleTweet.id) {
          return {
            ...tweet,
            isLiked: toggleTweet.isLiked,
          };
        } else {
          return tweet;
        }
      });
    },
    afterCreateReply(payload) {
      const tweetId = payload.tweetId;
      console.log("tweetId: " + tweetId);
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id !== tweetId) {
          return {
            ...tweet,
          };
        } else {
          return {
            ...tweet,
            replyCount: tweet.replyCount + 1,
          };
        }
      });
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
}

.mainSection {
  flex: 1;
  width: 100%;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  overflow-y: scroll;
  position: relative;
}

/* for Chrome, Safari and Opera */
.mainSection {
  -ms-overflow-style: scrollbar;
  /* IE and Edge */
  /* scrollbar-width: 8px; */
  /* Firefox */
}
.mainSection::-webkit-scrollbar {
  width: 8px;
}

.mainSection::-webkit-scrollbar-thumb {
  background-color: #9197a3;
  border-radius: 15px;
}

.mainSection::-webkit-scrollbar-track {
  background-color: #ddd;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>