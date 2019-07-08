<template>
  <!-- 推荐歌单模块 -->
  <div class="zhuanji">
    <div v-for="item in ZJlist" :key="item.id">
      <img :src="item.src" />
      <span>{{item.t}}</span>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/wmc.jpg";
import img2 from "../assets/zxy.jpg";

export default {
  data() {
    return {
      ZJlist: [{id:1, src: img2, t: "张学友" }, {id:2, src: img1, t: "吴莫愁" }]
    };
  },
  components: {}
};
</script>

<style  lang='less' scoped>
.zhuanji {
  width: 100%;
  height: auto;
  height: 150px;
  margin-bottom: 30px;
  div {
    width: 50%;

    height: auto;
    text-align: center;
    float: left;
    img {
      width: 90%;
      height: 150px;
      border-radius: 10px;
      display: block;
    }
  }
}
</style>
