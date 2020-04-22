<template>
  <div class="search">
    <div :class="cla">
      <input type="text" placeholder="搜索歌曲、歌单、专辑" @click="cla='inpu'" :value="val" />
      <span @click="cla='inp'">取消</span>
    </div>
    <ul>
      <li v-for="item in mydata" :key="item.id">
        <router-link :to="'/history/'+item.id">{{item.txt}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cla: "inp",
      val: "",
      mydata: [
        { id: 1, txt: "鹏鹏拉屎不洗手" },
        { id: 2, txt: "鹏鹏拉屎不吃饭" },
        { id: 3, txt: "鹏鹏不拉屎" },
        { id: 4, txt: "鹏鹏不洗手" },
        { id: 5, txt: "鹏鹏不吃饭" },
        { id: 6, txt: "鹏鹏不吃屎" },
        { id: 7, txt: "鹏鹏不喝尿" }
      ]
    };
  }
};
</script>

<style scoped>
.inp {
  height: 40px;
  background-color: #f6f6f6;
}
.inp input {
  height: 30px;
  margin-left: 10px;
  margin-top: 5px;
  outline: none;
  border: none;
  padding-left: 30px;
  width: 325px;
  border-radius: 5px;
}
.inp span {
  display: none;
}
.inpu {
  height: 40px;
  background-color: #f6f6f6;
}
.inpu input {
  height: 30px;
  margin-left: 10px;
  margin-top: 5px;
  outline: none;
  border: none;
  padding-left: 30px;
  width: 290px;
  border-radius: 5px;
}
.inpu span {
  display: inline;
  margin-left: 10px;
}
</style>
