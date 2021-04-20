<template>
  <div class="main">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- Main -->
    <div class="mainSection">
      <div class="title">
        <h1>首頁</h1>
      </div>
      <!-- CreateTweet -->
      <CreateTweet></CreateTweet>
      <!-- FollowingUsersTweets -->
      <FollowingUsersTweets></FollowingUsersTweets>
    </div>
    <!-- RecommendedFollowers -->
    <RecommendedFollowers></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import CreateTweet from "../components/Main/CreateTweet";
import FollowingUsersTweets from "../components/Main/FollowingUsersTweets";

export default {
  name: "Main",
  components: {
    UserSidebar,
    RecommendedFollowers,
    CreateTweet,
    FollowingUsersTweets,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}

.mainSection {
  flex: 1;
  border-right: 1px solid #e6ecf0;
  /* padding: 0; */
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  padding: 15px;
}

.title h1 {
  font-weight: 700;
  font-size: 18px;
}
</style>