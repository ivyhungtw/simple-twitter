<template>
  <div class="main">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- Main -->
    <div class="mainSection"><h1>This is main</h1></div>
    <!-- RecommendedFollowers -->
    <RecommendedFollowers></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
// CreateTweet.vue => modal id="tweetModal"
// FollowingUsersTweets.vue => modal id="tweetReplyModal"

export default {
  name: "Main",
  components: {
    UserSidebar,
    RecommendedFollowers,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.mainSection {
  text-align: center;
  flex: 1;
  border-right: 1px solid #e6ecf0;
}
</style>