<template>
  <div class="container">
    <div class="avatar">
      <img :src="follower.avatar" alt="" />
    </div>
    <div class="follower-info">
      <div class="isfollowed-info">
        <div class="follower-title">
          <div class="name">{{ follower.name }}</div>
          <div class="account">@{{ follower.account }}</div>
        </div>

        <div class="toggleFollow">
          <button
            v-if="follower.isFollowing"
            class="btn isFollowing"
            @click.prevent.stop="deleteFollowing"
          >
            正在跟隨
          </button>
          <button v-else class="btn" @click.prevent.stop="addFollowing">
            跟隨
          </button>
        </div>
      </div>
      <p>{{ follower.tweetContent }}</p>
    </div>
  </div>
</template>

<script>
// import { Toast } from "../utils/helpers";

export default {
  name: "UserFollowersList",
  props: {
    Follower: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      follower: this.Follower,
    };
  },
  methods: {
    addFollowing() {
      this.follower = {
        ...this.follower, // 保留餐廳內原有資料
        isFollowing: true,
      };
    },
    deleteFollowing() {
      this.follower = {
        ...this.follower, // 保留餐廳內原有資料
        isFollowing: false,
      };
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  height: 100px;
  padding: 0 15px;
  border-bottom: 1px solid #e6ecf0;
  margin: 0;
}

.follower-info {
  width: 100%;
  margin: 0;
}

.isfollowed-info {
  display: flex;
  justify-content: space-between;
}
.name {
  font-weight: 900;
}
.avatar {
  min-width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-top: 15px;
}
.avatar img {
  min-width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
}

.account {
  color: gray;
}

button {
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
  margin-top: 7px;
  font-size: 15px;
  font-weight: 700;
}

.toggleFollow .isFollowing {
  width: 92px;
  background-color: #ff6600;
  color: #fff;
}
.follower-info p {
  margin: 0;
}
</style>
