<template>
  <div>
    <img :class="[this.$store.state.isplay==true?'ctPlay':'ctPause']" src="../assets/citou2.png" />
    <div>
      <img
        :class="[this.$store.state.isplay==true?'cdPlay':'cdPause']"
        class="cd"
        src="../assets/timg2.png"
      />
      <img
        src="../assets/wmc.jpg"
        :class="[this.$store.state.isplay==true?'cdPlay':'cdPause']"
        class="cd2"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>


<style  lang="less" scoped>
.cdPause {
  animation-play-state: paused !important;
}

.cdPlay {
  animation-play-state: running !important;
}

.cd {
  width: 70%;
  margin-left: 15%;
  margin-top: 60%-50px;
  animation: cd 5s infinite linear;
}

.cd2 {
  width: 30%;
  left: 35%;
  margin-top: 60%-32px;
  border-radius: 50%;
  animation: cd 5s infinite linear;
  position: absolute;
}

@keyframes cd {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.ctPlay {
  width: 23%;
  z-index: 100;
  position: absolute;
  animation: 1s;
  animation: ctPause 1s linear;
  margin-left: 50-23%;
  transform: rotate(10deg);
  transform-origin: 90% 5%;
}

.ctPause {
  width: 23%;
  z-index: 100;
  position: absolute;
  transform: rotate(40deg);
  transform-origin: 90% 5%;
  animation: ctPlay 1s linear;
  margin-left: 50-23%;
}

@keyframes ctPlay {
  0% {
    transform: rotate(10deg);
    transform-origin: 90% 5%;
  }

  100% {
    transform: rotate(40deg);
    transform-origin: 90% 5%;
  }
}

@keyframes ctPause {
  0% {
    transform: rotate(40deg);
    transform-origin: 90% 5%;
  }

  100% {
    transform: rotate(10deg);
    transform-origin: 90% 5%;
  }
}
</style>
