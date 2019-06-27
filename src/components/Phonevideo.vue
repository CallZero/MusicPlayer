<template>
  <div>
    <cd></cd>
    <lrc></lrc>
    <PlayUI class="PlayUI"></PlayUI>
    <baseAudio></baseAudio>
  </div>
</template>

<script>
import Vue from 'vue'
import baseAudio from './BaseAudio'
import PlayUI from './PlayUI'
import cd from './cd'
import lrc from './lrc'
export default {
  data() {
    return {
      msg: 'video view3234'
    }
  },
  components: {
    baseAudio,
    PlayUI,
    cd,
    lrc
  },

  methods: {},
  computed: {}
}
</script>

<style >
.PlayUI {
  z-index: 100;
}
</style>
