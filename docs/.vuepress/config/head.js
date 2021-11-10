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
              var s = document.getElementsByTagName("script")[0];
              
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?f71eac525bffaa9e543a90337ddeb24b";
              s.parentNode.insertBefore(hm, s);
              
              // gitter
              var gitter = document.createElement("script");
              gitter.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
              s.parentNode.insertBefore(gitter, s);
              
              // 万维
              var makemoney = document.createElement("script");
              makemoney.src = "https://cdn.wwads.cn/js/makemoney.js";
              s.parentNode.insertBefore(makemoney, s);
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
            
            // 万维广告：“禁止”广告拦截
            // function called if wwads is blocked
            // https://github.com/bytegravity/whitelist-wwads
            function ABDetected() {
              var adBlockDetected_div = document.createElement("div");
              adBlockDetected_div.style.cssText = "position: absolute; top: 0; left: 0; width: 100%; background: #fc6600; color: #fff; z-index: 9999999999; font-size: 14px; text-align: center; line-height: 1.5; font-weight: bold; padding-top: 6px; padding-bottom: 6px;";
              adBlockDetected_div.innerHTML = "我们的广告服务商 <a style='color:#fff;text-decoration:underline' target='_blank' href='https://wwads.cn/page/end-user-privacy'>并不跟踪您的隐私</a>，为了支持本站的长期运营，请将我们的网站 <a style='color: #fff;text-decoration:underline' target='_blank' href='https://wwads.cn/page/whitelist-wwads'>加入广告拦截器的白名单</a>。";
              document.getElementsByTagName("body")[0].appendChild(adBlockDetected_div);
              // add a close button to the right side of the div
              var adBlockDetected_close = document.createElement("div");
              adBlockDetected_close.style.cssText = "position: absolute; top: 0; right: 10px; width: 30px; height: 30px; background: #fc6600; color: #fff; z-index: 9999999999; line-height: 30px; cursor: pointer;";
              adBlockDetected_close.innerHTML = "×";
              adBlockDetected_div.appendChild(adBlockDetected_close);
              // add a click event to the close button
              adBlockDetected_close.onclick = function() {
              this.parentNode.parentNode.removeChild(this.parentNode);
              };
            }
            
            function docReady(t) {
                "complete" === document.readyState ||
                "interactive" === document.readyState
                  ? setTimeout(t, 1)
                  : document.addEventListener("DOMContentLoaded", t);
            }
            
            //check if wwads' fire function was blocked after document is ready with 3s timeout (waiting the ad loading)
            docReady(function () {
              setTimeout(function () {
                if( window._AdBlockInit === undefined ){
                    ABDetected();
                }
              }, 3000);
            });
        `]
]
