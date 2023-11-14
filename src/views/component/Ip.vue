<template>
  <div class="ip">{{ city }} {{ area }}</div>
</template>

<!-- import "../../utils/ip.js"; -->
<script>
export default {
  data() {
    return {
      Ip: "",
      city: "", // 市
      area: "", // 区
    };
  },
  methods: {
    // 获取ip地址
    get(url, cb) {
      var httpRequest = new XMLHttpRequest();
      httpRequest.open("GET", url, true);
      httpRequest.send();
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText;
          cb(json);
        }
      };
    },
    // 判断ip地址是否为空
    IpNull() {
      if (this.Ip) {
        console.log("ip地址为空");
        setInterval(() => {
          this.get("https://api.ipify.org/?format=json", (data) => {
            data = JSON.parse(data);
            this.Ip = data.ip;
            console.log("IP地址为", data.ip);
          });
        }, 3000);
      }
    },
    // 获取ip所在城市、区等信息
    getIPCity() {
      var data = {
        key: "KSPBZ-V5L33-5EM3D-35N5X-DIY66-CRF7J", //密钥
      };
      var url = "https://apis.map.qq.com/ws/location/v1/ip"; //腾讯地理位置信息接口
      data.output = "jsonp"; // 解决跨域问题
      this.$jsonp(url, data)
        .then((res) => {
          console.log("IP所在市", res.result.ad_info.city);
          console.log("ip所属区", res.result.ad_info.district);
          this.city = res.result.ad_info.city;
          this.area = res.result.ad_info.district;
          return res;
        })
        .catch((error) => {
          console.log("未获取到地址", error);
        });
    },
  },
  mounted() {
    // 调用接口获取ip地址
    this.get("https://api.ipify.org/?format=json", (data) => {
      data = JSON.parse(data);
      this.Ip = data.ip;
      console.log("IP地址为", data.ip);
    });
    this.IpNull();
    // this.getIPCity();
  },
  created() {
    this.getIPCity();
  },
};
</script>

<style lang="scss" scoped></style>
