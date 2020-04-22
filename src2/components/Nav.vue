<template>
  <div class="cut">
    <!-- <div class="details" @click="fn('detail')">
      <span>商品详情</span>
    </div>
    <div class="evaluate" @click="fn('public')">买家口碑</div>-->
    <div v-for="(item,index) in mydata" :key="index" @click="fn(item.tab,index)">
      <span :class="item.cla">{{item.name}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mydata: [
        { name: "商品详情", cla: "active", tab: "detail" },
        { name: "卖家口碑", cla: "", tab: "public" }
      ]
    };
  },
  methods: {
    fn(b, i) {
      this.$emit("abc", b);
      this.mydata.forEach(item => {
        item.cla = "";
      });
      this.mydata[i].cla = "active";
    }
  }
};
</script>
<style scoped>
.cut {
  display: flex;
  padding-top: 0.5rem;
  padding-bottom: 0.05rem;
  text-align: center;
  border-top: 0.32rem solid #eeeeee;
}
.cut > div {
  flex: 5;
  float: left;
  font-size: 0.3rem;
  margin-bottom: 0.26rem;
}
.cut > div > span {
  display: inline-block;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  padding-bottom: 0.1rem;
  border-bottom: 2px solid #ffffff;
}
.cut > div > span.active {
  border-bottom: 2px solid #ff9900;
}
</style>