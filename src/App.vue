<template>
  <div id="app">
    <router-view />
    <Music />
  </div>
</template>
<script>
// 禁止用户打开控制台和相关操作
// import "@/utils/ban.js";
import Music from "./views/index/component/music.vue";
export default {
  components: { Music },

  methods: {
    open3() {
      this.$notify.info({
        title: "消息",
        message:
          "该网站已停止更新，建议前往<a style='color:blue;cursor:pointer;' href='http://amoureux555.xyz' target='_blank'>amoureux555.xyz</a>查看最新内容",
        offset: 100,
        dangerouslyUseHTMLString: true,
        duration: 0,
      });
    },
  },
  mounted() {
    this.open3();
    document.getElementById("app").style.display = "block";
    document.getElementById("appLoading").style.display = "none";
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f7fa;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
