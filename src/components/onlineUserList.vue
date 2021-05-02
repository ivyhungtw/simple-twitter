<template>
  <div class="container">
    <div class="avatar">
      <img src="https://via.placeholder.com/1000x1000/111/fff?text=No+Image" alt="">
    </div>
    <div class="user-info">
      Apple @apple
    </div>
  </div>
</template>

<script>


export default {
  name: "onlineUserList",
  props: {
  },
  data() {
    return {
      followers: [],
      isProcessing: false,
    };
  },
  watch: {},
  created() {},
  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
}
.avatar {
  min-width: 50px;
  width: 50px;
  height: 50px;
  margin: 10px;
 
}
.avatar img {
  min-width: 50px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  object-fit: cover;
}
.user-info {
  text-align: center;
}
</style>
