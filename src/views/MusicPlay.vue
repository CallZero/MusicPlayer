<template>
  <div>
    <cd></cd>
    <lrc :LrcUrl="lrcUrl"></lrc>
    <PlayUI :AudioSrc="audioSrc"></PlayUI>
  </div>
</template>

<script>
import PlayUI from "../components/PlayUI";
import cd from "../components/cd";
import lrc from "../components/lrc";
export default {
  data() {
    return {
      msg: "video view3234",
      lrcUrl: "",
      audioSrc: ""
    };
  },
  created() {
    this.lrcUrl = this.$route.query.lrcAddress;
    this.audioSrc = this.$route.query.musAddress;
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
