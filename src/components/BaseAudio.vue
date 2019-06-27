<template>
  <div>
    <audio ref="audio" controls="controls">
      <source :src="srcStr" type="audio/mp3">
    </audio>
  </div>
</template> 

<script>
import srcstr from "../assets/学猫叫.mp3";
export default {
  data() {
    return {
      time: 0,
      setTime: null,
      //srcStr: "http://127.0.0.1:3000/music/xmj.mp3"
      srcStr: srcstr
    };
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
