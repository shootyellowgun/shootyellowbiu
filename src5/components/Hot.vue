<template>
  <div>
    <div class="hot">
      <h4>热门搜索</h4>
      <ul>
        <li
          v-for="(item,index) in myhot"
          :key="index"
          :class="item.cla"
          @click="fn(index)"
        >{{item.txt}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myhot: [
        { cla: "active", txt: "周笔畅 新歌" },
        { cla: "", txt: "话语原创十大金曲" },
        { cla: "", txt: "周杰伦" },
        { cla: "", txt: "COMING HOME" },
        { cla: "", txt: "我们很好 林俊杰" },
        { cla: "", txt: "17岁" },
        { cla: "", txt: "余情未了 魏新雨" },
        { cla: "", txt: "陪你到世界之巅" },
        { cla: "", txt: "SOMI" }
      ],
      mytext: "哈哈"
    };
  },
  methods: {
    fn(i) {
      this.myhot.forEach(item => {
        item.cla = "";
      });
      this.myhot[i].cla = "active";
      this.$emit("getHot", this.myhot[i].txt);
    }
  }
};
</script>

<style scoped>
.hot {
  padding: 20px;
}
.hot h4 {
  text-align: left;
}
.hot li {
  float: left;
  margin-right: 10px;
  margin-top: 5px;
  border: 1px solid #000;
  color: #000;
  border-radius: 20px;
  padding: 5px;
}
.hot li.active {
  border: 1px solid #f00;
  color: #ff0000;
}
</style>
