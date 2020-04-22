<template>
  <div class="car">
    <div class="inner">
      <div class="title">
        <span class="iconfont">&#xe629;</span>
        杭州保税区仓
      </div>
      <div class="commodity">
        <span :class="cla" @click="fn">&#xe641;</span>
        <span v-html="txt"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cla: "chooseccc iconfont",
      txt: "&lt;==点我有惊喜"
    };
  },
  created() {
    this.$eventbus.$emit("gettxt", "购物车");
  },
  methods: {
    fn() {
      if (this.cla == "chooseccc iconfont") {
        this.cla = "chooseff99 iconfont";
        this.txt="你咋啥都信呢"
      } else {
        this.cla = "chooseccc iconfont";
        this.txt="还点吗"

      }
    }
  }
};
</script>
<style scoped>
.car {
  padding-top: 0.2rem;
  font-size: 0.3rem;
}
.inner {
  padding-left: 0.4rem;
}
.title span {
  margin-right: 0.2rem;
  font-size: 0.3rem;
}
.commodity span {
  font-size: 1rem;
}
span.chooseccc {
  color: #ccc;
}
span.chooseff99 {
  color: #ff9900;
}
</style>