<template>
  <div id="UserFollowers">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="UserFollowersPanel">
      <div class="title">
        <div class="pre-page">
          <router-link to="/userprofile"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
        </div>
        <div class="title-info">
          <div class="name">John Doe</div>
          <div class="tweet-count">25推文</div>
        </div>
      </div>
      <div class="admin-users-card">
        <!-- // UserFollowNavtabs -->
        <UserFollowNavtabs />
        <!-- // UserFollowersList -->
        <UserFollowersList
          v-for="follower in followers"
          :key="follower.id"
          :follower="follower"
        />
      </div>
    </div>

    <!-- // RecommendedFollowers -->
    <RecommendedFollowers />
  </div>
</template>

<script>
import UserSidebar from "./../components/UserSidebar";
import UserFollowNavtabs from "./../components/UserFollowNavtabs";
import UserFollowersList from "./../components/UserFollowersList";
import RecommendedFollowers from "./../components/RecommendedFollowers";

const dummyData = {
  followers: [
    {
      id: 34,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      tweetContent:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isFollowing: true,
    },
    {
      id: 35,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      tweetContent: "123456789",
      isFollowing: true,
    },
    {
      id: 36,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      tweetContent:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      isFollowing: true,
    },
    {
      id: 37,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      tweetContent: "123456789",
      isFollowing: true,
    },
  ],
};

export default {
  name: "UserFollowers",
  components: {
    UserSidebar,
    UserFollowNavtabs,
    UserFollowersList,
    RecommendedFollowers,
  },
  data() {
    return {
      followers: [],
    };
  },
  created() {
    this.fetchFollowers();
  },
  methods: {
    fetchFollowers() {
      const { followers } = dummyData;
      this.followers = followers;
    },
    // afterDeleteTweet(tweetId) {
    //   this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    // },
  },
};
</script>

<style scoped>
#UserFollowers {
  display: flex;
  min-height: 100vh;
  width: auto;
}

.UserFollowersPanel {
  flex: 1;
  min-width: 600px;
}

.title {
  display: flex;
  height: 55px;
  margin-bottom: 10px;
}

.pre-page {
  width: 30px;
  margin: 5px 25px 15px 15px;
}

.title-info .name {
  font-weight: 900;
  font-size: 20px;
  line-height: 15px;
  margin-top: 5px;
  padding-bottom: 0;
}
.title-info .tweet-count {
  color: gray;
  font-size: 10px;
  margin-top: 0;
  padding-top: 0;
}
</style>