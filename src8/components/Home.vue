<template>
  <div class="home">
    <div class="topbar">
      <input type="text" placeholder="Montagne jeunesse" />
      <span class="iconfont">&#xe641;</span>
    </div>
    <div class="banner">
      <img src="../assets/img/banner.jpg" alt />
    </div>
    <div class="content">
      <div class="hot itme">
        <div class="hot-title">
          <span class="iconfont">&#xe629;</span> 今日疯抢
        </div>
        <div class="hot-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <div class="price">
                <span>￥88.00</span>
                <del>￥96.00</del>
              </div>
              <p>美国/SUPER MILD沐浴露500ml</p>
            </li>
            <li>
              <div class="myimg"></div>
              <div class="price">
                <span>￥88.00</span>
                <del>￥96.00</del>
              </div>
              <p>美国/SUPER MILD沐浴露500ml</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="infant itme">
        <div class="infant-title">
          <span class="iconfont">&#xe629;</span> 母婴专区
        </div>
        <div class="infant-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <p>Nutrilon荷兰牛栏婴儿配方奶粉3段...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
            <li>
              <div class="myimg"></div>
              <p>Nutrilon荷兰牛栏婴儿配方奶粉3段...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="skincare itme">
        <div class="skincare-title">
          <span class="iconfont">&#xe629;</span> 美妆护肤
        </div>
        <div class="skincare-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <p>LA ROCHE-POSAY理肤泉 疤痕...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
            <li>
              <div class="myimg"></div>
              <p>LA ROCHE-POSAY理肤泉 疤痕...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="life itme">
        <div class="life-title">
          <span class="iconfont">&#xe629;</span> 家居生活
        </div>
        <div class="life-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <p>法国Neolid正品 可爱动物图案扭扭杯...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
            <li>
              <div class="myimg"></div>
              <p>法国Neolid正品 可爱动物图案扭扭杯...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="food itme">
        <div class="food-title">
          <span class="iconfont">&#xe629;</span> 食品营养
        </div>
        <div class="food-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <p>【纯天然淡斑法】Caudalie欧缇丽葡...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
            <li>
              <div class="myimg"></div>
              <p>【纯天然淡斑法】Caudalie欧缇丽葡...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="world itme">
        <div class="world-title">
          <span class="iconfont">&#xe629;</span> 全球直邮
        </div>
        <div class="world-inner itme-inner">
          <ul>
            <li>
              <div class="myimg"></div>
              <p>【纯天然淡斑法】Caudalie欧缇丽葡...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
            <li>
              <div class="myimg"></div>
              <p>【纯天然淡斑法】Caudalie欧缇丽葡...</p>

              <div class="price">
                <span>￥298.00</span>
                <i>￥326.00</i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
* {
  background-size: 2.4rem 2.7rem;
}
.home {
  text-align: center;
  height: 4.8rem;
}
.topbar {
  height: 1rem;
  position: relative;
  background-color: #fa3f70;
}
.topbar > span {
  position: absolute;
  right: 1.3rem;
  top: 0.3rem;
}
.topbar input {
  width: 5.2rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  height: 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
}
.banner img {
  width: 100%;
}
.content {
  padding-left: 0.2rem;
  background-color: #fafafa;
}
.content div.itme {
  height: 5.4rem;
}
.content div.itme .itme-inner {
  left: 0;
}
.content .hot {
  overflow: hidden;
  position: relative;
}
.content .hot .hot-title {
  padding: 10px 0;
  font-size: 0.23rem;
}
.content .hot .hot-title span {
  font-size: 0.23rem;
  color: orange;
}
.content .hot .hot-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .hot .hot-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .hot .hot-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/护手霜.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .hot .hot-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .hot .hot-inner ul li .price span {
  font-size: 0.2rem;
  color: red;
}
.content .hot .hot-inner ul li .price del {
  float: right;
  color: #cccccc;
}
.content .hot .hot-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.content .infant {
  overflow: hidden;
  position: relative;
}
.content .infant .infant-title {
  padding: 0 0 10px 0;
  font-size: 0.23rem;
}
.content .infant .infant-title span {
  font-size: 0.23rem;
  color: blue;
}
.content .infant .infant-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .infant .infant-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .infant .infant-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/奶粉1.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .infant .infant-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .infant .infant-inner ul li .price span {
  font-size: 0.22rem;
  color: orange;
}
.content .infant .infant-inner ul li .price i {
  float: right;
  color: #aaaaaa;
  font-size: 0.22rem;
  font-style: normal;
}
.content .infant .infant-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.content .skincare {
  overflow: hidden;
  position: relative;
}
.content .skincare .skincare-title {
  padding: 0 0 10px 0;
  font-size: 0.23rem;
}
.content .skincare .skincare-title span {
  font-size: 0.23rem;
  color: pink;
}
.content .skincare .skincare-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .skincare .skincare-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .skincare .skincare-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/擦手.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .skincare .skincare-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .skincare .skincare-inner ul li .price span {
  font-size: 0.22rem;
  color: orange;
}
.content .skincare .skincare-inner ul li .price i {
  float: right;
  color: #aaaaaa;
  font-size: 0.22rem;
  font-style: normal;
}
.content .skincare .skincare-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.content .life {
  overflow: hidden;
  position: relative;
}
.content .life .life-title {
  padding: 0 0 10px 0;
  font-size: 0.23rem;
}
.content .life .life-title span {
  font-size: 0.23rem;
  color: green;
}
.content .life .life-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .life .life-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .life .life-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/杯子.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .life .life-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .life .life-inner ul li .price span {
  font-size: 0.22rem;
  color: orange;
}
.content .life .life-inner ul li .price i {
  float: right;
  color: #aaaaaa;
  font-size: 0.22rem;
  font-style: normal;
}
.content .life .life-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.content .food {
  overflow: hidden;
  position: relative;
}
.content .food .food-title {
  padding: 0 0 10px 0;
  font-size: 0.23rem;
}
.content .food .food-title span {
  font-size: 0.23rem;
  color: red;
}
.content .food .food-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .food .food-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .food .food-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/吃的.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .food .food-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .food .food-inner ul li .price span {
  font-size: 0.22rem;
  color: orange;
}
.content .food .food-inner ul li .price i {
  float: right;
  color: #aaaaaa;
  font-size: 0.22rem;
  font-style: normal;
}
.content .food .food-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
.content .world {
  overflow: hidden;
  position: relative;
}
.content .world .world-title {
  padding: 0 0 10px 0;
  font-size: 0.23rem;
}
.content .world .world-title span {
  font-size: 0.23rem;
  color: yellowgreen;
}
.content .world .world-inner {
  height: 4.8rem;
  width: 14rem;
  position: absolute;
}
.content .world .world-inner ul li {
  width: 3.25rem;
  height: 4.65rem;
  border: 1px solid #eeeeee;
  float: left;
  margin-right: 0.25rem;
  background-color: #fff;
}
.content .world .world-inner ul li .myimg {
  width: 3.25rem;
  height: 3.5rem;
  background-image: url(../assets/img/嗯.jpg);
  background-position: center;
  background-repeat: no-repeat;
}
.content .world .world-inner ul li .price {
  margin-top: 0.2rem;
  padding: 0 0.2rem;
}
.content .world .world-inner ul li .price span {
  font-size: 0.22rem;
  color: orange;
}
.content .world .world-inner ul li .price i {
  float: right;
  color: #aaaaaa;
  font-size: 0.22rem;
  font-style: normal;
}
.content .world .world-inner ul li p {
  font-size: 0.23rem;
  padding: 0 0.2rem;
}
</style>