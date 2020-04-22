<template>
  <div class="foot">
    <ul>
      <li v-for="(item,index) in mydata" :key="index">
        <router-link :to="item.rou">
          <span class="iconfont" v-html="item.txt"></span>
          <p>{{item.title}}</p>
        </router-link>
      </li>
    </ul>
    <div class="foot-buy" v-if="mytag">
      <div class="left">
        总价：
        <span>
          ￥
          <i>{{sum}}</i>
        </span>
      </div>
      <div class="right">
        <ul>
          <li @click="getadd">加入购物车</li>
          <li @click="getshow">立即购买</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [
        { id: 1, title: "首页", txt: "&#xe613;", rou: "/" },
        { id: 2, title: "分类", txt: "&#xe611;", rou: "/classify" },
        { id: 3, title: "购物车", txt: "&#xe501;", rou: "/car" },
        { id: 4, title: "我", txt: "&#xe608;", rou: "/mine" }
      ],
      total: "0.00"
    };
  },
  props: ["mytag", "sum", "obj"],
  methods: {
    getshow() {
      this.$emit("gett");
    },
    getadd() {
      // this.$store.commit("getmyobj", this.obj);
      this.$store.dispatch("getnewobj", this.obj);
      this.$emit("getf");
    }
  }
};
</script>

<style scoped>
.foot {
  position: relative;
  height: 1.05rem;
  background-color: #fff;
}
ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
li {
  text-align: center;
}
li a {
  color: #000;
}
li a.router-link-exact-active {
  color: #ff9900;
}
li p {
  font-size: 0.2rem;
}
li span {
  font-size: 0.38rem;
}

.foot-buy {
  height: 1rem;
  border-top: 1px solid #6f6f6f;
  font-size: 0.28rem;
  position: absolute;
  top: -1rem;
  width: 100%;
  background-color: #fff;
}
.left {
  height: 100%;
  color: #6f6f6f;
  float: left;
  line-height: 1rem;
  margin-left: 0.2rem;
}
.right {
  height: 100%;
  float: right;
}
.left span {
  color: #eb2222;
}
.left i {
  font-style: normal;
}
.right li {
  float: left;
  height: 100%;
  line-height: 1rem;
  width: 2rem;
  color: #f6f6f6;
}
.right li:nth-child(1) {
  background-color: #ff9900;
}
.right li:nth-child(2) {
  background-color: #eb2222;
}
</style>
