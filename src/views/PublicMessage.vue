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
                  <img :src="'' | emptyImageFilter" alt="" />
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
            <li
              v-for="message in messageList"
              :key="message"
              class="messageItem"
            >
              {{ message }}
            </li>
          </ul>
          <div class="meesagePanel">
            <div class="inputPanel">
              <button
                type="button"
                class="btn sendBtn"
                @keyup.enter="sendMessage"
                @click="sendMessage"
              >
                Send
              </button>
              <input id="textInput" type="text" v-model="message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import { emptyImageFilter } from "../utils/mixins";
// import { Toast } from "../utils/helpers";

export default {
  name: "publicMessage",
  components: { UserSidebar },
  mixins: [emptyImageFilter],
  data() {
    return {
      message: "",
      messageList: [],
    };
  },
  sockets: {
    connect: function () {
      this.messageList.push("socket connected");
      // console.log("socket connected");
    },
    customEmit: function (data) {
      // fired by socket server
      this.messageList.push(data);
    },
  },
  methods: {
    sendMessage: function () {
      this.$socket.emit(this.message);
      this.messageList.push(this.message);
      this.message = "";
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
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  padding: 10px;
  /* border: 1px solid #000; */
}

.userContainer .avatar {
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
  margin: 0 5px 0 15px;
}

.userName p {
  margin: 0;
}

.userAccount {
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
}

.userAccount p {
  margin: 0;
}

/* message box */

.messageBox {
  /* border: 1px solid #000; */
  flex: 2;
  display: flex;
  flex-direction: column;
  height: calc(100vh-135px);
  /* border: 1px solid #000; */
}

.messageBox .container {
  /* border: 1px solid #000; */
  padding: 0;
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  /* border: 1px solid #000; */
  /* height: calc(100vh-135px); */
}

.messageList {
  flex: 1;
  /* border: 3px solid red; */
  margin: 0;
  height: calc(100vh-135px);
  overflow-y: scroll;
}

.messageItem {
  width: 200px;
  height: 50px;
  border: 1px solid #aaa;
  font-size: 18px;
  line-height: 50px;
  /* text-align: center; */
  padding: 0px 15px;
  border-radius: 10px;
  margin: 10px 5px;
}

.meesagePanel {
  padding: 10px;
  /* background-color: #333; */
  display: flex;
  border: 1px solid #aaa;
  /* align-items: center; */
}

.inputPanel {
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: row;
}

.sendBtn {
  /* border: 1px solid #000; */
  background-color: #aaa;
  color: #222;
  margin-right: 20px;
  height: 40px;
}

#textInput {
  flex: 1;
  /* width: 200px; */
  height: 40px;
  outline: none;
  background: #ccc;
}
</style>