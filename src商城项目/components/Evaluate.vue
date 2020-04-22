<template>
  <div class="evaluate">
    <div class="nav">
      <ul>
        <li
          v-for="(value,key,index) in buyerReviews"
          :key="index"
          :class="mydata[index].cla"
          @click="fn(index)"
        >{{mydata[index].txt}}</li>
      </ul>
    </div>
    <Evealuateinner :choose="choose" :buyerReviews="buyerReviews"></Evealuateinner>
  
  </div>
</template>

<script>
import Evealuateinner from "./Evealuateinner.vue";
export default {
  components: {
    Evealuateinner
  },
  props: ["buyerReviews"],
  data() {
    return {
      mydata: [
        { cla: "active", txt: "全部评价" },
        { cla: "", txt: "好评" },
        { cla: "", txt: "差评" },
        { cla: "", txt: "晒单" }
      ],
      choose: "全部评价"
    };
  },
  methods: {
    fn(i) {
      this.mydata.forEach(item => {
        item.cla = "";
      });
      this.mydata[i].cla = "active";
      this.fly = false;
      this.choose = this.mydata[i].txt;
    }
  }
};
</script>

<style scoped>
.nav {
  height: 0.7rem;
  border-bottom: 1px solid #cccccc;
  margin-top: 0.1rem;
  padding-bottom: 0.1rem;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.nav li {
  float: left;
  font-size: 0.3rem;
  width: 1.2rem;
  text-align: center;
  background-color: #999999;
  padding: 0.1rem 0.2rem;
  border-radius: 0.3rem;
  color: #fff;
}
.nav li a {
  color: #fff;
}
.nav li.active {
  background-color: #ff9900;
}
</style>
