<template>
  <div class="container">
    <form @submit.prevent.stop="handleSignIn($event)">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="title">
        <h1>登入 Alphitter</h1>
      </div>

      <div class="row">
        <label for="account">帳號</label>
        <input
          id="account"
          name="account"
          type="text"
          v-model="form.account"
          required
        />
      </div>

      <div class="row">
        <label for="password">密碼</label>
        <input
          id="password"
          name="password"
          type="password"
          v-model="form.password"
          required
        />
      </div>

      <div class="row mt-4">
        <button class="btn signin" type="submit">登入</button>
      </div>
      <div class="row link-btns-container">
        <div class="link-btns">
          <router-link class="routerLink" to="/signup"
            >註冊 Alphitter</router-link
          >
          <span> &#xb7; </span>
          <router-link class="routerLink" to="">後台登入</router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
export default {
  name: "SignIn",
  data() {
    return {
      form: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    async handleSignIn(e) {
      const formDataCheckResult = this.formDataCheck();
      if (!formDataCheckResult) {
        return;
      }
      try {
        const formData = new FormData(e.target);
        for (let [key, val] of formData) {
          console.log(key + ": " + val);
        }
        // call api to sign in
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法登入，請稍後再試！",
        });
      }
    },
    formDataCheck() {
      let result = false;
      if (!this.account) {
        Toast.fire({
          icon: "info",
          title: "尚未填寫帳號！",
        });
        return false;
      }
      if (!this.password) {
        Toast.fire({
          icon: "info",
          title: "尚未填寫密碼！",
        });
        return false;
      }
      result = true;
      return result;
    },
  },
};
</script>

<style scoped>
.logo {
  margin: 60px 0 30px 0;
}

.logo img {
  width: 50px;
  height: 50px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  width: 540px;
  margin: 10px;
}

.row label {
  color: #657786;
  font-weight: 700;
}

.title h1 {
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 23px;
}

input {
  background-color: #f5f8fa;
  width: 100%;
  border: none;
  border-bottom: 2px solid #657786;
}

.btn {
  width: 100%;
  border-radius: 50px;
  height: 50px;
}

button.signin {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}

.link-btns-container {
  position: relative;
  height: 26px;
}

.link-btns {
  position: absolute;
  right: 0;
}

.routerLink {
  font-weight: 700;
  color: #0099ff;
  text-decoration: underline;
}
.link-btns-container span {
  color: #0099ff;
  font-weight: 700;
}
</style>