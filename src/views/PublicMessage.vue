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
            <Spinner v-if="isProcessing"></Spinner>
            <!-- userItem -->
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
      <MessageBox
        ref="messageBox"
        :currentChat="currentChat"
        :atPublic="atPublic"
        :messageList="messageList"
      ></MessageBox>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import MessageBox from "../components/MessageBox";
import Spinner from "../components/Spinner";
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
import sucketsAPI from "../apis/socket";
export default {
  name: "publicMessage",
  components: { UserSidebar, MessageBox, Spinner },
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      currentChat: {
        userId: "publicRoom",
        name: "公開聊天室",
        account: "",
      },
      message: "",
      messageList: [],
      onlineUsersCount: 1,
      onlineUsers: [],
      atPublic: true,
      isProcessing: true,
    };
  },
  async mounted() {
    this.$socket.emit("leave");
    this.$store.commit("setCurrentRoomId", 4);
    try {
      this.isProcessing = true;
      this.$refs.messageBox.toggleIsProcessing();
      const { data } = await sucketsAPI.getPublicRoom();
      const { messages, onlineUsersCount, onlineUsers } = data;
      this.messageList = messages;
      this.onlineUsers = onlineUsers;
      this.onlineUsersCount = onlineUsersCount;

      this.$refs.messageBox.toggleIsProcessing();
      // join room
      this.joinPublicRoom();
    } catch (error) {
      this.isProcessing = false;
      console.log(error);
      Toast.fire({
        icon: "error",
        // title: "無法取得聊天室資料，請稍後再試！",
        title: error,
      });
    }
  },
  sockets: {
    "chat message": function (data) {
      console.log("Got message: " + data.text);
      this.messageList.push({
        id: this.messageList + 1,
        UserId: data.userId,
        type: 1, // messageItem
        avatar: data.avatar,
        message: data.text,
        createdAt: new Date(),
      });
    },
    "users count": function (data) {
      const { users: onlineUsers, userCount: onlineUsersCount } = data;
      this.onlineUsers = onlineUsers;
      this.onlineUsersCount = onlineUsersCount;
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
      this.isProcessing = false;
    },
  },
  computed: {
    ...mapState(["currentUser", "currentRoomId"]),
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
.usersOnline .title {
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
</style>