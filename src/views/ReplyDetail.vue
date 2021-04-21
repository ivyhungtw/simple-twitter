<template>
  <div class="replyDetailContent">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- ReplyDetail -->
    <div class="mainSection">
      <div class="title">
        <img @click="$router.back()" src="../assets/lastPage.svg" alt="" />
        <h1>推文</h1>
      </div>
      <!-- ReplyDetailContent -->
      <ReplyDetailContent></ReplyDetailContent>

      <!-- ReplyDetailList -->
      <ReplyDetailList></ReplyDetailList>
    </div>

    <!-- RecommendedFollowers -->
    <RecommendedFollowers class="recommendedFollowers"></RecommendedFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommendedFollowers from "../components/RecommendedFollowers";
import ReplyDetailContent from "../components/ReplyDetail/ReplyDetailContent";
import ReplyDetailList from "../components/ReplyDetail/ReplyDetailList";

export default {
  name: "ReplyDetail",
  components: {
    UserSidebar,
    RecommendedFollowers,
    ReplyDetailContent,
    ReplyDetailList,
  },
};
</script>

<style scoped>
.replyDetailContent {
  display: flex;
}

.mainSection {
  flex: 1;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
}

.recommendedFollowers {
  display: block;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.title img {
  height: 14px;
  width: 17px;
  margin-right: 43px;
}

.title img:hover {
  cursor: pointer;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>