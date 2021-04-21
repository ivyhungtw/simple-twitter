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
      <CreateTweet @afterCreateTweet="afterCreateTweet"></CreateTweet>
      <!-- FollowingUsersTweets -->
      <FollowingUsersTweets
        :tweets="tweets"
        @afterToggleLike="afterToggleLike"
      ></FollowingUsersTweets>
    </div>
    <!-- RecommendedFollowers -->
    <RecommendedFollowers></RecommendedFollowers>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    image: "",
    name: "user1",
    account: "@user1",
    tweetContent:
      "sdfff s we rw weerdfdf we w sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 2,
    image: "",
    name: "user2",
    account: "@user2",
    tweetContent:
      "sff233 d dfsdfff s we rw weerdfdf we wdfsdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 3,
    image: "",
    name: "user3",
    account: "@user3",
    tweetContent:
      "sdfff s we rw weesdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wrdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 4,
    image: "",
    name: "user4",
    account: "@user4",
    tweetContent:
      "asdf woej ows sodfhwoje jsd sj owijeojw e293 lskdn jwlf lsen won owinkldkfndfkns vvbd35t8 9slkdhfla;ls sldk ldnflwn !",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 5,
    image: "",
    name: "user5",
    account: "@user5",
    tweetContent:
      "sdfff s we rw wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 6,
    image: "",
    name: "user6",
    account: "@user6",
    tweetContent:
      "sdfff s we rw wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 7,
    image: "",
    name: "user7",
    account: "@user7",
    tweetContent:
      "sdfff s we rw wesdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we werdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 8,
    image: "",
    name: "user8",
    account: "@user8",
    tweetContent:
      "sdfff s we rw wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 9,
    image: "",
    name: "user9",
    account: "@user9",
    tweetContent:
      "sdfff s we rw sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wweerdfdf we w",
    commentsCount: 56,
    likeCount: 7,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 10,
    image: "",
    name: "user10",
    account: "@user10",
    tweetContent:
      "sdfff s we rw sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wweerdfdf we w",
    commentsCount: 26,
    likeCount: 74,
    updatedAt: new Date(),
    isLiked: false,
  },
];

import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import CreateTweet from "../components/Main/CreateTweet";
import FollowingUsersTweets from "../components/Main/FollowingUsersTweets";

export default {
  name: "Main",
  components: {
    UserSidebar,
    RecommendedFollowers,
    CreateTweet,
    FollowingUsersTweets,
  },
  created() {
    this.fetchTweets();
  },
  data() {
    return {
      tweets: [],
    };
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData;
    },
    afterCreateTweet(newTweet) {
      console.log("afterCreateTweet");
      console.log("tweetContent: " + newTweet.tweetContent);
    },
    afterToggleLike(likedTweet) {
      console.log(likedTweet);
      // 處理畫面
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === likedTweet.id) {
          return {
            ...tweet,
            isLiked: likedTweet.isLiked,
          };
        } else {
          return tweet;
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
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  overflow: hidden;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>