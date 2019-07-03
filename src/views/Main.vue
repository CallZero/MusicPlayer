<template>
  <div>
    <!-- 头 -->
    <Mhead></Mhead>
    <!-- tabbar -->
    <div class="tabbar">
      <div @click="setSelected(0)" :style="[selested==0?readLine:'']">
        <router-link to="/Main/home">首页</router-link>
      </div>
      <div @click="setSelected(1)" :style="[selested==1?readLine:'']">
        <router-link to="/Main/Liest">推荐歌曲</router-link>
      </div>
      <div @click="setSelected(2)" :style="[selested==2?readLine:'']">
        <router-link to="/Main/Search">搜索</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Mhead from "../components/head";
export default {
  data() {
    return {
      selested: 0,
      readLine: {
        "border-bottom": "2px solid #921e1e"
      }
    };
  },
  methods: {
    setSelected(index) {
      this.selested = index;
      console.log(this.selested);
    }
  },
  components: { Mhead }
};
</script>

<style  lang='less' scoped>
.tabbar {
  width: 100%;
  height: 50px;
  display: flex;
  div {
    float: left;
    flex-grow: 1;
    text-align: center;
    > * {
      color: #b4adad;
      text-decoration: none;
      line-height: 50px;
      display: block;
      width: 100%;
    }
  }
}
</style>
