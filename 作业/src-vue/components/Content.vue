<template>
  <div class="content">
    <ul>
      <li v-for="(item) in mysmli" :key="item.id">
        <router-link :to="'/details'+item.id">{{item.title}}</router-link>
        <el-button type="primary" plain>
          <router-link :to="'/update'+item.id">修改</router-link>
        </el-button>
        <el-button type="primary" plain @click="del(item.id)" class="del">删除</el-button>
      </li>
    </ul>
    <el-pagination
      layout="prev, pager, next"
      :total="allnum"
      :background="true"
      @current-change="mychange"
      :current-page.sync="num"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylist: [],
      allnum: 0,
      num: 1,
      mysmli: []
    };
  },
  created() {
    this.$axios.get("http://127.0.0.1:3003/mylist").then(res => {
      this.mylist = res.data;
      this.fn();
      console.log(this.mysmli);
      this.allnum = res.data.length;
    });
  },
  methods: {
    del(id) {
      this.$axios.delete("http://127.0.0.1:3003/mylist/" + id).then(res => {
        if (res.status == 200) {
          this.$router.go(0);
        }
      });
    },
    // prev() {
    //   this.fn();
    //   console.log(this.mysmli);
    // },
    // next() {
    //   this.fn();
    //   console.log(this.mysmli);
    // },
    fn() {
      this.mysmli = this.mylist.filter((item, index) => {
        return index >= this.num * 10 - 10 && index < this.num * 10;
      });
    },
    mychange() {
      this.fn();
    }
  }
};
</script>

<style scoped>
li {
  text-align: left;
  position: relative;
}
button {
  position: absolute;
  left: 20%;
  height: 30px;
  line-height: 10px;
}
button.del {
  left: 25%;
}
a {
  color: #409eff;
  text-decoration: none;
}
button:hover a {
  color: #ffffff;
}
</style>
