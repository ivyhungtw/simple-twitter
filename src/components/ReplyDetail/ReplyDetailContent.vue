<template>
  <div class="container">
    <div class="userInfo">
      <div class="avatar">
        <img :src="dataForContent.avatar | emptyImageFilter" alt="" />
      </div>
      <div class="userTitle">
        <p>{{ dataForContent.name }}</p>
        <p>@{{ dataForContent.account }}</p>
      </div>
    </div>

    <div class="textContent">
      <p>{{ dataForContent.description }}</p>
    </div>
    <div class="updatedAt">
      <p class="tweetUpdateAt">{{ dataForContent.updatedAt | exactDate }}</p>
    </div>
    <div class="feedbackCount">
      <p>{{ replyCount }} <span>回復 </span></p>
      <p>{{ likeCount }} <span>喜歡次數</span></p>
    </div>
    <div class="tweetPanel">
      <div class="comments">
        <img
          data-toggle="modal"
          :data-target="`#tweetReplyModal-${dataForContent.id}`"
          src="../../assets/commentCount.svg"
          alt=""
        />
      </div>
      <TweetReplyModal
        v-on="$listeners"
        :tweet="dataForModal"
      ></TweetReplyModal>
      <div class="likes">
        <img
          v-if="!dataForContent.isLiked"
          :class="{ liked: dataForContent.isLiked }"
          src="../../assets/likeCount.svg"
          alt=""
          @click="toggleLike(dataForContent.id)"
        />
        <img
          v-else
          src="../../assets/likedLikeCount.svg"
          alt=""
          @click="toggleLike(dataForContent.id)"
        />
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";
import { exactDateFilter } from "../../utils/mixins";
import TweetReplyModal from "../Modal/TweetReplyModal";
import { Toast } from "../../utils/helpers";
import tweetsAPI from "../../apis/tweets";

export default {
  name: "ReplyDetailContent",
  mixins: [emptyImageFilter, exactDateFilter],
  components: {
    TweetReplyModal,
  },
  props: {
    dataForContent: {
      type: Object,
      required: true,
    },
  },
  created() {
    // eventbus for afterCreateReply
    this.$bus.$on("afterCreateReply", (tweetId) => {
      console.log("in ReplyDetailContent");
      console.log(tweetId);
      this.replyCount++;
    });
  },
  data() {
    return {
      userId: undefined,
      dataForModal: {},
      replyCount: 0,
      likeCount: 0,
    };
  },
  methods: {
    async fetchFeedbackCount(UserId) {
      try {
        // get Likes.length, isLiked, Comments, Comments.length,
        const userAllTweetResponse = await tweetsAPI.getAllTweetsByUserId(
          UserId
        );
        const userAllTweets = userAllTweetResponse.data;

        const { id } = this.dataForContent;
        const targetTweet = userAllTweets.find((tweet) => tweet.id === id);
        const { replyCount, likeCount } = targetTweet;
        this.replyCount = replyCount;
        this.likeCount = likeCount;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得完整推文資訊，請稍後再試！",
        });
      }
    },
    setDataForModal() {
      const {
        id,
        avatar,
        name,
        account,
        updatedAt,
        description,
        createdAt,
      } = this.dataForContent;
      this.dataForModal = {
        id,
        updatedAt,
        description,
        createdAt,
        user: {
          avatar,
          name,
          account,
        },
      };
    },
    toggleLike(tweet) {
      //async
      // call api to like this tweet by user
      if (tweet.isLiked) {
        tweet.isLiked = false;
        tweet.likeCount -= 1;
      } else {
        tweet.isLiked = true;
        tweet.likeCount += 1;
      }
      // tell Main.vue to change data
      this.$emit("afterToggleLike", tweet);
    },
  },
  watch: {
    dataForContent: {
      handler: async function (newVal) {
        console.log("new val from ReplyDetail.vue");
        this.userId = newVal.UserId;
        const userId = this.userId;
        await this.fetchFeedbackCount(userId);

        this.setDataForModal();
      },
      deep: true,
    },
    replyCount(newVal) {
      // when get data, inform ReplyDetail
      this.$emit("afterGetReplyCount", newVal);
    },
    likeCount(newVal) {
      // when get data, inform ReplyDetail
      this.$emit("afterGetLikeCount", newVal);
    },
  },
};
</script>

<style scoped>
.container {
  border-bottom: 1px solid #e6ecf0;
  padding: 15px;
}

.userInfo {
  display: flex;
}

.userTitle {
  display: flex;
  flex-direction: column;
}

p {
  margin: 0;
}

.userTitle p {
  flex: 1;
  font-weight: 700;
  font-size: 15px;
  color: #1c1c1c;
}

.userTitle p:last-child {
  font-weight: 500;
  color: #657786;
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

/* textContent */
.textContent {
  margin: 15px 0 15px;
  /* background-color: #333; */
}

.textContent p {
  font-size: 23px;
}

/* updatedAt */
.updatedAt {
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 15px;
}
.updatedAt p {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

/* feedbackCount */
.feedbackCount {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #e6ecf0;
}

.feedbackCount p,
.feedbackCount span {
  font-size: 19px;
  line-height: 19px;
  font-weight: 700;
}

.feedbackCount span {
  color: #657786;
}

.feedbackCount p:first-child {
  margin-right: 20px;
}

/* tweetPanel */
.tweetPanel {
  padding-top: 20px;
  display: flex;
  flex-direction: row;
}

.tweetPanel img {
  height: 25px;
  width: 25px;
}

.tweetPanel img:hover {
  cursor: pointer;
}

.tweetPanel .comments {
  margin-right: 155px;
}
</style>