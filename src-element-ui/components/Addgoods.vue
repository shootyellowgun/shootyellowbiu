<template>
  <div class="addgoods">
    <h2>添加/修改管理员</h2>
    <el-form ref="form" :model="form" label-width="80px" class="myform perfome">
      <el-form-item label="ip">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="机房">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="宽带">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio v-model="form.radio" label="1">空闲</el-radio>
        <el-radio v-model="form.radio" label="2">已出售</el-radio>
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
.addgoods {
  background-color: darkmagenta;
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