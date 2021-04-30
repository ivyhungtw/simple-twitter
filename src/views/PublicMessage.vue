<template>
  <div class="publicMessage">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>

    <!-- mainSection -->
    <div class="mainSection">
      <!-- onlineUserList -->
      <div class="usersOnline">
        <div class="title">
          <h1>上線使用者 ({{ onlineUsersCount }})</h1>
        </div>
        <div class="container">
          <ul class="userList">
            <!-- userItem -->
            <!-- currentUser -->
            <li class="userItem">
              <div class="userContainer">
                <div class="avatar">
                  <img :src="currentUser.avatar | emptyImageFilter" alt="" />
                </div>
                <div class="userName">
                  <p>{{ currentUser.name }}</p>
                </div>
                <div class="userAccount">
                  <p>@{{ currentUser.account }}</p>
                </div>
              </div>
            </li>
            <!-- other users -->
            <li class="userItem" v-for="user in onlineUsers" :key="user.id">
              <div class="userContainer">
                <div class="avatar">
                  <img :src="user.avatar | emptyImageFilter" alt="" />
                </div>
                <div class="userName">
                  <p>{{ user.name }}</p>
                </div>
                <div class="userAccount">
                  <p>@{{ user.account }}</p>
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
        <div ref="container" class="container">
          <ul class="messageList" ref="height">
            <!--  -->
            <template v-for="item of messageList">
              <!-- actionItem -->
              <li v-if="item.type === 0" class="actionItem" :key="item.id">
                <p>{{ item.text }}</p>
              </li>

              <!-- messageItem: others -->
              <li
                v-else
                class="messageItem"
                :key="item.id"
                :class="{ currentUser: item.UserId === currentUser.id }"
              >
                <div class="mainContent">
                  <div class="avatar">
                    <img :src="item.avatar | emptyImageFilter" alt="" />
                  </div>
                  <div class="textContainer">
                    <div class="text">
                      {{ item.message }}
                    </div>
                  </div>
                </div>
                <div class="textTime">{{ item.createdAt | fromNow }}</div>
              </li>
            </template>
          </ul>
        </div>
        <div class="meesagePanel">
          <input
            @keyup.enter="sendMessage"
            id="textInput"
            placeholder="輸入訊息..."
            type="text"
            v-model="message"
            maxlength="160"
            required
          />
          <button type="submit" class="btn sendBtn" @click="sendMessage">
            <img src="../assets/send.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
import sucketsAPI from "../apis/socket";

export default {
  name: "publicMessage",
  components: { UserSidebar },
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      message: "",
      messageList: [],
      onlineUsersCount: 1,
      onlineUsers: [],
    };
  },
  async created() {
    try {
      const { data } = await sucketsAPI.getPublicRoom();
      const { messages: messageList, onlineUsersCount, onlineUsers } = data;
      this.messageList = messageList;
      this.onlineUsers = onlineUsers;
      this.onlineUsersCount = onlineUsersCount;

      // join room
      this.joinPublicRoom();
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "error",
        title: "無法取得聊天室資料，請稍後再試！",
      });
    }
  },
  sockets: {
    connection: function (data) {
      console.log("Data:" + data);
    },
    "chat message": function (data) {
      this.messageList.push({
        id: this.messageList + 1,
        UserId: data.userId,
        type: 1, // messageItem
        avatar: data.avatar,
        message: data.text,
        createdAt: new Date(),
      });
    },
    message: function (data) {
      this.messageList.push({
        id: this.messageList.length + 1,
        type: 0, // actionItem
        text: data.text,
      });
      this.message = "";
    },
  },
  methods: {
    joinPublicRoom() {
      this.$socket.emit("join", {
        username: this.currentUser.name,
        roomId: 4,
        userId: this.currentUser.id,
      });
    },
    sendMessage: function () {
      if (!this.message) {
        Toast.fire({
          icon: "error",
          title: "尚未輸入訊息!",
        });
        return;
      }
      this.$socket.emit("chat message", this.message);

      this.message = "";

      Toast.fire({
        icon: "success",
        title: "訊息已發送!",
      });
    },
    scroll() {
      const height = this.$refs.height;
      const container = this.$refs.container;
      container.scrollTop = height.scrollHeight;
    },
  },
  watch: {
    messageList: {
      deep: true,
      handler: function () {
        this.scroll();
      },
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
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
  border-right: 1px solid #e6ecf0;
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