<template>
  <div id="UserProfile">
    <!--  UserSidebar -->
    <UserSidebar />
    <div class="mainSection">
      <div class="title">
        <button class="btn" @click="$router.back()">
          <img src="../assets/lastPage.svg" alt="" />
        </button>
        <div class="nameTag">
          <p>{{ currentUser.name }}</p>
          <p>{{ tweets.length }} 則推文</p>
        </div>
      </div>
      <div class="admin-users-card">
        <!--  UserProfileCard -->
        <!-- <UserProfileCard :userData="user" /> -->
        <UserProfileCard :userData="currentUser" />

        <!--  UserProfileNavtabs -->
        <UserProfileNavtabs />

        <!--  UserProfileTweetsList -->
        <UserProfileTweetsList :tweets="tweets" />
      </div>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers />
  </div>
</template>

<script>
import UserSidebar from "./../components/UserSidebar";
import UserProfileCard from "./../components/UserProfileCard";
import UserProfileNavtabs from "./../components/UserProfileNavtabs";
import UserProfileTweetsList from "./../components/UserProfileTweetsList";
import RecommendedFollowers from "./../components/RecommendedFollowers";
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import { mapState } from "vuex";
import usersAPI from "../apis/users";

export default {
  name: "UserProfile",
  components: {
    UserSidebar,
    UserProfileCard,
    UserProfileNavtabs,
    UserProfileTweetsList,
    RecommendedFollowers,
  },
  // 如果是自己的頁面：用 currentUser 做
  // 如果是別人的頁面：用 beforeRouteUpdate 做
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params;
    this.fetchUser(userId);
    this.fetchUserTweets();
    next();
  },
  data() {
    return {
      user: {},
      tweets: [],
    };
  },
  methods: {
    async fetchUser(userId) {
      console.log("fetchUser");
      try {
        const { data } = await usersAPI.getUser(userId);
        console.log(data);
        this.user = data;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資訊，請稍後再試！",
        });
      }
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