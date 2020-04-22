<template>
  <div class="foot">
    <span class="foot-text" v-if="flag">安装QQ音乐，发现更多精彩</span>
    <div class="player" v-if="!flag">
      <div class="control">
        <div class="left iconfont" title="上一首" @touchstart="previous">&#xe698;</div>
        <div class="go-off iconfont" title="播放" v-html="myplay" @touchstart="toplay"></div>
        <div class="right iconfont" title="下一首" @touchstart="next">&#xe6a1;</div>
      </div>
      <div class="img">
        <img :src="music.img" alt />
      </div>
      <div class="progress">
        <div class="line" ref="line">
          <div class="innerline" :style="{'width':width}"></div>
          <div
            class="spot"
            :style="{'left':left}"
            @touchmove="move($event)"
            @touchend="leave"
            @touchstart="start($event)"
          >
            <div class="mytime" v-show="timeshow">
              {{Math.floor(time/60)+":"+(Math.floor(time%60)>9?Math.floor(time%60):'0'+Math.floor(time%60))}} /
              {{Math.floor(alltime/60)+":"+(Math.floor(alltime%60)>9?Math.floor(alltime%60):'0'+Math.floor(alltime%60))}}
            </div>
          </div>
        </div>
      </div>
      <div class="sound">
        <div class="ico iconfont" v-html="mysound" @click="tag = true"></div>
        <div class="changesound" v-show="tag">
          <div class="ret iconfont" @click="tag = false">&#xe619;</div>
          <div class="soundline" ref="soundline">
            <div class="soundinner" :style="{'height':height}">
              <div
                class="soundspot"
                @touchstart="soundstart($event)"
                @touchmove="soundmove($event)"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="round iconfont" v-html="myround" @touchstart="toround">{{this.$refs.myaudio}}</div>
    </div>

    <audio ref="myaudio" :src="music.mp3" id="audio" :loop="isloop" @ended="toend"></audio>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      flag: false,
      myround: "&#xe623;",
      //&#xe66d;
      myplay: "&#xe681;",
      //&#xe616;
      mysound: "&#xe662;",
      //&#xe747;
      isloop: false,
      alltime: "",
      time: "",
      timer: null,
      width: 0,
      left: 0,
      startx: "",
      timeshow: false,
      goplay: false,
      soundy: "",
      height: "50%",
      tag: false
    };
  },
  computed: {
    ...mapState(["music", "play", "list"])
    // time(){
    //   return this.$refs.myaudio.duration || "";
    // }
  },
  methods: {
    toplay() {
      if (this.myplay == "&#xe681;") {
        this.myplay = "&#xe616;";
        this.$store.commit("gettrue");
      } else {
        this.myplay = "&#xe681;";
        this.$store.commit("getfalse");
      }
    },
    toend() {
      this.$store.commit("getfalse");
      if (this.myround == "&#xe623;") {
        for (var i = 0; i < this.list.length; i++) {
          if (this.list[i].mp3 == this.music.mp3) {
            if (i == this.list.length - 1) {
              this.$store.commit("setmusic", this.list[0]);
            } else {
              this.$store.commit("setmusic", this.list[i + 1]);
            }
            break;
          }
        }
        setTimeout(() => {
          this.$store.commit("gettrue");
        });
      } else if (this.myround == "&#xe77d;") {
        var num = Math.floor(Math.random() * this.list.length);
        this.$store.commit("setmusic", this.list[num]);
        setTimeout(() => {
          this.$store.commit("gettrue");
        });
      }
    },
    previous() {
      this.$store.commit("getfalse");
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].mp3 == this.music.mp3) {
          if (i == 0) {
            this.$store.commit("setmusic", this.list[this.list.length - 1]);
            break;
          } else {
            this.$store.commit("setmusic", this.list[i - 1]);
          }
        }
      }
      setTimeout(() => {
        this.$store.commit("gettrue");
      });
    },
    next() {
      this.$store.commit("getfalse");
      for (var i = 0; i < this.list.length; i++) {
        if (this.list[i].mp3 == this.music.mp3) {
          if (i == this.list.length - 1) {
            this.$store.commit("setmusic", this.list[0]);
          } else {
            this.$store.commit("setmusic", this.list[i + 1]);
          }
          break;
        }
      }
      setTimeout(() => {
        this.$store.commit("gettrue");
      });
    },
    toround() {
      if (this.myround == "&#xe623;") {
        this.myround = "&#xe66d;";
        this.isloop = true;
      } else if (this.myround == "&#xe66d;") {
        this.myround = "&#xe77d;";
        this.isloop = false;
      } else {
        this.myround = "&#xe623;";
        this.isloop = false;
      }
    },
    start(eve) {
      this.startx = eve.targetTouches[0].clientX;
      this.timeshow = true;
    },
    move(eve) {
      // console.log(eve.targetTouches[0].clientX);
      var x = eve.targetTouches[0].clientX;
      var y = x - this.startx;
      // console.log(x);
      // console.log(x - 115);
      if (parseFloat(this.left) <= 0 && y < 0) {
        this.left = 0 + "px";
      } else if (
        parseFloat(this.left) >=
          parseFloat(getComputedStyle(this.$refs.line).width) &&
        y > 0
      ) {
        this.left = getComputedStyle(this.$refs.line).width;
      } else {
        this.left = x - 115 + "px";
      }
      this.width = this.left;
      this.time =
        (parseFloat(this.left) /
          parseFloat(getComputedStyle(this.$refs.line).width)) *
        this.alltime;
      this.$refs.myaudio.currentTime = this.time;
      // console.log(this.left);
    },
    leave() {
      this.timeshow = false;
    },
    soundstart(eve) {
      this.soundy = eve.targetTouches[0].clientY;
    },
    soundmove(eve) {
      var top = document.body.offsetHeight;
      var y = eve.targetTouches[0].clientY;
      var x = y - this.soundy;
      if (top - 50 - y <= 0 && x > 0) {
        this.height = 0 + "px";
        this.mysound = "&#xe747;";
      } else if (
        top - 50 - y >=
          parseFloat(getComputedStyle(this.$refs.soundline).height) &&
        x < 0
      ) {
        this.height = getComputedStyle(this.$refs.soundline).height;
        this.mysound = "&#xe662;";
      } else {
        this.height = top - 50 - y + "px";
        this.mysound = "&#xe662;";
      }
    }
  },
  watch: {
    play(v) {
      if (v) {
        if (!this.$refs.myaudio.duration) {
          this.flag = false;
          this.left = 0;
          this.width = 0;
          setTimeout(() => {
            this.$refs.myaudio.play();
            this.myplay = "&#xe616;";
            clearInterval(this.timer);
            this.timer = setInterval(() => {
              this.alltime = this.$refs.myaudio.duration;
              this.time = this.$refs.myaudio.currentTime;
              var x = this.time / this.$refs.myaudio.duration;
              this.width = x * 100 + "%";
              this.left = x * 100 + "%";
              if (this.width == "100%") {
                this.play = false;
              }
            }, 1000);
          }, 1000);
        } else {
          this.$refs.myaudio.play();
          this.myplay = "&#xe616;";
          clearInterval(this.timer);
          this.timer = setInterval(() => {
            this.alltime = this.$refs.myaudio.duration;
            this.time = this.$refs.myaudio.currentTime;
            var x = this.time / this.$refs.myaudio.duration;
            this.width = x * 100 + "%";
            this.left = x * 100 + "%";
            if (this.width == "100%") {
              this.play = false;
            }
          }, 1000);
        }
      } else {
        this.$refs.myaudio.pause();
        this.myplay = "&#xe681;";
        clearInterval(this.timer);
      }
    },
    height(v) {
      if (parseFloat(v) / 120 <= 0) {
        this.$refs.myaudio.volume = 0;
      } else if (parseFloat(v) / 120 >= 1) {
        this.$refs.myaudio.volume = 1;
      } else {
        this.$refs.myaudio.volume = parseFloat(v) / 120;
      }
    }
  }
};
</script>

<style scoped>
.foot {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.foot-text {
  height: 25px;
  background-color: #30c27c;
  padding: 2px 10px;
  border-radius: 20px;
  color: #ffffff;
}
.player {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 20px;
  display: flex;
  padding: 0 5px;
  box-sizing: border-box;
}
.control {
  /* background-color: #fff; */
  width: 70px;
  display: flex;
  color: gold;
  justify-content: center;
}
.go-off {
  font-size: 20px;
  color: yellow;
}
.left,
.right {
  padding: 0 5px;
}
.progress {
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 3px;
}
.progress .line {
  height: 10px;
  flex: 1;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 1px 0 1px #f9f9f9;
  position: relative;
}
.progress .line .innerline {
  position: absolute;
  height: 100%;
  border-radius: 10px;
  background-color: gold;
  width: 10%;
}
.progress .line .spot {
  height: 100%;
  width: 10px;
  position: absolute;
  background-color: gold;
  border-radius: 50%;
  box-shadow: 0 0 0 5px #f9f9f9;
  left: 10%;
  margin-left: -5px;
}
.progress .line .spot .mytime {
  position: absolute;
  top: -50px;
  width: 100px;
  left: -45px;
}
.sound {
  width: 25px;
  font-size: 20px;
  color: gold;
  text-align: right;
  position: relative;
}
.round {
  width: 30px;
  font-size: 22px;
  color: gold;
}
.img {
  width: 40px;
  height: 40px;
  box-shadow: 0 0 0 1px #000;
  margin-top: 5px;
  position: relative;
  border-radius: 5px;
}
.img > img {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 5px;
  top: 0;
}
.ico {
  font-size: 20px;
}
.changesound {
  width: 30px;
  height: 150px;
  background-color: crimson;
  position: absolute;
  bottom: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  border-radius: 10px;
}
.soundline {
  width: 10px;
  height: 120px;
  background-color: #222;
  box-shadow: 0 0 1px 1px #f9f9f9;
  border-radius: 10px;
  position: relative;
}
.soundinner {
  background-color: gold;
  border-radius: 10px;
  width: 10px;
  height: 30%;
  position: absolute;
  bottom: 0;
}
.ret {
  height: 30px;
  line-height: 30px;
}
.soundspot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  box-shadow: 0 0 0 5px #ffffff;
  background-color: gold;
}
</style>
