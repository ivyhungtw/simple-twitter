<template>
  <div class="replyDetailContent">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- ReplyDetail -->
    <div class="mainSection">
      <div class="title">
        <button class="btn">
          <img @click="$router.back()" src="../assets/lastPage.svg" alt="" />
        </button>
        <h1>推文</h1>
      </div>
      <!-- ReplyDetailContent -->
      <ReplyDetailContent
        :tweetInfo="tweetInfo"
        @afterToggleLike="afterToggleLike"
      ></ReplyDetailContent>

      <!-- ReplyDetailList -->
      <ReplyDetailList></ReplyDetailList>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers class="recommendedFollowers"></RecommendedFollowers>
  </div>
</template>

<script>
const tweetInfo = {
  id: 1,
  image: "",
  name: "user1",
  account: "@user1",
  tweetId: 11,
  tweetContent:
    "sdfff s we rw weerdfdf we w sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we sdfff s we rw weerdfdf we w sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we ww",
  commentsCount: 11,
  comments: [],
  likeCount: 11,
  updatedAt: new Date(),
  isLiked: true,
};

import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import ReplyDetailContent from "../components/ReplyDetail/ReplyDetailContent";
import ReplyDetailList from "../components/ReplyDetail/ReplyDetailList";

export default {
  name: "ReplyDetail",
  components: {
    UserSidebar,
    RecommendedFollowers,
    ReplyDetailContent,
    ReplyDetailList,
  },
  created() {
    this.fetchTweetInfo();
  },
  data() {
    return {
      tweetInfo: {},
    };
  },
  methods: {
    fetchTweetInfo() {
      this.tweetInfo = tweetInfo;
    },
    afterToggleLike(likedTweet) {
      const toggleResult = likedTweet.isLiked;
      this.tweetInfo = {
        ...this.tweetInfo,
        isLiked: toggleResult,
      };
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
}

.mainSection {
  flex: 1;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
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