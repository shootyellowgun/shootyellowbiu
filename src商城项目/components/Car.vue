<template>
  <div class="car">
    <div class="toper">
      <span class="iconfont">&#xe62c;</span>
      购物车
    </div>
    <div class="inner" v-if="tag">
      <div class="items" v-for="(item,index) in cararr" :key="item.id">
        <div class="title">
          <span class="iconfont">&#xe51e;</span>
          杭州保税区仓
        </div>
        <div
          style="overflow:hidden"
          class="commodity"
          @touchmove="move($event,index)"
          @touchstart="start($event,index)"
        >
          <transition
            enter-class
            enter-active-class="animated fadeInLeft"
            enter-to-class
            leave-class
            leave-active-class="animated fadeOutLeft"
            leave-to-class
          >
          <span
            :class="{'chooseff99':item.flag}"
            class="iconfont"
            @click="fn(index)"
            v-show="item.fuck"
          >&#xec3b;</span>
          </transition>
          <img :src="item.imgurl" alt />
          <div class="introduce">
            <div class="text">
              {{item.name}}
              <i>90粒装</i>
            </div>
            <div class="num">
              <span class="sub" @click="sub(index)">-</span>
              <span>{{item.num}}</span>
              <span class="add" @click="add(index)">+</span>
            </div>
          </div>
          <div class="price">￥{{item.price}}</div>
          <transition
            enter-class
            enter-active-class="animated fadeInRight"
            enter-to-class
            leave-class
            leave-active-class="animated fadeOutRight"
            leave-to-class
          >
          <div class="del" v-show="!item.fuck" @click="del(index)">删除</div>
          </transition>
        </div>
      </div>
    </div>
    <div class="none" v-if="!tag">
      <div class="none-inner">
        <div class="iconfont">&#xe623;</div>
        <div>购物车还是空的</div>
        <div>快去逛逛吧~</div>
      </div>
    </div>
    <div class="bottomer" v-if="tag">
      <div class="all">
        <span class="iconfont" :class="{'chooseff99':mytag}" @click="fn1">&#xec3b;</span>
        <p>全选</p>
      </div>
      <div class="edit">
        <span class="iconfont">&#xe618;</span>
        <p>编辑</p>
      </div>
      <div class="sum">
        <span>
          合计：
          <i>￥{{sum}}</i>
          <br />
        </span>
        （不含运费）
      </div>
      <div class="todo">去结算(共{{number}}件)</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      cla: "chooseccc iconfont",
      txt: "&lt;==点我有惊喜",
      allcla: "chooseccc iconfont",
      flag: true,
      tag: false,
      fuck: true
    };
  },
  created() {
    this.$eventbus.$emit("getfalse");
    if (this.cararr.length) {
      this.tag = true;
    } else {
      this.tag = false;
    }
    // console.log(this.cararr);
  },
  methods: {
    fn(index) {
      this.$store.commit("getback", index);
    },
    fn1() {
      this.mytag = !this.mytag;
    },
    getdel() {
      this.flag = !this.flag;
    },
    sub(index) {
      this.$store.dispatch("getmysub", index);
    },
    add(index) {
      this.$store.commit("getadd", index);
    },
    fnmove(i) {
      this.$store.commit("getshow", i);
    },
    start(eve, index) {
      // console.log(eve)
      this.cararr[index].start = eve.targetTouches[0].clientX;
    },
    move(eve, index) {
      var newleft = eve.changedTouches[0].clientX;
      if (newleft > this.cararr[index].start) {
        this.cararr[index].fuck = true;
      } else {
        this.cararr[index].fuck = false;
      }
    },
    del(i) {
      this.$store.commit("del", i);
    }
  },
  computed: {
    ...mapState(["cararr"]),
    sum() {
      var mysum = 0;
      this.cararr.forEach(item => {
        if (item.flag) {
          mysum += item.num * item.price;
        }
      });
      return mysum;
    },
    number() {
      var mysum = 0;
      this.cararr.forEach(item => {
        if (item.flag) {
          mysum += item.num;
        }
      });
      return mysum;
    },
    mytag: {
      set(v) {
        this.$store.commit("getchange", v);
      },
      get() {
        // var a=true;
        // for(var i=0;i<this.cararr.length;i++){
        //   if(!this.cararr[i].flag){
        //     a=false
        //   }
        // }
        // return a
        return this.cararr.every(item => {
          return item.flag;
        });
      }
    }
  }
};
</script>
<style scoped>
.car {
  font-size: 0.3rem;
  background-color: #fafafa;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.toper {
  height: 0.95rem;
  background-color: #ff9900;
  line-height: 0.95rem;
  text-align: center;
  color: #fff;
  font-size: 0.4rem;
}
.toper span {
  float: left;
  font-size: 0.4rem;

  margin-left: 0.2rem;
}
.inner {
  padding-left: 0.4rem;
  height: 100%;
  flex: 1;
  overflow-y: scroll;
}
.inner .title {
  height: 0.8rem;
  line-height: 0.8rem;
}
.title span {
  margin-right: 0.2rem;
  font-size: 0.4rem;
}
.commodity {
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.commodity img {
  width: 1.6rem;
  height: 1.6rem;
}
.commodity span {
  font-size: 0.3rem;
  color: #666;
  flex: 1;
}
.commodity img {
  flex: 1;
}
.commodity .del {
  flex: 1;
  text-align: center;
  background-color: #ff9900;
  height: 100%;
  line-height: 2.5rem;
}
.commodity .introduce .text i {
  font-style: normal;
}
.commodity span.iconfont {
  font-size: 0.5rem;
}
.commodity .introduce .num {
  margin-top: 0.1rem;
}
.commodity .introduce {
  flex: 3;
  padding-left: 0.1rem;
}
.commodity .introduce span {
  padding: 0.05rem 0.3rem;
  border: 1px solid #cccccc;
  color: #666;
}
.commodity .price {
  flex: 1;
}

span.chooseff99 {
  color: #ff9900;
}
.bottomer {
  height: 1.15rem;
  border-top: 2px solid #ccc;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: #fff;
}

.bottomer > .all {
  flex: 1;
  color: #666;
}
.bottomer > .all > .iconfont {
  font-size: 0.5rem;
}
.bottomer > .edit {
  flex: 1;
  color: #666;
}
.bottomer > .edit > .iconfont {
  font-size: 0.5rem;
}
.bottomer > .sum {
  flex: 2;
}
.bottomer > .todo {
  flex: 2;
  background-color: #ff5500;
  height: 100%;
  line-height: 1.15rem;
  color: #fff;
}
.none {
  display: flex;
  height: 100%;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.none .iconfont {
  font-size: 1rem;
}
</style>