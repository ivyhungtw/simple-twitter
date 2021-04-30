<template>
  <div class="publicMessage">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- mainSection -->
    <div class="mainSection">
      <!-- onlineUserList -->
      <div class="usersOnline">
        <div class="title">
          <h1>訊息</h1>
        </div>
        <div class="container">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            molestias quo in cupiditate laboriosam omnis. Sapiente fugiat magni
            est tenetur odit labore obcaecati, atque quisquam dolores suscipit
            et eum illo.
          </p>
        </div>
      </div>

      <!-- messageBox -->
      <div class="messageBox">
        <div class="title">
          <h1>UserName</h1>
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
  name: "privateMessage",
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

.usersOnline .container {
  padding: 0;
}

.userItem .userContainer {
  height: 60px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
  padding: 10px;
}

.avatar {
  width: 50px;
  height: 50px;
  border: 1px solid #fff;
  border-radius: 50%;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.userName {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 0px 0 10px;
}

.userName p {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
}

.userAccount {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.userAccount p {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #657786;
}

/* message box */

.messageBox {
  /* border: 1px solid red; */
}

.messageBox .container {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 115px);
  overflow-y: scroll;
}

.messageBox .container::-webkit-scrollbar {
  display: none;
}

/* for Chrome, Safari and Opera */
.messageBox .container {
  -ms-overflow-style: none;
}

.messageList {
  flex: 1;
  margin: 0;
}

.mainContent {
  max-width: 60%;
  /* width: 200px; */
  /* height: 50px; */
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: flex-end;
}

.textTime {
  margin-left: 70px;
  color: #777;
  font-weight: 500;
}

.messageItem .avatar {
  min-width: 50px;
  height: 50px;
}
.messageItem .textContainer {
  word-break: break-all;
  margin-left: 10px;
  height: 100%;
}

.messageItem .textContainer .text {
  padding: 10px 15px;
  border-radius: 20px 20px 20px 0;
  background: #e6ecf0;
  font-size: 16px;
}

.actionItem {
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.actionItem p {
  margin: 0;
  width: auto;
  background-color: hsl(0deg 0% 90%);
  color: hsl(207deg 14% 46%);
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 500;
}

/*////////// currentUser's message ///////////*/
.currentUser {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.currentUser .textContainer .text {
  border-radius: 20px 20px 0 20px;
  background-color: hsl(24deg 100% 50%);
  color: #fff;
}

.currentUser .textTime {
  /* border: 1px solid #000; */
  margin: 0;
  margin-right: 10px;
}

.currentUser .mainContent .avatar {
  display: none;
}

.currentUser .textTime {
}

/*/ ////////////////// panel ///////////////*/
.meesagePanel {
  height: 60px;
  padding: 10px;
  display: flex;
  border: 1px solid #e6ecf0;
}

#textInput {
  flex: 1;
  height: 40px;
  outline: none;
  border: none;
  padding: 10px;
  background: #e6ecf0;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
}

.sendBtn {
  width: 40px;
  height: 40px;
  padding: 0;
  padding-right: 10px;
  margin-left: 10px;
}

.sendBtn img {
  transform: rotate(45deg);
}
</style>