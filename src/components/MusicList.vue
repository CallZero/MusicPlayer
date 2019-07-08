<template>
  <!-- 音乐列表 -->
  <div>
    <div class="musicList">
      <div v-for="item in MusicList" :key="item.id" @click="play(item.id)">
        <div>{{item.musicName}}--{{item.Album}}</div>
        <div>歌手:{{item.singer}}</div>
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MusicList: [
        {
          id: 0,
          musicName: "学猫叫",
          lrcAddress: "http://127.0.0.1:3001/Lrc/学猫叫.json",
          musAddress: "http://127.0.0.1:3001/Music/学猫叫.mp3",
          singer: "学猫叫",
          Album: "学猫叫"
        },
        {
          id: 1,
          musicName: "学猫叫",
          lrcAddress: "http://127.0.0.1:3001/Lrc/学猫叫.json",
          musAddress: "http://127.0.0.1:3001/Music/学猫叫.mp3",
          singer: "学猫叫",
          Album: "学猫叫"
        },
        {
          id: 2,
          musicName: "生日快乐",
          lrcAddress: "http://127.0.0.1:3001/Lrc/生日快乐.json",
          musAddress: "http://127.0.0.1:3001/Music/生日快乐.mp3",
          singer: "生日快乐",
          Album: "生日快乐"
        }
      ]
    };
  },
  methods: {
    play(i) {
      window.location.href =
        "#/player?lrcAddress=" +
        this.MusicList[i].lrcAddress +
        "&musAddress=" +
        this.MusicList[i].musAddress;
    }
  },
  components: {}
};
</script>

<style  lang='less' scoped>
.line {
  width: 100%;
  height: 1px;
  background: #ebebeb;
}
.musicList {
  width: 100%;
  height: auto;
  > div {
    width: 100%;
    height: 60px;
    background: #ffffff;
  }
}
</style>
