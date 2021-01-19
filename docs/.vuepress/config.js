module.exports = {
    base: '/',
    port: 8088,
    title: 'JA Plus',
    description: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['meta', {name: 'google-site-verification', content: 'tjusIIaEiX5v_c2v8wsZwUGUIHbYLaHk3MqNtv9ai5Y'}],
        ['meta', {name: 'baidu-site-verification', content: 'code-lzLQR3pi2O'}],
        ['meta', {name: 'description', content: 'JAP 是一款开源的认证中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中。'}],
        ['meta', {name: 'keywords', content: 'JAP,JustAuth,第三方授权登录,OAuth,SAML,登录认证'}],
        ['script', {}, `
             var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?565c1d41117fca3b8c86764d58446e76";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);

              // 引入谷歌,不需要可删除这段
              var hm1 = document.createElement("script");
              hm1.src = "https://www.googletagmanager.com/gtag/js?id=UA-151202614-1";
              var s1 = document.getElementsByTagName("script")[0]; 
              s1.parentNode.insertBefore(hm1, s1);
              
              // gitter
              var hm1 = document.createElement("script");
              hm1.src = "https://sidecar.gitter.im/dist/sidecar.v1.js";
              var s1 = document.getElementsByTagName("script")[0]; 
              s1.parentNode.insertBefore(hm1, s1);
            })();
            
            ((window.gitter = {}).chat = {}).options = {
              room: 'yadong-zhang/justauth'
            };

            // 谷歌加载,不需要可删除
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'UA-151202614-1');
        `]
    ],
    plugins: [
        // ['homebadge', {
        //     selector: '.hero',
        //     repoLink: 'https://github.com/justauth/JustAuth/releases',
        //     badgeLink: 'https://img.shields.io/github/v/release/justauth/JustAuth?style=flat-square',
        //     badgeGroup: [
        //         'https://img.shields.io/badge/build-passing-brightgreen?style=flat-square',
        //         'https://codecov.io/gh/justauth/JustAuth/branch/master/graph/badge.svg',
        //         'https://img.shields.io/github/license/justauth/JustAuth?style=flat-square&&color=red',
        //         'https://img.shields.io/badge/JDK-1.8+-green.svg',
        //         'https://img.shields.io/badge/Api%20Docs-1.15.9-orange',
        //         'https://img.shields.io/github/stars/justauth?style=social',
        //         'https://gitee.com/yadong.zhang/JustAuth/badge/star.svg?theme=gvp',
        //         ''
        //     ]
        // }]
    ],
    markdown: {
        // 代码块显示行号
        lineNumbers: true
    },
    theme: 'antdocs',
    themeConfig: {
        // 显示所有页面的标题链接
        // displayAllHeaders: true,
        search: true,
        // 搜索结果数量
        searchMaxSuggestions: 10,
        // 最后更新时间 string | boolean
        lastUpdated: '最后更新时间',
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        // 启用页面滚动效果
        smoothScroll: true,
        backToTop: true,
        logo: '/logo.png', // 侧边栏显示2级
        ads: {
            style: 2,
            speed: 3000,
            items:[
                {
                    text: '爆款特惠 - 精选爆款产品低至0.55折',
                    image:'/ads/my/aliyun1.jpg',
                    link: 'https://www.aliyun.com/activity/daily/bestoffer?userCode=wylo59db'
                },
                {
                    text: '新人福利专场 - 新用户福利享不停',
                    image:'/ads/my/aliyun2.jpg',
                    link: 'https://www.aliyun.com/1111/new?userCode=wylo59db'
                },
                {
                    text: '四步夺宝 赢 Flink 潮牌卫衣，首购享一折优惠',
                    image:'/ads/my/aliyun3.jpg',
                    link: 'https://developer.aliyun.com/topic/ffa2020/treasure1?userCode=wylo59db'
                },
                {
                    text: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 JustAuth 文档侧边栏等页面。',
                    image:'/_sponsor.png',
                    link: '/sponsor'
                }
            ]
        },
        nav: [ // 导航栏配置
            {
                text: '💸 特别赞助商',
                ariaLabel: '特别赞助商',
                items: [
                    {text: '我要赞助', link: '/sponsor'},
                    {text: '符节科技 - 企业级身份云', link: 'https://www.fujieid.com?utm_source=justauth', target: '_blank'},
                ]
            },
            // { text: '📖 博客', link: '/blogs' },
            {text: '💬 留言', link: '/gustbook'},
            {
                text: '👪 社区',
                ariaLabel: 'JAP 社区',
                items: [
                    {text: '我们需要什么？', link: '/community/weneed'},
                    {text: '成员相关', link: '/community/members'},
                    {text: '贡献者行为准则', link: '/community/code-of-conduct'},
                    {text: '贡献者指南', link: '/community/contributing'},
                    {text: '用户权益', link: '/community/user-rights'},
                ]
            },
            {text: '🏠 官网', link: 'https://jap.fujieid.com', target: '_blank'},
            {text: 'Gitee', link: 'https://gitee.com/yadong.zhang/JustAuth', target: '_blank'},
            {text: 'Github', link: 'https://github.com/justauth/JustAuth', target: '_blank'}
        ],
        sidebar: {
            '/': [
                // ['demo', '例子'],
                ['about', '关于'],
                {
                    title: '❤ 快速开始（必读）',
                    collapsable: false,
                    sidebarDepth: 1, // 侧边栏显示2级
                    children: [
                        ['/quickstart/explain', '名词解释'],
                        // ['/quickstart/jap-simple', '使用 jap-simple'],
                        ['/quickstart/jap-social', '使用 jap-social'],
                        ['/quickstart/jap-oauth2', '使用 jap-oauth2'],
                        ['/quickstart/jap-oidc', '使用 jap-oidc'],
                        ['/quickstart/error_code', '异常代码']
                    ]
                },
                {
                    title: 'Q&A',
                    collapsable: false,
                    sidebarDepth: 1, // 侧边栏显示2级
                    children: [
                        ['/qa/error', '异常相关'],
                        ['/qa/func', '功能相关'],
                    ]
                },
                ['contributors', '贡献者'],
                ['thx', '致谢'],
                ['update', '更新记录'],
            ]
        }, // 侧边栏配置
        sidebarDepth: 1
    }
};
