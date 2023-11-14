<template>
  <div class="right">
    <!-- 当前时间 -->
    <el-card class="box-card baiduhot hot" shadow="hover"
      ><Time />
      <Ip />
    </el-card>
    <!-- 百度热搜 -->
    <el-card class="box-card baiduhot hot" shadow="hover">
      <div slot="header" class="clearfix person">
        <img
          src="https://www.baidu.com/favicon.ico"
          alt=""
          class="search-image"
        />&emsp;
        <span>百度热搜</span>
      </div>
      <div v-for="o in 10" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <!-- 微博热搜 -->
    <el-card class="box-card weibohot hot" shadow="hover">
      <div slot="header" class="clearfix person">
        <img
          src="https://weibo.com/favicon.ico"
          alt=""
          class="search-image"
        />&emsp;
        <span>微博热搜</span>
      </div>
      <div v-for="o in 10" :key="o" class="text item">
        {{ "列表内容 " + o }}
      </div>
    </el-card>
    <!-- 个人 -->
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix person">
        <span>个人</span>
      </div>
      <div class="text item">
        <div>
          <a href="http://120.48.59.67:3309/" target="_blank">
            <img
              src="../../../../public/static/toux.jpg"
              alt=""
              class="search-image"
            />
            &emsp; 个人博客
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="https://blog.csdn.net/qq_46123200?type=blog" target="_blank">
            <img
              src="https://g.csdnimg.cn/static/logo/favicon32.ico"
              alt=""
              class="search-image"
            />
            &emsp; CSDN
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a
            href="https://docs.qq.com/sheet/DVGFaSGp1alhtZ0tN?tab=BB08J2"
            target="_blank"
          >
            <img
              src="https://docs.gtimg.com/sheet/assets/file_sheet_16.c302c049fefc79588994.svg"
              alt=""
              class="search-image"
            />
            &emsp; 其他项目
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="http://amoureux555.gitee.io/utils/" target="_blank">
            <img
              src="https://m1.im5i.com/2022/10/31/UVRFGT.jpg"
              alt=""
              class="search-image"
            />
            &emsp; Gitee 前端工具箱
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="https://www.yuque.com/amoureux555" target="_blank">
            <img
              src="https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png"
              alt=""
              class="search-image"
            />
            &emsp; 语雀 前端面试题
          </a>
        </div>
      </div>
      <div class="text item">
        <div>
          <a href="https://gitlab.com/Etc-Hub/devtools" target="_blank">
            <img
              src="https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png"
              alt=""
              class="search-image"
            />
            &emsp; 本项目开源地址
          </a>
        </div>
      </div>
    </el-card>
    <!-- 个人 -->
    <el-card class="box-card tuiguang" shadow="hover">
      <div class="text item">
        <img
          src="../../../../public/static/扫码_搜索联合传播样式-白色版.webp"
          alt=""
          class="search-image"
        />
      </div>
    </el-card>
  </div>
</template>
<script>
import Time from "../../component/time.vue";
import Ip from "../../../views/component/Ip";
export default {
  components: {
    Time,
    Ip,
  },
  data() {
    return {};
  },
  methods: {
    // 微博热搜
    weiBoHot() {
      var httpRequest = new XMLHttpRequest(); //第一步：建立所需的对象
      httpRequest.open("GET", "https://weibo.com/ajax/side/hotSearch", true); //第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
      httpRequest.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      ); //设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）
      httpRequest.send(); //第三步：发送请求  将请求参数写在URL中
      /**
       * 获取数据后的处理程序
       */
      httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
          var json = httpRequest.responseText; //获取到json字符串，还需解析
          console.log(">>>>>", json);
        }
      };
    },
  },
  created() {
    // this.weiBoHot();
  },
};
</script>
<style lang="scss" scoped>
.right {
  z-index: 2;
  .clearfix {
    span {
      font-size: 14px;
    }
  }
  width: 300px;
  ::v-deep .el-card__body {
    display: block;
    text-align: left;
  }
  .search-image {
    border-radius: 9px;
    width: 20px;
    height: 20px;
  }
  .hot {
    div {
      display: flex;
      align-items: center;
    }
  }
}
.text {
  font-size: 14px;
}
.tuiguang {
  height: 96px;
  ::v-deep .el-card__body {
    padding: 0;
    div {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.box-card {
  width: 95%;
  margin-bottom: 20px;
  .item {
    div {
      position: relative;
      font-size: 16px;
      display: inline-block;
      cursor: pointer;
      margin-bottom: 10px;
    }

    div:before {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: #4285f4;
      transition: all 0.3s;
    }
    div:hover:before {
      width: 100%;
      left: 0;
      right: 0;
    }
    div:hover {
      color: #4285f4;
      a {
        color: #4285f4;
      }
    }
  }
}
::v-deep .el-card__header {
  text-align: left;
}
</style>
