<template>
  <div class="adduser">
    <h2>添加/修改管用户</h2>
    <el-form ref="form" :model="form" label-width="80px" class="myform perfome">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.pass1" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input type="password" v-model="form.pass2" placeholder="请确认密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.attribute" placeholder="请输入电话"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.attribute" placeholder="请输入邮箱"></el-input>
      </el-form-item>

      <el-form-item label="邮箱">
        <el-radio v-model="form.radio" label="1">男</el-radio>
        <el-radio v-model="form.radio" label="2">女</el-radio>
      </el-form-item>

      <el-form-item label="身份证号">
        <el-input v-model="form.attribute" placeholder="请输入身份证号"></el-input>
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="form.attribute" placeholder="请输入备注"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button @click="ret">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pass1: "",
        pass2: "",
        date1: "",
        attribute: "",
        radio: "1"
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    ret() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.adduser {
  height: 100%;
  background-color: brown;
}
h2 {
  font-size: 30px;
  line-height: 40px;
  text-align: left;
  padding-left: 20px;
  color: #ffffff;
}
.el-form {
  background-color: transparent;
}
</style>