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
        :tweetInfo="tweetInfo"
        @afterToggleLike="afterToggleLike"
        @afterCreateReply="afterCreateReply"
      ></ReplyDetailContent>

      <!-- ReplyDetailList -->
      <ReplyDetailList
        :tweetTarget="tweetInfo.account"
        :comments="tweetInfo.comments"
      ></ReplyDetailList>
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
  commentsCount: 4,
  comments: [
    {
      id: 4,
      name: "user4",
      account: "@user4",
      image: "",
      createdAt: new Date(),
      replyContent: "sdfeef!!",
    },
    {
      id: 3,
      name: "user3",
      account: "@user3",
      image: "",
      createdAt: new Date(),
      replyContent:
        "5555555555555sdfwfwf115555555555555sdfwfwf115555555555555sdfwfwf115555555555555sdfwfwf115555555555555sdfwfwf11!!",
    },
    {
      id: 2,
      name: "user2",
      account: "@user2",
      image: "",
      createdAt: new Date(),
      replyContent: "asdfwef wefwf223!!",
    },
    {
      id: 1,
      name: "user1",
      account: "@user1",
      image: "",
      createdAt: new Date(),
      replyContent: "sdfwff6w6f4wf!!",
    },
  ],
  likeCount: 11,
  updatedAt: new Date(),
  isLiked: true,
};

import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import ReplyDetailContent from "../components/ReplyDetail/ReplyDetailContent";
import ReplyDetailList from "../components/ReplyDetail/ReplyDetailList";
import { v4 as uuidv4 } from "uuid";

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
      // 加入 reply id
      this.tweetInfo = this.tweetInfo.map((each) => {
        return {
          ...each,
          replyId: uuidv4,
        };
      });
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