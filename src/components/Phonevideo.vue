<template>
  <div>
    <cd></cd>
    <lrc :LrcUrl="lrcUrl"></lrc>
    <PlayUI :AudioSrc="audioSrc"></PlayUI>
  </div>
</template>

<script>
import Vue from "vue";
import PlayUI from "./PlayUI";
import cd from "./cd";
import lrc from "./lrc";
export default {
  data() {
    return {
      msg: "video view3234",
      lrcUrl: "http://127.0.0.1:3001/lrc/学猫叫.json",
      audioSrc: "http://127.0.0.1:3001/music/学猫叫.mp3"
    };
  },
  components: {
    PlayUI,
    cd,
    lrc
  },

  methods: {},
  computed: {}
};
</script>

<style >
</style>
