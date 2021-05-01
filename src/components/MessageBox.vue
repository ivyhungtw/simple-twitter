<template>
  <div class="messageBox">
    <div class="title">
      <h1>公開聊天室</h1>
    </div>
    <div class="container">
      <ul class="messageList" ref="container">
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
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";
// import $ from "jquery";

export default {
  name: "MessageBox",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    messageList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      message: "",
    };
  },
  methods: {
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
      // const height = this.$refs.height;
      const container = this.$refs.container;
      // // container.scrollTop = height.scrollHeight;
      // console.log("height: " + 72 * this.messageList.length);
      container.scrollTop = 72 * this.messageList.length;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    messageList: {
      deep: true,
      handler: function () {
        this.scroll();
      },
    },
  },
};
</script>

<style scoped>
.messageBox {
  flex: 2;
}

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

/* message box */

.messageBox .container {
  padding: 0;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 115px);
  overflow-y: auto;
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
  /* min-height: 100%; */
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