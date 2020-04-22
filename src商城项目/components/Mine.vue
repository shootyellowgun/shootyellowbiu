<template>
  <div class="mine">
    <div class="toper">
      <span class="iconfont left">&#xe633;</span>
      个人中心
      <span class="iconfont right">&#xe719;</span>
    </div>
    <div class="top">
      <div class="headpic">
        <img src="../assets/img/timg.gif" alt v-if="tag" />
      </div>
      <div class="loginer" @click="goskip">{{myinformation.myname}}</div>
    </div>
    <div class="collection">
      <p>
        <span class="iconfont">&#xe910;</span>
        我的收藏
      </p>
    </div>
    <div class="order">
      <div class="myorder">
        <span>我的订单</span>
        <span>查看全部订单</span>
      </div>
    </div>
    <div class="myorders">
      <div>
        <span class="iconfont">&#xe602;</span>
        待付款
      </div>
      <div>
        <span class="iconfont">&#xe706;</span>
        待发货
      </div>
      <div>
        <span class="iconfont">&#xe62f;</span>
        待收货
      </div>
      <div>
        <span class="iconfont">&#xe646;</span>
        待评价
      </div>
      <div>
        <span class="iconfont">&#xe631;</span>
        退款/售后
      </div>
    </div>
    <div class="address">收货地址管理</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      myinformation: {},
      tag: false
    };
  },
  methods: {
    goskip() {
      if (this.myinformations.myid) {
        console.log(1);
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {
    this.$eventbus.$emit("getfalse");
    if (this.myinformations.myid) {
      this.myinformation = this.myinformations;
      this.tag = true;
    } else {
      this.myinformation = {
        myname: "点击登录",
        myid: "",
        mypass: ""
      };
    }
  },
  computed: {
    ...mapState(["myinformations"])
  }
};
</script>

<style scoped>
.mine {
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  height: 100%;
}
.toper {
  padding: 0 0.2rem;
  box-sizing: border-box;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff9900;
  color: #fff;
  font-size: 0.4rem;
}
.toper > span {
  font-size: 0.4rem;
}
.top {
  height: 2.2rem;
  background-color: #f90;
  position: relative;
}
.headpic {
  width: 1.8rem;
  height: 1.8rem;
  background-color: #e6dfdf;
  border-radius: 50%;
  border: 0.1rem solid #ffffff;
  position: absolute;
  left: 50%;
  margin-left: -0.9rem;
  bottom: -0.7rem;
  overflow: hidden;
}
.headpic > img {
  height: 100%;
}
.loginer {
  width: 1.8rem;
  text-align: center;
  position: absolute;
  left: 50%;
  margin-left: -0.9rem;
  bottom: -1.3rem;
  border: 0.1rem solid transparent;
}
.collection {
  height: 2.6rem;
  background-color: #fafafa;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding-left: 0.2rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.15rem solid #efeeee;
}
.collection > p > span {
  color: red;
}
.myorder {
  height: 1.25rem;
  border-bottom: 1px solid #b3b3b3;
  line-height: 1.25rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.2rem;
  color: #999999;
  background-color: #ffffff;
}
.myorder > span:nth-child(1) {
  color: #333333;
}
.myorders {
  display: flex;
  align-items: center;
  height: 1.9rem;
  justify-content: space-around;
  border-bottom: 0.15rem solid #efeeee;
  background-color: #ffffff;
}
.myorders > div {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 0.3rem;
}
.myorders > div > span {
  font-size: 0.4rem;
}
.address {
  height: 1.3rem;
  display: flex;
  padding-left: 0.3rem;
  font-size: 0.3rem;
  align-items: center;
  background-color: #ffffff;
}
</style>
