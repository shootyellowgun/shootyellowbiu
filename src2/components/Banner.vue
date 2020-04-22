<template>
  <div class="top">
    <div class="banner">
      <img src="../assets/01.jpg" />
      <ul class="side">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="txt">
      <div class="title">
        Aptamil 德国爱他美 婴儿奶粉 2段800/克
        3罐装 6-10月
      </div>
      <div class="collect">收藏</div>
    </div>
    <div class="txt1">
      <div class="left">
        <span class="price">￥445.00</span>
        <del>￥998.00</del>
      </div>
      <div class="right">
        <i>6.5折</i>
        <i>包邮</i>
        <ul>
          <li>正品货源</li>
          <li>一件代发</li>
          <li>全球直邮</li>
          <li>售后无忧</li>

          <!-- <li>正品货源</li>
          <li>正品货源</li>
          <li>正品货源</li> -->

        </ul>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
    methods:{
      fn(b){
        // console.log(1)
        this.$emit('abc',b)
      }
    },
    poprs:["abc"]
};
</script>
<style scoped>
.banner {
  text-align: center;
  padding-top: 15px;
  position: relative;
}
.banner > img {
  width: 5.74rem;
  height: 4.99rem;
  margin-bottom: 0.1rem;
}
.side {
  position: absolute;
  left: 50%;
  margin-left: -0.3rem;
  bottom: 0.2rem;
  display: inline-block;
  text-align: center;
}
.side > li {
  margin-right: 0.2rem;
  width: 0.2rem;
  height: 0.2rem;
  background-color: #ff9900;
  border-radius: 50%;
  float: left;
}
.txt {
  display: flex;
}
.title {
  flex: 7;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  float: left;
}
.collect {
  flex: 1;
  font-size: 0.3rem;
  width: 0.99rem;
  height: 0.75rem;
  border-left: 1px solid #dddddd;
  float: right;
  color: #e71f19;
}
.txt1{
    display: flex;
    margin-bottom: .2rem;
}
.txt1>.left{
    flex: 2;
}
.txt1>.right{
    flex: 7;
}
.txt1 >.left> .price {
  color: #e71f19;
  font-size: 0.3rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
}
.txt1 >.right> i {
  display: inline-block;
  width: 0.7rem;
  height: 0.35rem;
  line-height: 0.35rem;
  background-color: #ff9900;
  font-size: 0.2rem;
  font-style: normal;
  margin-right: 0.2rem;
  color: #fff;
  text-align: center;
}
del {
  display: block;
  font-size: 0.25rem;
  margin-left: 0.23rem;
  color: #999999;
  /* float: left; */
}
.right>ul>li{
    width: 1.05rem;
    height: .3rem;
    line-height: .3rem;
    border: 1px solid #ff9900;
    font-size: .2rem;
    text-align: center;
    float: left;
    color: #ff9900;
    margin-right: .2rem;
    margin-top: .05rem;
}

</style>