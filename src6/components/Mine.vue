<template>
  <div class="mine">mine</div>
</template>

<script>
export default {
  created(){
    this.$eventbus.$emit('gettxt','我的')
  },
};
</script>
<style scoped>
.mine {
  text-align: center;
}
</style>