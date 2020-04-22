<template>
  <div class="add">
    请输入内容：
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" plain @click="add()">提交添加</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    add() {
      if (this.input.length) {
        this.$axios
          .post("http://127.0.0.1:3003/mylist", {
            title: this.input
          })
          .then(res => {
            if (res.status == 201) {
              this.$router.push("/");
            }
          });
      }
    }
  }
};
</script>

<style scoped>
.add {
  text-align: left;
}
.el-input {
  width: 300px;
}
</style>
