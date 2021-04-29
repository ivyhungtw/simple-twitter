<template>
  <div class="publicMessage">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- mainSection -->
    <div class="mainSection">
      <!-- onlineUserList -->
      <div class="usersOnline">
        <div class="title">
          <h1>上線使用者</h1>
        </div>
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            reprehenderit reiciendis dolore illo ipsa vitae excepturi cumque
            incidunt eum voluptate obcaecati itaque quod architecto, officiis
            ipsum repudiandae dignissimos. Assumenda, officia.
          </p>
        </div>
      </div>

      <!-- messageBox -->
      <div class="messageBox">
        <div class="title">
          <h1>公開聊天室</h1>
        </div>
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            reprehenderit reiciendis dolore illo ipsa vitae excepturi cumque
            incidunt eum voluptate obcaecati itaque quod architecto, officiis
            ipsum repudiandae dignissimos. Assumenda, officia.
          </p>
        </div>
      </div>
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
  /* border: 1px solid #000; */
}

.mainSection {
  flex: 1;
  width: 100%;
  height: 100vh;
  border-right: 1px solid #e6ecf0;
  /* border: 3px solid red; */
  display: flex;
}

.usersOnline {
  border-right: 1px solid #e6ecf0;
  flex: 1;
}

.messageBox {
  /* border: 1px solid #000; */
  flex: 2;
}

.usersOnline .title,
.messageBox .title {
  border-bottom: 1px solid #e6ecf0;
  height: 55px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  /* z-index: 999; */
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>