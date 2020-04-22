<template>
  <!-- 商城项目 -->
  <div class="app">
    <!-- <el-button :plain="true" @click="open2">成功</el-button> -->
    <el-container v-if="!tag">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="15%">
          <ul>
            <router-link to="/person">
              <li>管理员管理</li>
            </router-link>
            <router-link to="/user">
              <li>用户管理</li>
            </router-link>
            <router-link to="/text">
              <li>通知</li>
            </router-link>
            <router-link to="/goods">
              <li>设置管理</li>
            </router-link>
          </ul>
        </el-aside>
        <el-main width="85%">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <Login v-if="tag"></Login>
  </div>
</template>

<script>
import "./assets/js/reset.js";
import Login from "./components/Login.vue";

import { mapState } from "vuex";

export default {
  components: {
    Login
  },
  data() {
    return {
      // tag: true
    };
  },
  methods: {
    // fn() {
    //   console.log(this.myobj);
    // },
    // open2() {
    // }
  },
  created() {
    console.log(this.myobj);
  },
  computed: {
    ...mapState(["myobj"]),
    tag() {
      if (this.myobj.name == "admin" && this.myobj.pass == "123") {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}
i {
  font-style: normal;
}
html,
body {
  height: 100%;
  background: #fff !important;
}
.app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main {
  flex: 1;
  overflow-y: scroll;
}

.el-header,
.el-footer {
  color: #000;
  text-align: center;
  line-height: 40px;
  height: 40px !important;
  font-size: 16px;
  background-color: gold;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 20px;
  font-size: 20px;
  overflow: hidden;
  background-color: darkorange;
}
.el-aside li {
  height: 30px;
  line-height: 30px;
}
.el-aside a {
  color: #000;
}
.el-aside li:hover {
  background-color: crimson;
  color: #fff;
}
.el-main {
  background-color: coral;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0 !important;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-message--success {
  font-size: 20px;
}
.el-message--error {
  font-size: 20px;
}
</style>
