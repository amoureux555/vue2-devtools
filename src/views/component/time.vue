<template>
  <div class="header">
    <!-- 时间start -->
    <div class="title">
      <span class="time">{{ gettime }}</span>
      <span class="date">{{ getdate }}</span>
    </div>
    <!-- 时间end -->
    <br />
    <br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      gettime: "", //当前时间
      getdate: "", //当前日期
    };
  },
  methods: {
    // 时间
    timeFormate(timeStamp) {
      let y = new Date(timeStamp).getFullYear().toString();
      let M =
        new Date(timeStamp).getMonth() + 1 < 10
          ? "0" + (new Date(timeStamp).getMonth() + 1)
          : new Date(timeStamp).getMonth() + 1;
      let d =
        new Date(timeStamp).getDate() < 10
          ? "0" + new Date(timeStamp).getDate()
          : new Date(timeStamp).getDate();
      let h =
        new Date(timeStamp).getHours() < 10
          ? "0" + new Date(timeStamp).getHours()
          : new Date(timeStamp).getHours();
      let m =
        new Date(timeStamp).getMinutes() < 10
          ? "0" + new Date(timeStamp).getMinutes()
          : new Date(timeStamp).getMinutes();
      let s =
        new Date(timeStamp).getSeconds() < 10
          ? "0" + new Date(timeStamp).getSeconds()
          : new Date(timeStamp).getSeconds();
      let w = new Date(timeStamp).getDay().toString();
      switch (w) {
        case "1":
          w = "一";
          break;
        case "2":
          w = "二";
          break;
        case "3":
          w = "三";
          break;
        case "4":
          w = "四";
          break;
        case "5":
          w = "五";
          break;
        case "6":
          w = "六";
          break;
        default:
          w = "日";
      }
      this.gettime = h + ":" + m + ":" + s;
      this.getdate = y + "年" + M + "月" + d + "日" + " " + "星期" + w;
    },
    nowTimes() {
      this.timeFormate(new Date());
    },
  },
  created() {
    this.dateTimer = setInterval(this.nowTimes, 500);
  },

  mounted() {
    this.nowTimes();
  },

  beforeDestroy() {
    if (this.dateTimer) {
      clearInterval(this.dateTimer);
    }
  },
};
</script>
<style lang="scss" scoped>
.title {
  width: 100%;
  font-family: "Helvetica Neue";
  span:nth-of-type(1) {
    display: flex;
    justify-content: center;
  }
  .time {
    font-size: 20px;
  }
}
</style>
