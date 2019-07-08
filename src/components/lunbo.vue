<template>
  <div>
    <!-- 轮播图 -->
    <div class="lunbo">
      <img src="../assets/1.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.imgList = [];
  },
  components: {}
};
</script>

<style  lang='less' scoped>
.lunbo {
  width: 350px;
  height: 150px;
  margin: 0 auto;
  overflow-x: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  img {
    float: left;
    white-space: nowrap;
    width: 350px;
    display: block;
    flex-direction: column-reverse;
  }
}
</style>
