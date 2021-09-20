---
home: true
sidebar: false
#heroImage: /img/logo.png
heroText: JustAuthPlus
tagline: 一款开源的登录认证中间件，支持 OAuth2.0、OIDC、Http Basic、Digest、Bearer、LDAP、SAML、MFA、SSO 等
actionText: 立刻进入 →
actionLink: /quickstart/
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
- title: 账号密码登录
  details: 支持本地系统账号密码的登录，支持“记住我”。
  link: /quickstart/jap-simple/
- title: 单点登录
  details: 内置单点登录功能，一处登录，处处通行。
  link: /quickstart/jap-sso/
- title: LDAP 登录
  details: 支持 LDAP 方式的登录认证
- title: SAML 登录
  details: 支持 SAML 协议的登录认证
- title: API 登录
  details: 支持通过 API 的形式登录指定系统。
- title: 多因素认证（MFA）
  details: 支持 TOTP、手机验证码、邮箱验证码等多因素认证。
  link: /quickstart/jap-mfa/
- title: 模块化开发
  details: 基于模块化设计、开发，针对每一种登录场景，比如账号密码、OAuth、OIDC等，都单独提供了独有的模块化解决方案。
- title: 多种语言支持
  details: 支持多种语言的 SDK，如：Java、NodeJS、Python、PHP、GO等。

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
#simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---




<p align="center">
	<img src="/logo.png" width="300">
</p>
<p align="center">
	<strong>Just auth into any app</strong>
</p>
<p align="center">
	<a target="_blank" href="https://search.maven.org/search?q=jap">
	  <img src="https://img.shields.io/github/v/release/fujieid/jap?style=flat-square" ></img>
	</a>
	<a target="_blank" href="https://oss.sonatype.org/content/repositories/snapshots/com/fujieid/">
	  <img src="https://img.shields.io/nexus/s/https/oss.sonatype.org/com.fujieid/jap-bom.svg?style=flat-square" ></img>
	</a>
	<a target="_blank" href="https://gitee.com/yadong.zhang/JustAuth/blob/master/LICENSE">
	  <img src="https://img.shields.io/badge/license-LGPL%203.0-yellow" ></img>
	</a>
  <a href="https://www.codacy.com/gh/fujieid/jap/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fujieid/jap&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/c4c76cde65594819ab3de3e25e9b99d4"/>
</a>
  <a target="_blank" href="https://codecov.io/gh/fujieid/jap" title="codecov">
	  <img src="https://codecov.io/gh/fujieid/jap/branch/master/graph/badge.svg?token=WmfmgwxtnJ" ></img>
	</a>
  <a target="_blank" href="https://travis-ci.com/fujieid/jap" title="ci">
	  <img src="https://travis-ci.com/fujieid/jap.svg?branch=master&status=passed" ></img>
	</a>
	<a target="_blank" href="https://gitter.im/fujieid/JAP?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
	  <img src="https://badges.gitter.im/fujieid/JAP.svg" ></img>
	</a>
</p>
<p align="center">
  <a target="_blank" href='https://gitee.com/fujieid/jap/stargazers'>
    <img src="https://gitee.com/fujieid/jap/badge/star.svg?theme=white" alt='star'></img>
  </a>
  <a target="_blank" href='https://github.com/fujieid/jap/stargazers'>
    <img src="https://img.shields.io/github/stars/fujieid/jap?style=social" alt='star'></img>
  </a>
</p>
<p align="center">
	<strong>开源地址：</strong> <a target="_blank" href='https://gitee.com/fujieid/jap'>Gitee</a> | <a target="_blank" href='https://github.com/fujieid/jap'>Github</a> | <a target="_blank" href='https://codechina.csdn.net/fujieid/jap'>CodeChina</a>
</p>
<p align="center">
	<strong>API 文档：</strong> <a target="_blank" href='https://apidoc.gitee.com/fujieid/jap'>https://apidoc.gitee.com/fujieid/jap</a>
</p>
<p align="center">
	<strong>开发者文档：</strong> <a target="_blank" href='https://justauth.plus'>https://justauth.plus</a>
</p>
<p align="center">
	<strong>社区论坛：</strong> <a target="_blank" href='https://discuss.justauth.plus'>https://discuss.justauth.plus</a>
</p>

## JAP 是什么？

JustAuthPlus（以下简称"**JAP**"）是一款开源的登录认证中间件，基于模块化设计，为所有需要登录认证的 WEB 应用提供一套标准的技术解决方案，开发者可以基于 JAP 适配绝大多数的 WEB 系统（自有系统、联邦协议），就像集成 [JustAuth](https://gitee.com/yadong.zhang/JustAuth) 一样，简单方便。

## JAP 有什么特性？

- **易用性**：JAP 的 API 沿袭 JustAuth 的简单性，做到了开箱即用的程度。JAP 高度抽象各种登录场景，提供了多套简单使用的 API，极大程度的降低了开发者的学习成本和使用成本
- **全面性**：JAP 全量适配 JustAuth 支持的第三方平台，实现第三方登录。同时也支持所有基于标准OAuth2.0 协议或者 OIDC 协议或者 SAML 协议的应用、系统，同时 JAP 还提供不同语言版本的项目 SDK，适配多种研发场景
- **模块化**：JAP 基于模块化设计开发，针对每一种登录场景，比如账号密码、OAuth、OIDC等，都单独提供了独有的模块化解决方案
- **标准化**：JAP 和业务完全解耦，将登录认证相关的逻辑抽象出一套标准的技术解决方案，针对每一种业务场景，比如用户登录、验证密码、创建并绑定第三方系统的账号等，都提供了一套标准的策略或者接口，开发者可以基于 JAP，灵活并方便的完成相关业务逻辑的开发和适配
- **通用性**：JAP 不仅可以用到第三方登录、OAuth授权、OIDC认证等业务场景，还能适配开发者现有的业务系统的普通账号密码的登录场景，基本将所有登录相关的业务场景都已经涵盖。针对 WEB 应用，JAP 将提供满足各种不同登录场景的解决方案（和开发语言无关）

## JAP 有什么功能？

![](/_media/01c3231f.png)

## 适用于哪些场景？

JAP 适用于所有需要登录功能的场景。比如：
- **要求规范**：新项目立项，你们需要研发一套包含登录、认证的系统，并且从长远方面考虑，你们需要一套标准的、灵活的、功能全面的登录认证功能。
- **需求灵活**：现有登录模块为自研，但是新一轮的技术规划中，你们想将登录认证模块重构，以更加灵活的架构适应后面的新需求，比如：集成 MFA 登录、集成 OAuth 登录、SAML登录等。
- **力求省事**：你们的项目太多（或者是开发语言较多，比如：Java、Python、Node 等），每个项目都需要登录认证模块，想解决这种重复劳动的问题，使研发人员有更多的时间和精力投入到业务开发中，提高研发产能和研发效率。
- ...

## 参与&贡献

参考 [贡献者指南](/community/contribution/)、 [贡献者行为准则](/community/code-of-conduct)

::: tip
提交问题前，建议阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。
:::

## 开源推荐
- `JustAuth` 开箱即用的整合第三方登录的开源组件: [https://github.com/justauth/JustAuth](https://github.com/justauth/JustAuth)
- `spring-boot-demo` 深度学习并实战 spring boot 的项目: [https://github.com/xkcoding/spring-boot-demo](https://github.com/xkcoding/spring-boot-demo)
- `mica` SpringBoot 微服务高效开发工具集: [https://github.com/lets-mica/mica](https://github.com/lets-mica/mica)
- `pig` 宇宙最强微服务认证授权脚手架(架构师必备): [https://gitee.com/log4j/pig](https://gitee.com/log4j/pig)
- `SpringBlade` 完整的线上解决方案（企业开发必备）: https://gitee.com/smallc/SpringBlade

## 关注统计

### Gitee

<a target="_blank" href='https://gitee.com/fujieid/jap'><img src="https://whnb.wang/img/fujieid/jap" width="900" height="300"></a>

### Github

<a target="_blank" href='https://gitee.com/fujieid/jap'><img src="https://starchart.cc/fujieid/jap.svg" width="900" height="300"></a>

### Product Hunt

<a href="https://www.producthunt.com/posts/justauthplus?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-justauthplus" target="_blank">
  <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=285597&theme=dark" alt="JustAuthPlus - Just auth into any app | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" />
</a>
