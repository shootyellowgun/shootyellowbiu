<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/img/logo@2x.png" alt />
      <div class="downl">下载APP</div>
    </div>
    <div class="nav">
      <ul>
        <router-link to="/">
          <li>推荐</li>
        </router-link>
        <router-link to="/Ranking">
          <li>排行榜</li>
        </router-link>
        <router-link to="/Search">
          <li>搜索</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.head {
  height: 90px;
}
.logo {
  height: 60px;
}
.logo img {
  width: 97px;
  height: 27px;
  margin-top: 20px;
  margin-left: 10px;
}
.logo .downl {
  width: 60px;
  height: 20px;
  float: right;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  border: 1px solid #111;
  margin-top: 23px;
  border-radius: 20px;
  margin-right: 10px;
  padding: 0 5px;
}
.nav {
  height: 29px;
  background-image: linear-gradient(#eeeeee, #fff);
  line-height: 29px;
  text-align: center;
  /* flex-direction: row; */
}
.nav ul {
  display: flex;
}
.nav ul a {
  flex: 1;
}
a {
  color: #000;
  border-bottom: 1px solid #fff;
}
a.router-link-exact-active {
  border-bottom: 1px solid #15be74;
  color: #15be74;
}
</style>
