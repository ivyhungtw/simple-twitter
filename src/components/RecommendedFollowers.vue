<template>
  <div class="container">
    <div class="title">
      <h1>跟隨誰</h1>
    </div>
    <hr />
    <div class="users">
      <ul class="usersList">
        <li class="user" v-for="user of recommendedFollowers" :key="user.id">
          <div class="userContent">
            <div class="avatar"><img src="" alt="" /></div>
            <div class="info">
              <div class="name">
                <h2>{{ user.name }}</h2>
              </div>
              <div class="account">
                <h2>{{ user.account }}</h2>
              </div>
            </div>
            <div class="toggleFollow">
              <button class="btn" @click.prevent.stop="toggleFollow">
                跟隨
              </button>
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>

    <div class="showMore">
      <button class="btn">顯示更多</button>
    </div>
  </div>
</template>

<script>
const dummyUsers = [
  {
    name: "user1",
    id: 1,
    account: "@user1",
    image: "",
  },
  {
    name: "user2",
    id: 2,
    account: "@user2",
    image: "",
  },
  {
    name: "user3",
    id: 3,
    account: "@user3",
    image: "",
  },
  {
    name: "user4",
    id: 4,
    account: "@user4",
    image: "",
  },
  {
    name: "user5",
    id: 5,
    account: "@user5",
    image: "",
  },
  {
    name: "user6",
    id: 6,
    account: "@user6",
    image: "",
  },
];

import { Toast } from "../utils/helpers";
export default {
  name: "RecommendedFollowers",
  created() {
    this.fetchRecommendedFollowers();
  },
  data() {
    return {
      recommendedFollowers: [],
    };
  },
  methods: {
    async fetchRecommendedFollowers() {
      try {
        // call api to get recommended Followers data
        // const {data} = await
        this.recommendedFollowers = dummyUsers;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得推薦追蹤資料，請稍後再試！",
        });
      }
    },
    toggleFollow() {
      console.log("toggleFollow");
    },
  },
};
</script>

<style scoped>
.container {
  width: 350px;
  margin: 15px 82px auto 30px;
  background-color: #f5f8fa;
  border-radius: 14px;
  padding: 0;
}

.title {
  padding: 10px 15px;
}

.title h1 {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

hr {
  margin: 0;
}

.usersList {
  margin: 0;
}

.userContent {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;
  align-items: center;
}

.userContent .avatar {
  height: 50px;
  width: 50px;
  background-color: #c4c4c4;
  border-radius: 50%;
}

.userContent .info {
  flex: 1;
  margin: 0 10px;
}

.userContent .info h2 {
  font-size: 15px;
  font-weight: 700;
}

.userContent .info .account h2 {
  color: #657786;
}

button {
  border: 1px solid #ff6600;
  border-radius: 100px;
  color: #ff6600;
}

.toggleFollow button {
  font-size: 15px;
  font-weight: 700;
}

.showMore {
  padding: 12px 0 12px 15px;
}

.showMore .btn {
  padding: 0;
  border: none;
  font-weight: 400;
}
</style>
