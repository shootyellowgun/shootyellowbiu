<template>
  <div class="search">
    <div :class="cla">
      <div :class="wrap">
        <div class="iconfont">&#xe62f;</div>
        <router-link to="/search/history">
          <input
            type="text"
            placeholder="搜索歌曲、歌单、专辑"
            @keydown="changeword($event)"
            @click="cla='inpu';icla='two';wrap='myinpu'"
            v-model="val"
          />
        </router-link>
        <i class="iconfont" :class="icla" @click="clear" v-if="val.length">&#xe619;</i>
      </div>

      <router-link to="/search/hot">
        <span @click="cla='inp';icla='one';wrap='myinp'">取消</span>
      </router-link>
    </div>
    <router-view @gethot="gethot" @gethistory="gethistory"></router-view>
    <div class="mysearch">
      <ul v-if="tag">
        <li
          v-for="(item,index) in songs"
          :key="index"
          @click="player(item)"
        >{{item.name}}---{{artists[index]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      cla: "inp",
      val: "",
      icla: "one",
      // songs: [],
      artists: [],
      tag: false,
      wrap: "myinp",
      myimg: ""
    };
  },
  methods: {
    gethot(v) {
      this.val = v;
      this.tag = true;
      this.search();
    },
    gethistory(v) {
      this.val = v;
      this.cla = "inp";
      this.icla = "one";
      this.wrap = "myinp";
      this.tag = true;
      this.search();
    },
    changeword(eve) {
      if (eve.keyCode == 13) {
        this.$store.commit("mychange", this.val);
        this.tag = true;
        this.search();
      }
    },
    clear() {
      this.val = "";
      this.tag = false;
    },
    search() {
      this.$axios
        .get("http://localhost:3000/search?limit=100&keywords=" + this.val)
        .then(res => {
          // this.songs = res.data.result.songs;
          this.$store.commit("getsongs", res.data.result.songs);
          if (this.songs) {
            this.artists = [];
            this.songs.forEach(item => {
              this.artists.push(item.artists[0].name);
            });
          }
        });
    },
    player(x) {
      // https://music.163.com/song/media/outer/url?id=id.mp3
      //http://127.0.0.1:3000/artist/album?id=12396696&limit=30
      this.$axios
        .get(
          "http://127.0.0.1:3000/artist/album?id=" +
            x.artists[0].id +
            "&limit=30"
        )
        .then(res => {
          this.myimg = res.data.artist.picUrl;
          var musicObj = {
            mp3: "https://music.163.com/song/media/outer/url?id=" + x.id,
            img: this.myimg
          };
          this.$store.commit("getmusic", musicObj);
          this.goplay();
        });
    },
    goplay() {
      this.$store.commit("getfalse");
      setTimeout(() => {
        this.$store.commit("gettrue");
      }, 100);
    }
  },
  computed: {
    ...mapState(["songs", "music"])
  }
};
</script>

<style scoped>
.search > div > div > a {
  width: 100% !important;
}
.inp {
  height: 40px;
  background-color: #f6f6f6;
}
.inp input {
  height: 30px;
  margin-top: 5px;
  outline: none;
  border: none;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
}
.inp span {
  display: none;
}
.inpu {
  height: 40px;
  background-color: #f6f6f6;
}
.myinp {
  position: relative;
  width: 90%;
  margin-left: 10px;
}
.myinpu {
  position: relative;
  width: 80%;
  margin-left: 10px;
  float: left;
}
.inpu input {
  height: 30px;
  margin-top: 5px;
  outline: none;
  border: none;
  padding-left: 30px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
}
.inpu span {
  display: inline-block;
  margin-left: 5%;
  height: 40px;
  line-height: 40px;
  vertical-align: bottom;
}
i {
  font-style: normal;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
}
.search > div {
  position: relative;
}
i {
  position: absolute;
  top: 10px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  right: 10px;
}
i.two {
  right: 10px;
}
.mysearch ul {
  padding-left: 20px;
}
.mysearch li {
  margin-top: 20px;
}
.search > div > div > div.iconfont {
  position: absolute;
  top: 12px;
  left: 9px;
}
</style>
