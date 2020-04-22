<template>
  <div class="details">{{input}}</div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  created() {
    console.log(this.$route.params);
    this.$axios
      .get("http://127.0.0.1:3003/mylist/" + this.$route.params.id)
      .then(res => {
        if (res.status == 200) {
          this.input = res.data.title;
        }
      });
  }
};
</script>

<style scoped>
.details {
  text-align: left;
}
</style>
