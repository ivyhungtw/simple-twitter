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
            <template v-if="!receivedMessageList.length">
              <p class="noReceivedMessageList">還沒有任何對話</p>
            </template>
            <template>
              <li
                class="userItem"
                v-for="user in receivedMessageList"
                :key="user.id"
                @click="passChatData(user)"
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
                      <p>{{ user.lastTime | fromNow }}</p>
                    </div>
                  </div>
                  <div class="previewMessage">
                    <p>
                      {{ user.lastMessage }}
                    </p>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>

      <!-- messageBox -->
      <MeesageBox
        :currentChat="currentChat"
        :messageList="currentMessageList"
      ></MeesageBox>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import UserChatListModal from "../components/Modal/UserChatListModal";
import MeesageBox from "../components/MessageBox";
import { Toast } from "../utils/helpers";
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import socketsAPI from "../apis/socket";
import { mapState } from "vuex";
import usersAPI from "../apis/users";
import $ from "jquery";

export default {
  name: "privateMessage",
  components: { UserSidebar, UserChatListModal, MeesageBox },
  mixins: [emptyImageFilter, fromNowFilter],
  data() {
    return {
      currentRoomId: "",
      allUserList: [],
      receivedMessageList: [],
      currentChat: {
        // roomId: undefined,
        id: undefined,
        name: "",
        account: "",
      },
      currentMessageList: [],
      message: "",
    };
  },
  async created() {
    try {
      await this.fetchReceivedMessageList();
      await this.fetchAvailableUser();
    } catch (error) {
      console.log(error);
    }
  },
  sockets: {
    message: function (data) {
      Toast.fire({
        icon: "info",
        title: data.text,
      });
      console.log(data);
    },
    "private chat message": async function (data) {
      console.log("private chat message");
      console.log(data);
      const {
        avatar,
        createdAt: lastTime,
        text: lastMessage,
        // userId: id,
        userId,
      } = data;

      // 放到 data.roomId = this.receivedMessageList 裡面 roomId 一樣的資料裡
      const newMessageRoom = this.receivedMessageList.find(
        (room) => room.roomId === this.currentRoomId
      );

      // 如果沒有已經建立的 message
      try {
        if (!newMessageRoom) {
          // 根據 userId 拉資料
          const { data } = await usersAPI.getUser(userId);
          const { name, account } = data;
          this.receivedMessageList.push({
            account,
            avatar,
            lastMessage,
            lastTime,
            name,
            userId,
            roomId: this.currentRoomId,
          });
        }
      } catch (error) {
        console.log(error);
      }

      // 如果有已經建立的 message
      newMessageRoom.lastTime = lastTime;
      newMessageRoom.lastMessage = lastMessage;

      // 發訊者的當前 messageBox 處理
      if (this.currentChat.roomId === this.currentRoomId) {
        console.log("at currentChat");
        this.currentMessageList.push({
          id: this.currentMessageList + 1,
          UserId: userId,
          type: 1, // messageItem
          avatar,
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
    // ERROR: 對方收到訊息的時候沒有正確建立 receivedMessage 或新增 message
    "new private chat message": async function (response) {
      // get new chat
      console.log("create new room!");
      const roomId = response[1];
      // response[0]:
      const {
        avatar,
        createdAt: lastTime,
        text: lastMessage,
        userId,
      } = response[0];

      // fetch userInfo
      try {
        const { data } = await usersAPI.getUser(userId);
        const { name, account } = data;

        // ///////////
        // create new room to receivedMessageList

        this.receivedMessageList.push({
          account,
          avatar,
          userId,
          lastMessage,
          lastTime,
          roomId,
          name,
        });

        this.currentChat.message.push(response);
      } catch (error) {
        console.log("new private chat message: " + error);
      }
    },
  },
  methods: {
    async fetchReceivedMessageList() {
      try {
        const { data } = await socketsAPI.getRoomsByUser();

        // 把 userId 一樣的訊息裝成一包放進 receivedMessageList
        this.receivedMessageList = data.map((each) => {
          const {
            userId,
            name,
            account,
            avatar,
            roomId,
            message,
            createdAt,
          } = each;
          return {
            userId,
            name,
            account,
            avatar,
            roomId,
            lastTime: createdAt,
            lastMessage: message,
          };
        });
      } catch (error) {
        console.log("fetchChatData");
        console.log(error);
      }
    },

    // click old chat, fetch chat data, join room
    async passChatData(user) {
      console.log("passChatData");
      // user => account, avatar, lastMessage, lastTime, name, roomId, userId
      const { roomId } = user;
      this.currentChat = user;

      try {
        const { data } = await socketsAPI.getRoom(roomId);
        const { messages } = data;
        this.currentMessageList = messages.map((msg) => {
          return {
            ...msg,
            type: 1,
          };
        });
        console.log("messageList");
        console.log(this.currentMessageList);

        // join room
        this.$socket.emit("leave", this.currentUser.id, this.currentRoomId);
        this.joinPrivateRoom(roomId);
        this.currentRoomId = roomId;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error,
        });
      }
    },

    // Step1: select new chat
    afterUserSelected(user) {
      console.log("Select userId: " + user.id);
      this.currentMessageList = [];
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

        this.$socket.emit("leave", this.currentUser.id, this.currentRoomId);
        this.joinPrivateRoom(roomId);
        this.currentRoomId = roomId;
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

        this.allUserList = data;

        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
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

.noReceivedMessageList {
  margin-top: 100px;
  text-align: center;
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