<template>
  <div>
    <img :class="[this.$store.state.isplay==true?'ctPlay':'ctPause']" src="../assets/citou.png">
    <img
      :class="[this.$store.state.isplay==true?'cdPlay':'cdPause']"
      class="cd"
      src="../assets/timg.png"
    >
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
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
  margin-top: 50px;
  animation: cd 5s infinite linear;
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
}

.ctPause {
  width: 23%;
  z-index: 100;
  position: absolute;
  transform: rotate(45deg);
  transform-origin: 90% 5%;
  animation: ctPlay 1s linear;
  margin-left: 50-23%;
}

@keyframes ctPlay {
  0% {
    transform: rotate(0deg);
    transform-origin: 90% 5%;
  }

  100% {
    transform: rotate(45deg);
    transform-origin: 90% 5%;
  }
}

@keyframes ctPause {
  0% {
    transform: rotate(45deg);
    transform-origin: 90% 5%;
  }

  100% {
    transform: rotate(0deg);
    transform-origin: 90% 5%;
  }
}
</style>
