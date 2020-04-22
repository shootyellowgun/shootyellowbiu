<template>
  <div class="addtext">
    <h2>添加/修改管理员</h2>
    <el-form ref="form" :model="form" label-width="80px" class="myform perfome">
      <el-form-item label="题目">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="内容">
        <el-input type="textarea" :rows="2" v-model="form.textarea"></el-input>
      </el-form-item>
      <el-form-item label="时间">
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
        title: "",
        textarea: ""
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
<style>
.addtext {
  background-color: blueviolet;
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
.myform .el-textarea__inner {
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1) !important;
}
</style>