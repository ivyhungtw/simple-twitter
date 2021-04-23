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

const dummyData = {
  users: [
    {
      id: 34,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      cover:
        "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 35,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 36,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 37,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 38,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      cover:
        "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 39,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 40,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 41,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 42,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      cover:
        "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 43,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 44,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 45,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 46,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      cover:
        "https://s3-alpha-sig.figma.com/img/f005/46e8/d7c5c19fec744637850a77bf189952e0?Expires=1620000000&Signature=DdVw8tGyQc33zX1gk6bBEdLzKa8CcRYbjNiBz~qC2ZUrm4vxDFPpJiqSYltCWbLky8D~QCRq9~Bq4WIdRHjvsVCO9qRiGJlX1Rc1N1kFSCNxt0PJwVTRc0wifikFL7OAyTvN3CeuL8CeZeEgsXuoSJTH93Pf-aEn0ksh7SK61V5fNyBbtAIvVe~9w34-2aV-3GzKH~5VZgWo2AEfU7sTrTFUz-SMheQuTQU8HEZgPZ0wjxdw44Y~FNCgDp46h9jk4RkayQPELDCtMn2EeZM1t18o5J0ADefEIJWwaLoBn3tlcts0txtR7lTUXj-MdMtRtwwrcmA0muu2fTYNDTkL3Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 47,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 48,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
    {
      id: 49,
      name: "user1",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user1",
      cover: "https://i.imgur.com/1jDf2Me.png",
      tweetCount: 10,
      followerCount: 3,
      followingCount: 1,
      likeCount: 3,
    },
  ],
};
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
    fetchUsers() {
      const { users } = dummyData;
      this.users = users;
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