<template>
  <div id="app">
    <button @click="flag=true">打开</button>
    <!-- 1.自定义事件change -->
    <Content v-if="flag" @change="flag=false"></Content>
    {{$store.state.num}}
    <button @click="fn">+</button>
    <button @click="fn1">+</button>
    <button>{{this.$store.getters.getNum}}</button>
    <br />
    {{num}}
    <button @click="addN(5)">+</button>
    <button @click="addAsyncn(5)">+</button>
    <button>{{getNum}}</button>
    <button @click="duck=!duck">切换</button>
    <!-- <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="box" v-if="duck"></div>
    </transition> -->
    <transition name="fade" enter-active-class="animated swing" leave-active-class="animated shake">
      <div class="box" v-if="duck"></div>
    </transition>
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  components: {
    Content
  },
  computed: {
    ...mapState(["num"]),
    ...mapGetters(["getNum"])
  },
  data() {
    return {
      flag: false,
      duck: true
    };
  },
  methods: {
    fn() {
      this.$store.commit("add");
    },
    ...mapMutations(["add", "addN"]),
    fn1() {
      this.$store.dispatch("addAsync");
    },
    ...mapActions(["addAsync", "addAsyncn"])
  }
};
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: gold;
}
</style>
