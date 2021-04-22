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
        <button>跟隨</button>
      </div>
      <p>{{ follower.tweetContent }}</p>
    </div>
  </div>
</template>

<script>
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
};
</script>

<style scoped>
.container {
  display: flex;
  height: auto;
  min-height: 100px;
  padding: 15px 15px 25px;
  border-bottom: 1px solid #e6ecf0;
  margin: 5px;
}

.follower-info {
  width: 100%;
  /* border: 1px solid green; */
}

.isfollowed-info {
  display: flex;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.name {
  font-weight: 900;
}
.avatar {
  min-width: 50px;
  height: 50px;
  margin-right: 10px;
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
  background-color: white;
  width: 62px;
  height: 30px;
  font-size: 15px;
  font-weight: 700;
  margin-top: 7px;
  padding-bottom: 2.8px;
}
</style>
