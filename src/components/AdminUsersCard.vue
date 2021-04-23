<template>
  <div class="container">
    <div class="card">
      <div class="background-img">
        <img :src="user.cover" class="card-img-top" alt="" />
      </div>
      <div class="avatar">
        <img :src="user.avatar" class="card-img-top" alt="" />
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">@{{ user.account }}</p>
        <div class="click-on-condition row">
          <div class="reply-count">
            <i class="far fa-comment"></i> {{ user.tweetCount }}
          </div>
          <div class="like-count">
            <i class="far fa-heart"></i> {{ user.likeCount }}
          </div>
        </div>
        <div class="follow-condition row">
          <div class="following-count">
            <a href=""
              ><span>{{ user.followingCount }}個</span>跟隨中</a
            >
          </div>
          <div class="follows-count">
            <a href=""
              ><span>{{ user.followerCount }}位</span>跟隨者</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminUsersCard",
  props: {
    User: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.User,
    };
  },
};
</script>

<style scoped>
.container {
  width: 250px;
  margin: 5px 0;
}
.container .card {
  width: 16rem;
  border-radius: 10px;
  background-color: #f6f7f8;
}

.background-img img {
  height: 140px;
  border-radius: 10px 10px 0 0;
}

.avatar img {
  position: absolute;
  left: calc(50% - 50px);
  top: 70px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  border: 5px solid white;
}

.card-body {
  margin-top: 20px;
}

.card-body h5,
.card-body p {
  text-align: center;
  margin-bottom: 0;
}

.card-body h5 {
  font-weight: 900;
}

.card-body p {
  color: #657786;
}

.row {
  display: flex;
  justify-content: center;
  margin: 10px;
}

.reply-count {
  margin-right: 20px;
}

.follow-condition a {
  color: black;
  font-size: 3px;
}

.following-count {
  margin-right: 8px;
}

.follow-condition span {
  font-weight: 900;
}
</style>