<template>
  <div class="container">
    <form @submit.prevent.stop="handleSubmit($event)">
      <div class="logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="title">
        <h1>建立你的帳號</h1>
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
        <label for="name">名稱</label>
        <input id="name" name="name" type="text" v-model="form.name" required />
      </div>

      <div class="row">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="form.email"
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

      <div class="row">
        <label for="passwordCheck">密碼確認</label>
        <input
          id="passwordCheck"
          name="passwordCheck"
          type="password"
          v-model="form.passwordCheck"
          required
        />
      </div>
      <div class="row">
        <button class="btn submit" type="submit">註冊</button>
      </div>
      <div class="row">
        <button class="btn cancel">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utils/helpers";
export default {
  name: "sign-up",
  data() {
    return {
      form: {
        name: "",
        account: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit(e) {
      const formDataCheck = this.formDataCheck();
      if (!formDataCheck) {
        return;
      }
      try {
        this.isProcessing = true;
        const formData = new FormData(e.target);
        // call api to post formData
        for (let [key, val] of formData) {
          console.log(key + ": " + val);
        }

        Toast.fire({
          icon: "success",
          title: "註冊成功！",
        });

        // 轉址到 /signin
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "發生錯誤，請稍後再試！",
        });
      }
    },
    formDataCheck() {
      let result = false;
      if (!this.form.account) {
        Toast.fire({
          icon: "info",
          title: "請填寫帳號！",
        });
        return result;
      }
      if (!this.form.name) {
        Toast.fire({
          icon: "info",
          title: "請填寫名稱！",
        });
        return result;
      }
      if (!this.form.email) {
        Toast.fire({
          icon: "info",
          title: "請填寫 Email！",
        });
        return result;
      }
      if (!this.form.password) {
        Toast.fire({
          icon: "info",
          title: "請填寫密碼！",
        });
        return result;
      }
      if (!this.form.passwordCheck) {
        Toast.fire({
          icon: "info",
          title: "請填寫密碼確認！",
        });
        return result;
      }
      if (this.form.password !== this.form.passwordCheck) {
        Toast.fire({
          icon: "error",
          title: "密碼不相符！",
        });
        return result;
      }
      result = true;
      return result;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin: 60px 0 30px 0;
}

.logo img {
  width: 50px;
  height: 50px;
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

label {
  display: block;
  width: 100%;
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

button.submit {
  background-color: #ff6600;
  color: #fff;
  /* border: 1px solid #000; */
}

button.cancel {
  color: #0099ff;
  text-decoration: underline;
}
</style>