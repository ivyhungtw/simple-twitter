(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43a92026"],{"12fe":function(e,t,s){"use strict";s("8ac1")},"14b9":function(e,t,s){e.exports=s.p+"img/conversation.873c4926.svg"},"3bae":function(e,t,s){"use strict";var a=s("2fa3");t["a"]={getPublicRoom:function(){return a["b"].get("/rooms/4")},createPrivateRoom:function(e){return a["b"].post("/rooms",{userId:e})},getPrivateRoom:function(e){return a["b"].get("/rooms/".concat(e))},getNotification:function(){return a["b"].get("/rooms/notifications")},getRoom:function(e){return a["b"].get("/rooms/".concat(e))},getRoomsByUser:function(){return a["b"].get("/rooms")},getAvailableUsers:function(){return a["b"].get("rooms/availableUsers")},getUnread:function(){return a["b"].get("/private/unread")}}},"521f":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"messageBox"},[e.atPublic?[a("div",{staticClass:"title",on:{click:e.updateScroll}},[a("h1",[e._v("公開聊天室")])])]:[e.currentChat.name?a("div",{staticClass:"title private"},[a("h1",[e._v(e._s(e.currentChat.name?e.currentChat.name:"UserName"))]),a("p",[e._v("@"+e._s(e.currentChat.account?e.currentChat.account:"UserAccount"))])]):a("div",{staticClass:"title noChat"},[a("h1",[e._v("開啟聊天！")])])],a("div",{ref:"messageList",staticClass:"container"},[a("ul",{staticClass:"messageList"},[e.isProcessing?a("Spinner"):[e.messageList.length?e._l(e.messageList,(function(t){return[0===t.type?a("li",{key:t.id,staticClass:"actionItem"},[a("p",[e._v(e._s(t.text))])]):a("li",{key:t.id,staticClass:"messageItem",class:{currentUser:t.UserId===e.currentUser.id}},[a("div",{staticClass:"mainContent"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e._f("emptyImageFilter")(t.avatar),alt:""}})]),a("div",{staticClass:"textContainer"},[a("div",{staticClass:"text"},[e._v(" "+e._s(t.message)+" ")])])]),a("div",{staticClass:"textTime"},[e._v(e._s(e._f("fromNow")(t.createdAt)))])])]})):a("div",{staticClass:"emptyList"},[a("img",{attrs:{src:s("14b9"),alt:""}})])]],2)]),a("div",{staticClass:"meesagePanel"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"textInput",placeholder:"輸入訊息...",type:"text",maxlength:"160",required:"",disabled:void 0===e.currentChat.userId},domProps:{value:e.message},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage(t)},input:function(t){t.target.composing||(e.message=t.target.value)}}}),a("button",{staticClass:"btn sendBtn",attrs:{disabled:void 0===e.currentChat.userId,type:"submit"},on:{click:e.sendMessage}},[a("img",{attrs:{src:s("ad0d"),alt:""}})])])],2)},r=[],n=s("5530"),i=s("2375"),c=s("2708"),o=s("2fa3"),u=s("2f62"),l={name:"MessageBox",mixins:[c["a"],c["c"]],components:{Spinner:i["a"]},props:{currentChat:{type:Object,default:function(){return{userId:void 0,name:"",account:""}}},messageList:{type:Array,required:!0},atPublic:{type:Boolean,default:!1}},data:function(){return{message:"",isProcessing:!1}},updated:function(){console.log("updated"),this.updateScroll()},methods:{sendMessage:function(){var e=this,t=this.message;if(this.message){var s=!this.messageList.length;console.log("atPublic: "+this.atPublic),this.atPublic?this.$socket.emit("chat message",{roomId:this.currentRoomId,userId:this.currentUser.id,newMessage:s,message:t},(function(){console.log("currentRoomId: "+e.currentRoomId),console.log("private chat message, new: ".concat(s))})):this.$socket.emit("private chat message",{roomId:this.currentRoomId,userId:this.currentUser.id,newMessage:s,message:t},(function(){console.log("currentRoomId: "+e.currentRoomId),console.log("private chat message, new: ".concat(s))})),this.message="",o["a"].fire({icon:"success",title:"訊息已發送!"})}else o["a"].fire({icon:"error",title:"尚未輸入訊息!"})},toggleIsProcessing:function(){this.isProcessing=!this.isProcessing},updateScroll:function(){this.$refs.messageList.scrollTop=this.$refs.messageList.scrollHeight}},computed:Object(n["a"])({},Object(u["b"])(["currentUser","currentRoomId"]))},d=l,m=(s("ef80"),s("2877")),g=Object(m["a"])(d,a,r,!1,null,"435f38ae",null);t["a"]=g.exports},"5f6d":function(e,t,s){},"7db0":function(e,t,s){"use strict";var a=s("23e7"),r=s("b727").find,n=s("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},"8ac1":function(e,t,s){},ad0d:function(e,t,s){e.exports=s.p+"img/send.376b4246.svg"},afd3:function(e,t,s){e.exports=s.p+"img/newMessage.cfd494d4.svg"},d3b0:function(e,t,s){},e39f:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"publicMessage"},[a("UserSidebar"),a("div",{staticClass:"mainSection"},[a("div",{staticClass:"usersOnline"},[a("div",{staticClass:"title"},[a("h1",[e._v("訊息")]),a("div",{staticClass:"newMessage"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.showModal}},[a("img",{attrs:{src:s("afd3"),alt:""}})])]),a("UserChatListModal",{attrs:{allUserList:e.allUserList},on:{afterUserSelected:e.afterUserSelected}})],1),a("div",{staticClass:"container"},[a("ul",{staticClass:"userList"},[e.isProcessing?a("Spinner"):[e.receivedMessageList.length?e._e():[a("p",{staticClass:"noReceivedMessageList"},[e._v("還沒有任何對話")])],e._l(e.receivedMessageList,(function(t){return a("li",{key:t.userId,staticClass:"userItem",on:{click:function(s){return e.passChatData(t)}}},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e._f("emptyImageFilter")(t.avatar),alt:""}})]),a("div",{staticClass:"userContainer"},[a("div",{staticClass:"row"},[a("div",{staticClass:"userName"},[a("p",[e._v(e._s(t.name))])]),a("div",{staticClass:"userAccount"},[a("p",[e._v("@"+e._s(t.account))])]),a("div",{staticClass:"lastTime"},[a("p",[e._v(e._s(e._f("fromNow")(t.lastTime)))])])]),a("div",{staticClass:"previewMessage"},[a("p",[e._v(" "+e._s(t.lastMessage)+" ")])])])])}))]],2)])]),a("MessageBox",{ref:"messageBox",attrs:{currentChat:e.currentChat,messageList:e.currentMessageList}})],1)],1)},r=[],n=s("5530"),i=s("1da1"),c=(s("7db0"),s("b0c0"),s("d81d"),s("96cf"),s("a004")),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"allUserList",tabindex:"-1",role:"dialog","aria-labelledby":"","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[e._m(0),s("button",{staticClass:"start btn",attrs:{type:"button"},on:{click:e.closeModal}},[e._m(1)])]),s("div",{staticClass:"modal-body"},[s("ul",{staticClass:"userList"},[e.isProcessing?s("Spinner",{staticClass:"spinner"}):e._l(e.allUserList,(function(t){return s("li",{key:t.id,staticClass:"userItem",on:{click:function(s){return e.userSelected(t)}}},[s("div",{staticClass:"userContainer"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e._f("emptyImageFilter")(t.avatar),alt:""}})]),s("div",{staticClass:"userInfo"},[s("p",[e._v(e._s(t.name))]),s("p",[e._v("@"+e._s(t.account))])])])])}))],2)]),s("div",{staticClass:"modal-footer"})])])])},u=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"title"},[s("h1",[e._v("選擇要發送訊息的用戶")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{attrs:{"aria-hidden":"true","data-dismiss":"modal","aria-label":"Close"}},[a("img",{attrs:{src:s("bf37"),alt:""}})])}],l=s("2375"),d=s("2708"),m=s("1157"),g=s.n(m),v={name:"UserChatListModal",mixins:[d["a"]],components:{Spinner:l["a"]},props:{allUserList:{type:Array,required:!0}},data:function(){return{isProcessing:!0}},methods:{userSelected:function(e){console.log("Select userId: "+e.id),this.$emit("afterUserSelected",e),this.closeModal()},closeModal:function(){g()("#allUserList").modal("hide"),g()(".modal-backdrop").hide();var e=document.getElementsByClassName("modal-backdrop");document.body.removeChild(e[0])}},watch:{allUserList:{deep:!0,handler:function(){this.isProcessing=!1}}}},h=v,f=(s("12fe"),s("2877")),p=Object(f["a"])(h,o,u,!1,null,"1e857e80",null),C=p.exports,b=s("521f"),I=s("2fa3"),x=s("3bae"),w=s("2f62"),_=s("4cce"),U={name:"privateMessage",components:{UserSidebar:c["a"],UserChatListModal:C,MessageBox:b["a"],Spinner:l["a"]},mixins:[d["a"],d["c"]],data:function(){return{allUserList:[],receivedMessageList:[],currentChat:{id:void 0,name:"",account:""},currentMessageList:[],message:"",isProcessing:!0}},created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.fetchReceivedMessageList();case 3:return t.next=5,e.fetchAvailableUser();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},sockets:{message:function(e){I["a"].fire({icon:"info",title:e.text}),console.log(e)},"private chat message":function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var s,a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("private chat message"),t.userId===this.currentUser.id?(s=this.receivedMessageList.find((function(e){return e.roomId===r.currentRoomId})),s?(s.lastTime=t.createdAt,s.lastMessage=t.text):this.receivedMessageList.push({account:this.currentChat.account,avatar:this.currentChat.avatar,lastMessage:t.text,lastTime:t.createdAt,name:this.currentChat.name,userId:this.currentChat.id,roomId:this.currentRoomId}),this.currentMessageList.push({id:this.currentMessageList.length+1,UserId:this.currentUser.id,type:1,avatar:this.currentUser.avatar,message:t.text,createdAt:t.createdAt})):(a=this.receivedMessageList.find((function(e){return e.userId===t.userId})),a.lastTime=t.createdAt,a.lastMessage=t.text,this.currentRoomId===a.roomId&&this.currentMessageList.push({id:this.currentMessageList.length+1,UserId:this.currentChat.userId,type:1,avatar:this.currentChat.avatar,message:t.text,createdAt:t.createdAt}));case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),"users count":function(e){console.log("Users count: "),console.log(e)},"new private chat message":function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var s,a,r,n,i,c,o,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("create new room!"),s=t[1],a=t[0],r=a.avatar,n=a.createdAt,i=a.text,c=a.userId,e.prev=3,e.next=6,_["a"].getUser(c);case 6:o=e.sent,u=o.data,l=u.name,d=u.account,this.receivedMessageList.push({account:d,avatar:r,userId:c,lastMessage:i,lastTime:n,roomId:s,name:l}),this.currentChat.message.push(t),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](3),console.log("new private chat message: "+e.t0);case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));function t(t){return e.apply(this,arguments)}return t}(),"notice from private":function(e){console.log(e)}},methods:{fetchReceivedMessageList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isProcessing=!0,t.next=4,x["a"].getRoomsByUser();case 4:s=t.sent,a=s.data,e.receivedMessageList=a.map((function(e){var t=e.userId,s=e.name,a=e.account,r=e.avatar,n=e.roomId,i=e.message,c=e.createdAt;return{userId:t,name:s,account:a,avatar:r,roomId:n,lastTime:c,lastMessage:i}})),e.isProcessing=!1,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),e.isProcessing=!1,console.log("fetchChatData"),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,10]])})))()},passChatData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r,i,c;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return t.$refs.messageBox.toggleIsProcessing(),console.log("leave room: "+t.currentRoomId),t.$socket.emit("leave",t.currentUser.id,t.currentRoomId),t.$store.commit("setCurrentRoomId",void 0),console.log("passChatData"),a=e.roomId,t.currentChat=e,s.prev=7,s.next=10,x["a"].getRoom(a);case 10:r=s.sent,i=r.data,c=i.messages,t.currentMessageList=c.map((function(e){return Object(n["a"])(Object(n["a"])({},e),{},{type:1})})),t.$refs.messageBox.toggleIsProcessing(),console.log("join room:"+a),t.joinPrivateRoom(a),t.$store.commit("setCurrentRoomId",a),s.next=24;break;case 20:s.prev=20,s.t0=s["catch"](7),console.log(s.t0),I["a"].fire({icon:"error",title:s.t0});case 24:case"end":return s.stop()}}),s,null,[[7,20]])})))()},afterUserSelected:function(e){this.currentMessageList=[],this.currentChat=Object(n["a"])(Object(n["a"])(Object(n["a"])({},this.currentChat),e),{},{userId:e.id});var t=this.currentChat.id;this.createNewChat(t)},createNewChat:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a,r,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,x["a"].createPrivateRoom(e);case 3:if(a=s.sent,r=a.data,n=r.roomId,console.log(r),console.log("RoomId: "+n),"success"===r.status){s.next=10;break}throw new Error(r.message);case 10:I["a"].fire({icon:"success",title:"已建立連線！"}),t.$socket.emit("leave",t.currentUser.id,t.currentRoomId),t.joinPrivateRoom(n),t.$store.commit("setCurrentRoomId",n),s.next=19;break;case 16:s.prev=16,s.t0=s["catch"](0),console.log(s.t0);case 19:case"end":return s.stop()}}),s,null,[[0,16]])})))()},joinPrivateRoom:function(e){console.log("join private room: "+e),this.$socket.emit("join",{username:this.currentUser.name,roomId:e,userId:this.currentUser.id})},fetchAvailableUser:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x["a"].getAvailableUsers();case 3:s=t.sent,a=s.data,e.allUserList=a,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},showModal:function(){g()("#allUserList").appendTo("body"),g()("#allUserList").modal("show")}},computed:Object(n["a"])({},Object(w["b"])(["currentUser","currentRoomId"]))},M=U,R=(s("f43e"),Object(f["a"])(M,a,r,!1,null,"bdb3c462",null));t["default"]=R.exports},ef80:function(e,t,s){"use strict";s("d3b0")},f43e:function(e,t,s){"use strict";s("5f6d")}}]);
//# sourceMappingURL=chunk-43a92026.02e912e9.js.map