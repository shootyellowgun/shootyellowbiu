<template>
  <div class="user">
    <h2>用户列表</h2>
    <router-link to="/adduser">
      <el-button type="success">新建</el-button>
    </router-link>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column label="序号" prop="id"></el-table-column>
      <el-table-column label="账号" prop="name"></el-table-column>
      <el-table-column label="电话" prop="num"></el-table-column>
      <el-table-column label="邮箱" prop="mailbox"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="身份证号" prop="idNum"></el-table-column>
      <el-table-column label="备注" prop="address"></el-table-column>
      <el-table-column label="时间" prop="date"></el-table-column>
      <el-table-column align="right">
        <template slot="header">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
          idNum: "654639199813648563",
          mailbox: "57839394@qq.com",
          num: "18080834055"
        }
      ],
      search: ""
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style scoped>
.user {
  background-color: aqua;
  height: 100%;
  line-height: 30px;
  padding: 10px 10px;
  box-sizing: border-box;
  text-align: left;
}
h2 {
  font-size: 20px;
  line-height: 30px;
  padding-left: 20px;
  margin-bottom: -20px;
}
.el-button {
  margin-left: 20px;
  margin-top: -10px;
}
.el-table {
  margin-top: 20px;
}
</style>