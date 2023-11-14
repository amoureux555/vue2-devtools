const path = require("path");
module.exports = {
  // 网站标题
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "工具箱";
      return args;
    });
  },
  // 全局路径
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "~mock": path.resolve(__dirname, "mock"),
      },
    },
  },
  // 跨域
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.baidu.com/sugrec?prod=pc&wd=",
        changeOrigin: true, // 是否允许跨域
        secure: false, // 关闭SSL证书验证https协议接口需要改成true
        pathRewrite: {
          // 重写路径请求
          "^/api": "", //路径重写
        },
      },
      // ....
    },
  },
  // 适配
};
