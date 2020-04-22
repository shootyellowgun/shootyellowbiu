<template>
  <div class="mine">
    <router-link to="main/fuck">play fuck</router-link>
    <router-link to="main/game">play game</router-link>
    <button @click="fn">返回首页</button>
  </div>
</template>

<script>
export default {
  created() {
    this.$eventbus.$emit("gettxt", "我的");
  },
  methods: {
    fn() {
      this.$router.push({ path: "/classifyer", query: { id: 3 } });
    }
  }
};
</script>
<style scoped>
.mine {
  text-align: center;
}
</style>