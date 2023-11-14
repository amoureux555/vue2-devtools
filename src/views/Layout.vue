<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
      <!-- 使用vue插件制造背景效果 -->
      <vue-particles
        color="#8EB5C9"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="6"
        linesColor="#8EB5C9"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.6"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
      <!-- <Music /> -->
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
    <!-- 返回顶部 -->
    <BackTop />
  </el-container>
</template>
<script>
import Footer from "./component/Footer.vue";
import Header from "./component/Header.vue";
import BackTop from "./index/component/Backtop.vue";
// import Music from "./index/component/music.vue";
export default {
  components: {
    Footer,
    Header,
    BackTop,
    // Music,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.el-header,
.el-footer {
  background-color: white;
  color: #333;
  text-align: center;
}
.el-footer {
  height: 200px !important;
  z-index: 2;
}
.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f5f7fa;
  width: 80%;
  margin: auto;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
// ...

::v-deep .el-header {
  position: sticky;
  height: 80px !important;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 1px 2px #0000000d;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(50%) blur(8px);
  // 毛玻璃效果
  // -webkit-filter: blur(2px);
  // -moz-filter: blur(2px);
  // -ms-filter: blur(2px);
  // -o-filter: blur(2px);
  // filter: blur(2px);
}
.lizi {
  background-size: cover;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
