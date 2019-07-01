<template>
  <div>
    <div class="playerMain">
      <div>
        <!-- 显示当前播放音频的时间 -->
        <span>{{ismove?time2:time}}</span>
      </div>
      <div>
        <!-- 监测鼠标拖拽动作 -->
        <div @click="clidked" @touchmove="touchmove" @touchend="touchend ">
          <div ref="div1">
            <!-- 根据jindu变量控制进度条的比例 -->
            <div :style="{width:jindu+'%'}">
              <div></div>
              <div @touchstart="touchstart" :class="{blockBig:ismove&&this.$store.state.isplay}"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span class="icon iconfont">&#xe672;</span>
        </div>
        <div>
          <span @click="Next" class="icon iconfont">&#xe674;</span>
        </div>
        <div @click="playOrpause">
          <!-- 根据isPlay判断是否是播放状态，并根据播放状态切换显示播放或暂停的图标 -->
          <span class="icon iconfont" v-show="this.$store.state.isplay==false">&#xe66a;</span>
          <span class="icon iconfont" v-show="this.$store.state.isplay">&#xe677;</span>
        </div>
        <div>
          <!-- 随机播放图标 -->
          <span @click="Last" class="icon iconfont">&#xe670;</span>
        </div>
      </div>
    </div>
    <!-- 音乐播放控件 -->
    <baseAudio :AudioSrc="AudioSrc"></baseAudio>
  </div>
</template>
 
<script>
import baseAudio from "./BaseAudio";
import "../assets/icon/iconfont.css";
export default {
  props: ["AudioSrc"],
  data() {
    return {
      left: null,
      Maxlength: null,
      ismove: false,
      time2: ""
    };
  },
  methods: {
    playOrpause() {
      this.setplay(!this.$store.state.isplay);
      console.log("isPlay=" + this.$store.state.isplay);
    },
    Next() {
      console.log("next");
    },
    Last() {
      console.log("last");
    },
    setplay(value) {
      this.$store.dispatch("setPlayFun", value);
    },
    clidked(e) {
      console.log("clidked");
      if (this.$store.state.isplay) {
        if (this.left == null) this.left = this.getX(this.$refs.div1);
        if (this.Maxlength == null)
          this.Maxlength = this.$refs.div1.clientWidth;
        e = e || window.event;
        var movex = e.pageX;
        this.$store.dispatch(
          "settimeFun",
          (movex - this.left) / this.Maxlength
        );
      }
    },
    touchstart() {
      this.ismove = true;
      this.$store.dispatch("setjindulockFun", 1);
    },
    touchend(e) {
      this.ismove = false;
      e = e || window.event;

      var movex = e.changedTouches[0].pageX;
      this.$store.dispatch("settimeFun", (movex - this.left) / this.Maxlength);

      console.log((movex - this.left) / this.Maxlength / 100);
      this.ismove = false;
      this.$store.dispatch("setjindulockFun", 0);
    },
    touchmove(e) {
      if (this.$store.state.isplay && this.ismove) {
        if (this.left == null) this.left = this.getX(this.$refs.div1);
        if (this.Maxlength == null)
          this.Maxlength = this.$refs.div1.clientWidth;
        e = e || window.event;

        var movex = e.targetTouches[0].pageX;
        this.$store.dispatch(
          "setjinduFun",
          ((movex - this.left) / this.Maxlength) * 100
        );

        let t =
          ((movex - this.left) / this.Maxlength) * this.$store.state.alltime;
        this.time2 =
          parseInt(t / 60) + ":" + ("0" + parseInt(t % 60)).substr(-2);
      }
    },
    getX(obj) {
      return (
        obj.offsetLeft +
        (obj.offsetParent ? this.getX(obj.offsetParent) : obj.x ? obj.x : 0)
      );
    }
  },
  computed: {
    jindu: function() {
      return 5 + (95 * this.$store.state.jindu) / 100;
    },
    time: function() {
      let t = this.$store.state.shijian;
      return parseInt(t / 60) + ":" + ("0" + parseInt(t % 60)).substr(-2);
    }
  },
  watch: {},
  components: {
    baseAudio
  }
};
</script>

<style lang="less" scoped>
.blockBig {
  width: 20px !important;
  float: left !important;
  margin-left: -20px !important;
  height: 15px !important;
  margin-top: -7.5px !important;
  background: #063fdf !important;
  box-sizing: border-box !important;
  border: 1px solid #000 !important;
}

.playerMain {
  position: absolute;
  width: 96%;
  margin-left: 2%;
  height: 100px;
  background: #ffffff;
  bottom: 0px;
  left: 0px;

  & > :nth-child(1) {
    text-align: center;
  }

  & > :nth-child(2) {
    height: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    div {
      width: 100%;
      height: 20px;

      div {
        height: 5px;
        background: #a7a5a5;
        border-radius: 2.5px;
        width: 100%;

        div {
          & > :first-child {
            height: 5px;
            background: #302828;
            border-radius: 2.5px;
            width: 100%;
            float: left;
          }
          & > :last-child {
            width: 20px;
            float: left;
            margin-left: -20px;
            height: 10px;
            margin-top: -2.5px;
            background: #db1212;
            box-sizing: border-box;
            border: 1px solid #000;
          }
        }
      }
    }
  }

  & > :nth-child(3) {
    height: 80px;
    display: flex;
    flex-direction: row-reverse;

    div {
      width: 20%;
      span {
        line-height: 80px;
        font-size: 40px;
        &:active {
          color: #b63030;
        }
      }
    }
  }
}
</style>