<template>
  <div class="home">
    <div class="topbar">
      <input type="text" placeholder="Montagne jeunesse" />
      <span class="iconfont">&#xe673;</span>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <!-- <div class="swiper-slide">Slide 1</div> -->
          <div class="swiper-slide" v-for="(item,ind) in arr2" :key="ind">
            <img src="../assets/img/banner.jpg" alt />
          </div>
          <!-- <div class="swiper-slide">Slide 3</div> -->
        </div>
      </div>
    </div>
    <div class="content">
      <div class="infant itme" v-for="(item,index) in arr" :key="index">
        <div class="infant-title">
          <span class="iconfont" v-html="item.icon"></span>
          {{item.name}}
        </div>
        <div class="infant-inner itme-inner">
          <ul>
            <li v-for="(itemer,indexer) in item.list" :key="indexer">
              <router-link :to="'/details/'+itemer.id">
                <img :src="itemer.thumbnail" alt />
                <p>{{itemer.name}}</p>

                <div class="price">
                  <span>￥{{itemer.reduct_price}}</span>
                  <i>￥{{itemer.original_price}}</i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      arr: [],
      arr1: [
        { icon: "&#xe610;" },
        { icon: "&#xe60f;" },
        { icon: "&#xe612;" },
        { icon: "&#xe601;" },
        { icon: "&#xe683;" },
        { icon: "&#xe6e9;" }
      ],
      arr2: [1, 2, 3]
    };
  },
  created() {
    this.$axios.get("/api/getIndexData").then(res => {
      if (res.data.code == 200) {
        this.arr = res.data.data;
      }
      this.arr.forEach((item, index) => {
        this.arr[index].icon = this.arr1[index].icon;
      });
      
    });
    this.$eventbus.$emit("getfalse");
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      autoplay: true
    });
    console.log(swiper);
  },
  methods: {}
};
</script>
<style scoped>
@import url(../../node_modules/swiper/css/swiper.min.css);
@import url(../assets/css/swiper.css);
* {
  background-size: 2.4rem 2.7rem;
}
.home {
  height: 4.8rem;
}
.topbar {
  text-align: center;
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
  border: none;
  outline: none;
}
.banner img {
  width: 100%;
}
.banner .swiper-container {
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
.content .itme-inner a {
  display: block;
}
.content .itme-inner ul {
  display: flex;
  justify-content: space-between;
}
.content .itme-inner ul img {
  width: 95%;
  height: 70%;
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
  color: black;
  padding: 0 0.2rem;
}
</style>