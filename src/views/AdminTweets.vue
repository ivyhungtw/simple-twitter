<template>
  <div id="AdminTweets">
    <!-- AdminSidebar.vue -->
    <AdminSidebar />
    <!-- AdminTweetsList.vue -->
    <div class="AdminTweetsPanel">
      <div class="title">
        <h1>推文清單</h1>
      </div>
      <AdminTweetsList
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        @after-delete-tweet="afterDeleteTweet"
      />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "./../components/AdminSidebar";
import AdminTweetsList from "./../components/AdminTweetsList";

const dummyData = {
  tweets: [
    {
      id: 34,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: 35,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent: "123456789",
    },
    {
      id: 36,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: 37,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent: "123456789",
    },
    {
      id: 38,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: 39,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent: "123456789",
    },
    {
      id: 40,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: 41,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent: "123456789",
    },
    {
      id: 42,
      name: "user1",
      avatar:
        "https://s3-alpha-sig.figma.com/img/7075/8e0a/7c0f47389595381eca543235de212578?Expires=1620000000&Signature=NPGKM~T5uRhNRXlPmNslZfE2oPmtp4FxaIduK3IgFsLVr5OgpjlXe2Az28ZYxdHxOalBETrOrUb2rx1t86cthAmQVnL-b92nBKRTpag3EHMchy3hspFH1YhSg-dnmpSZqXxEer2lZqjWP1g5Yn2lv2rX16GpPq1v1W2~ZXVe6kQEm8Yg8K3E6Gh6lktIX65OViGN3UGBpjM9gvU8ZD4g7tx6eV6PbDKgm0aWEZMl~DS359hGwg6dGCZ2z2p-oel3~Q4WdRcFb-SNCessB~RAvpeZiX-qmgj1OM44L1AKH9n7lZi-YMVAOXiFgpEjL9VUGVLSOaLgcg7jR8s5GudcoA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
      account: "user1",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent:
        "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ",
    },
    {
      id: 43,
      name: "user2",
      avatar: "https://i.imgur.com/q6bwDGO.png",
      account: "user2",
      createdAt: "2021-04-07T14:21:46.000Z",
      updatedAt: "2021-04-18T03:08:30.000Z",
      tweetContent: "123456789",
    },
  ],
};
export default {
  name: "AdminTweets",
  components: {
    AdminSidebar,
    AdminTweetsList,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    fetchTweets() {
      const { tweets } = dummyData;
      this.tweets = tweets;
    },
    afterDeleteTweet(tweetId) {
      this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
    },
  },
};
</script>


<style scoped>
#AdminTweets {
  display: flex;
  min-height: 100vh;
  width: auto;
}

.AdminTweetsPanel {
  flex: 1;
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