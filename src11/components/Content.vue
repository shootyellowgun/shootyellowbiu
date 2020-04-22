<template>
  <div class="hello">
    <!-- 2.定义点击事件 -->
    <span @click="fn">X</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      city:'长沙',
      county:'成都'
    };
  },
  methods: {
    fn() {
      // 3.触发fn执行change事件
      this.$emit("change");
      this.$jsonp("http://zg99.offcn.com/index/chaxun/getlist/", {
        //请求的参数
        actid: 5412,
        city: this.city,
        county: this.county,
        limits: "500"
      }).then(res => {
        console.log(res);
        // this.arr = res.lists;
        // console.log(this.arr);
      });
    }
  },
  created() {
    // console.log(this.$jsonp);
  }
};
</script>

<style scoped>
.hello {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 10px auto;
  background-color: rgba(0, 0, 0, 0.7);
}
span {
  position: absolute;
  right: 0;
  top: 0;
  background-color: gold;
  padding: 0 10px;
  cursor: pointer;
}
</style>
