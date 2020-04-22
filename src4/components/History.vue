<template>
  <div>
    <div class="history">
      <ul>
        <li v-for="(item,index) in mylist" :key="item.id">
          <span class="iconfont">&#xf00f9;</span>
          <p @click="fn(index)">{{item.name}}</p>
          <i class="iconfont" @click="del(index)">&#xe61a;</i>
        </li>
      </ul>
      <p @click="delall" v-if="tag">清除搜索记录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 1,
      mylist: [
        { name: "你把爱还给我 高安", id: 1 },
        { name: "李白", id: 2 },
        { name: "放个大招给你看", id: 3 },
        { name: "话语原创十大金曲", id: 4 }
      ],
      tag: true,
      val: ""
    };
  },
  created() {
    this.n = this.mylist.length;
  },
  methods: {
    fn(i) {
      this.$emit("getHistory", this.mylist[i].name);
    },
    del(i) {
      this.mylist.splice(i, 1);
    },
    delall() {
      this.tag = false;
      this.mylist.splice(0, this.mylist.length);
    }
  }
};
</script>

<style scoped>
.search-inp {
  height: 40px;
  padding: 7px;
  background-color: #f4f4f4;
  line-height: 40px;
  position: relative;
}
.search-inp input {
  border: none;
  outline: none;
  width: 80%;
  padding-left: 25px;
  height: 30px;
  border-radius: 5px;
}
.search-inp span {
  position: absolute;
  left: 13px;
  top: 9px;
}
.search-inp i {
  font-style: normal;
  margin-left: 5px;
  font-size: 14px;
  position: absolute;
  top: 9px;
  right: 10px;
}
.history li {
  position: relative;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #cccccc;
}
.history li span {
  position: absolute;
  left: 10px;
  top: 0px;
}
.history li i {
  position: absolute;
  right: 10px;
  top: 0px;
}
.history li p {
  padding-left: 40px;
}
.history > p {
  text-align: center;
  color: #15be74;
  margin-top: 20px;
  font-size: 14px;
}
</style>
