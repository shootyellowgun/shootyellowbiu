<template>
  <div class="head">
    <div class="head-top"></div>
    <div class="head-bottom" v-if="flag">
      <div class="ret iconfont" @click="fn">&#xe62c;</div>
      <div class="more iconfont">&#xe713;</div>
      <div class="mycar iconfont">&#xe623;</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["flag"],
  methods: {
    fn() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.head {
  height: 0.4rem;
}
.head-top {
  background-color: #ff9900;
  height: 0.4rem;
}

.head-bottom {
  position: absolute;
  height: 0.7rem;
  width: 100%;
  z-index: 99;
}
.head-bottom > div {
  width: 0.56rem;
  height: 0.56rem;
  background-color: #b2b2b2;
  text-align: center;
  line-height: 0.56rem;
  border-radius: 50%;
  float: right;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  color: #fff;
}
.head-bottom > div.ret {
  float: left;
  margin-left: 0.5rem;
}
</style>
