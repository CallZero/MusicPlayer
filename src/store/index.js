import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);

const store = new vuex.Store({
  state: {
    isplay: false,
    jindu: 0,
    shijian: 0,
    playstate: 1,
    playtime: 0,
    jinduLock: 0,
    alltime: 0
  },
  mutations: {
    setplay(state, value) {
      state.isplay = value;
    },
    setjindu(state, value) {
      state.jindu = value;
      if (value == 100)
        state.isplay = false;
    },
    setshijian(state, value) {
      state.shijian = value;
    },
    settime(state, value) {
      state.playtime = value;
    },
    setjindulock(state, value) {
      state.jinduLock = value;
    },
    setalltime(state, value) {
      state.alltime = value;
    },
  },
  actions: {
    setPlayFun(context, value) {
      context.commit("setplay", value);
    },
    setjinduFun(context, value) {
      context.commit("setjindu", value);
    },
    setshijianFun(context, value) {
      context.commit("setshijian", value);
    },
    settimeFun(context, value) {
      context.commit("settime", value);
    },
    setjindulockFun(context, value) {
      context.commit("setjindulock", value);
    },
    setalltimeFun(context, value) {
      context.commit("setalltime", value);
    },
    initPlay(context) {
      context.commit("setjindu", 0);
      context.commit("setshijian", 0);
      context.commit("settime", 0);
      context.commit("setjindulock", 0);
      context.commit("setalltime", 0);
      context.commit("setplay", true);
    }
  }
});

export default store;