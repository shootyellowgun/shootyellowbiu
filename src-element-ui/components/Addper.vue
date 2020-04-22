<template>
  <div class="addper">
    <h2>添加/修改管理员</h2>
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
      <el-form-item label="属性">
        <el-input v-model="form.attribute" placeholder="请输入属性"></el-input>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新建</el-button>
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
        attribute: ""
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
.addper {
  background-color: blue;
  height: 100%;
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