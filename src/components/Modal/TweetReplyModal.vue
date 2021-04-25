<template>
  <div
    class="modal fade"
    :id="`tweetReplyModal-${initTweet.id}`"
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
            @click="clearReplyContent"
          >
            <span aria-hidden="true"
              ><img src="../../assets/close.svg" alt=""
            /></span>
          </button>
        </div>

        <div class="modal-body">
          <!-- tweet -->
          <div class="container replyTarget">
            <div class="avatar">
              <img :src="initTweet.user.avatar | emptyImageFilter" alt="" />
            </div>
            <div class="tweetInfo">
              <div class="userInfo">
                <p class="userName">{{ initTweet.user.name }}</p>
                <p class="userAccount">@{{ initTweet.user.account }}</p>
                <span class="mx-1">&#xb7;</span>
                <p class="tweetUpdateAt">
                  {{ initTweet.updatedAt | fromNow }}
                </p>
              </div>
              <div class="tweetContent">
                <p>{{ initTweet.description }}</p>
              </div>
              <div class="panel">
                <p>
                  回覆給
                  <span> @{{ initTweet.user.name }} </span>
                </p>
              </div>
            </div>
          </div>

          <!-- comment -->
          <div class="container myReply">
            <div class="avatar">
              <img :src="currentUser.avatar | emptyImageFilter" alt="" />
            </div>
            <div class="tweetInf">
              <div class="input">
                <textarea
                  name=""
                  id=""
                  cols="55"
                  rows="5"
                  autofocus
                  maxlength="140"
                  required
                  v-model="replyContent"
                  placeholder="推你的回覆"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <div class="tweetButton">
            <button
              type="button"
              class="btn"
              @click="createReply(initTweet.id)"
              :disabled="isProcessing"
            >
              {{ isProcessing ? "回覆中.." : "回覆" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "../../utils/helpers";
import { emptyImageFilter } from "../../utils/mixins";
import { fromNowFilter } from "../../utils/mixins";
import { mapState } from "vuex";
import tweetsAPI from "../../apis/tweets";
export default {
  name: "TweetReplyModal",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      initTweet: {},
      replyContent: "",
      isProcessing: false,
    };
  },
  created() {
    this.fetchTweet(this.tweet);
  },
  methods: {
    fetchTweet(tweet) {
      this.initTweet = tweet;
    },
    clearReplyContent() {
      this.replyContent = "";
    },
    async createReply(tweetId) {
      // console.log("tweetId: " + tweetId);
      const result = this.replyContentCheck(this.replyContent);
      if (!result) {
        return;
      }
      try {
        this.isProcessing = true;
        const payload = { comment: this.replyContent };
        // call api to create tweet reply
        const { data } = await tweetsAPI.createReply(tweetId, payload);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // inform user
        Toast.fire({
          icon: "success",
          title: "回覆成功！",
        });
        // close modal after successfully replied
        this.closeModal(tweetId);
        // inform TweetItem to change number of replyCount
        this.$emit("afterCreateReply", tweetId);
        // clear replyContent
        this.clearReplyContent();
        // enable button
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法回復推文，請稍後再試！",
        });
      }
    },
    replyContentCheck(replyContent) {
      if (!replyContent) {
        Toast.fire({
          icon: "error",
          title: "尚未輸入回覆內容！",
        });
        return false;
      }
      if (replyContent.length > 140) {
        Toast.fire({
          icon: "error",
          title: "回覆字數不得超過 140 個字！",
        });
        return false;
      }
      return true;
    },
    closeModal(tweetId) {
      // close modal after successfully replied with pure js
      const modal = document.querySelector(`#tweetReplyModal-${tweetId}`);
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      modal.setAttribute("style", "display: none");
      // get modal backdrop
      const modalBackdrops = document.getElementsByClassName("modal-backdrop");
      // remove opened modal backdrop
      document.body.removeChild(modalBackdrops[0]);
    },
  },
  watch: {
    tweetId(newVal) {
      this.fetchTweet(newVal);
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 10px 15px;
  display: flex;
}
/* replyTarget */
.replyTarget {
  position: relative;
}
.replyTarget::after {
  position: absolute;
  bottom: 0;
  left: 40px;
  content: "";
  display: block;
  width: 2px;
  transform: translateX(-50%);
  height: calc(100% - 70px);
  background-color: #ccd6dd;
}
/* modal-body */
.modal-body {
  padding: 0;
}
.avatar {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.tweetInfo {
  width: calc(100% - 60px);
}
.userInfo {
  display: flex;
  height: 22px;
}
.userInfo p {
  font-size: 15px;
  height: 100%;
  margin: 0;
}
.userInfo .userName {
  margin-right: 10px;
  font-weight: 700;
}
.userInfo .userAccount,
.userInfo .tweetUpdateAt,
.userInfo span {
  font-weight: 500;
  color: #657786;
  line-height: 22px;
}
.tweetContent {
  width: 100%;
  margin-bottom: 15px;
}
.tweetContent a {
  text-decoration: none;
}
.tweetContent p {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
  word-wrap: break-word;
}
/* panel */
.panel {
  font-size: 13px;
  font-weight: normal;
}
.panel p {
  margin: 0;
  color: #657786;
}
.panel span {
  color: #ff6600;
}
/* myReply */
.myReply .input {
  width: 100%;
}
.myReply textarea,
.myReply input {
  border: none;
  width: 100%;
  resize: none;
}
/* footer */
.modal-footer {
  border-top: none;
}
.tweetButton .btn {
  min-width: 64px;
  height: 40px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}
</style>