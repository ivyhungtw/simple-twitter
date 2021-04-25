<template>
  <div class="tweet">
    <div class="avatar">
      <img :src="initialTweet.user.avatar | emptyImageFilter" alt="" />
    </div>
    <div class="tweetInfo">
      <div class="userInfo">
        <p class="userName mr-1">{{ initialTweet.user.name }}</p>
        <p class="userAccount">@{{ initialTweet.user.account }}</p>
        <span class="mx-1">&#xb7;</span>
        <p class="tweetUpdateAt">{{ initialTweet.updatedAt | fromNow }}</p>
      </div>
      <div class="tweetContent">
        <!-- <router-link to="/replydetail"> -->
        <router-link :to="`/replydetail/${initialTweet.id}`">
          <p>{{ initialTweet.description }}</p>
        </router-link>
      </div>
      <div class="tweetPanel">
        <div class="comments">
          <img
            src="../assets/commentCount.svg"
            alt=""
            data-toggle="modal"
            :data-target="`#tweetReplyModal-${initialTweet.id}`"
          />
          <p>
            {{ initialTweet.replyCount }}
          </p>
        </div>
        <div class="likes">
          <img
            v-if="!initialTweet.isLiked"
            :class="{ liked: initialTweet.isLiked }"
            src="../assets/likeCount.svg"
            alt=""
            @click="toggleLike(initialTweet)"
          />
          <img
            v-else
            src="../assets/likedLikeCount.svg"
            alt=""
            @click="toggleLike(initialTweet)"
          />
          <p>
            {{ initialTweet.likeCount }}
          </p>
        </div>
        <TweetReplyModal
          :tweet="initialTweet"
          v-on="$listeners"
        ></TweetReplyModal>
      </div>
    </div>
  </div>
</template>

<script>
import TweetReplyModal from "../components/Modal/TweetReplyModal";
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

export default {
  name: "TweetItem",
  mixins: [fromNowFilter, emptyImageFilter],
  components: {
    TweetReplyModal,
  },
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      initialTweet: {},
    };
  },
  created() {
    this.fetchTweet(this.tweet);
  },
  methods: {
    fetchTweet(newVal) {
      this.initialTweet = newVal;
    },
    async toggleLike(tweet) {
      try {
        let response = {};

        // if unlike tweet
        if (tweet.isLiked) {
          tweet.isLiked = false;
          tweet.likeCount -= 1;
          // call api to like this tweet by user
          response = await tweetsAPI.unlikeTweet(tweet.id);
        } else {
          // if like tweet
          tweet.isLiked = true;
          tweet.likeCount += 1;
          // call api to like this tweet by user
          response = await tweetsAPI.likeTweet(tweet.id);
        }

        if (response.data.status !== "success") {
          throw new Error(response.data.message);
        }

        // inform user
        Toast.fire({
          icon: "success",
          title: "操作成功！",
        });

        // tell Main.vue to change data
        this.$emit("afterToggleLike", tweet);
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法執行此操作，請稍後再試！",
        });
      }
    },
  },
  watch: {
    tweet(newVal) {
      this.fetchTweet(newVal);
    },
  },
};
</script>

<style scoped>
.tweet {
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  padding: 10px 15px;
  width: 100%;
}

.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.avatar img {
  min-width: 100%;
  height: 100%;
  border-radius: 50%;
}

.tweetInfo {
  /* width: 100%; */
  width: calc(100% - 60px);
}

.userInfo {
  display: flex;
  height: 22px;
}

.userInfo p {
  font-size: 15px;
  height: 100%;
}

.userInfo .userName {
  font-weight: 700;
}
.userInfo .userAccount,
.userInfo .tweetUpdateAt,
.userInfo span {
  font-weight: 500;
  color: #657786;
  line-height: 22px;
}

.tweetContent {
  width: 100%;
  margin-bottom: 15px;
}

.tweetContent a {
  display: block;
  text-decoration: none;
}

.tweetContent p {
  width: 100%;
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  word-wrap: break-word;
}

.tweetPanel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  margin: 0;
}

.tweetPanel .comments,
.tweetPanel .likes {
  width: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.tweetPanel img {
  height: 16px;
  width: 16px;
  margin-right: 10px;
  color: #657786;
}

.tweetPanel .liked {
  color: transparent;
}

.tweetPanel img:hover {
  cursor: pointer;
}

.tweetPanel p {
  margin: 0px;
  color: #657786;
}
</style>
