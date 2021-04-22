<template>
  <div id="UserFollowing">
    <!-- // UserSidebar -->
    <UserSidebar />
    <div class="UserFollowingPanel">
      <div class="title">
        <h1>使用者列表</h1>
      </div>
      <div class="admin-users-card">
        <!-- // UserFollowNavtabs -->
        <UserFollowNavtabs />
        <!-- // UserFollowinigList -->
        <UserFollowingList />
      </div>
    </div>

    <!-- // RecommendedFollowers -->
    <RecommendedFollowers />
  </div>
</template>

<script>
import UserSidebar from "./../components/UserSidebar";
import UserFollowNavtabs from "./../components/UserFollowNavtabs";
import UserFollowingList from "./../components/UserFollowingList";
import RecommendedFollowers from "./../components/RecommendedFollowers";

export default {
  name: "UserFollowing",
  components: {
    UserSidebar,
    UserFollowNavtabs,
    UserFollowingList,
    RecommendedFollowers,
  },
};
</script>

<style scoped>
#UserFollowing {
  display: flex;
}

.UserFollowingPanel {
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