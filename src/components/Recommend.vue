<template>
  <div class="recommend">
    <div class="banner">
      <img src="../assets/img/banner.png" alt />
    </div>
    <h3>电台</h3>

    <div class="inner">
      <div class="innerimg" v-for="(item,index) in mydata" :key="index">
        <div class="inner1">
          <img :src="item.picUrl" alt />
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: []
    };
  },
  created() {
    this.$axios
      .get("http://localhost:3000/personalized/djprogram")
      .then(res => {
        this.mydata = res.data.result;
      });
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
h3 {
  padding-left: 0.2rem;
  margin-top: 10px;
  font-size: 18px;
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
  justify-content: space-between;
  float: left;
  margin-left: 10%;
  margin-bottom: 20px;
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
.inner1 > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
