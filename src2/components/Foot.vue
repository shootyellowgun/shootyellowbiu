<template>
  <div class="foot">
    <div class="btn">
      <p class="sum">
        总价:
        <span>￥0.00</span>
      </p>
      <div class="buy" @click="tag=true">立即购买</div>
      <div class="shopping">加入购物车</div>
    </div>
    <div class="box" v-if="tag">
      <Option @showing="fn"></Option>
    </div>
  </div>
</template>
<script>
import Option from "./Option.vue";

export default {
  components: {
    Option
  },
  data() {
    return {
      tag: false
    };
  },
  methods: {
    fn() {
      this.tag = false;
    }
  }
};
</script>
<style scoped>
.foot {
  font-size: 0.3rem;
  width: 100%;
  height: 100%;
  height: 0.97rem;
  background-color: #fff;
  line-height: 0.97rem;
  color: #fff;
  border-top: 1px solid #dddddd;
}
.sum {
  margin-left: 0.3rem;
  margin-right: 1.57rem;
  float: left;
  color: #666666;
  font-size: 0.3rem;
}
.btn {
  text-align: center;
}
.sum > span {
  color: #eb2222;
}
.shopping {
  width: 1.97rem;
  height: 0.97rem;
  background-color: #ff9900;
  float: left;
}
.buy {
  width: 2rem;
  height: 0.97rem;
  background-color: #eb2222;
  float: right;
}
.box {
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 0.97rem;
}
</style>