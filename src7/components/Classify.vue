<template>
  <div class="classify">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="'/classifyer?id='+item.id">{{item.txt}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.$eventbus.$emit("gettxt", "分类");
  },
  data() {
    return {
      list: [
        { id: 1, txt: "鹏鹏拉屎不洗手" },
        { id: 2, txt: "欣欣吃饭不洗手" },
        { id: 3, txt: "鹏鹏给欣欣做饭不洗手" },
        { id: 4, txt: "欣欣吃鹏鹏做的饭不洗手" }
      ]
    };
  }
};
</script>
<style scoped>
.classify {
  text-align: center;
}
</style>