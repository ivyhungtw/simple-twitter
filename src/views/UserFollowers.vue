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
import { Toast } from "../utils/helpers";
import tweetsAPI from "../apis/tweets";
import { mapState } from "vuex";

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
        user: {
        ...this.currentUser
      },
    };
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    currentUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
  },
  created() {
    this.fetchFollowers(this.currentUser.id);
  },
  methods: {
    async fetchFollowers(tweetId) {
      try {
        const { followers } = await tweetsAPI.getUserFollowersTweet({
          tweetId,
        });

        this.followers = followers;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得跟隨者資料，請稍後再試",
        });
      }
    },
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