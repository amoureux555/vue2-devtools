<template>
  <div class="left">
    <!-- 工具 -->
    <el-card
      class="box-card"
      shadow="hover"
      v-for="item in sort"
      :key="item.name"
      :id="item.id"
    >
      <div slot="header" class="clearfix">
        <span>{{ item.name }}</span>
      </div>
      <div
        v-for="item2 in item.children"
        :key="item2.index"
        class="text twoitem"
      >
        <a :href="item2.url" :title="item2.title" target="_blank">
          <img :src="item2.ico" alt="" class="search-image" />&ensp;{{
            item2.name
          }}</a
        >
      </div>
    </el-card>
    <div id="header-bar-menu">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="item in sort"
          :key="item.name"
          @click.native="tabsColor(item.id)"
        >
          {{ item.name }}
        </el-timeline-item>
      </el-timeline>
      <!-- <div v-for="item in sort" :key="item.name" @click="tabsColor(item.id)">
      <a :href="'#' + `${item.id}`">{{ item.name }}</a>
      {{ item.name }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      reverse: false,
      // isisactive: 0, // 是否选中
      sort: [
        {
          id: "changyong",
          name: "常用",
          children: [
            {
              ico: "https://www.baidu.com/favicon.ico",
              name: "百度",
              title: "百度一下",
              url: "https://www.baidu.com/",
            },
            {
              ico: "https://static.zhihu.com/heifetz/favicon.ico",
              name: "知乎",
              title: "有问题就有答案",
              url: "https://www.zhihu.com/",
            },
            {
              ico: "https://fanyi-cdn.cdn.bcebos.com/webStatic/translation/img/favicon/favicon.ico",
              name: "百度翻译",
              title: "百度翻译",
              url: "https://fanyi.baidu.com/",
            },
            {
              ico: "https://g.csdnimg.cn/static/logo/favicon32.ico",
              name: "CSDN",
              title: "CSDN",
              url: "https://www.csdn.net/",
            },

            {
              ico: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196",
              name: "StackOverflow",
              title: "比肩CSDN",
              url: "https://stackoverflow.com/",
            },
            {
              ico: "https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/favicon-32x32.png",
              name: "掘金",
              title: "稀土掘金",
              url: "https://juejin.cn/",
            },

            {
              ico: "https://m1.im5i.com/2023/01/02/UGcdeM.png",
              name: "简书",
              title: "创作你的创作",
              url: "https://www.jianshu.com/",
            },
            {
              ico: "https://www.bilibili.com/favicon.ico?v=1",
              name: "哔哩哔哩",
              title: "哔哩哔哩",
              url: "https://www.bilibili.com/?spm_id_from=333.337.0.0",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRSuW.png",
              name: "一行代码",
              title: "一行代码",
              url: "http://amoureux555.top/aline",
            },
          ],
        },
        {
          id: "gongxiang",
          name: "共享文件",
          children: [
            {
              ico: "https://www.sharedrop.io/assets/images/sharedrop-icon-273177f251fa14fe1911fc332d41373e.png",
              name: "Share drop",
              title: "局域网分享，无需登录",
              url: "https://www.sharedrop.io/",
            },
            {
              ico: "https://www.wenshushu.cn/favicon.ico",
              name: "文叔叔",
              title: "国内领先的文件传输网站",
              url: "https://www.wenshushu.cn/",
            },
            {
              ico: "https://deershare.com/images/favicon.ico",
              name: "小鹿快传",
              title: "免登录，可批量，有网就可以传文件",
              url: "https://deershare.com/send",
            },
            {
              ico: "https://assets.retiehe.com/ap-icon-192-2.png",
              name: "AirProtal",
              title: "免登录，有网即可传文件",
              url: "https://airportal.cn/",
            },
            {
              ico: "https://background.c-t.work/favicon-32x32.png",
              name: "奶牛快传",
              title: "操作简单，无需登录",
              url: "https://cowtransfer.com/",
            },
            {
              ico: "https://qnproxy.iamtsm.cn/44826979.png",
              name: "Iamtsm",
              title: "开源代码、自行搭建",
              url: "https://im.iamtsm.cn/file/",
            },
          ],
        },
        {
          id: "css",
          name: "css相关",
          children: [
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRfpx.png",
              name: "Cssfx",
              title: "css样式集合、特效",
              url: "https://cssfx.netlify.app/",
            },
            {
              ico: "https://cssreference.io/favicons/favicon.ico?v=201702181118",
              name: "Cssreference",
              title: "css属性详解、效果",
              url: "https://cssreference.io/",
            },
            {
              ico: "https://css-tricks.com/favicon.svg",
              name: "Css-Tricks",
              title: "你不知道的css效果",
              url: "https://css-tricks.com/",
            },
            {
              ico: "https://www.postcss.com.cn/assets/postcss.e01d2066.png",
              name: "PostCSS",
              title: "PostCSS适配",
              url: "https://www.postcss.com.cn/",
            },
          ],
        },
        {
          id: "guanwang",
          name: "软件下载、官网",
          children: [
            {
              ico: "https://gitlab.com/assets/favicon-72a2cad5025aa931d6ea56c3201d1f18e68a8cd39788c7c80d5b2b82aa5143ef.png",
              name: "Gitlab",
              title: "gitlab",
              url: "https://gitlab.com/",
            },
            {
              ico: "https://github.githubassets.com/favicons/favicon.png",
              name: "Github",
              title: "github",
              url: "https://github.com/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRFGT.jpg",
              name: "Gitee",
              title: "gitee",
              url: "https://gitee.com/",
            },
            {
              ico: "https://assets.pgyer.com/static-20221020/assets/img/favicon.ico",
              name: "蒲公英",
              title: "发布一些软件",
              url: "https://www.pgyer.com/",
            },
            {
              ico: "https://easydoc.net/favicon.ico",
              name: "易文档",
              title: "自定义测试接口",
              url: "https://easydoc.net/",
            },
            {
              ico: "https://static.runoob.com/images/favicon.ico",
              name: "菜鸟教程",
              title: "学的不仅是技术、更是梦想",
              url: "https://www.runoob.com/",
            },
            {
              ico: "https://7n.w3cschool.cn/statics/images/favicon.ico?v=2.2",
              name: "W3Cschool",
              title: "W3Cschool词典库",
              url: "https://www.w3cschool.cn/",
            },
            {
              ico: "https://www.axure.com/wp-content/uploads/2019/04/favicon.ico",
              name: "Axure rp",
              title: "产品设计、产品经理",
              url: "https://www.axure.com/",
            },
            {
              ico: "https://m1.im5i.com/2023/01/02/UGcnxG.jpg",
              name: "Collectui",
              title: "很多和前端相关的东西",
              url: "https://collectui.com/",
            },
            {
              ico: "https://devdocs.io/favicon.ico",
              name: "Devdocs",
              title: "各种文档的集合",
              url: "https://devdocs.io/",
            },
            {
              ico: "https://www.google.cn/chrome/static/images/favicons/favicon-32x32.png",
              name: "Chrome谷歌",
              title: "Chrome谷歌",
              url: "https://www.google.cn/chrome/",
            },
            {
              ico: "https://www.firefox.com.cn/media/img/favicons/firefox/browser/favicon.f093404c0135.ico",
              name: "Firefox火狐",
              title: "firefox火狐",
              url: "http://www.firefox.com.cn/",
            },
            {
              ico: "https://www.todesk.com/favicon.ico",
              name: "Todesk",
              title: "todesk",
              url: "https://www.todesk.com/?from=baidu001",
            },
            {
              ico: "https://sunlogin.oray.com/favicon.ico",
              name: "向日葵",
              title: "向日葵",
              url: "https://sunlogin.oray.com/",
            },
            {
              ico: "https://m1.im5i.com/2023/01/02/UGcUTf.png",
              name: "Stream",
              title: "Stream游戏中心",
              url: "https://store.steampowered.com/",
            },
            {
              ico: "https://www.u.tools/favicon.ico",
              name: "UTools",
              title: "UTools",
              url: "https://www.u.tools/",
            },
            {
              ico: "https://steampp.net/favicon.ico",
              name: "Watt Toolkit",
              title: "Watt Toolkit加速",
              url: "https://steampp.net/",
            },
            {
              ico: "https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico",
              name: "阿里云盘",
              title: "阿里云盘",
              url: "https://www.aliyundrive.com/",
            },
            {
              ico: "https://www.huorong.cn/favicon.ico",
              name: "火绒",
              title: "火绒安全",
              url: "https://www.huorong.cn/",
            },
            {
              ico: "https://images.modao.cc/images/favicon.ico",
              name: "墨刀",
              title: "产品设计、产品经理",
              url: "https://modao.cc/brand",
            },
            {
              ico: "https://wac-cdn.atlassian.com/assets/img/favicons/sourcetree/favicon.ico",
              name: "Sourcetree",
              title: "sourcetree",
              url: "https://www.sourcetreeapp.com/",
            },
            {
              ico: "https://gw.alicdn.com/imgextra/i3/O1CN01eMicSg1GVD4uXMWGv_!!6000000000627-73-tps-32-32.ico",
              name: "钉钉",
              title: "钉钉",
              url: "https://page.dingtalk.com/wow/z/dingtalk/default/dddownload-index?from=zebra:offline",
            },
            {
              ico: "https://gw.alipayobjects.com/zos/rmsportal/UTjFYEzMSYVwzxIGVhMu.png",
              name: "语雀",
              title: "语雀",
              url: "https://www.yuque.com/download",
            },
            {
              ico: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
              name: "微信开发者工具",
              title: "微信开发者工具",
              url: "https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html",
            },
            {
              ico: "https://mimg.127.net/xm/dashi-official-site-pc/static/media/logo.a7c8955e.svg",
              name: "网易邮箱大师",
              title: "网易邮箱大师",
              url: "https://dashi.163.com/download.html?scene=appTrack&session_id=CC2A67C7-122A-496D-849A-536D07B326A9&uid=&from=mail11&spm=pos.free_webmail_9c89159b6fde1dc2.loginPage.login126Page.header.nav&gotodownload=1&fromDlpro=1",
            },
            {
              ico: "https://meeting.tencent.com/favicon.ico",
              name: "腾讯会议",
              title: "腾讯会议",
              url: "https://meeting.tencent.com/activities?fromSource=sem81_gwzcw.447781123.4477849.447781162&bd_vid=10584323930055557430",
            },
            {
              ico: "https://nodejs.org/static/images/favicons/favicon.ico",
              name: "Nodejs",
              title: "nodejs",
              url: "https://nodejs.org/en/download/",
            },
            {
              ico: "https://ask.dcloud.net.cn/static/css/classblack/img/favicon.png?v=20141207",
              name: "Hbuild/Uniapp",
              title: "DCloud",
              url: "https://dcloud.io/",
            },
            {
              ico: "https://code.visualstudio.com/favicon.ico",
              name: "VsCode",
              title: "vscode",
              url: "https://code.visualstudio.com/",
            },

            {
              ico: "https://lhcdn.lanhuapp.com/dashboard/production/favicon.ico",
              name: "蓝湖",
              title: "蓝湖ps插件",
              url: "https://lanhuapp.com/ps",
            },
            {
              ico: "https://www.lanzou.com/favicon.ico",
              name: "其他",
              title: "可能有你想要的，杂七杂八，密码：amoureux555",
              url: "https://amoureux555.lanzoum.com/b03jaj3qb",
            },
          ],
        },
        {
          id: "gongju",
          name: "工具",
          children: [
            {
              ico: "https://www.aconvert.com/favicon.ico",
              name: "PDF",
              title: "在线转PDF",
              url: "https://www.aconvert.com/cn/pdf/",
            },
            {
              ico: "https://excalidraw.com/favicon.ico",
              name: "Excalidraw",
              title: "画图",
              url: "https://excalidraw.com/",
            },
            {
              ico: "http://www.folderelf.com/logo.ico",
              name: "文件夹隐藏精灵",
              title: "文件夹隐藏、伪装、加密",
              url: "http://www.folderelf.com/",
            },
            {
              ico: "https://toolb.cn/favicon.ico",
              name: "文字转语音",
              title: "微软AI语音",
              url: "https://toolb.cn/textspeech",
            },
            {
              ico: "https://www.uugai.com/favicon.ico",
              name: "钙网",
              title: "免费logo",
              url: "https://www.uugai.com/",
            },
            {
              ico: "http://www.5nd.com/favicon.ico",
              name: "5ND音乐",
              title: "搜歌词",
              url: "http://www.5nd.com/",
            },
            {
              ico: "https://npm.elemecdn.com/@liumingye/cdn2/favicon.ico",
              name: "MyfreeMp3",
              title: "搜歌词",
              url: "https://tool.liumingye.cn/music/#/",
            },
            {
              ico: "https://www.fangpiw.com/favicon.ico",
              name: "放屁音乐网",
              title: "全网资源免费下",
              url: "https://www.fangpiw.com/",
            },
            {
              ico: "https://apis.baidu.com/favicon.ico",
              name: "易源数据",
              title: "短网址生成，约0.04元/条",
              url: "https://apis.baidu.com/store/detail/995bd886-d6aa-4c3e-b704-f786e6124c6f",
            },
            {
              ico: "https://404.456.cn/favicon.ico",
              name: "404",
              title: "404模板网",
              url: "https://404.life/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRGq0.png",
              name: "Loading.io",
              title: "各种loading",
              url: "https://loading.io/",
            },
            {
              ico: "https://www.qianbo.com.cn/favicon.ico",
              name: "比较工具",
              title: "在线文本比较工具",
              url: "https://www.qianbo.com.cn/Tool/Text-Difference/",
            },
            {
              ico: "https://www.bejson.com/favicon.ico",
              name: "JSON格式化",
              title: "在线JSON校验格式化工具",
              url: "https://www.bejson.com/",
            },
            {
              ico: "https://www.qqxiuzi.cn/favicon.ico",
              name: "Base64",
              title: "Base64编码转换",
              url: "https://www.qqxiuzi.cn/bianma/base64.htm",
            },
            {
              ico: "https://www.ip138.com/favicon.ico",
              name: "查询网",
              title: "什么都能查，只有你想不到",
              url: "https://www.ip138.com/",
            },
            {
              ico: "https://m1.im5i.com/2023/01/02/UGcLp7.png",
              name: "奇迹秀工具箱",
              title: "各种找不到的官网",
              url: "http://www.qijishow.com/down/index.html",
            },

            {
              ico: "https://www.mysubmail.com/favicon.ico",
              name: "赛邮云",
              title: "企业级短信验证码接口",
              url: "https://www.mysubmail.com/",
            },
            {
              ico: "https://cn.bing.com/favicon.ico",
              name: "在线win11",
              title: "在线win11，大佬开发",
              url: "https://win11.blueedge.me/",
            },
            {
              ico: "https://github.githubassets.com/images/icons/emoji/unicode/1f300.png",
              name: "程序员忙碌",
              title: "摸鱼",
              url: "https://svenstaro.github.io/genact/",
            },
            {
              ico: "https://m1.im5i.com/2023/01/02/UGcgNv.png",
              name: "Silk",
              title: "互动生成艺术",
              url: "http://www.qijishow.com/Brand/Brand23/index.htm",
            },
          ],
        },
        {
          id: "peise",
          name: "配色",
          children: [
            {
              ico: "https://color.adobe.com/favicon.ico",
              name: "土坯颜色",
              title: "土坯颜色",
              url: "https://color.adobe.com/zh/create/color-contrast-analyzer",
            },
            {
              ico: "https://uidesigndaily.com/public/img/favicon-32x32.png",
              name: "Design Daily",
              title: "Design Daily",
              url: "https://uidesigndaily.com/",
            },
            {
              ico: "https://www.91sotu.com/favicon.ico",
              name: "搜图配色",
              title: "搜图配色",
              url: "https://www.91sotu.com/colors/plate",
            },
            {
              ico: "https://webgradients.com/img/other/logos/webgradients_logo.png",
              name: "渐变背景",
              title: "渐变背景",
              url: "https://webgradients.com/",
            },
            {
              ico: "https://color.adobe.com/favicon.ico",
              name: "Adobe Color",
              title: "Adobe Color",
              url: "https://color.adobe.com/zh/explore/newest/",
            },
            {
              ico: "http://zhongguose.com/img/favicon.ico",
              name: "中国色",
              title: "中国色",
              url: "http://zhongguose.com/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRbyB.png",
              name: "配色表",
              title: "配色表",
              url: "http://tool.c7sky.com/webcolor/",
            },
            {
              ico: "http://materialuicolors.co/img/favicon.ico",
              name: "materialuicolors",
              title: "materialuicolors",
              url: "http://materialuicolors.co/",
            },
            {
              ico: "https://color.hailpixel.com/static/ios/media/colordot-icon@2x.png",
              name: "Colordot",
              title: "随机颜色",
              url: "https://color.hailpixel.com/#",
            },
            {
              ico: "https://madewith.cn/favicon.png",
              name: "ColorUI",
              title: "专注视觉的小程序组件库",
              url: "https://madewith.cn/51",
            },
          ],
        },
        {
          id: "tupian",
          name: "图片",
          children: [
            {
              ico: "https://unsplash.com/favicon-32x32.png",
              name: "Unsplash",
              title: "无版权图片",
              url: "https://unsplash.com/",
            },

            {
              ico: "https://www.lightgalleryjs.com/favicon-32x32.png",
              name: "lightGallery",
              title: "图片、视频",
              url: "https://www.lightgalleryjs.com//",
            },
            {
              ico: "https://www.91sotu.com/favicon.ico",
              name: "搜图导航",
              title: "搜图导航",
              url: "https://www.91sotu.com/",
            },
            {
              ico: "https://tinify.cn/images/favicon.ico",
              name: "TinyPNG",
              title: "熊猫图片压缩",
              url: "https://tinify.cn/",
            },
            {
              ico: "https://www.gaituya.com/favicon.ico",
              name: "改图鸭",
              title:
                "压缩、转换、转文字、改大小、改分辨率、老照片修复、编辑、加水印、变漫画、特效...",
              url: "https://www.gaituya.com/",
            },
            {
              ico: "https://bgsub.cn/webapp/favicon.ico",
              name: "Bgsub",
              title: "修改背景、编辑图片",
              url: "https://bgsub.cn/webapp/",
            },

            {
              ico: "https://macimg.com/content/images/system/favicon_1601432933484_f405da.png",
              name: "麦克图床",
              title: "上传图片获取在线链接",
              url: "https://macimg.com/",
            },
            {
              ico: "https://www.upyun.com/static/favicon-32x32.png",
              name: "WebP图片压缩",
              title: "WebP图片压缩",
              url: "https://www.upyun.com/webp?utm_source=baidu&utm_medium=ppc&utm_campaign=%E4%BA%91%E5%A4%84%E7%90%86&utm_term=webp&utm_content=webp008&bd_vid=8557131538873693775",
            },
          ],
        },
        {
          id: "youxi",
          name: "游戏",
          children: [
            {
              ico: "https://learngitbranching.js.org/assets/favicon.ico",
              name: "Gitgame",
              title: "git从这里开始",
              url: "https://learngitbranching.js.org/?locale=zh_CN",
            },
            {
              ico: "http://flexboxfroggy.com/favicon.ico",
              name: "FLEXBOX",
              title: "flex布局从这里开始",
              url: "http://flexboxfroggy.com/",
            },
          ],
        },
        {
          id: "chajian",
          name: "插件",
          children: [
            {
              ico: "https://chrome.zzzmh.cn/favicon.ico",
              name: "极简插件",
              title: "极简插件",
              url: "https://chrome.zzzmh.cn/#/index",
            },
            {
              ico: "https://www.chajianxw.com/static/favicon.ico",
              name: "插件小屋",
              title: "插件小屋",
              url: "https://www.chajianxw.com/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRzmz.png",
              name: "JQuery插件库",
              title: "JQuery插件库",
              url: "https://www.jq22.com/",
            },
            {
              ico: "https://greasyfork.org/vite/assets/blacklogo16.bc64b9f7.png",
              name: "油猴官网",
              title: "油猴官网",
              url: "https://greasyfork.org/zh-CN",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRJGQ.png",
              name: "油猴中文网",
              title: "油猴中文网",
              url: "https://bbs.tampermonkey.net.cn/",
            },
            {
              ico: "https://www.lanzou.com/favicon.ico",
              name: "其他",
              title: "可能有你想要的，杂七杂八，密码：amoureux555",
              url: "https://amoureux555.lanzoum.com/b03j6d3xi",
            },
          ],
        },
        {
          id: "jiekou",
          name: "接口相关",
          children: [
            {
              ico: "https://yiketianqi.com/favicon.ico",
              name: "天气API",
              title: "天气API",
              url: "https://yiketianqi.com/index/doc",
            },
            {
              ico: "https://mapapi.qq.com/web/lbs/logo/favicon.ico",
              name: "腾讯地图",
              title: "腾讯地图",
              url: "https://lbs.qq.com/webDemoCenter/glAPI/glMap/createMap",
            },
            {
              ico: "https://mapapi.qq.com/web/lbs/logo/favicon.ico",
              name: "腾讯位置服务",
              title: "腾讯位置服务",
              url: "https://lbs.qq.com/webDemoCenter/javascriptV2/libraries/placeLibrary",
            },
            {
              ico: "https://lbsyun.baidu.com/skins/MySkin/resources/img/icon/lbsyunlogo_icon.ico",
              name: "百度地图",
              title: "百度地图开放平台",
              url: "https://lbsyun.baidu.com/index.php?title=jspopularGL",
            },
            {
              ico: "https://a.amap.com/pc/static/favicon.ico",
              name: "高德地图",
              title: "高德地图开放平台",
              url: "https://lbs.amap.com/api/jsapi-v2/summary/",
            },
          ],
        },
        {
          id: "shuiyin",
          name: "去水印",
          children: [
            {
              ico: "https://m1.im5i.com/2023/01/02/UGciu3.png",
              name: "疯狂视频",
              title: "疯狂视频",
              url: "https://douyin.video996.com/",
            },
            {
              ico: "https://ae01.alicdn.com/kf/Hb54975f7973845bf9f54a110dfd65064i.png",
              name: "酷豆",
              title: "酷豆",
              url: "https://dy.kukutool.com/",
            },
            {
              ico: "http://www.cainiaojiexi.com/favicon.ico",
              name: "菜鸟",
              title: "菜鸟",
              url: "http://www.cainiaojiexi.com/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVR7Ts.png",
              name: "嗨呀",
              title: "菜嗨呀",
              url: "http://www.haiya360.com/",
            },
          ],
        },
        {
          id: "iconfont",
          name: "Icon、SVG相关",
          children: [
            {
              ico: "https://m1.im5i.com/2022/10/31/UVR5iS.png",
              name: "阿里矢量图标库",
              title: "Iconfont",
              url: "https://www.iconfont.cn/",
            },
            {
              ico: "https://fontawesome.dashgame.com/assets/ico/favicon.ico",
              name: "Font Awesome",
              title: "Font Awesome",
              url: "https://fontawesome.dashgame.com/",
            },
            {
              ico: "https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg",
              name: "IconPark",
              title: "IconPark",
              url: "https://iconpark.oceanengine.com/official",
            },
            {
              ico: "https://igoutu.cn/vue-static/icon/favicon/icons8_fav_32%C3%9732.png",
              name: "ICONS",
              title: "ICONS",
              url: "https://igoutu.cn/icons",
            },
            {
              ico: "https://www.iconfinder.com/static/img/favicons/favicon-32x32.png?87b2a5c3aa",
              name: "ICONFINDER",
              title: "ICONFINDER",
              url: "https://www.iconfinder.com/search?q=&price=free",
            },
            {
              ico: "http://www.zuohaotu.com/svg/images/logo.png",
              name: "Svg在线编辑器",
              title: "svg在线编辑器",
              url: "http://www.zuohaotu.com/svg/",
            },
            {
              ico: "https://undraw.co/favicon.ico",
              name: "UnDraw",
              title: "unDraw",
              url: "https://undraw.co/illustrations",
            },
            {
              ico: "https://static.production.thenounproject.com/img/favicons/favicon-32x32.015f779a87e7.png",
              name: "Noun project",
              title: "icons + photos",
              url: "https://thenounproject.com/",
            },
            {
              ico: "https://onlineconvertfree.com/favicon.ico",
              name: "Unsplash",
              title: "ico在线转图片",
              url: "https://onlineconvertfree.com/zh/convert-format/png-to-svg/",
            },
            {
              ico: "https://cn.office-converter.com/Online-Converter/OnlineConvert32.png",
              name: "在线转换器",
              title: "ico在线转图片",
              url: "https://cn.office-converter.com/free-ico-to-png",
            },
            {
              ico: "https://www.alltoall.net/qfy-content/uploads/2022/07/b42759ab5cf74aa8f1ce08d1317b6940.jpg",
              name: "icon_png",
              title: "ico在线转图片",
              url: "https://www.alltoall.net/ico_png/",
            },
            {
              ico: "https://www.bitbug.net/favicon.ico",
              name: "比特虫",
              title: "jpg、jpeg、gif、png等制作为ico图标",
              url: "http://www.bitbug.net/",
            },
          ],
        },
        {
          id: "emoji",
          name: "Emoji相关",
          children: [
            {
              ico: "https://getemoji.com/assets/ico/favicon.png",
              name: "Emoji表情",
              title: "Emoji表情",
              url: "https://getemoji.com/",
            },
            {
              ico: "https://bj.96weixin.com/favicon.ico",
              name: "表情代码",
              title: "emoji表情代码大全",
              url: "https://bj.96weixin.com/tools/emoji",
            },
            {
              ico: "https://emojiwiz.com/img/fav/favicon.ico",
              name: "表情能手",
              title: "表情能手",
              url: "https://emojiwiz.com/zh/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVR9So.jpg",
              name: "发表情",
              title: "发表情",
              url: "https://fabiaoqing.com/",
            },
          ],
        },
        {
          id: "echarts",
          name: "Echarts相关",
          children: [
            {
              ico: "http://uipower.com/static/images/index/pic_biaoq.png",
              name: "UIPower",
              title: "UI设计公司",
              url: "http://uipower.com/",
            },
            {
              ico: "https://echarts.apache.org/zh/images/favicon.png?_v_=20200710_1",
              name: "Apache Echarts",
              title: "Apache Echarts",
              url: "https://echarts.apache.org/zh/index.html",
            },
            {
              ico: "https://www.isqqw.com/favicon.ico",
              name: "Echarts Demo集",
              title: "Echarts Demo集",
              url: "https://www.isqqw.com/",
            },
            {
              ico: "http://analysis.datains.cn/finance-admin/upload/theme/img/8D9AE0CCF1CC43B998AD4FCB0B613EF4.png?v=1666919734997",
              name: "DataInsight",
              title: "DataInsight",
              url: "http://analysis.datains.cn/finance-admin/index.html#/chartLib/all",
            },
            {
              ico: "http://192.144.199.210/favicon.ico",
              name: "数据可视化技术",
              title: "数据可视化技术",
              url: "http://192.144.199.210/forum.php?mod=forumdisplay&fid=2",
            },
            {
              ico: "http://ppchart.com/favicon.ico",
              name: "PPChart",
              title: "PPChart",
              url: "http://ppchart.com/#/",
            },
          ],
        },
        {
          id: "donghua",
          name: "动画、特效",
          children: [
            {
              ico: "https://www.dowebok.com/favicon.ico",
              name: "Animate.css",
              title: "Animate.css",
              url: "https://www.dowebok.com/demo/2014/98/",
            },
            {
              ico: "https://animate.style/img/favicon.ico",
              name: "动画演示",
              title: "动画演示",
              url: "https://animate.style/",
            },
            {
              ico: "https://better-scroll.github.io/examples/static/bs.ico",
              name: "BetterScroll",
              title: "移动端的一些示例",
              url: "https://better-scroll.github.io/examples/#/",
            },
            {
              ico: "https://www.swiper.com.cn/favicon.ico",
              name: "Swiper",
              title: "Swiper中文网",
              url: "https://www.swiper.com.cn/demo/index.html",
            },
            {
              ico: "https://animpen.com/favicon.ico",
              name: "animpen",
              title: "码笔网",
              url: "https://animpen.com/",
            },
          ],
        },
        {
          id: "wendang",
          name: "文档手册相关",
          children: [
            {
              ico: "https://socket.io/zh-CN/images/favicon.png",
              name: "Socket.io",
              title: "Socket.io",
              url: "https://socket.io/zh-CN/",
            },
            {
              ico: "https://m1.im5i.com/2022/12/30/UGE8tw.png",
              name: "miniUi",
              title: "jquery miniui",
              url: "http://www.miniui.com/",
            },
            {
              ico: "https://m1.im5i.com/2022/12/30/UGEVYF.png",
              name: "MUI",
              title: "最接近原生APP体验的高性能前端框架",
              url: "https://dev.dcloud.net.cn/mui/",
            },
            {
              ico: "http://backbonejs.org/favicon.ico",
              name: "Backbone",
              title: "Backbone.js",
              url: "http://backbonejs.org/",
            },
            {
              ico: "https://angular.cn/assets/images/favicons/favicon.ico",
              name: "Angular",
              title: "三大主流框架之一",
              url: "https://angular.cn/",
            },
            {
              ico: "https://m1.im5i.com/2022/12/28/UGgKDT.png",
              name: "APlayer",
              title: "开源音乐播放器",
              url: "https://aplayer.js.org/#/zh-Hans/",
            },
            {
              ico: "https://ogp.me/favicon.ico",
              name: "开放图谱协议",
              title: "开放图谱协议",
              url: "https://ogp.me/",
            },
            {
              ico: "https://apidocjs.com/img/favicon.ico",
              name: "APIDOC",
              title: "RESTful Web API",
              url: "https://apidocjs.com/#configuration",
            },
            {
              ico: "https://www.lodashjs.com/img/favicon.ico",
              name: "Lodash",
              title: "Lodash中文文档（深拷贝）",
              url: "https://www.lodashjs.com/",
            },
            {
              ico: "https://www.npmjs.cn/images/favicon.ico",
              name: "Npm",
              title: "npm中文文档",
              url: "https://www.npmjs.cn/",
            },
            {
              ico: "https://www.yarnpkg.cn/favicon-32x32.png?v=6143f50112ddba9fdb635b0af2f32aff",
              name: "Yarn",
              title: "yarn中文文档",
              url: "https://www.yarnpkg.cn/getting-started",
            },
            {
              ico: "https://www.pnpm.cn/img/favicon.png",
              name: "Pnpm",
              title: "pnpm中文文档",
              url: "https://www.pnpm.cn/",
            },
            {
              ico: "https://cn.vuejs.org/logo.svg",
              name: "Vue2",
              title: "vue2中文文档",
              url: "https://cn.vuejs.org/",
            },
            {
              ico: "https://madewithvuejs.com/mandant/madewithvuejs/images/logo.png",
              name: "made with vue.js",
              title: "制成vue.js",
              url: "https://madewithvuejs.com/",
            },
            {
              ico: "https://cn.vuejs.org/logo.svg",
              name: "Vue3",
              title: "vue3中文文档",
              url: "https://v3.cn.vuejs.org/",
            },
            {
              ico: "https://zh-hans.reactjs.org/favicon-32x32.png?v=f4d46f030265b4c48a05c999b8d93791",
              name: "React",
              title: "React中文文档",
              url: "https://zh-hans.reactjs.org/docs/getting-started.html",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRaNq.png",
              name: "Bootstrap",
              title: "Bootstrap中文文档",
              url: "https://v3.bootcss.com/",
            },
            {
              ico: "https://file.iviewui.com/file/favicon.ico",
              name: "IVIew",
              title: "北京视图",
              url: "https://iview.github.io/components/grid",
            },
            {
              ico: "https://img01.yzcdn.cn/vant/logo.png",
              name: "Vant ui",
              title: "杭州有赞",
              url: "https://vant-contrib.gitee.io/vant/v2/#/zh-CN/",
            },
            {
              ico: "https://m1.im5i.com/2022/10/31/UVRyxD.png",
              name: "Mint-ui",
              title: "饿了么",
              url: "http://mint-ui.github.io/#!/zh-cn",
            },
            {
              ico: "https://element.eleme.cn/favicon.ico",
              name: "Element-ui",
              title: "饿了么",
              url: "https://element.eleme.cn/#/zh-CN/component/link",
            },
            {
              ico: "https://element-plus.gitee.io/images/element-plus-logo-small.svg",
              name: "Element-plus",
              title: "饿了么",
              url: "https://element-plus.gitee.io/zh-CN/guide/quickstart.html",
            },
            {
              ico: "https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png",
              name: "Ant Design",
              title: "蚂蚁金服antd",
              url: "https://ant.design/docs/react/introduce-cn",
            },
            {
              ico: "https://pro.ant.design/favicon.png",
              name: "Antd Pro",
              title: "Ant Design Pro",
              url: "https://pro.ant.design/zh-CN/",
            },
            {
              ico: "http://doc.ruoyi.vip/images/favicon.ico",
              name: "若依",
              title: "若依框架功能组件",
              url: "http://doc.ruoyi.vip/",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // 锚链接平滑滚动
    tabsColor(index) {
      // console.log(index);
      const tabsId = document.querySelector(`#${index}`);
      // console.log(tabsId);
      const headerHeight = document.getElementsByClassName("el-header");
      // const headerHeight = document.querySelector("#app");
      // console.log(headerHeight);
      if (tabsId) {
        window.scrollTo({
          top: tabsId.offsetTop - headerHeight[0].clientHeight - 20,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.left {
  z-index: 2;
}
.search-image {
  width: 20px;
  height: 20px;
}
.left {
  width: 75%;
  ::v-deep .el-card__body {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    div {
      margin: 10px 20px;
    }
  }
}
.text {
  font-size: 14px;
}

.box-card {
  div {
    position: relative;
    font-size: 16px;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 10px;
  }
  .clearfix {
    span {
      font-weight: 600;
    }
  }
  div:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
  }
  div:hover:before {
    width: 100%;
    left: 0;
    right: 0;
  }
  a:hover {
    color: #4285f4;
  }
  ::v-deep .el-card__body {
    padding: 10px;
  }
  width: 95%;
  margin-bottom: 30px;
  .twoitem {
    width: 160px;
    a {
      display: flex;
      align-items: flex-end;
    }
  }
}
::v-deep .el-card__header {
  text-align: left;
  padding: 15px 0 5px 30px;
}
#header-bar-menu {
  position: fixed;
  // width: 180px;
  top: 150px;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // div:hover {
  //   font-size: 20px;
  //   color: #40a9ff;
  //   cursor: pointer;
  //   & > a {
  //     font-size: 20px;
  //     color: #40a9ff;
  //   }
  // }
}
.el-timeline {
  ::v-deep .el-timeline-item {
    padding: 0;
    // &:hover {
    // color: #40a9ff;
    // color: red;
    // cursor: pointer;
    div:nth-of-type(3):hover {
      // color: red;
      cursor: pointer;
      div:nth-of-type(1) {
        color: #40a9ff;
      }
    }
    // }
  }
}
</style>
