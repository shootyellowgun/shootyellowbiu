<template>
  <div>{{myBoj.txt}}</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, txt: "鹏鹏拉屎不洗手" },
        { id: 2, txt: "欣欣吃饭不洗手" },
        { id: 3, txt: "鹏鹏给欣欣做饭不洗手" },
        { id: 4, txt: "欣欣吃鹏鹏做的饭不洗手" }
      ],
      myBoj: null
    };
  },
  created() {
    var id = this.$route.params.id;
    console.log(id);
    var o = this.list.find(item => {
      return item.id == id;
    });
    this.myBoj = o;
  }
};
</script>