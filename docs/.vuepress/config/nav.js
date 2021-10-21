// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '📖 白皮书',
        link: 'https://justauth.plus/paper/jap-paper-latest.pdf',
        target: '_blank'
    },
    {
        text: '开始使用🔥',
        link: '/guide/',
        items: [
            {text: '名词解释', link: '/guide/explain/'},
            {
                text: '快速开始',
                items: [
                    {text: '使用jap-simple', link: '/quickstart/jap-simple/'},
                    {text: '使用jap-social', link: '/quickstart/jap-social/'},
                    {text: '使用jap-oauth2', link: '/quickstart/jap-oauth2/'},
                    {text: '使用jap-oidc', link: '/quickstart/jap-oidc/'},
                    {text: '使用jap-sso', link: '/quickstart/jap-sso/'},
                    {text: '使用jap-mfa', link: '/quickstart/jap-mfa/'},
                    {text: '使用jap-http-api', link: '/quickstart/jap-http-api/'},
                    {text: '错误代码', link: '/quickstart/error_code/'}
                ],
            },
            {
                text: 'IDS',
                items: [
                    {link: '/ids/', text: '简介'},
                    {link: '/ids/quickstart/', text: '快速开始'},
                    {link: '/ids/scope/', text: '自定义scope'},
                    {link: '/ids/custom-login-page/', text: '自定义登录页面'},
                    {link: '/ids/custom-confirm-page/', text: '自定义确认授权页面'},
                    {link: '/ids/cache/', text: '自定义缓存'},
                    {link: '/ids/jwks/', text: '自定义Token加密密钥'},
                    {link: '/ids/pkce/', text: '使用PKCE模式'},
                    {link: '/ids/auto-approve/', text: '自动授权'},
                    {link: '/ids/error_code/', text: '错误代码'},
                ],
            },
            {
                text: 'starter',
                items: [
                    {link: '/starter/jap-spring-boot-starter/', text: 'jap-spring-boot-starter'},
                    {link: '/starter/jap-simple-spring-boot-starter/', text: 'jap-simple-spring-boot-starter'},
                    {link: '/starter/jap-social-spring-boot-starter/', text: 'jap-social-spring-boot-starter'},
                    {link: '/starter/jap-oauth2-spring-boot-starter/', text: 'jap-oauth2-spring-boot-starter'},
                    {link: '/starter/jap-oidc-spring-boot-starter/', text: 'jap-oidc-spring-boot-starter'},
                ],
            },
        ],
    },
    {
        text: '旧版v1.0.4',
        link: '/v1.0.4/guide/',
        items: [
            {text: '名词解释', link: '/v1.0.4/guide/explain/'},
            {
                text: '快速开始',
                items: [
                    {text: '使用jap-simple', link: '/v1.0.4/quickstart/jap-simple/'},
                    {text: '使用jap-social', link: '/v1.0.4/quickstart/jap-social/'},
                    {text: '使用jap-oauth2', link: '/v1.0.4/quickstart/jap-oauth2/'},
                    {text: '使用jap-oidc', link: '/v1.0.4/quickstart/jap-oidc/'},
                    {text: '使用jap-sso', link: '/v1.0.4/quickstart/jap-sso/'},
                    {text: '使用jap-mfa', link: '/v1.0.4/quickstart/jap-mfa/'},
                    {text: '错误代码', link: '/v1.0.4/quickstart/error_code/'}
                ],
            },
            {
                text: 'IDS',
                items: [
                    {link: '/v1.0.4/ids/', text: '简介'},
                    {link: '/v1.0.4/ids/quickstart/', text: '快速开始'},
                    {link: '/v1.0.4/ids/scope/', text: '自定义scope'},
                    {link: '/v1.0.4/ids/custom-login-page/', text: '自定义登录页面'},
                    {link: '/v1.0.4/ids/custom-confirm-page/', text: '自定义确认授权页面'},
                    {link: '/v1.0.4/ids/cache/', text: '自定义缓存'},
                    {link: '/v1.0.4/ids/jwks/', text: '自定义Token加密密钥'},
                    {link: '/v1.0.4/ids/pkce/', text: '使用PKCE模式'},
                    {link: '/v1.0.4/ids/auto-approve/', text: '自动授权'},
                    {link: '/v1.0.4/ids/error_code/', text: '错误代码'},
                ],
            },
        ],
    },
    {
        text: '集成案例',
        link: '/demo/',
        items: [
            {link: '/demo/ids-demo/', text: 'jap-ids的demo'},
            {link: '/demo/front-end-and-backend/', text: '前后端分离架构中使用JAP'},
            {link: '/demo/springboot/', text: 'SpringBoot中使用JAP'},
        ],
    },
    {
        text: '常见问题',
        items: [
            {link: '/qa/feedback/', text: '问题反馈'},
            {link: '/qa/project/', text: '项目问题'},
            {link: '/qa/error/', text: '异常问题'},
            {link: '/qa/func/', text: '功能问题'},
        ],
    },
    {
        text: '社区',
        items: [
            {text: '数据看板🔥', link: '/community/kanban/'},
            {text: '贡献指南', link: '/community/contribution/'},
            {text: '行为准则', link: '/community/code-of-conduct/'},
            {text: '用户权益', link: '/community/user-rights/'},
            {text: '贡献者们', link: '/community/contributors/'},
            {text: '社区配套', link: 'https://gitee.com/fujieid'},
        ],
    },
    {
        text: '技术博客',
        items: [
            { text: '教程', link: '/blog/tutorials/' },
            { text: '投稿', link: '/blog/contribution/' },
            { text: '资讯', link: '/blog/news/' },
        ],
    },
    {
        text: '关于',
        items: [
            {text: '关于', link: '/about/me/'},
            {text: '友情链接', link: '/about/friends/'},
            {text: '捐赠列表', link: '/about/donate/'},
            {text: '其他开源', link: '/about/opensource/'},
            {text: '更新记录', link: '/about/update/'},
        ],
    },
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
    }
]
