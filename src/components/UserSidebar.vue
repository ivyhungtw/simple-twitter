<template>
  <div class="userSidebar">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="buttonList">
      <div class="navItem index">
        <div class="icon">
          <img src="../assets/home.png" alt="" />
        </div>
        <p>首頁</p>
      </div>
      <div class="navItem userProfile">
        <div class="icon">
          <img src="../assets/profile.png" alt="" />
        </div>
        <p>個人資料</p>
      </div>
      <div class="navItem setting">
        <div class="icon">
          <img src="../assets/setting.png" alt="" />
        </div>
        <p>設定</p>
      </div>
      <div class="navItem newTweet">
        <button class="btn">
          <p>推文</p>
        </button>
      </div>
      <div class="navItem logout">
        <div class="icon">
          <img src="../assets/logout.png" alt="" />
        </div>
        <p>登出</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserSidebar",
};
</script>

<style scoped>
.userSidebar {
  margin-left: 103px;
  width: 235px;
  height: 100vh;
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
}

.logo {
  margin-bottom: 43px;
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
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
}

.icon {
  height: 26px;
  /* border: 1px solid #000; */
}

p {
  height: 26px;
  /* border: 1px solid #000; */
  margin: 0;
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
