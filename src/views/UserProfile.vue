<template>
  <div id="UserProfile">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="mainSection">
      <div class="title">
        <button class="btn" @click="$router.back()">
          <img src="../assets/lastPage.svg" alt="" />
        </button>
        <div class="nameTag">
          <p>{{ user.name }}</p>
          <p>{{ tweets.length }} 則推文</p>
        </div>
      </div>
      <div class="admin-users-card">
        <!--  UserProfileCard -->
        <UserProfileCard :userData="user" />

        <!--  UserProfileNavtabs -->
        <UserProfileNavtabs />

        <!--  UserProfileTweetsList -->
        <!-- <UserProfileTweetsList
          :tweets="tweets"
          @afterToggleLike="afterToggleLike"
          @afterCreateReply="afterCreateReply"
        /> -->
        <UserProfileTweetsList :tweets="tweets" />
      </div>
    </div>

    <!-- // RecommendedFollowers -->
    <RecommendedFollowers />
  </div>
</template>

<script>
const dummyUser = {
  id: 64,
  name: "John Doe",
  avatar:
    "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  account: "heyjohn",
  cover:
    "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  introduction:
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  tweetCount: 10,
  followerCount: 3,
  followingCount: 1,
  likeCount: 3,
};

import UserSidebar from "./../components/UserSidebar";
import UserProfileCard from "./../components/UserProfileCard";
import UserProfileNavtabs from "./../components/UserProfileNavtabs";
import UserProfileTweetsList from "./../components/UserProfileTweetsList";
import RecommendedFollowers from "./../components/RecommendedFollowers";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import { mapState } from "vuex";

export default {
  name: "UserProfile",
  components: {
    UserSidebar,
    UserProfileCard,
    UserProfileNavtabs,
    UserProfileTweetsList,
    RecommendedFollowers,
  },
  data() {
    return {
      user: {},
      tweets: [],
    };
  },
  created() {
    this.fetchUsers();
    this.fetchUserTweets();
  },
  methods: {
    fetchUsers() {
      this.user = dummyUser;
    },
    async fetchUserTweets() {
      try {
        const userId = this.user.id;
        const { data } = await tweetsAPI.getUserTweet(userId);
        this.tweets = data;

        this.tweets = this.tweets.map((tweet) => {
          return {
            ...tweet,
            UserId: this.currentUser.id,
            user: {
              account: this.currentUser.account,
              avatar: this.currentUser.avatar,
              name: this.currentUser.name,
            },
          };
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試！",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style scoped>
#UserProfile {
  display: flex;
  min-height: 100vh;
  justify-content: center;
}

.mainSection {
  flex: 1;
  min-width: 598px;
  max-width: 598px;
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
  z-index: 99;
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

.nameTag p:first-child {
  height: 24px;
  font-weight: 900;
  font-size: 19px;
  margin: 0;
}
.nameTag p:last-child {
  font-weight: 500;
  height: 19px;
  font-size: 13px;
  color: #657789;
  margin: 0;
}
</style>