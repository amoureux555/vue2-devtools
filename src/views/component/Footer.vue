<template>
  <div class="footer">
    <div class="left">
      <span
        ><a href="https://gitlab.com/Etc-Hub/devtools" target="_blank"
          >源码链接，欢迎大佬指点</a
        ></span
      >
      <span
        >Copyright © 2022-2023
        <a href="http://amoureux555.top/" target="_blank">amoureux555.top</a>
        ALL Rights Reserved</span
      >
      <span class="beian"
        ><img src="../../../public/static/beian.png" />
        苏ICP备2022039794号</span
      >
    </div>
    <div class="right">
      <img src="../../../public/static/erweima.jpg" alt="" />
      <!-- <img src="../../../public/static/tuiguang1.png" alt="" /> -->
      <span>关注公众号，获取更多资源</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  z-index: 2;
  // height: 140px;
  flex-direction: column;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  .left {
    span {
      margin: 5px;
    }
    span:nth-of-type(1) {
      cursor: pointer;
    }
    span:nth-of-type(2) a {
      color: gray;
      cursor: pointer;
    }
    span:nth-of-type(2),
    span:nth-of-type(3) {
      color: gray;
    }
    .beian {
      display: flex;
      justify-content: center;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    img {
      width: 140px;
    }
  }
}
</style>
