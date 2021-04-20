<template>
  <div id="setting">
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- AccountEditForm -->
    <div class="accountEdit">
      <div class="title">
        <h1>帳戶設定</h1>
      </div>

      <AccountEditForm></AccountEditForm>
    </div>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import AccountEditForm from "../components/AccountEditForm";

export default {
  name: "Setting",
  components: {
    UserSidebar,
    AccountEditForm,
  },
};
</script>

<style scoped>
#setting {
  display: flex;
}
</style>