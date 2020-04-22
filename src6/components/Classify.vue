<template>
  <div class="classify">classify</div>
</template>

<script>
export default {
  created(){
    this.$eventbus.$emit('gettxt','分类')
  },
};
</script>
<style scoped>
.classify {
  text-align: center;
}
</style>