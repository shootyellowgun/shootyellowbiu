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
import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";

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
.main {
  height: 527px;
}
</style>
