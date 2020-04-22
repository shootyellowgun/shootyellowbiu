<template>
  <div class="top">
      <div class="height">
          <div class="fh"></div>
          <div class="cart"></div>
          <div class="list"></div>
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* .top{
    text-align: center;
} */
.height{
    height: 20px;
    background-color: #ff9900;}
.height>div{
    width: .55rem;
    height: .55rem;
    background-color: #b2b2b2;
    float: left;
    border-radius: 50%;
}
.height>.cart,.height>.list{
    float: right;
}
</style>