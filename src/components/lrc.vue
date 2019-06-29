<template>
  <div class="bg">
    <div :style="{'margin-top':'-'+top+'px'}">
      <span
        v-for="item in date"
        :key="item.id"
        :class="[(item.id==index&&time!=0)?'befo':'fater','lrcLine' ]"
      >{{item.str}}</span>
    </div>
  </div>
</template>

<script>
import httpsequest from "../js/HttpRequest";

export default {
  data() {
    return {
      index: 0,
      top: 0,
      lrc: "",
      date: [],
      lrcUrl: "http://127.0.0.1:3001/lrc/学猫叫.json"
    };
  },
  methods: {},
  created() {
    this.axios
      .get(this.lrcUrl)
      .then(response => {
        console.log(response.data.lrc.lyric);
        this.lrc = response.data.lrc.lyric;
        let str = this.lrc.split("\n");
        let msg = [];
        str.forEach(e => {
          if (e != null) {
            let str = e.replace(/\[.*?\]/g, "");
            let t = e.match(/\[(.+?)\]/g);
            if (t != null)
              t.forEach(ee => {
                if (ee != null) {
                  let s = ee.replace(/\[|]/g, "");
                  let s2 = s.split(":");
                  let time1 = parseInt(s2[0]) * 60 + parseInt(s2[1]);
                  let obj = new Object();
                  obj.time1 = time1;
                  obj.time2 = time1;
                  obj.str = str;
                  msg.push(obj);
                }
              });
          }
        });
        let obj = new Object();
        obj.time1 = 9999;
        obj.time2 = 10000;
        obj.str = "";
        msg.push(obj);
        function sortId(a, b) {
          return a.time1 - b.time1;
        }
        msg.sort(sortId);
        for (let i = msg.length - 2; i >= 0; i--) {
          msg[i].time2 = msg[i + 1].time1;
          msg[i].id = i;
        }
        msg[msg.length - 1].time2 = 9999;
        this.date = msg;
      })
      .catch(response => {
        console.log(response);
      });
  },
  watch: {
    time: function() {
      let t = this.$store.state.shijian;
      for (let i = 0; i < this.date.length; i++) {
        if (t >= this.date[i].time1 && t < this.date[i].time2) {
          this.index = i;
        }
      }
      this.top =
        this.index >= 2
          ? (this.index - 2) * 30 +
            ((t - this.date[this.index].time1) /
              (this.date[this.index].time2 - this.date[this.index].time1)) *
              30
          : 0;
      console.log(this.index);
    }
  },
  computed: {
    time: function() {
      return this.$store.state.shijian;
    }
  }
};
</script>

<style lang="less" scoped>
.bg {
  overflow: hidden;
  width: 80%;
  margin-left: 10%;
  height: 300px;
  background: rgba(111, 110, 112, 0.4);
  div {
    text-align: center;
    display: flex;
    flex-direction: column;
  }
}

.lrcLine {
  height: 30px;
  line-height: 30px;
  font-size: 17px;
}

@befocol: #ffffff;
@fatercol: black;

.befo {
  color: @befocol;
  animation: f2b 0.5s linear;
}
@keyframes b2f {
  0% {
    color: @befocol;
  }

  100% {
    color: @fatercol;
  }
}

@keyframes f2b {
  0% {
    color: @fatercol;
  }
  100% {
    color: @befocol;
  }
}
.fater {
  color: @fatercol;
  animation: b2f 0.5s linear;
}
</style>
