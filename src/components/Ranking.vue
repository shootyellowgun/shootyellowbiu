<template>
  <div
    class="ranking"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="5"
  >
    <div class="items" v-for="(item,index) in mydata" :key="index">
      <div class="left">
        <img :src="item.coverImgUrl" alt />
      </div>
      <div class="right">
        <h2>{{item.name}}</h2>
        <ul>
          <li
            v-for="(itemer,ind) in item.tracks"
            :key="ind"
          >{{ind+1}}、{{itemer.first}} {{itemer.second}}</li>
        </ul>
      </div>
    </div>
    <p class="page-infinite-loading" v-show="loading">
      <span>
        <div class="mint-spinner-fading-circle circle-color-37" style="width: 28px; height: 28px;">
          <div class="mint-spinner-fading-circle-circle is-circle2" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle3" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle4" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle5" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle6" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle7" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle8" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle9" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle10" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle11" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle12" :class="{'bgc':flag}"></div>
          <div class="mint-spinner-fading-circle-circle is-circle13" :class="{'bgc':flag}"></div>
        </div>
      </span>
      {{txt}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: [],
      loading: false,
      list: [],
      txt: "加载中...",
      flag: true
    };
  },
  created() {
    this.$axios.get("http://localhost:3000/toplist/detail").then(res => {
      this.list = res.data.list;
      for (var i = 0; i < 5; i++) {
        this.mydata[i] = this.list[i];
      }
      // this.mydata = res.data.list;
    });
  },
  methods: {
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let num = this.mydata.length;
        let last = this.list.length;
        // console.log(num)
        // console.log(last)
        for (let i = num; i <= num + 5; i++) {
          if (i == last) {
            this.txt = "<我是有底线的>";
            this.flag = false;
            return;
          }
          this.mydata.push(this.list[i]);
        }
        this.loading = false;
      }, 2500);
    }
  }
};
</script>

<style scoped>
.ranking {
  /* text-align: center; */
  background-color: #fff;
}
.items {
  display: flex;
  padding: 10px;
}
.left {
  padding-right: 10px;
}
.right h2 {
  font-size: 18px;
  line-height: 40px;
}
.right li {
  line-height: 20px;
}
.left > img {
  width: 100px;
  height: 100px;
}
.mint-spinner-fading-circle-circle {
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: absolute;
}
.mint-spinner-fading-circle {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.page-infinite-loading {
  text-align: center;
}
.mint-spinner-fading-circle-circle::before {
  content: " ";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  border-radius: 100%;
  -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;
  animation: mint-fading-circle 1.2s infinite ease-in-out both;
}
.bgc::before {
  background-color: #ccc;
}

.mint-spinner-fading-circle-circle.is-circle2 {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
}
.mint-spinner-fading-circle-circle.is-circle2::before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.mint-spinner-fading-circle-circle.is-circle3 {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}
.mint-spinner-fading-circle-circle.is-circle3::before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.mint-spinner-fading-circle-circle.is-circle4 {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}
.mint-spinner-fading-circle-circle.is-circle4::before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.mint-spinner-fading-circle-circle.is-circle5 {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
}
.mint-spinner-fading-circle-circle.is-circle5::before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.mint-spinner-fading-circle-circle.is-circle6 {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
}
.mint-spinner-fading-circle-circle.is-circle6::before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.mint-spinner-fading-circle-circle.is-circle7 {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.mint-spinner-fading-circle-circle.is-circle7::before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.mint-spinner-fading-circle-circle.is-circle8 {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
}
.mint-spinner-fading-circle-circle.is-circle8::before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.mint-spinner-fading-circle-circle.is-circle9 {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
}
.mint-spinner-fading-circle-circle.is-circle9::before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.mint-spinner-fading-circle-circle.is-circle10 {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}
.mint-spinner-fading-circle-circle.is-circle10::before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.mint-spinner-fading-circle-circle.is-circle11 {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
}
.mint-spinner-fading-circle-circle.is-circle11::before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.mint-spinner-fading-circle-circle.is-circle12 {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
}
.mint-spinner-fading-circle-circle.is-circle12::before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes mint-fading-circle {
  0%,
  39%,
  to {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes mint-fading-circle {
  0%,
  39%,
  to {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>
