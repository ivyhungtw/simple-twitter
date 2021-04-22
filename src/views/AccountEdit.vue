<template>
  <div id="AccountEdit">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- AccountEditForm -->
    <div class="accountEditPanel">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>

      <AccountEditForm
        :currentUser="currentUser"
        :isSignUp="isSignUp"
      ></AccountEditForm>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import AccountEditForm from "../components/AccountEditForm";

const dummyUser = {
  account: "dummy",
  name: "dummyUser",
  email: "dummyUser@dummy",
  //password: "", // 需要嗎？驗證是否和之前密碼相同？
};

export default {
  name: "AccountEdit",
  components: {
    UserSidebar,
    AccountEditForm,
  },
  created() {
    this.fetchCurrentUser();
  },
  data() {
    return {
      isSignUp: false,
      currentUser: {},
    };
  },
  methods: {
    fetchCurrentUser() {
      // 之後用 store.state 來做
      this.currentUser = dummyUser;
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
#AccountEdit {
  display: flex;
}

.accountEditPanel {
  flex: 1;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  padding: 10px 15px;
  display: flex;
  align-items: center;
}

.title h1 {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
}
</style>