<template>
  <div class="head">
    <div class="topbar"></div>
    <div class="head-inner">
      <span class="left iconfont" @click="ret">&#xe610;</span>
      <span>{{txt}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      txt: "首 页"
    };
  },
  created() {
    this.$eventbus.$on("gettxt", v => {
      this.txt = v;
    });
  },
  methods: {
    ret() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.head {
  background-color: #ff9900;
  height: 1.3rem;
}
.topbar {
  height: 0.4rem;
}

.head-inner {
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}
.head-inner span.left {
  float: left;
  font-size: 0.35rem;
  margin-left: 0.2rem;
  position: absolute;
  left: 0.2rem;
}
.head-inner span {
  font-size: 0.35rem;
  color: #fff;
}
</style>
