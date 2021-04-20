<template>
  <div class="container">
    <h1>UserProfile</h1>

    <!-- // UserSidebar -->

    <!-- if user.id === currentUser.id
 UserProfileCard => modal id = "userProfileCardEditModal" -->
    <!-- // userProfileNavtabs -->

    <UserProfileNavtabs />

    <!-- // UserProfileTweetsList -->
    <!-- // RecommendedFollowers -->
  </div>
</template>

<script>
import UserProfileNavtabs from "./../components/UserProfileNavtabs";
export default {
  name: "UserProfile",
  components: {
    UserProfileNavtabs,
  },
};
</script>


<style scoped>
</style>