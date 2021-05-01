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
          <div class="newMessage">
            <button type="button" class="btn" @click="showModal">
              <img src="../assets/newMessage.svg" alt="" />
            </button>
          </div>

          <!-- Modal -->
          <UserChatListModal
            @afterUserSelected="afterUserSelected"
            :allUserList="allUserList"
          ></UserChatListModal>
        </div>
        <div class="container">
          <ul class="userList">
            <li
              class="userItem"
              v-for="user in openedUserList"
              :key="user.id"
              @click="fetchChatData(user)"
            >
              <div class="avatar">
                <img :src="user.avatar | emptyImageFilter" alt="" />
              </div>
              <div class="userContainer">
                <div class="row">
                  <div class="userName">
                    <p>{{ user.name }}</p>
                  </div>
                  <div class="userAccount">
                    <p>@{{ user.account }}</p>
                  </div>
                  <div class="lastTime">
                    <p>{{ user.lastTime }}</p>
                  </div>
                </div>
                <div class="previewMessage">
                  <p>
                    {{ user.lastMessage }}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- messageBox -->
      <MeesageBox
        :currentChat="currentChat"
        :messageList="currentChat.messageList"
      ></MeesageBox>
    </div>
  </div>
</template>

<script>
// const dummyChat = [];

import UserSidebar from "../components/UserSidebar";
import UserChatListModal from "../components/Modal/UserChatListModal";
import MeesageBox from "../components/MessageBox";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import socketsAPI from "../apis/socket";
import { mapState } from "vuex";
import $ from "jquery";

export default {
  name: "privateMessage",
  components: { UserSidebar, UserChatListModal, MeesageBox },
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      allUserList: [],
      openedUserList: [
        // {
        //   roomId: 144,
        //   id: 6,
        //   name: "USER",
        //   avatar: "",
        //   account: "account1",
        //   lastTime: "昨天",
        //   lastMessage: "",
        // },
      ],
      currentChat: {
        roomId: undefined,
        id: undefined,
        name: "",
        account: "",
        messageList: [],
      },
      message: "",
    };
  },
  async created() {
    try {
      await this.fetchAvailableUser();
    } catch (error) {
      console.log();
    }
  },
  sockets: {
    message: function (data) {
      Toast.fire({
        icon: "info",
        title: data,
      });
      console.log(data);
    },
    "private chat message": function (data) {
      console.log(data);
      const {
        roomId,
        userId: id,
        name,
        avatar,
        account,
        message: lastMessage,
        createdAt: lastTime,
      } = data;
      // 放到 data.roomId = this.openedUserList 裡面 roomId 一樣的資料裡
      const roomOfNewMessage = this.openedUserList.find(
        (room) => room.roomId === data.roomId
      );
      if (!roomOfNewMessage) {
        console.log("create new room!");
        // if not found, add new room to openedUserList
        this.openedUserList.push({
          roomId,
          id,
          name,
          avatar,
          account,
          lastTime,
          lastMessage,
        });
      } else {
        console.log("room found!");
        // if room found, update lastTime & lastMessage
        roomOfNewMessage.lastTime = lastTime;
        roomOfNewMessage.lastMessage = lastMessage;
      }

      // if new private message is of currentChat, push new message to messageList
      if (this.currentChat.roomId === data.roomId) {
        this.currentChat.messageList.push({
          id: this.currentChat.messageList + 1,
          UserId: id,
          type: 1, // messageItem
          avatar: data.avatar,
          message: lastMessage,
          createdAt: lastTime,
        });
      }
    },
    "users count": function (data) {
      console.log("Users count: ");
      console.log(data);
      console.log("-----------------------");
    },
    "new private chat message": function (data) {
      // get new chat
      console.log(data);
      // create new chat to openedUsersList
      // message, userId, avatar, roomId
      // this.joinPrivateRoom()
    },
  },
  methods: {
    // click old chat, fetch chat data, join room
    async fetchChatData(user) {
      const { id, name, account, avatar } = user;
      this.currentChat = {
        id,
        name,
        account,
        avatar,
        messages: [],
      };
      try {
        const { data } = await socketsAPI.getRoomsByUser();
        // 還不知道會拿出什麼，但應該要有 roomId
        const { messages, roomId } = data;
        this.currentChat.messageList = messages;

        // join room
        this.joinPrivateRoom(roomId);

        console.log(data);
      } catch (error) {
        console.log("fetchChatData");
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得對話紀錄，請稍後再試！",
        });
      }
    },
    // Step1: select new chat
    afterUserSelected(user) {
      console.log("Select userId: " + user.id);
      this.currentChat = {
        ...this.currentChat,
        ...user,
      };
      const userId = this.currentChat.id;
      this.createNewChat(userId);
    },
    // Step2: create new chat room
    async createNewChat(userId) {
      try {
        const { data } = await socketsAPI.createPrivateRoom(userId);
        const { roomId } = data;

        console.log(data);
        console.log("RoomId: " + roomId);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: "已建立連線！",
        });

        this.joinPrivateRoom(roomId);
      } catch (error) {
        console.log(error);
      }
    },
    // Step3: currentUser join chat room
    joinPrivateRoom(roomId) {
      console.log("join private room: " + roomId);
      this.$socket.emit("join", {
        username: this.currentUser.name,
        roomId,
        userId: this.currentUser.id,
      });
    },
    async fetchAvailableUser() {
      try {
        const { data } = await socketsAPI.getAvailableUsers();

        console.log("typeof data: " + typeof data);
        console.log(data);

        // console.log(Object.values(data));

        // this.allUserList = Object.key(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },
    showModal() {
      $("#allUserList").appendTo("body");
      $("#allUserList").modal("show");
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
  min-width: 400px;
  position: relative;
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

.messageBox .title {
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;
}

.messageBox .title p {
  margin: 0;
  color: hsl(207deg 14% 46%);
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}

.newMessage {
  /* border: 1px solid #000; */
  position: absolute;
  right: 10px;
}

.newMessage button {
  padding: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.newMessage img {
  display: block;
  width: 20px;
  height: 20px;
}

.usersOnline .container {
  padding: 0;
}

.userItem {
  border-bottom: 1px solid #e6ecf0;
  padding: 0 10px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.userItem:hover {
  cursor: pointer;
  background-color: #f7f7f7;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
}

.userContainer {
  height: 50px;
  width: 100%;
  flex: 1;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
}

.userContainer .row {
  margin: 0;
  height: 25px;
  overflow-x: hidden;
  position: relative;
}

.previewMessage {
  max-width: 90%;
  height: 25px;
  overflow: hidden;
}

.lastTime p,
.userName p,
.userAccount p {
  line-height: 25px;
  font-size: 14px;
  margin: 0;
}

.userName p {
  font-weight: 700;
}

.previewMessage p,
.userAccount p,
.lastTime p {
  color: #657786;
  font-weight: 500;
}

.userAccount {
  margin-left: 5px;
}

.userAccount p,
.userName p,
.previewMessage p {
  margin: 0;
}

.lastTime {
  position: absolute;
  right: 0;
}

.previewMessage p {
  line-height: 25px;
}

/*/////////////////// message box ///////////////////*/

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