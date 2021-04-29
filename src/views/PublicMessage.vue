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
          <ul class="userList">
            <li class="userItem">
              <div class="userContainer">
                <div class="avatar">
                  <img src="" alt="" />
                </div>
                <div class="userName">
                  <p>UserName</p>
                </div>
                <div class="userAccount">
                  <p>@userAccount</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- messageBox -->
      <div class="messageBox">
        <div class="title">
          <h1>公開聊天室</h1>
        </div>
        <div class="container">
          <ul class="messageList">
            <li class="messageItem">Hi!</li>
            <li class="messageItem">Hello!</li>
            <li class="messageItem">Aloha!</li>
          </ul>
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
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
    customEmit: function (data) {
      console.log(data);
    },
  },
  methods: {
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit("emit_method", data);
    },
  },
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

.usersOnline .container {
  /* border: 1px solid #000; */
  padding: 0;
}

.userList {
  /* border: 1px solid #000; */
}

.userItem .userContainer {
  height: 60px;
  border-bottom: 1px solid #e6ecf0;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.userContainer > div {
  border: 1px solid red;
}

.userContainer .avatar {
  width: 50px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 50%;
}

/* message box */

.messageBox .container {
  /* border: 1px solid #000; */
  padding: 0;
}

.messageItem {
  height: 50px;
  border: 1px solid #000;
  font-size: 18px;
  line-height: 50px;
  text-align: center;
  border-radius: 30px;
  margin: 10px 5px;
}
</style>