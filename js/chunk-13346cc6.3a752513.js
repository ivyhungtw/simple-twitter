(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13346cc6"],{2723:function(e,t,r){},"4a39":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"userProfile"}},[a("UserSidebar"),a("div",{staticClass:"mainSection"},[a("div",{staticClass:"title"},[a("button",{staticClass:"btn",on:{click:function(t){return e.$router.back()}}},[a("img",{attrs:{src:r("8586"),alt:""}})]),a("div",{staticClass:"nameTag"},[a("p",[e._v(e._s(e.user.name))]),a("p",[e._v(e._s(e.user.tweetCount)+" 則推文")])])]),a("div",{staticClass:"admin-users-card"},[a("UserProfileCard",{attrs:{userData:e.user}}),a("UserProfileNavtabs",{attrs:{userData:e.user}}),a("UserProfileTweetsList",{attrs:{userData:e.user}})],1)]),a("RecommendedFollowers")],1)},n=[],s=r("5530"),c=r("1da1"),i=(r("d81d"),r("96cf"),r("a004")),o=r("7950"),u=r("92e8"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("ul",{staticClass:"tweetList"},[e.isLoading?[r("p",{staticClass:"loading"},[e._v("資料讀取中...")])]:[e.tweets.length?e._l(e.tweets,(function(e){return r("TweetItem",{key:e.id,attrs:{tweet:e}})})):r("p",{staticClass:"noData"},[e._v("無資料")])]],2)])},l=[],d=(r("b0c0"),r("b3b3")),w=r("2f62"),p=r("2fa3"),h=r("6783"),m={name:"UserProfileTweetsList",components:{TweetItem:d["a"]},props:{userData:{type:Object,required:!0}},created:function(){var e=this;this.$bus.$on("afterCreateTweet",(function(t){console.log("afterCreateTweet in tweetlist"),e.afterCreateTweet(t)}))},data:function(){return{user:{},tweet:{UserId:void 0,created:"",description:"",id:void 0,likeCount:0,replyCount:0,updatedAt:"",user:{account:"",name:"",avatar:""},isLiked:!1},tweets:{},isLoading:!0}},methods:{fetchUser:function(e){this.user=e},fetchUserTweets:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.isLoading=!0,r.next=4,h["a"].getUserTweet(e);case 4:a=r.sent,n=a.data,t.tweets=n.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{UserId:t.user.id,user:{account:t.user.account,avatar:t.user.avatar,name:t.user.name}})})),t.isLoading=!1,r.next=15;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("fetchUserTweets"),console.log(r.t0),p["a"].fire({icon:"error",title:"無法取得推文，請稍後再試！"});case 15:case"end":return r.stop()}}),r,null,[[0,10]])})))()},afterCreateTweet:function(e){console.log("newTweet got!!!!"),this.tweets.unshift(Object(s["a"])(Object(s["a"])({},this.tweet),e))}},computed:Object(s["a"])({},Object(w["b"])(["currentUser"])),watch:{userData:{handler:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.fetchUser(t),r=this.user.id,e.next=5,this.fetchUserTweets(r);case 5:e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0),p["a"].fire({icon:"error",title:"無法取得推文資料，請稍後再試！"});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),deep:!0}}},v=m,b=(r("7f78"),r("2877")),g=Object(b["a"])(v,f,l,!1,null,"17922579",null),U=g.exports,k=r("8f83"),j=r("4cce"),C={name:"UserProfile",components:{UserSidebar:i["a"],UserProfileCard:o["a"],UserProfileNavtabs:u["a"],UserProfileTweetsList:U,RecommendedFollowers:k["a"]},beforeRouteEnter:function(e,t,r){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{r((function(t){var r=e.params.id;t.fetchUser(r),t.fetchingData=!0}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})))()},beforeRouteUpdate:function(e,t,r){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a.fetchingData&&r(),n=e.params.id,t.next=5,a.fetchUser(n);case 5:r(),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},data:function(){return{user:{},tweets:[],fetchingData:!1}},methods:{fetchUser:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,j["a"].getUser(e);case 3:a=r.sent,n=a.data,t.user=n,r.next=12;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0),p["a"].fire({icon:"error",title:"無法取得使用者資訊，請稍後再試！"});case 12:case"end":return r.stop()}}),r,null,[[0,8]])})))()},afterToggleLike:function(e){this.tweets=this.tweets.map((function(t){return t.id===e.id?Object(s["a"])(Object(s["a"])({},t),{},{isLiked:e.isLiked}):t}))}},computed:Object(s["a"])({},Object(w["b"])(["currentUser"]))},O=C,T=(r("a3af"),Object(b["a"])(O,a,n,!1,null,"6943f71c",null));t["default"]=T.exports},"7b08":function(e,t,r){},"7f78":function(e,t,r){"use strict";r("2723")},a3af:function(e,t,r){"use strict";r("7b08")}}]);
//# sourceMappingURL=chunk-13346cc6.3a752513.js.map