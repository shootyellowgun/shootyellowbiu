<template>
  <div class="login">
    <div class="toper">
      <span class="iconfont" @click="ret">&#xe62c;</span>
      注册
      <span @click="tolo">登录</span>
    </div>
    <div class="inner">
      <ul>
        <li class="phone">
          手机号：
          <input type="text" />
        </li>
        <li class="pass">
          密 码：
          <input type="text" />
        </li>
        <li class="forget">
          验证码：
          <input type="text" />
          <span>点击获取</span>
        </li>
        <li class="btn">下一步</li>
        <li>
          <span class="iconfont" v-html="frame" :style="{color:color}" @click="fn"></span>
          我已阅读并同意使用条款和隐私政策
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(animated);
  },
  data() {
    return {
      frame: "&#xe619;",
      color: "#000",
      tag: true
    };
  },
  methods: {
    fn() {
      if (this.tag) {
        this.frame = "&#xe61b;";
        this.tag = !this.tag;
        this.color = "#ff9900";
      } else {
        this.frame = "&#xe619;";
        this.tag = !this.tag;
        this.color = "#000";
      }
    },
    ret() {
      this.$router.go(-1);
    },
    tolo() {
      this.$router.push("/login");
    }
  }
};
</script>

<style  scoped>
.login {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.toper {
  display: flex;
  justify-content: space-between;
  height: 0.95rem;
  background-color: #ff9900;
  line-height: 0.95rem;
  padding: 0 0.2rem;
  color: #fff;
  font-size: 0.3rem;
}
.inner {
  display: flex;
  padding: 0 0.5rem;
  flex: 1;
  flex-direction: column;
  justify-content: center;
}

.inner ul > li {
  height: 1.3rem;
  line-height: 1.3rem;
}
.inner ul > li input {
  outline: none;
  border: none;
}
.inner ul > li:nth-child(1),
.inner ul > li:nth-child(2),
.inner ul > li:nth-child(3) {
  border-bottom: 1px solid #cccccc;
}
.inner ul > li:nth-child(3) {
  margin-bottom: 0.3rem;
}
.inner ul > li:nth-child(4) {
  text-align: center;
  background-color: #ff9900;
  line-height: 1rem;
  height: 1rem;
  border-radius: 0.1rem;
  color: #fff;
}
.inner ul > li:nth-child(5) span {
  margin-right: 0.1rem;
}
</style>  