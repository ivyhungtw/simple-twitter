<template>
  <div class="container">
    <div class="coverImage">
      <img
        :src="userData.cover | emptyImageFilter"
        class="card-img-top"
        alt=""
      />
    </div>
    <div class="avatar">
      <img
        :src="userData.avatar | emptyImageFilter"
        class="card-img-top"
        alt=""
      />
    </div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ userData.name }}</h5>
        <p class="card-account">@{{ userData.account }}</p>
        <p class="card-content">
          {{
            userData.introduction
              ? userData.introduction
              : "Placeholder: It's empty here, write something down!"
          }}
        </p>
        <div class="follow-condition">
          <div class="following-count">
            <router-link to="/userprofile/following"
              ><span>{{ userData.followingCount }} 個</span>跟隨中</router-link
            >
          </div>
          <div class="follows-count">
            <router-link to="/userprofile/followers"
              ><span>{{ userData.followerCount }} 位</span>跟隨者</router-link
            >
          </div>
        </div>
      </div>
      <button
        v-if="currentUser.id === userData.id"
        @click="editUserModal(userData)"
        class="btn btn-edit-user"
        data-toggle="modal"
        data-target="#edit-user-modal"
      >
        編輯個人資料
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { emptyImageFilter } from "../utils/mixins";
export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style scoped>
.container {
  padding: 0;
  position: relative;
}

.coverImage {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.avatar {
  position: absolute;
  width: 140px;
  height: 140px;
  top: 200px;
  left: 84px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: #000;
  z-index: 999;
  overflow: hidden;
  object-fit: cover;
}

.avatar:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 4px solid #ffffff;
}

.card {
  margin-top: 70px;
  position: relative;
  padding: 0 15px 20px;
  border: none;
}

.card-title {
  font-size: 19px;
  font-weight: 900;
}

.card-account {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.btn-edit-user {
  position: absolute;
  top: -60px;
  z-index: 999;
  right: 15px;
  height: 40px;
  width: 122px;
  color: #ff6600;
  border-color: #ff6600;
  border-radius: 100px;
}

.btn-edit-user:hover {
  color: #fff;
  background-color: #ff6600;
}

.card h5,
.card p {
  margin: 0;
}

div.card-body {
  padding: 0;
}

.card-account {
  padding-bottom: 10px;
}

.follow-condition {
  padding-top: 10px;
  display: flex;
}

.follow-condition span {
  font-weight: 700;
  color: #222;
}

.follow-condition a {
  color: #657786;
  font-weight: 700;
}

.follow-condition a:hover {
  text-decoration: none;
}

.follow-condition > div {
  display: block;
  height: 20px;
  font-weight: 500;
  font-size: 14px;
}

.following-count {
  margin-right: 20px;
}
</style>