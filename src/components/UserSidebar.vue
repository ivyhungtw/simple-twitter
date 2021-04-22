<template>
  <div class="userSidebar">
    <div class="logo">
      <router-link to="/main">
        <img src="../assets/logo.png" alt="" />
      </router-link>
    </div>
    <div class="buttonList">
      <div class="navItem index">
        <div class="icon">
          <img v-if="main" src="../assets/atHome.svg" alt="" />
          <img v-else src="../assets/home.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/main">
            <p :class="{ active: main }" id="routerMain">首頁</p>
          </router-link>
        </button>
      </div>
      <div class="navItem userProfile">
        <div class="icon">
          <img v-if="profile" src="../assets/atProfile.svg" alt="" />
          <img v-else src="../assets/profile.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/userprofile">
            <p :class="{ active: profile }" id="routerProfile">個人資料</p>
          </router-link>
        </button>
      </div>
      <div class="navItem setting">
        <div class="icon">
          <img v-if="accountEdit" src="../assets/atSetting.svg" alt="" />
          <img v-else src="../assets/setting.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/accountEdit">
            <p :class="{ active: accountEdit }" id="routerSetting">設定</p>
          </router-link>
        </button>
      </div>
      <div class="navItem newTweet">
        <button class="btn" data-toggle="modal" data-target="#tweetModal">
          <p>推文</p>
        </button>
      </div>
      <div class="navItem logout">
        <div class="icon">
          <img src="../assets/logout.svg" alt="" />
        </div>
        <button class="btn" @click.stop.prevent="clearAutherization">
          <p>登出</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSidebar",
  created() {
    const location = this.$route.path.split("/")[1];
    this.setCurrentLocation(location);
  },
  data() {
    return {
      main: false,
      profile: false,
      accountEdit: false,
    };
  },
  methods: {
    clearAutherization() {
      // 刪除 token => 登出
      console.log("clearAutherization");
    },
    setCurrentLocation(location) {
      console.log("location: " + location);
      if (location === "main" || location === "replydetail") {
        this.main = true; // at main
        this.profile = false;
        this.accountEdit = false;
      } else if (location === "userprofile") {
        this.main = false;
        this.profile = true; // at user-profile
        this.accountEdit = false;
      } else {
        this.main = false;
        this.profile = false;
        this.accountEdit = true; // at accountEdit
      }
    },
  },
};
</script>

<style scoped>
.userSidebar {
  margin-left: 103px;
  width: 235px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #e6ecf0;
}

.logo {
  margin-bottom: 24px;
}

.logo img {
  width: 50px;
  height: 50px;
}

.buttonList {
  flex: 1;
  position: relative;
}

.buttonList .navItem {
  height: 60px;
  display: flex;
  align-items: center;
}

.navItem .btn .active p {
  color: #ff6600;
}

/* .navItem .btn .active {
  border: 1px solid #000;
} */

.icon {
  height: 26px;
}

.btn a {
  text-decoration: none;
}

.btn p {
  height: 26px;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #1c1c1c;
}

.newTweet p {
  font-weight: 500;
}

.icon img {
  margin: 17px 0;
  width: 16px;
  height: 20px;
  margin: 0 25px 0 10px;
}

.newTweet button {
  width: 210px;
  height: 45px;
  border-radius: 100px;
  background-color: #ff6600;
}
.newTweet button p {
  color: #fff;
}

.logout {
  position: absolute;
  bottom: 0;
}
</style>
