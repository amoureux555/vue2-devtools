<template>
  <div class="backtop">
    <!-- 返回顶部 -->
    <!-- <el-backtop :visibility-height="50"
      ><span class="iconfont icon-jiantoushang"></span>顶部</el-backtop
    > -->
    <el-backtop :visibility-height="50"></el-backtop>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.backtop {
  ::v-deep .el-backtop {
    display: flex;
    right: 180px !important;
    bottom: 200px !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // width: 60px;
    // height: 60px;
  }
}
</style>
