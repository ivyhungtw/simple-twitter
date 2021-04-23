<template>
<<<<<<< HEAD
  <div class="container">
    <h1>UserProfileReply</h1>
    <!-- UserSidebar -->

    <!-- UserProfileCard -->
    <!-- userProfileNavtabs -->
    <UserProfileNavtabs />
    <!-- UserProfileReplyList -->
    <!-- RecommendedFollowers -->
=======
  <div id="UserProfile">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="UserProfilePanel">
      <div class="title">
        <h1>使用者列表</h1>
      </div>
      <div class="admin-users-card">
        <!-- // UserFollowCard -->
        <UserProfileCard />
        <!-- // UserFollowNavtabs -->
        <UserProfileNavtabs />
        <!-- // UserProfileTweetsList -->
        <UserProfileReplyList />
      </div>
    </div>

    <!-- // RecommendedFollowers -->
    <RecommendedFollowers />
>>>>>>> master
  </div>
</template>

<script>
import UserSidebar from "./../components/UserSidebar";
import UserProfileCard from "./../components/UserProfileCard";
import UserProfileNavtabs from "./../components/UserProfileNavtabs";
import UserProfileReplyList from "./../components/UserProfileReplyList";
import RecommendedFollowers from "./../components/RecommendedFollowers";

export default {
<<<<<<< HEAD
  name: "UserProfileReply",
=======
  name: "UserFollowers",
>>>>>>> master
  components: {
    UserSidebar,
    UserProfileCard,
    UserProfileNavtabs,
    UserProfileReplyList,
    RecommendedFollowers,
  },
};
</script>

<style scoped>
#UserProfile {
  display: flex;
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