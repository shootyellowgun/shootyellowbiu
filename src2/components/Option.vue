<template>
  <div class="opt">
    <div class="title">
      <div class="left">
        <img src="../assets/03.jpg" alt />
      </div>
      <div class="right">
        <p class="right1">￥445.00</p>
        <p class="right2">库存123456件</p>
        <p class="right3">请选择商品属性</p>
      </div>
      <div class="x" @click="fn">
        <img src="../assets/x.jpg" alt="">
      </div>
    </div>
    <div class="amount">
      <div class="goumai">购买数量</div>
      <div class="anniu">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
    <div class="sizes">
        <h2>大小</h2>
        <ul>
            <li>1L</li>
            <li>2L</li>
            <li>3L</li>
            <li>4L</li>
        </ul>
    </div>
    <div class="ages">
        <h2>年龄</h2>
        <ul>
            <li>5岁以下</li>
            <li>3岁以下</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
        fn(){
          console.log(1)
        this.$emit('showing')
        }
    }
};
</script>
<style scoped>
.opt {
  width:6.8rem;
  position: fixed;
  bottom: .98rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  color: #000;
  padding: 0 .3rem .45rem .4rem;
}
.title {
  display: flex;
}
.title > .left {
  flex: 1;
  margin-top: -0.4rem;
}
.title>.x>img{
  margin-top: .2rem;
  width: .55rem;
  height: .55rem;
}
.title > .left > img {
  width: 2.2rem;
  height: 2.2rem;
}
.title > .right {
  padding-top: 0.6rem;
  flex: 10;
  margin-left: 0.2rem;
  line-height: .4rem;
}
.title > .right > .right1 {
  color: red;
}
.title > .right > .right2 {
  width: 3rem;
}

.title > .right > p {
  font-size: 0.25rem;
}
.amount > .goumai {

  font-size: 0.3rem;
  float: left;
}
.anniu {
  float: right;
  font-size: 0.3rem;
}
.anniu > button {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #999999;
  border: none;
  color: #fff;
}
.anniu > span {
  display: inline-block;
  width: 1rem;
  height: 0.46rem;
  text-align: center;
  line-height: 0.42rem;
  border-bottom: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
.sizes>h2,.ages>h2{
    font-size: .35rem;
}
.sizes>ul>li,.ages>ul>li{
    float: left;
    font-size: .3rem;
    width: 1.19rem;
    height: .46rem;
    line-height: .46rem;
    text-align: center;
    color: #fff;
    border-radius: .1rem;
    background-color: #ff9900;
    margin-right: .2rem;
}


</style>