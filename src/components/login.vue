<template>
  <div>
    <div>
      账号
      <input type="text" v-model="userName" />
    </div>

    <div>
      密码
      <input type="password" v-model="paswd" />
    </div>
    <router-link to="home">登录</router-link>
    <div @click="login"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      paswd: ""
    };
  },
  methods: {
    login() {
      console.log(123);
      window.location.href = "home";
    }
  },
  components: {}
};
</script>

<style scoped>
</style>
