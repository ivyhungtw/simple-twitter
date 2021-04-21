<template>
  <div class="replyDetailContent">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- ReplyDetail -->
    <div class="mainSection">
      <ReplyDetailContent></ReplyDetailContent>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers class="recommendedFollowers"></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import ReplyDetailContent from "../components/ReplyDetailContent";

export default {
  name: "ReplyDetail",
  components: {
    UserSidebar,
    RecommendedFollowers,
    ReplyDetailContent,
  },
};
</script>

<style scoped>
.replyDetailContent {
  display: flex;
}

.mainSection {
  flex: 1;
  border: 1px solid #000;
}

.recommendedFollowers {
  display: block;
}
</style>