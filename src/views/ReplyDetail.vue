<template>
  <div class="replyDetailContent">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- ReplyDetail -->
    <div class="mainSection">
      <div class="title">
        <button class="btn" @click="$router.back()">
          <img src="../assets/lastPage.svg" alt="" />
        </button>
        <h1>推文</h1>
      </div>
      <!-- ReplyDetailContent -->
      <ReplyDetailContent
        :dataForContent="dataForContent"
        @afterGetReplyCount="afterGetReplyCount"
        @afterGetLikeCount="afterGetLikeCount"
        @afterToggleLike="afterToggleLike"
        @afterCreateReply="afterCreateReply"
      ></ReplyDetailContent>

      <!-- ReplyDetailList -->
      <ReplyDetailList :dataForList="dataForList"></ReplyDetailList>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers class="recommendedFollowers"></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import ReplyDetailContent from "../components/ReplyDetail/ReplyDetailContent";
import ReplyDetailList from "../components/ReplyDetail/ReplyDetailList";
// import { mapState } from "vuex";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import usersApi from "../apis/users";

export default {
  name: "ReplyDetail",
  components: {
    UserSidebar, // 不需要資料
    RecommendedFollowers, // 自行處理
    ReplyDetailContent, // 需要 tweetId, UserId, name, account, avatar, description, updatedAt, createdAt, likeCount, replyCount
    ReplyDetailList, // 需要 UserId, Comments
  },
  created() {
    const { id } = this.$route.params;
    this.fetchTweetInfo(id);
  },
  data() {
    return {
      tweetInfo: {},
      dataForContent: {},
      // id, UserId, name, avatar, account, description, createdAt, updatedAt
      dataForList: {},
      // tweetId, account
      likeCount: 0,
      replyCount: 0,
      isLiked: false,
    };
  },
  methods: {
    async fetchTweetInfo(tweetId) {
      try {
        // ReplyDetailContent
        const { data } = await tweetsAPI.getTweet(tweetId);
        const { UserId, createdAt, description, id, updatedAt } = data;

        // get tweet author info: name, account, avatar
        const userInfoResponse = await usersApi.getUser(UserId);
        const { account, name, avatar } = userInfoResponse.data;

        this.dataForContent = {
          id,
          UserId,
          createdAt,
          description,
          updatedAt,
          account,
          name,
          avatar,
          // isLiked
          replyCount: this.replyCount,
          likeCount: this.likeCount,
        };

        this.dataForList = {
          tweetId: id,
          account,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資訊，請稍後再試！",
        });
      }
    },
    afterGetReplyCount(newVal) {
      this.replyCount = newVal;
    },
    afterGetLikeCount(newVal) {
      this.likeCount = newVal;
    },
    afterToggleLike(likedTweet) {
      const toggleResult = likedTweet.isLiked;
      this.tweetInfo = {
        ...this.tweetInfo,
        isLiked: toggleResult,
      };
    },
    afterCreateReply(newTweetReply) {
      console.log("ReplyDetail.vue");
      console.log(newTweetReply);
      // 在資料裡面建立多一個 comment
      this.tweetInfo.comments.unshift({
        ...newTweetReply,
      });
    },
  },
  watch: {
    // tweetInfo
  },
};
</script>

<style scoped>
.replyDetailContent {
  display: flex;
  overflow-y: hidden;
}

.mainSection {
  flex: 1;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  height: 100vh;
  overflow-y: scroll;
}

/* for Chrome, Safari and Opera */
.mainSection::-webkit-scrollbar {
  display: none;
}

.mainSection {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.recommendedFollowers {
  display: block;
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

.title .btn {
  padding: 0;
  height: 100%;
  width: 20px;
  margin-right: 43px;
  display: flex;
  align-items: center;
}

.title img {
  height: 14px;
  width: 17px;
}

.title img:hover {
  cursor: pointer;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>