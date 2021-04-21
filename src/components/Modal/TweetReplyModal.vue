<template>
  <div
    class="modal fade"
    :id="`tweetReplyModal-${tweet.tweetId}`"
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
              ><img
                @click="closeTweetReplyModal"
                src="../../assets/close.svg"
                alt=""
            /></span>
          </button>
        </div>

        <div class="modal-body">
          <!-- tweet -->
          <div class="container replyTarget">
            <div class="avatar">
              <img :src="tweet.image | emptyImageFilter" alt="" />
            </div>
            <div class="tweetInfo">
              <div class="userInfo">
                <p class="userName mr-1">{{ tweet.localTweet }}</p>
                <p class="userAccount">{{ tweet.account }}</p>
                <span class="mx-1">&#xb7;</span>
                <p class="tweetUpdateAt">{{ tweet.updatedAt | fromNow }}</p>
              </div>
              <div class="tweetContent">
                <p>{{ tweet.tweetContent }}</p>
              </div>
              <div class="panel">
                <p>
                  回覆給
                  <span>
                    {{ tweet.name }}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <!-- comment -->
          <div class="container myReply">
            <div class="avatar">
              <img :src="'' | emptyImageFilter" alt="" />
            </div>
            <div class="tweetInf">
              <div class="input">
                <textarea
                  name=""
                  id=""
                  cols="30"
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
              :data-dismiss="{ modal: !modalOpen }"
              aria-label="Close"
              aria-hidden="true"
              class="btn"
              @click="createReply"
            >
              回復
              <!--               
              data-dismiss="modal"
                aria-label="Close"
                aria-hidden="true"
                 -->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../../utils/mixins";
import { fromNowFilter } from "../../utils/mixins";
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
      replyContent: "",
      modalOpen: true,
    };
  },
  methods: {
    closeTweetReplyModal() {
      console.log("closeTweetReplyModal");
      this.$emit("afterCloseTweetReplyModal");
    },
    createReply() {
      console.log("createReply");
      this.modalOpen = false;
      console.log(this.modalOpen);
    },
  },
  watch: {
    // tweet() {
    // },
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
  border: 1px solid #000;
  position: relative;
}

.replyTarget::after {
  position: absolute;
  content: "";
  display: block;
  width: 2px;
  height: 80px;
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
  flex: 1;
}

.userInfo {
  display: flex;
  height: 22px;
}

.userInfo p {
  font-size: 15px;
  height: 100%;
}

.userInfo .userName {
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
  width: 64px;
  height: 40px;
  background-color: #ff6600;
  color: #fff;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}
</style>