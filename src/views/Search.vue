<template>
  <div>
    <search></search>
    <list class="MList"></list>
  </div>
</template>

<script>
import search from "../components/SearchComponents";
import list from "../components/MusicList";
export default {
  data() {
    return {};
  },
  components: { search, list }
};
</script>

<style  lang='less' scoped>
.MList {
  margin-top: 10px;
}
</style>
