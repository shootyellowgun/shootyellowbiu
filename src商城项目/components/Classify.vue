<template>
  <div class="classify">
    <div class="topbar">
      <input type="text" placeholder="Montagne jeunesse" />
      <span class="iconfont">&#xe673;</span>
    </div>
    <div class="inner">
      <div class="left">
        <ul>
          <li
            v-for="(item,ind) in arr"
            :key="ind"
            @click="fn(ind)"
            :class="arr1[ind].cla"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <img :src="item.thumbnail" alt />
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$eventbus.$emit("getfalse");
  },
  mounted() {
    this.$axios.get("/api/getClassify").then(res => {
      if (res.data.code == 200) {
        this.arr = res.data.data;
      }
      this.list = res.data.data[0].list;
    });
  },
  data() {
    return {
      arr: [],
      list: [],
      n: 1,
      arr1: [
        { cla: "active" },
        { cla: "" },
        { cla: "" },
        { cla: "" },
        { cla: "" }
      ]
    };
  },
  methods: {
    fn(i) {
      this.arr1.forEach(item => {
        item.cla = "";
      });
      this.arr1[i].cla = "active";
      this.list = this.arr[i].list;
    }
  }
};
</script>
<style scoped>
.topbar {
  text-align: center;
  height: 1rem;
  position: relative;
  background-color: #ff9900;
}
.topbar > span {
  position: absolute;
  right: 1.3rem;
  top: 0.3rem;
}
.topbar input {
  width: 5.2rem;
  box-sizing: border-box;
  padding-left: 0.2rem;
  height: 0.6rem;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  border: none;
  outline: none;
}
.inner .left {
  width: 2rem;
  background-color: #fafafa;
  overflow: hidden;
  float: left;
}
.inner .left li {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-left: 4px solid #fafafa;
}
.inner .left li.active {
  border-left: 4px solid #ff9900;
  background-color: #fff;
}

.right ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.right li {
  width: 45%;
  border: 1px solid #1d84a7;
  margin-left: 2.5%;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
  text-align: center;
  padding-top: 0.1rem;
}
.right li img {
  width: 90%;
}
.right li p {
  line-height: 0.4rem;
  background-color: #1d84a7;
  margin-top: 0.1rem;
}
</style>