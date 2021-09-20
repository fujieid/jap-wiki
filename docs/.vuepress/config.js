const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "JA Plus 开发者文档",
  description: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
