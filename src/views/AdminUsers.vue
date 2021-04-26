<template>
  <div id="AdminUsers">
    <!-- AdminSidebar.vue -->
    <AdminSidebar />
    <!-- AdminUsersCard.vue -->
    <div class="AdminUsersPanel">
      <div class="title">
        <h1>使用者列表</h1>
      </div>
      <div class="admin-users-card">
        <AdminUsersCard v-for="user in users" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "./../components/AdminSidebar";
import AdminUsersCard from "./../components/AdminUsersCard";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "AdminUsers",
  components: {
    AdminSidebar,
    AdminUsersCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTotalUser();
        // const { tweets } = response.data;
        this.users = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>


<style scoped>
#AdminUsers {
  display: flex;
  min-height: 100vh;
}

.AdminUsersPanel {
  flex: 1;
}

.admin-users-card {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}

.title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
}

.title h1 {
  font-size: 19px;
  font-weight: 700;
  padding: 13px 0 14px 23px;
  margin: 0;
}
</style>