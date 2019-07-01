<template>
  <!-- 最基础的音乐播放控件，没有界面，
  1、监听xuex中的isplay判断是否播放，
  2、监听xuex中的playtime自动设置播放进度-->
  <div>
    <audio ref="audio" controls="controls">
      <source :src="AudioSrc" type="audio/mp3" />
    </audio>
  </div>
</template> 

<script>
export default {
  props: ["AudioSrc"],
  data() {
    return {
      time: 0,
      setTime: null
    };
  },
  created() {
    console.log("created");
  },
  watch: {
    isPlay: function() {
      if (this.$store.state.isplay) {
        this.$store.dispatch("setalltimeFun", this.$refs.audio.duration);
        this.setTime = setInterval(() => {
          if (this.$store.state.jinduLock == 0) {
            this.time = this.$refs.audio.currentTime;
            this.$store.dispatch("setshijianFun", this.time);
            let alltime = this.$refs.audio.duration;
            this.$store.dispatch("setjinduFun", (this.time / alltime) * 100);
          }
        }, 8);
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
        clearInterval(this.setTime);
      }
    },
    playtime: function() {
      if (this.$store.state.isplay)
        this.$refs.audio.currentTime =
          this.playtime * this.$refs.audio.duration;
    }
  },
  computed: {
    isPlay: function() {
      return this.$store.state.isplay;
    },
    playtime: function() {
      return this.$store.state.playtime;
    }
  }
};
</script>

<style scoped>
div {
  display: none;
}
</style>
