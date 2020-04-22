<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px" class="myform">
      <el-form-item label="选择">
        <el-select v-model="form.region" placeholder="请选择用户" class="inp">
          <el-option label="超级管理员" value="chaoji"></el-option>
          <el-option label="普通管理员" value="putong"></el-option>
          <el-option label="用户" value="user"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pass" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <p>
      用户名 admin
      <br />密码 123
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        pass: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("getchange", this.form);
      if (this.myobj.name == "admin" && this.myobj.pass == 123) {
        this.$message({
          message: "恭喜你，登录成功",
          type: "success"
        });
      } else {
        this.$message({
          showClose: true,
          message: "请正确输入",
          type: "error"
        });
      }
    }
  },
  computed: {
    ...mapState(["myobj"])
  }
};
</script>
<style>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  background-image: url("../assets/img/timg1.gif");
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
}
.myform {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.2rem;
  height: 40%;
  border-radius: 0.1rem;
}
.myform .el-input__inner {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1) !important;
}
.myform .el-form-item__label {
  color: #ffffff;
}
p {
  font-size: 12px;
}
</style>