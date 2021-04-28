<template>
  <div class="hello">UserProfileLikeList</div>
</template>

<script>
export default {
  name: "UserProfileLikeList",
};
</script>

<style scoped>
.container {
  padding: 0;
  width: 100%;
}
.tweetList {
  /* overflow-y: scroll; */
  height: 100%;
  width: 100%;
}
/* for Chrome, Safari and Opera */
.tweetList::-webkit-scrollbar {
  display: none;
}
.tweetList {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.loading,
.noData {
  text-align: center;
  padding: 10px;
  color: #657786;
}
</style>