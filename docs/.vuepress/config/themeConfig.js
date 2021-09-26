const nav = require('./nav.js');
const htmlModules = require('./htmlModules.js');
// const sidebar = require('./sidebar.js');

// 主题配置
module.exports = {
  nav,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'fujieid/jap-wiki', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 20, // 搜索结果显示最大数
  lastUpdated: 'Last Updated', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  category: true, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  updateBar: { // 最近更新栏
    showToArticle: true, // 显示到文章页底部，默认true
    moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
  sidebarOpen: true,

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'FuJie Team', // 必需
    link: 'https://github.com/fujieid', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: '/fujie-team.png',
    name: 'FuJie Team',
    slogan: '以开源的形式赋能开发者. Just auth into any app.',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-gitee',
        title: 'GitHub',
        link: 'https://gitee.com/fujieid',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/fujieid',
      },
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:dev@fujieid.com',
      },
      {
        iconClass: 'icon-zhihu',
        title: '知乎',
        link: 'https://www.zhihu.com/org/fu-jie-ke-ji-14',
      },
      {
        iconClass: 'icon-csdn',
        title: 'CSDN',
        link: 'https://blog.csdn.net/duuzuu',
      },
      {
        iconClass: 'icon-weixin',
        title: '微信',
        link: '/img/wechat-account-qrcode.jpg',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      '<p>友情链接：<a href="https://uniadmin.jiangruyi.com" target="_blank">UniAdmin</a> | <a href="https://jiangruyi.com" target="_blank">江如意的博客</a></p>' +
        'Copyright © 2021-2040 FUJIE. All rights reserved. 北京符节科技有限公司版权所有 | ' +
        '<a href="http://beian.miit.gov.cn/" target="_blank">京ICP备2020044519号-4</a>', // 博客版权信息，支持a标签
  },
  htmlModules // 插入hmtl(广告)模块
}
