<template>
  <div class="details">
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,ind) in arr.swiperImgArr" :key="ind">
            <img :src="item" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="innertext">
      <div class="text">
        <p>{{arr.name}}</p>
        <span>
          <i class="iconfont">&#xe63f;</i> 收藏
        </span>
      </div>
      <div class="price">
        <div class="price-left">
          <div class="now">￥{{arr.reduct_price}}</div>
          <del class="old">￥{{arr.original_price}}</del>
        </div>
        <div class="price-right">
          <div class="one">
            <ul>
              <li>{{arr.allowance*100/10}}折</li>
              <li>{{freeShip}}</li>
            </ul>
          </div>
          <div class="two">
            <ul>
              <li v-for="(item,index) in arr.describe" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li
          v-for="(item,ind) in data"
          :key="ind"
          @click="fn(item.tab,ind)"
          :class="item.cla"
        >{{item.name}}</li>
      </ul>
    </div>
    <Detailed v-if="tag" :shopDes="arr.shopDes"></Detailed>
    <Evaluate v-if="!tag" :buyerReviews="arr.buyerReviews"></Evaluate>
  </div>
</template>

<script>
import Swiper from "swiper";
import Detailed from "./Detailed.vue";
import Evaluate from "./Evaluate.vue";
export default {
  components: {
    Detailed,
    Evaluate
  },
  data() {
    return {
      arr: [1, 2, 3],
      data: [
        { name: "商品详情", cla: "active" },
        { name: "买家口碑", cla: "" }
      ],
      freeShip: "包邮",
      tag: true
    };
  },
  created() {
    var id = this.$route.params.id;
    this.$axios.get("/api/getDetails?pid=" + id).then(res => {
      this.arr = res.data.data;

      if (this.arr.isFreeShip) {
        this.freeShip = "包邮";
      } else {
        this.freeShip = "不包邮";
      }
      this.$eventbus.$emit("getarr", this.arr);
    });
    this.$emit("detailstrue");
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    console.log(swiper);
  },
  methods: {
    fn(v, i) {
      this.$emit("changev");
      this.data.forEach(item => {
        item.cla = "";
      });
      this.data[i].cla = "active";
      if (i) {
        this.tag = false;
      } else {
        this.tag = true;
      }
    }
  }
};
</script>

<style scoped>
@import url(../../node_modules/swiper/css/swiper.min.css);
@import url(../assets/css/swiper.css);
.banner {
  height: 6.85rem;
}
.banner img {
  width: 100%;
}
.banner .swiper-container {
  width: 100%;
}
.innertext {
  height: 1.85rem;
  border-top: 1px solid #eeeeee;
  background-color: #fff;
  padding-top: 0.1rem;
}
.text {
  display: flex;
  font-size: 0.3rem;
  padding: 0 0.3rem;
}
.text p {
  flex: 8;
  font-weight: bold;
}
.text span {
  color: #eb2222;
  flex: 1;
  text-align: center;
  font-size: 0.14rem;
}
.text span i {
  font-style: normal;
  font-size: 0.5rem;
}
.price {
  display: flex;
  font-size: 0.25rem;
  padding: 0 0.2rem;
}
.price-left {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.price-left .now {
  color: #ef4b4b;
  flex: 1;
}
.price-left .old {
  font-size: 0.2rem;
  color: #cccccc;
  margin-top: 0.1rem;
  flex: 1;
  text-decoration: line-through;
}
.price-right {
  flex: 9;
  display: flex;
  flex-direction: column;
}
.price-right .one {
  flex: 1;
}
.price-right .two {
  flex: 1;
}
.price-right .one li {
  padding: 0 0.1rem;
  background-color: #ff9900;
  margin-right: 0.1rem;
  float: left;
  color: #fff;
}
.price-right .two li {
  padding: 0 0.1rem;
  margin-right: 0.1rem;
  background-color: #ffffff;
  color: #ff9900;
  float: left;
  border: 1px solid #ff9900;
}
.nav {
  margin-top: 0.32rem;
  background-color: #fff;
}
.nav ul {
  display: flex;
  justify-content: space-around;
}
.nav ul li {
  width: 1.5rem;
  line-height: 0.45rem;
  text-align: center;
  font-size: 0.24rem;
  color: #999;
  border-bottom: 0.02rem solid white;
}
.nav ul li.active {
  color: #ff9900;
  border-bottom: 0.03rem solid #ff9900;
}
</style>