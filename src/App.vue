<template>
  <div id="simple-twitter">
    <router-view />
  </div>
</template>

<script>
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// bootstrap js
import "bootstrap";
import { mapState } from "vuex";
export default {
  name: "App",
  sockets: {
    "set session": function (data) {
      console.log("set session: " + data);
      sessionStorage.setItem("rooms", JSON.stringify(data));
    },
  },
  methods: {
    startSession() {
      const rooms = JSON.parse(sessionStorage.getItem("rooms"));
      // console.log("rooms:");
      // console.log(rooms);
      // console.log("--------------------");
      // console.log("currentUser: " + this.currentUser.id);
      if (rooms) {
        this.$socket.emit("start session", rooms, this.currentUser.id);
      } else {
        this.$socket.emit(
          "start session",
          { rooms: null },
          this.currentUser.id
        );
      }
    },
  },
  watch: {
    currentUser: {
      deep: true,
      handler: function () {
        console.log("Got currentUser");
        this.startSession();
      },
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style scoped>
#simple-twitter {
  max-width: 1440px;
  margin: auto;
}
</style>