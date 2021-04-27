<template>
  <div class="container">
    <div class="card">
      <div class="background-img">
        <img :src="user.cover | emptyImageFilter" class="card-img-top" alt="" />
      </div>
      <div class="avatar">
        <img
          :src="user.avatar | emptyImageFilter"
          class="card-img-top"
          alt=""
        />
      </div>
      <!-- Button trigger modal -->
      <button
        @click="editUserModal(user)"
        class="btn btn-primary btn-edit-user"
        data-toggle="modal"
        data-target="#edit-user-modal"
      >
        編輯個人資料
      </button>

      <!-- Modal -->
      <!-- <UserEditModal> </UserEditModal> -->

      <!-- card-body -->
      <div class="card-body">
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-account">@{{ user.account }}</p>
        <p class="card-content">
          {{
            user.introduction
              ? user.introduction
              : "Placeholder: It's empty here, write something down!"
          }}
        </p>
        <div class="follow-condition row">
          <div class="following-count">
            <router-link to="/userprofile/following"
              ><span>{{ user.followingCount }} 個</span>跟隨中</router-link
            >
          </div>
          <div class="follows-count">
            <router-link to="/userprofile/followers"
              ><span>{{ user.followerCount }} 位</span>跟隨者</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
// import UserEditModal from "../components/Modal/UserEditModal";
import { mapState } from "vuex";

export default {
  name: "UserProfileCard",
  mixins: [emptyImageFilter],
  // components: { UserEditModal },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.User,
    };
  },
  created() {
    this.user = this.userData;
  },
  methods: {
    editUserModal(user) {
      this.user = user;
    },
    handleFileChange(e) {
      const { files } = e.target;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.cover = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
  watch: {
    userData: {
      deep: true,
      handler: function (newVal) {
        this.user = newVal;
      },
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
  height: 42px;
  margin: 0;
  padding: 0;
}

.container .card {
  width: 100%;
  height: 375px;
  margin-bottom: 10px;
  padding: 0;
  background-color: white;
  border: none;
}

.background-img {
  width: 100%;
}

.background-img img {
  width: 100%;
  height: 200px;
  background-size: cover;
  object-fit: cover;
}

.avatar img {
  position: absolute;
  left: 14px;
  top: 124px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
  border: 5px solid white;
}

.btn-edit-user {
  position: relative;
  top: 10px;
  left: 460px;
  width: 122px;
  height: 40px;
  font-weight: 900;
  color: #ff6600;
  background-color: white;
  border-radius: 100px;
  border: 1px solid #ff6600;
}

.card-body {
  margin-top: 10px;
}

.card-body h5,
.card-body p {
  margin-bottom: 0;
}

.card-body h5,
.follow-condition span {
  font-weight: 900;
}

.card-body p {
  color: #657786;
}
.card-body .card-content {
  color: black;
  margin: 5px 0;
}

.row {
  margin-left: 0;
}

.following-count a {
  color: gray;
  border: 1px solid #000;
}

.follow-condition a:hover {
  text-decoration: none;
}

.following-count {
  margin-right: 15px;
}
</style>