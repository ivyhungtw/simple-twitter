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
        <!-- // UserProfileCard -->
        <UserProfileCard v-for="user in users" :key="user.id" :user="user" />
        <!-- // UserProfileNavtabs -->
        <UserProfileNavtabs />
        <!-- // UserProfileReplyList -->
        <UserProfileReplyList
          :tweets="tweets"
          @afterToggleLike="afterToggleLike"
          @afterCreateReply="afterCreateReply"
        />
      </div>
    </div>

    <!-- // RecommendedFollowers -->
    <RecommendedFollowers />
  </div>
</template>

<script>
import UserSidebar from "./../components/UserSidebar";
import UserProfileCard from "./../components/UserProfileCard";
import UserProfileNavtabs from "./../components/UserProfileNavtabs";
import UserProfileReplyList from "./../components/UserProfileReplyList";
import RecommendedFollowers from "./../components/RecommendedFollowers";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";

const dummyData = {
  users: [
    {
      id: 34,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      cover:
        "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      introduction:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
  ],
};

export default {
  name: "UserProfile",
  components: {
    UserSidebar,
    UserProfileCard,
    UserProfileNavtabs,
    UserProfileReplyList,
    RecommendedFollowers,
  },
  data() {
    return {
      users: [],
      tweets: [],
      tweet: {
        userId: undefined,
        created: "",
        description: "",
        id: undefined, // tweetId
        likeCount: 0,
        replyCount: 0,
        updatedAt: "",
        user: {
          account: "",
          name: "",
          avatar: "",
        },
        isLiked: false, // 要後端補
      },
    };
  },
  created() {
    this.fetchUsers();
    this.fetchTweets();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
    async fetchTweets() {
      try {
        const { data } = await tweetsAPI.getAllFollowedTweets();
        this.tweets = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試！",
        });
      }
    },
    afterToggleLike(toggleTweet) {
      // rerender
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === toggleTweet.id) {
          return {
            ...tweet,
            isLiked: toggleTweet.isLiked,
          };
        } else {
          return tweet;
        }
      });
    },
    afterCreateReply(tweetId) {
      this.tweets = this.tweets.map((tweet) => {
        if (tweet.id === tweetId) {
          return {
            ...tweet,
            replyCount: tweet.replyCount + 1,
          };
        } else {
          return tweet;
        }
      });
    },
  },
};
</script>

created() {
    
  },
 
  methods: {
    

  },


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

/* .UserProfilePanel {
  flex: 1;
  min-width: 598px;
  max-width: 598px;
  border-right: 1px solid #e6ecf0;
} */

.admin-users-card {
  margin-top: 5px;
}

.title {
  display: flex;
  height: 35px;
  margin-bottom: 0;
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