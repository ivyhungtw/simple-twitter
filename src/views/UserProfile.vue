<template>
  <div id="UserProfile">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="UserProfilePanel">
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
        <!-- // UserProfileCard -->
        <UserProfileCard v-for="user in users" :key="user.id" :user="user" />
        <!-- // UserProfileNavtabs -->
        <UserProfileNavtabs />
        <!-- // TweetItem -->
        <TweetItem />
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
import TweetItem from "./../components/TweetItem";
import RecommendedFollowers from "./../components/RecommendedFollowers";

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
   TweetItem,
    RecommendedFollowers,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
    },
  },
};
</script>

<style scoped>
#UserProfile {
  display: flex;
  min-height: 100vh;
  justify-content: center;
}

.UserProfilePanel {
  flex: 1;
  min-width: 598px;
  max-width: 598px;
  border-right: 1px solid #e6ecf0;
}

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