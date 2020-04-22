<template>
  <div class="app">
    <Head></Head>
    <div class="main">
      <Banner></Banner>
      <Nav @abc="getd"></Nav>
      <Details v-if="view=='detail'"></Details>
      <Public v-if="view=='public'"></Public>
    </div>

    <Foot></Foot>
  </div>
</template>

<script>

import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";
import Details from "./components/Details.vue";
import Banner from "./components/Banner.vue";
import Public from "./components/Public.vue";
import Nav from "./components/Nav.vue";


export default {
  components: {
    Head,
    Foot,
    Nav,
    Details,
    Banner,
    Public,
  },
  data(){
    return {
        view:"detail",
        isShow:false
    }
  },
  methods:{
    getd(v){
      this.view=v
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  height: 100%;
}
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "微软雅黑";
}
ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-weight: normal;
  font-size: 100%;
}
li {
  list-style: none;
}
.main {
  flex: 1;
  height: 100%;
  overflow-y: scroll;
}
</style>
