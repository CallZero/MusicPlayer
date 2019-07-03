<template>
  <!-- 轮播图 -->
  <div class="lunbo">
    <img v-for="item in imgList" :key="item" :src="item.img" />
  </div>
</template>

<script>
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.imgList = [
      { img: img1 },
      { img: img2 },
      { img: img3 },
      { img: img4 },
      { img: img5 }
    ];
  },
  components: {}
};
</script>

<style  lang='less' scoped>
.lunbo {
  width: 100%;
  height: 150px;
  overflow-x: hidden;
  display: flex;
  img {
    float: left;
    white-space: nowrap;
    width: 100%;
    display: block;
    flex-direction: column-reverse;
  }
}
</style>
