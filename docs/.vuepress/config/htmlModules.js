/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 全局左侧边栏顶部
 *   sidebarB: htmlString, 全局左侧边栏底部
 *
 *   pageT: htmlString, 全局页面顶部
 *   pageB: htmlString, 全局页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认全局；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块宽高最大是200*200px。2.请给自定义元素定一个不超过200px的固定宽高。3.在屏宽小于960px时无论如何都不会显示。
 */

module.exports = {
  homeSidebarB: `<div class="wwads-cn wwads-horizontal" data-id="125" style="max-width:350px;margin-top: 0;"></div>`,
  // 全局左侧边栏顶部，固定100% * 150px可显示，max-height:150px 未见显示
  // sidebarT: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:100%;max-width:150px"></div>`,
  // 全局左侧边栏底部
  // sidebarB: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:100%;max-width:150px"></div>`,
  // 全局页面顶部， 横向自适应 固定100% * 90px可显示，max-height:90px未见显示
  pageT: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:100%;height:90px;"></div>`,
  // pageTshowMode: 'article',
  // 全局页面底部， 横向自适应 固定100% * 90px可显示，max-height:90px未见显示
  // pageB: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:100%;height:90px;"></div>`,
  // pageBshowMode: 'article',
  // 会遮挡部分侧边栏 全局窗口左下角 固定200*200px
  // windowLB: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:200px;height:200px;"></div>`,
  // 全局窗口右下角 固定200*200px
  // windowRB: `<div class="wwads-cn wwads-horizontal" data-id="125" style="width:200px;height:200px;"></div>`,
}


// module.exports = {
//   homeSidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   sidebarB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageT: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   pageB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowLB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
//   windowRB: `<div style="width:100%;height:100px;color:#fff;background: #eee;">自定义模块测试</div>`,
// }
