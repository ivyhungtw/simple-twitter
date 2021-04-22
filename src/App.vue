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

export default {
  name: "App",
};
</script>

<style scoped>
#simple-twitter {
  max-width: 1440px;
  margin: auto;
}
</style>