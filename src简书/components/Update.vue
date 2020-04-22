<template>
  <div class="update">
    请输入内容：
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" plain @click="update()">提交修改</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      id: ""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$axios
      .get("http://127.0.0.1:3003/mylist/" + this.$route.params.id)
      .then(res => {
        if (res.status == 200) {
          this.input = res.data.title;
        }
      });
  },
  methods: {
    update() {
      this.$axios
        .put("http://127.0.0.1:3003/mylist/" + this.id, {
          title: this.input
        })
        .then(res => {
          if (res.status == 200) {
            this.$router.push("/");
          }
        });
    }
  }
};
</script>

<style scoped>
.update {
  text-align: left;
}
.el-input {
  width: 300px;
}
</style>
