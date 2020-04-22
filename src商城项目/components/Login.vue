<template>
  <div class="login">
    <div class="toper">
      <span class="iconfont" @click="ret">&#xe62c;</span>
      登录
      <span @click="toreg">注册</span>
    </div>
    <div class="inner">
      <ul>
        <li class="phone">
          手机号：
          <input type="text" v-model="user" />
        </li>
        <li class="pass">
          密 码：
          <input type="text" v-model="pass" />
        </li>
        <li class="forget">忘记密码</li>
        <li class="btn" @click="golo">登录</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: "",
      pass: ""
    };
  },
  created() {
    // console.log(animated);
  },
  computed: {
    ...mapState(["myinformations"])
  },
  methods: {
    ret() {
      this.$router.go(-1);
    },
    toreg() {
      this.$router.push("/Legister");
    },
    golo() {
      if (this.user && this.pass) {
        var o = {
          myname: "鹏鹏",
          myid: this.user,
          mypass: this.pass
        };
        this.$store.commit("addo", o);
        this.$router.push("/mine");
        console.log(this.myinformations);
      }
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
.inner ul > li:nth-child(2) {
  border-bottom: 1px solid #cccccc;
}
.inner ul > li:nth-child(3) {
  height: 1rem;
  line-height: 1rem;
  text-align: right;
}
.inner ul > li:nth-child(4) {
  text-align: center;
  background-color: #ff9900;
  line-height: 1rem;
  height: 1rem;
  border-radius: 0.1rem;
  color: #fff;
}
</style>