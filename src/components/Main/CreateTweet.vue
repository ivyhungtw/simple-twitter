<template>
  <!-- CreateTweet.vue => modal id="tweetModal" -->
  <div class="createTweet">
    <div class="container">
      <div class="avatar">
        <img :src="user.image | emptyImageFilter" alt="" />
      </div>
      <div class="textInput">
        <p data-toggle="modal" data-target="#tweetModal">有什麼新鮮事？</p>
        <!-- <input
          type="text"
          placeholder="有什麼新鮮事？"
          data-toggle="modal"
          data-target="#tweetModal"
        /> -->
      </div>
    </div>
    <div class="tweetButton">
      <button
        type="button"
        class="btn"
        data-toggle="modal"
        data-target="#tweetModal"
      >
        推文
      </button>
    </div>
    <!-- modal -->
    <div
      class="modal fade"
      id="tweetModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="start btn"
              data-dismiss="modal"
              aria-label="Close"
              @click="tweetContent = ''"
            >
              <span aria-hidden="true"
                ><img src="../../assets/close.svg" alt=""
              /></span>
            </button>
          </div>

          <div class="modal-body">
            <div class="container">
              <div class="avatar">
                <img :src="user.image | emptyImageFilter" alt="" />
              </div>
              <div class="textInput">
                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
                <textarea
                  name=""
                  id=""
                  cols="65"
                  rows="5"
                  autofocus
                  maxlength="140"
                  required
                  v-model="tweetContent"
                  placeholder="有什麼新鮮事？"
                ></textarea>
                <!--  -->
                <!-- <input
                  type="text"
                  placeholder="有什麼新鮮事？"
                  v-model="tweetContent"
                /> -->
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <div class="tweetButton">
              <button
                type="button"
                class="btn"
                data-dismiss="modal"
                aria-label="Close"
                @click="createNewTweet"
                aria-hidden="true"
              >
                推文
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modal -->
  </div>
</template>

<script>
const currentUser = {
  name: "user1",
  account: "@user1",
  id: 1,
  image: "",
};

import { v4 as uuidv4 } from "uuid";
import { emptyImageFilter } from "../../utils/mixins";
import { Toast } from "../../utils/helpers";
export default {
  name: "CreateTweet",
  mixins: [emptyImageFilter],
  created() {
    this.fetchCurrentUser();
  },
  data() {
    return {
      user: {},
      tweetContent: "",
      isProcessing: false,
    };
  },
  methods: {
    fetchCurrentUser() {
      // async
      this.user = currentUser;
    },
    async createNewTweet() {
      const contentCheck = this.contentCheck(this.tweetContent);
      if (!contentCheck) {
        this.tweetContent = "";
        return;
      }
      try {
        this.isProcessing = true;

        // data
        const newTweet = {
          ...this.user,
          tweetContent: this.tweetContent,
          updatedAt: new Date(),
          tweetId: uuidv4(),
        };

        this.tweetContent = this.tweetContent.toString();

        // call api to create new tweet: 回傳 tweet id?
        this.tweetContent = "";

        // inform Main.vue
        this.$emit("afterCreateTweet", newTweet);

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法推文，請稍後再試！",
        });
      }
    },
    contentCheck(tweetContent) {
      // 內容檢查：不能空白
      console.log("tweetContent");
      console.log("length: " + tweetContent.length);
      if (!tweetContent) {
        Toast.fire({
          icon: "error",
          title: "尚未輸入推文內容！",
        });
        return false;
      }
      // 內容檢查：字數小於140
      if (tweetContent.length > 140) {
        Toast.fire({
          icon: "error",
          title: "推文字數不得超過 140 個字！",
        });
        return false;
      }
      return true;
    },
  },
  computed: {
    // ...mapState('currentUser')
  },
};
</script>

<style scoped>
.createTweet {
  border-bottom: 10px solid #e6ecf0;
  flex-direction: column;
  padding: 10px 15px;
  /* border: 1px solid #000; */
}

.container {
  display: flex;
  align-items: center;
  padding: 0;
}

.avatar img,
.imagePlaceholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3c3c3c;
}

/* modal */
.modal-content {
  height: 300px;
}

.modal-content .container {
  align-items: start;
}

.textInput {
  flex: 1;
  margin-left: 10px;
}

.textInput textarea,
.textInput input {
  border: none;
  resize: none;
  background-color: transparent;
}

.textInput p {
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
}

.textInput p:hover {
  cursor: pointer;
}

.textInput input::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
}

.tweetButton {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.tweetButton .btn {
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}

/* modal */
.modal-content {
  border-radius: 14px;
  width: 600px;
}

.modal-header {
  border-bottom: 1px solid #e6ecf0;
}

.modal-body {
  height: 245px;
}

.modal-body .textInput {
}

.modal-body input {
  width: 100%;
}

.modal-footer {
  border: none;
}

/* modal */
</style>