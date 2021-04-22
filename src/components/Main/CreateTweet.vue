<template>
  <!-- CreateTweet.vue => modal id="tweetModal" -->
  <div class="createTweet">
    <div class="container">
      <div class="avatar">
        <img :src="user.image | emptyImageFilter" alt="" />
      </div>
      <div class="textInput">
        <p data-toggle="modal" data-target="#tweetModal">有什麼新鮮事？</p>
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
    <CreateTweetModal v-on="$listeners" :user="user"></CreateTweetModal>
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

import CreateTweetModal from "../Modal/CreateTweetModal";
import { v4 as uuidv4 } from "uuid";
import { emptyImageFilter } from "../../utils/mixins";
import { Toast } from "../../utils/helpers";
export default {
  name: "CreateTweet",
  mixins: [emptyImageFilter],
  components: {
    CreateTweetModal,
  },
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
          isLiked: false,
          commentsCount: 0,
          comments: [],
          likeCount: 0,
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

.avatar img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3c3c3c;
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
</style>