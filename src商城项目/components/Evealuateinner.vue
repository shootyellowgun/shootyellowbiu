<template>
  <div class="evaluateinner1">
    <ul>
      <li v-for="(item,index) in mydata" :key="index">
        <div>
          <span>{{item.buyerName}}</span>
          <i>{{new Date(parseInt(item.createTime)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(parseInt(item.createTime)).toTimeString().substr(0, 8)}}</i>
        </div>
        <div class="img" v-for="(itemer,ind) in item.postImg" :key="ind">
          <img :src="itemer" alt />
        </div>
        <p class="txt1">{{item.postDescribe}}</p>
        <p class="txt2">{{item.adminReviews}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.mydata = this.buyerReviews.all;
  },
  props: ["choose", "buyerReviews"],
  data() {
    return {
      mydata: []
    };
  },
  watch: {
    choose(val) {
      switch (val) {
        case "全部评价":
          this.mydata = this.buyerReviews.all;
          break;
        case "好评":
          this.mydata = this.buyerReviews.good;
          break;
        case "差评":
          this.mydata = this.buyerReviews.bad;
          break;
        case "晒单":
          this.mydata = this.buyerReviews.postForm;
          break;
      }
    }
  }
};
</script>

<style scoped>
li {
  border-bottom: 1px solid #f6f6f6;
  padding: 0.2rem;
  font-size: 0.2rem;
}
.evaluateinner1 div {
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}
.evaluateinner1 div span {
  color: #ff9900;
}
.evaluateinner1 div i {
  font-style: normal;
  font-size: 0.2rem;
  float: right;
}
.txt1 {
  color: #999999;
}
.txt2 {
  padding: 0.1rem;
  color: #666666;
  background-color: #dddddd;
  border-radius: 0.2rem;
}
</style>
