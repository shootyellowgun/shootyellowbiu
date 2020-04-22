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
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [
        { id: 1, title: "首页", txt: "&#xe601;", rou: "/" },
        { id: 2, title: "分类", txt: "&#xe63f;", rou: "/classify" },
        { id: 3, title: "购物车", txt: "&#xe60e;", rou: "/car" },
        { id: 4, title: "我", txt: "&#xe68f;", rou: "/mine" }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.foot {
  height: 1.05rem;
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
</style>
