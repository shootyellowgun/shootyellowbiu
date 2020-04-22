<template>
  <div class="head">
    <ul>
      <li v-for="(item,index) in mylist" :key="index" :class="item.cla" @click="fn(index)">
        <router-link :to="item.rou">{{item.inner}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mylist: [
        { cla: "active", inner: "列表", rou: "/" },
        { cla: "", inner: "添加", rou: "/add" },
        { cla: "", inner: "乱七八糟", rou: "/luan" }
      ]
    };
  },
  methods: {
    fn(i) {
      this.mylist.forEach(item => {
        item.cla = "";
      });
      this.mylist[i].cla = "active";
    }
  }
};
</script>

<style scoped>
.head > ul {
  display: flex;
}
.head > ul > li {
  flex: 1;
}
.head > ul > li.active {
  background-color: gold;
}
.head > ul > li:hover a {
  color: #fff;
  text-decoration: underline;
}
.head > ul > li.active > a {
  color: blue;
}
a {
  color: #000;
  text-decoration: none;
  display: block;
  width: 100%;
}
</style>
