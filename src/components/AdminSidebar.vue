<template>
  <div class="AdminSidebar">
    <div class="logo">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="buttonList">
      <div class="navItem index">
        <div class="icon"><img src="../assets/home.svg" alt="" /></div>
        <button class="btn">
          <router-link to="/admin/tweets" class="nav-link">
            <p>推文清單</p>
          </router-link>
        </button>
      </div>
      <div class="navItem userList">
        <div class="icon">
          <img src="../assets/profile.svg" alt="" />
        </div>
        <button class="btn">
          <router-link to="/admin/users" class="nav-link">
            <p>使用者列表</p>
          </router-link>
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
  name: "AdminSidebar",
  methods: {
    clearAutherization() {
      // 刪除 token => 登出
      console.log("clearAutherization");
    },
  },
};
</script>

<style scoped>
.AdminSidebar {
  margin-left: 103px;
  width: 235px;
  height: auto;
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

.icon {
  height: 26px;
}

p {
  height: 26px;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  color: #1c1c1c;
}

.icon img {
  margin: 17px 0;
  width: 16px;
  height: 20px;
  margin: 0 25px 0 10px;
}

.logout {
  position: absolute;
  bottom: 0;
}
</style>

