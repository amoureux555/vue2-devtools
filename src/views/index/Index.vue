<template>
  <div class="index">
    <!-- left -->
    <Left />
    <!-- right -->
    <Right />
  </div>
</template>
<script>
import Left from "./component/Left";
import Right from "./component/Right";
export default {
  name: "index",
  components: {
    Left,
    Right,
  },
  data() {
    return {};
  },
};
</script>
<style scoped lang="scss">
.index {
  display: flex;
  width: 100%;
}

.text {
  font-size: 14px;
}

.box-card {
  width: 95%;
  margin-bottom: 30px;
}
::v-deep .el-card__header {
  text-align: left;
}
</style>
