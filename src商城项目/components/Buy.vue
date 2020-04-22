<template>
  <div class="buy-wrap">
    <transition
      enter-class
      enter-active-class="animated fadeInUp"
      enter-to-class
      leave-class
      leave-active-class="animated fadeOutDown"
      leave-to-class
    >
      <div class="buy" v-show="mybuytag">
        <div class="buy-top">
          <div class="img">
            <img :src="myimg" alt />
          </div>
          <div class="txt">
            <p>
              ￥
              <span>{{price}}</span>
            </p>
            <p>库存{{myobj.total}}件</p>
            <p>{{choose}}</p>
          </div>
          <span class="iconfont" @click="fn3">&#xe654;</span>
        </div>
        <div class="clear"></div>

        <div class="buy-num">
          <p>
            购买数量
            <span>
              <i @click="sub">-</i>
              <b>{{num}}</b>
              <i @click="add">+</i>
            </span>
          </p>
        </div>
        <div class="size">
          <p>{{size}}</p>
          <div>
            <span
              v-for="(item,index) in mysize"
              :key="index"
              @click="fn1(index)"
              :class="mysizecla[index].cla"
            >{{item}}</span>
          </div>
        </div>
        <div class="age">
          <p>{{age}}</p>
          <span
            v-for="(item,index) in myage"
            :key="index"
            @click="fn2(index)"
            :class="myagecla[index].cla"
          >{{item}}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["mybuytag"],
  data() {
    return {
      mysize: [],
      myage: [],
      mysizecla: [{ cla: "" }, { cla: "" }, { cla: "" }, { cla: "" }],
      myagecla: [{ cla: "" }, { cla: "" }],
      myobj: [],
      // choose: "请选择商品属性",
      choosesize: "",
      chooseage: "",
      num: 1,
      price: "",
      myimg: "",
      size: "",
      age: "",
      myid: "",
      myname: ""
    };
  },
  created() {
    this.$eventbus.$on("getarr", v => {
      // console.log(v);
      this.myobj = v;
      this.myimg = this.myobj.swiperImgArr[0];
      this.mysize = this.myobj.buySelect[0].list;
      this.myage = this.myobj.buySelect[1].list;
      this.size = this.myobj.buySelect[0].name;
      this.age = this.myobj.buySelect[1].name;
      this.price = this.myobj.reduct_price;
      this.myid = this.myobj.pid;
      this.myname = this.myobj.name;
    });
  },
  methods: {
    fn1(i) {
      this.mysizecla.forEach(item => {
        item.cla = "";
      });
      this.mysizecla[i].cla = "active";
      this.choosesize = this.mysize[i];
    },
    fn2(i) {
      this.myagecla.forEach(item => {
        item.cla = "";
      });
      this.myagecla[i].cla = "active";
      this.chooseage = this.myage[i];
    },
    sub() {
      if (this.num > 1) {
        this.num--;
      }
    },
    add() {
      this.num++;
      // this.$emit("go", this.num);
    },
    fn3() {
      this.$emit("getf");
    }
  },
  computed: {
    choose() {
      return this.choosesize + "" + this.chooseage || "请选择商品属性";
    },
    sum() {
      if (this.choosesize && this.chooseage) {
        return this.num * this.price;
      }
      return 0;
    },
    addobj() {
      return {
        id: this.myid,
        name: this.myname,
        price: this.price,
        num: this.num,
        userid: "001",
        imgurl: this.myimg,
        flag: false,
        fuck: true,
        start: ""
      };
    }
  },
  watch: {
    sum(v) {
      v = v + ".00";
      this.$emit("gets", v);
    },
    addobj: {
      deep: true,
      handler: function(val) {
        this.$emit("getobj", val);
      }
    }
  }
};
</script>

<style scoped>
.buy-wrap {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0.4rem;
  bottom: 2.05rem;
  background-color: rgba(0, 0, 0, 0.7);
}
.buy {
  box-sizing: border-box;
  height: 5.8rem;
  padding: 0.2rem 0.5rem;
  position: fixed;
  bottom: 2.05rem;
  background-color: #fff;
  width: 100%;
}
.buy-top {
  height: 1.75rem;
  position: relative;
}
.img {
  width: 2rem;
  height: 2rem;
  position: relative;
  top: -0.5rem;
  border: 4px solid #ccc;
  border-radius: 0.1rem;
  float: left;
}
.img > img {
  width: 100%;
  height: 100%;
}
.txt {
  font-size: 0.28rem;
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
}
.txt > p:nth-child(1) {
  color: #eb2222;
}
.buy-top > span {
  float: right;
  font-size: 0.5rem;
}
.clear {
  clear: both;
}
.buy-num {
  font-size: 0.28rem;
  overflow: hidden;
}
.buy-num span {
  float: right;
}
.buy-num span i {
  font-style: normal;
  width: 0.5rem;
  height: 0.5rem;
  display: inline-block;
  background-color: #999999;
  border: 1px solid #999999;
  text-align: center;
  line-height: 0.5rem;
}
.buy-num span b {
  font-weight: normal;
  width: 1rem;
  height: 0.5rem;
  display: inline-block;
  border: 1px solid #999999;
  text-align: center;
  line-height: 0.5rem;
}
.size {
  font-size: 0.28rem;
}
.size p {
  margin-bottom: 0.2rem;
}
.size span {
  padding: 0.05rem 0.6rem;
  margin-right: 0.2rem;
  background-color: #dddddd;
  border-radius: 0.15rem;
}
.size span.active {
  background-color: #ff9900;
}
.age {
  font-size: 0.28rem;
  margin-top: 0.2rem;
}
.age p {
  margin-bottom: 0.2rem;
}
.age span {
  padding: 0.05rem 0.6rem;
  margin-right: 0.2rem;
  background-color: #dddddd;
  border-radius: 0.15rem;
}
.age span.active {
  background-color: #ff9900;
}
</style>
