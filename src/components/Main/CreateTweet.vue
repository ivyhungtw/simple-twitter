<template>
  <!-- CreateTweet.vue => modal id="tweetModal" -->
  <div class="createTweet">
    <div class="container">
      <div class="avatar">
        <!-- <img src="" alt="" /> -->
        <div class="imagePlaceholder"></div>
      </div>
      <div class="textInput">
        <input type="text" disabled placeholder="有什麼新鮮事？" />
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
            >
              <span aria-hidden="true"
                ><img src="../../assets/close.svg" alt=""
              /></span>
            </button>
          </div>

          <div class="modal-body">
            <div class="container">
              <div class="avatar">
                <!-- <img src="" alt="" /> -->
                <div class="imagePlaceholder"></div>
              </div>
              <div class="textInput">
                <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
                <input
                  type="text"
                  placeholder="有什麼新鮮事？"
                  v-model="tweetContent"
                />
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
import { Toast } from "../../utils/helpers";
export default {
  name: "CreateTweet",
  data() {
    return {
      tweetContent: "",
      isProcessing: false,
    };
  },
  methods: {
    async createNewTweet() {
      try {
        this.isProcessing = true;

        // call api to create new tweet
        console.log("call api to create New Tweet");
        console.log("tweet: " + this.tweetContent);
        // close modal

        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法推文，請稍後再試！",
        });
      }
    },
  },
};
</script>

<style scoped>
.createTweet {
  border-bottom: 10px solid #e6ecf0;
  flex-direction: column;
  padding: 10px 15px;
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

.textInput {
  flex: 1;
  margin-left: 10px;
}

.textInput input {
  border: none;
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