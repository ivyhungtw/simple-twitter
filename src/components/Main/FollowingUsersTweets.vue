<template>
  <!-- FollowingUsersTweets.vue => modal id="tweetReplyModal" -->
  <div class="container">
    <ul class="tweetList">
      <TweetItem
        v-for="tweet in followedTweets"
        :key="tweet.id"
        :tweet="tweet"
      ></TweetItem>
    </ul>
  </div>
</template>

<script>
const dummyData = [
  {
    id: 1,
    image: "",
    name: "user1",
    account: "@user1",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
  {
    id: 2,
    image: "",
    name: "user2",
    account: "@user2",
    tweetContent: "sff233 d dfdfsdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
  {
    id: 3,
    image: "",
    name: "user3",
    account: "@user3",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
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
  },
  {
    id: 5,
    image: "",
    name: "user5",
    account: "@user5",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
  {
    id: 6,
    image: "",
    name: "user6",
    account: "@user6",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
  {
    id: 7,
    image: "",
    name: "user7",
    account: "@user7",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
  {
    id: 8,
    image: "",
    name: "user8",
    account: "@user8",
    tweetContent: "sdfff s we rw weerdfdf we w",
    commentsCount: 16,
    likeCount: 76,
    updatedAt: new Date(),
  },
];

// TweetReplyModal //

import TweetItem from "../TweetItem";
export default {
  name: "FollowingUsersTweets",
  components: {
    TweetItem,
  },
  created() {
    this.fetchFollowedTweets();
  },
  data() {
    return {
      followedTweets: [],
    };
  },
  methods: {
    fetchFollowedTweets() {
      // async
      this.followedTweets = dummyData;
    },
  },
};
</script>

<style scoped>
.container {
  height: calc(100% - 175px);
}

.tweetList {
  overflow-y: scroll;
  height: 100%;
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