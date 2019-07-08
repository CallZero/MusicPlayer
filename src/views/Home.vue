<template>
  <div>
    <!-- 轮播框 -->
    <lunbo imgUrl="..."></lunbo>
    <!-- 推荐歌单 -->
    <musicBlock></musicBlock>
    <!-- 推荐歌曲列表 -->
    <musicList></musicList>
  </div>
</template>

<script>
import Mhead from "../components/head";
import lunbo from "../components/lunbo";
import musicList from "../components/MusicList";
import musicBlock from "../components/MusicBlock";
export default {
  data() {
    return {};
  },
  components: {
    Mhead,
    lunbo,
    musicList,
    musicBlock
  }
};
</script>

<style lang="less" scoped>
</style>

