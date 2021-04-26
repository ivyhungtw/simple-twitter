<template>
  <div class="publicMessage">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- mainSection -->
    <div class="mainSection">
      <!-- onlineUserList -->
      <h1>上線使用者</h1>

      <!-- messageBox -->
      <h1>公開聊天室</h1>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";

export default {
  name: "publicMessage",
  components: { UserSidebar },
};
</script>

<style scoped>
.publicMessage {
  display: flex;
}

.mainSection {
  flex: 1;
  width: 100%;
  height: 100vh;
  border: 1px solid #000;
}
</style>