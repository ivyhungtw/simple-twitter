<template>
  <div class="notification">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <div class="mainSection">
      <h1>通知</h1>
    </div>

    <!-- RecommededFollowers -->
    <RecommededFollowers></RecommededFollowers>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import RecommededFollowers from "../components/RecommendedFollowers";

export default {
  name: "notification",
  components: { UserSidebar, RecommededFollowers },
};
</script>

<style scoped>
.notification {
  display: flex;
}

.mainSection {
  flex: 1;
  width: 100%;
  height: 100vh;
  border: 1px solid #000;
}
</style>