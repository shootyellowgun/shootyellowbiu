<template>
  <div class="details">
    <ul>
      <li v-for="(item,index) in shopDes" :key="index">
        <img :src="item" alt />
      </li>
    </ul>
  </div>
</template>

<script>
//商品详情details
export default {
  props: ["shopDes"]
};
</script>

<style scoped>
.details {
  width: 90%;
  text-align: center;
  margin: 0 auto;
}
.details img {
  width: 100%;
}
</style>
