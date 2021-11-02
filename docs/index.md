---
home: true
sidebar: false
heroImage: /img/logo.png
heroText: JustAuthPlus
tagline: 一款开源的登录认证中间件，支持 Form、 OAuth2.0、OIDC、Http（Basic、Digest、Bearer）、LDAP、SAML、MFA、SSO 等 
actionText: 立即开始 →
actionLink: /guide/
# auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式
# 提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量
# bannerBg: background:url(/img/banner.jpg) center center / cover no-repeat;
bannerBg: none

features: # 可选的
- title: OAuth 2.0 Server
  details: 基于 RFC6749、RFC7636、RFC7033等标准协议和 OpenID Connect Core 1.0 认证协议，自研的一款轻量级、业务解耦、开箱即用的新一代国产授权认证框架。
  link: /ids/
- title: OAuth 2.0 协议登录
  details: 支持标准的 OAuth 2.0 协议登录，支持授权码模式、隐式授权模式、密码模式、客户端模式以及在授权码模式之上的 PKCE 模式。
  link: /quickstart/jap-oauth2/
- title: OIDC 协议登录
  details: 支持标准的 OpenID Connect Core 1.0 协议登录，支持多种 response_type，如：code、code token、code id_token、token、id_token、token id_token 等
  link: /quickstart/jap-oidc/
- title: 社会化平台登录
  details: 基于 JustAuth，支持国内外数十家知名的第三方平台的第三方登录。
  link: /quickstart/jap-social/
- title: LDAP 登录
  details: 支持使用 LDAP 中的用户进行身份认证，适配 LDAP 中所有标准密码加密类型。
  link: /quickstart/jap-ldap/
- title: 单点登录
  details: 内置单点登录功能，一点登录，处处通行。
  link: /quickstart/jap-sso/
- title: 账号密码登录
  details: 支持本地系统账号密码的登录，支持“记住我”。
  link: /quickstart/jap-simple/
- title: API 登录
  details: 支持 Basic、Digest 和 Bearer 等方式
  link: /quickstart/jap-http-api/
- title: 多因素认证（MFA）
  details: 支持 TOTP、手机验证码、邮箱验证码等多因素认证。
  link: /quickstart/jap-mfa/
- title: SAML 登录
  details: 支持 SAML 协议的登录认证
- title: 模块化开发
  details: 基于模块化设计、开发，针对每一种登录场景，比如账号密码、OAuth、OIDC等，都单独提供了独有的模块化解决方案。
- title: 多种语言支持
  details: 支持多种语言的 SDK，如：Java、NodeJS、Python、PHP、GO等。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: detailed
simplePostListLength: 20
---
