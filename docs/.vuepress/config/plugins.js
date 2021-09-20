// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送
  'vuepress-plugin-chart',

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在StackOverflow中搜索',
          frontUrl: 'https://stackoverflow.com/search?q=', // 搜索链接的前面部分
          behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在 Google 中搜索',
          frontUrl: 'https://www.google.com/search?q=',
        },
        {
          title: '在 Bing 中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '在百度中搜索',
          frontUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
        },
        {
          title: '在MDN中搜索',
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在 Vue API 中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        },
        {
          title: '通过百度搜索本站的',
          frontUrl: 'https://www.baidu.com/s?wd=site%3Ajustauth.plus%20',
        },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      delay: 500,
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
        zIndex: 10000,
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: 'f71eac525bffaa9e543a90337ddeb24b',
    },
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: '51b4dce978c91ab3d004',
        clientSecret: 'd0e1ffb10cdbbb18e5ef2f2a29bf6a9ea4e1dcff',
        repo: 'jap-talk', // GitHub 仓库
        owner: 'fujieid', // GitHub仓库所有者
        admin: ['zhangyd-c'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
