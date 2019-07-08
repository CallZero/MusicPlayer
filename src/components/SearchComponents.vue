<template>
  <div class="sousuo">
    <div>
      <input type="text" />
      <span type="button" id="btn">搜索</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style  lang='less' scoped>
.sousuo {
  width: 100%;
  div {
    margin-top: 10px;
    margin-left: 20px;
    & > :first-child {
      background: #ffffff;
      border-radius: 6px;
      line-height: 30px;
      width: 210px;
      border-style: none;
      outline: none;
      text-indent: 10px;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      border: 1px solid #dbdbdb;
    }
    & > :last-child {
      width: 80px;

      margin-left: 10px;
      line-height: 30px;
      display: inline-block;
      background: #c91212;
      text-align: center;
      border: 2px solid #c91212;
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
      text-align: center;
      border-radius: 15px;
    }
  }
}
</style>
