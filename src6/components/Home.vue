<template>
  <div class="home">home</div>
</template>

<script>
export default {
  created() {
    this.$eventbus.$emit("gettxt", "首页");
  }
};
</script>
<style scoped>
.home {
  text-align: center;
}
</style>