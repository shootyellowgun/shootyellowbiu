<template>
  <div class="recommend">
    <div class="banner">
      <img src="../assets/img/banner.png" alt />
    </div>
    <div class="inner">
      <h3>电台</h3>
      <div class="innerimg">
        <div class="inner1">
          <img src="../assets/img/inner1.png" alt />
          <p>热歌</p>
        </div>
        <div class="inner2">
          <img src="../assets/img/inner2.png" alt />
          <p>一人一首招牌歌</p>
        </div>
      </div>
    </div>
    <div class="more">查看电脑版网页</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.recommend {
  height: 100%;
  background-color: #f4f4f4;
}
.banner {
  height: 165px;
}
.banner img {
  width: 100%;
  height: 100%;
}
.inner {
  padding: 10px;
}
.innerimg {
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
}
.innerimg > div {
  height: 165px;
  width: 130px;
  background-color: #fff;
}
.inner img {
  width: 130px;
  height: 130px;
}
.more {
  text-align: center;
  margin-top: 20px;
}
</style>
