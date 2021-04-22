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
        @afterCreateReply="afterCreateReply"
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
    tweetId: 11,
    tweetContent:
      "sdfff s we rw weerdfdf we w sdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we w",
    commentsCount: 11,
    comments: [],
    likeCount: 11,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 2,
    image: "",
    name: "user2",
    account: "@user2",
    tweetId: 135,
    tweetContent:
      "sff233 d dfsdfff s we rw weerdfdf we wdfsdfff s we rw weerdfdf we w",
    commentsCount: 22,
    comments: [],
    likeCount: 22,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 3,
    image: "",
    name: "user3",
    account: "@user3",
    tweetId: 188,
    tweetContent:
      "sdfff s we rw weesdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we wrdfdf we w",
    commentsCount: 33,
    comments: [],
    likeCount: 33,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 4,
    image: "",
    name: "user4",
    account: "@user4",
    tweetId: 85,
    tweetContent:
      "asdf woej ows sodfhwoje jsd sj owijeojw e293 lskdn jwlf lsen won owinkldkfndfkns vvbd35t8 9slkdhfla;ls sldk ldnflwn !",
    commentsCount: 44,
    comments: [],
    likeCount: 44,
    updatedAt: new Date(),
    isLiked: false,
  },
  {
    id: 5,
    image: "",
    name: "user5",
    account: "@user5",
    tweetId: 985,
    tweetContent:
      "sdfff s we rw wsdfff s we rw weerdfdf we wsdfff s we rw weerdfdf we weerdfdf we w",
    commentsCount: 55,
    comments: [],
    likeCount: 55,
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
      tweet: {
        id: undefined,
        image: "",
        name: "",
        account: "",
        tweetId: undefined,
        tweetContent: "",
        commentsCount: 0,
        comments: [],
        likeCount: 0,
        updatedAt: "",
        isLiked: false,
      },
    };
  },
  methods: {
    fetchTweets() {
      this.tweets = dummyData;
    },
    afterCreateTweet(newTweet) {
      this.tweets.unshift({
        ...this.tweet,
        ...newTweet,
      });
    },
    afterToggleLike(likedTweet) {
      // 處理畫面
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.tweetId === likedTweet.tweetId) {
          return {
            ...tweet,
            isLiked: likedTweet.isLiked,
          };
        } else {
          return tweet;
        }
      });
    },
    afterCreateReply(newTweetReply) {
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.tweetId === newTweetReply.tweet.tweetId) {
          tweet.comments.push({
            id: newTweetReply.id,
            name: newTweetReply.name,
            account: newTweetReply.account,
            createdAt: newTweetReply.createdAt,
            replyContent: newTweetReply.replyContent,
          });
          return {
            ...tweet,
            commentsCount: tweet.commentsCount + 1,
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
  width: 100%;
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