<template>
  <div id="UserProfile">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="UserProfilePanel">
      <div class="title">
        <h1>使用者列表</h1>
      </div>
      <div class="admin-users-card">
        <!-- // UserProfileCard -->
        <UserProfileCard />
        <!-- // UserProfileNavtabs -->
        <UserProfileNavtabs />
        <!-- // UserProfileTweetsList -->
        <UserProfileTweetsList />
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
import UserProfileTweetsList from "./../components/UserProfileTweetsList";
import RecommendedFollowers from "./../components/RecommendedFollowers";

export default {
  name: "UserFollowers",
  components: {
    UserSidebar,
    UserProfileCard,
    UserProfileNavtabs,
    UserProfileTweetsList,
    RecommendedFollowers,
  },
};
</script>

<style scoped>
#UserProfile {
  display: flex;
  min-height: 100vh;
}

.UserProfilePanel {
  flex: 1;
  min-width: 600px;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}

.title h1 {
  font-size: 19px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
}
</style>