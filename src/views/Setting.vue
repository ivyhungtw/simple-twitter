<template>
  <div>
    <!-- UserSidebar -->
    <UserSidebar></UserSidebar>
    <!-- SettingForm -->
    <SettingForm></SettingForm>
  </div>
</template>

<script>
import UserSidebar from "../components/UserSidebar";
import SettingForm from "../components/SettingForm";

export default {
  name: "Setting",
  components: {
    UserSidebar,
    SettingForm,
  },
};
</script>

<style scoped>
</style>