// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  ['meta', { name: 'keywords', content: 'JAP,JustAuth,第三方授权登录,OAuth,SAML,登录认证'}],
  ['meta', { name: 'description', content: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。'}],
  ['meta', { name: 'baidu-site-verification', content: 'code-OmTOoMHYB6' }], // 百度统计的站长验证
  ['meta', { name: 'baidu_union_verify', content: '545c956c46d42c97d0d712b826c7125c' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['script', {}, `
             var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?f71eac525bffaa9e543a90337ddeb24b";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
              
              // gitter
              var hm1 = document.createElement("script");
              hm1.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
              var s1 = document.getElementsByTagName("script")[0]; 
              s1.parentNode.insertBefore(hm1, s1);
            })();
            
            ((window.gitter = {}).chat = {}).options = {
              room: 'fujieid/JAP'
            };
            
            // huoyan
            (function(para) {
                var p = para.sdk_url, n = 'huoYan', w = window, d = document,
                s = 'script',x = null,y = null;
                if(typeof(w['huoyanDataAnalytic']) !== 'undefined') {return false;}
                w['huoyanDataAnalytic'] = n;
                w[n] = w[n] || function(a) {
                return function() {(w[n]._q = w[n]._q || []).push([a, arguments]);}};
                w[n]['quick'] = w[n].call(null, 'quick');
                w[n]['search'] = w[n].call(null, 'search');
                x = d.createElement(s), y = d.getElementsByTagName(s)[0];x.async = 1;
                x.src = p;w[n].para = para;y.parentNode.insertBefore(x, y);
                })({
                sdk_url: 'https://identify.tankeai.com/assets/js/identify.js',
                server_url: 'https://identify.tankeai.com'
            });
            var g_huoyan_opt = {
                site_id : 1924,
                user_company:1965
            };
            huoYan.quick('autoTrack',g_huoyan_opt);
        `]
]
