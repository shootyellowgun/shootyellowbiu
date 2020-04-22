<template>
  <!-- 商城项目 -->
  <div class="app">
    <Head :flag="flag"></Head>
    <div class="main">
      <router-view @detailstrue="detailstrue"></router-view>
    </div>
    <transition
      enter-class
      enter-active-class="animated fadeIn"
      enter-to-class
      leave-class
      leave-active-class="animated fadeOut"
      leave-to-class
    >
      <Buy v-show="mybuytag" @getf="getf" @gets="gets" @getobj="getobj" :mybuytag="mybuytag"></Buy>
    </transition>
    <Foot :mytag="mytag" @getf="getf" @gett="gett" :sum="sum" :obj="obj"></Foot>
  </div>
</template>

<script>
import "./assets/js/reset.js";
import Buy from "./components/Buy.vue";
import Head from "./components/Head";
import Foot from "./components/Foot";

export default {
  components: {
    Head,
    Foot,
    Buy
  },
  data() {
    return {
      flag: false,
      mytag: false,
      mybuytag: false,
      sum: 0,
      obj: {}
    };
  },
  methods: {
    detailstrue() {
      this.flag = true;
      this.mytag = true;
    },
    getf() {
      this.mybuytag = false;
    },
    gett() {
      this.mybuytag = true;
    },
    gets(v) {
      this.sum = v;
    },
    getobj(v) {
      // console.log(v);
      this.obj = v;
    }
  },
  created() {
    // this.$eventbus.$on("gettrue", () => {
    //   this.flag = true;
    // });
    this.$eventbus.$on("getfalse", () => {
      this.flag = false;
      this.mytag = false;
    });
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
i {
  font-style: normal;
}
html,
body {
  height: 100%;
  background: #fff !important;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex: 1;
  overflow-y: scroll;
}
</style>
