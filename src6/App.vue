<template>
  <div class="app">
    <Head></Head>
    <div class="main">
      <router-view></router-view>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import "./assets/js/reset.js";
import Head from "./components/Head";
import Foot from "./components/Foot";

export default {
  components: {
    Head,
    Foot
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
html,
body {
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  height: 100%;
  flex: 1;
}
</style>
