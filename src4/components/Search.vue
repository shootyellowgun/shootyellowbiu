<template>
  <div class="search">
    <div :class="cla">
      <input type="text" placeholder="搜索歌曲、歌单、专辑" @click="cla='inpu';flag=false" :value="val" />
      <span @click="cla='inp';flag=true">取消</span>
    </div>
    <Hot @getHot="getH" v-if="flag"></Hot>
    <History @getHistory="getHis" v-if="!flag"></History>
  </div>
</template>

<script>
import Hot from "./Hot.vue";
import History from "./History.vue";
export default {
  components: {
    Hot,
    History
  },
  data() {
    return {
      cla: "inp",
      val: "",
      flag: "true"
    };
  },
  methods: {
    getH(v) {
      this.val = v;
    },
    getHis(v) {
      this.val = v;
    }
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
