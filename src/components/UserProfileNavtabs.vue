<template>
  <ul class="nav nav-tabs mb-4">
    <li v-for="tab in tabs" :key="tab.id" class="nav-item">
      <router-link :to="tab.path" class="nav-link">
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "推文",
          path: "/userprofile",
        },
        {
          id: uuidv4(),
          title: "推文與回覆",
          path: "/userprofile/replies",
        },
        {
          id: uuidv4(),
          title: "喜歡的內容",
          path: "/userprofile/likes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.nav .nav-tabs {
  margin-top: 20px;
  border: 1px solid red;
}
.nav-tabs .nav-link {
  color: gray;
  width: 150px;
  text-align: center;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border: 1px solid #fff;
  border-bottom-color: orangered;
  color: orangered;
  font-weight: 700;
}
</style>