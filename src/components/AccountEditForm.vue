<template>
  <form @submit.prevent.stop="handleSubmit($event)">
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

    <template v-if="isSignUp">
      <div class="row mt-4">
        <button class="btn submit" type="submit" :disabled="isProcessing">
          {{ isProcessing ? "註冊中.." : "註冊" }}
        </button>
      </div>
      <div class="row">
        <button class="btn cancel">取消</button>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <button class="btn update">儲存</button>
      </div>
    </template>
  </form>
</template>

<script>
import { Toast } from "../utils/helpers";

export default {
  name: "AccountEditForm",
  props: {
    isSignUp: {
      type: Boolean,
      default: true,
    },
    currentUser: {
      type: Object,
      default: () => ({
        account: "",
        name: "",
        email: "",
        password: "",
      }),
    },
  },
  created() {
    this.fetchCurrentUser(this.currentUser);
  },
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
    fetchCurrentUser(newVal) {
      console.log("newVal");
      this.form = {
        ...this.form,
        ...newVal,
      };
    },
    async handleSubmit(e) {
      const formDataCheckResult = this.formDataCheck();
      if (!formDataCheckResult) {
        return;
      }
      try {
        this.isProcessing = true;
        const formData = new FormData(e.target);
        // call api to post formData
        // if isSignup: post
        // else: put

        for (let [key, val] of formData) {
          console.log(key + ": " + val);
        }

        Toast.fire({
          icon: "success",
          title: "註冊成功！",
        });
        // 轉址到 /signin
        this.$router.push("/signin");
      } catch (error) {
        this.isProcessing = false;
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
  watch: {
    currentUser(newVal) {
      this.fetchCurrentUser(newVal);
    },
  },
  computed: {
    // ...mapState('currentUser')
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 15px;
  width: 642px;
}
.row {
  width: 642px;
  margin: 10px 0;
}
.row label {
  padding-left: 11px;
  color: #657786;
  font-weight: 700;
  display: block;
  width: 100%;
}
.row input {
  padding-left: 11px;
  font-weight: 500;
  font-size: 19px;
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
button.submit,
button.update {
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
}
button.cancel {
  color: #0099ff;
  text-decoration: underline;
  font-size: 18px;
  font-weight: 700;
}
.row:last-child {
  position: relative;
  height: 50px;
}
button.update {
  position: absolute;
  right: 0;
  width: 122px;
  font-size: 18px;
}
</style>
