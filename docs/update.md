---
title: 更新记录
editLink: false
---

## v1.0.0（2021-02-18）

## 增加

- `jap-mfa` 模块，实现 TOTP 验证
- `JapUserStoreContextHolder` 中增加 `logout` 方法，一键退出登录，支持清除 Cookie、Session等

## 修改

- 更新 `jap.sh` 脚本，支持多种常用命令
- 完善注释
- 删除 `JapConfig` 中的 `options` 属性，同时在 `SocialConfig` 中增加 `justAuthConfig` 属性
- `RememberMeDetailsUtils` 修改名称为 `RememberMeUtils`

## 其他

- 改进部分代码
- 重构 `SimpleConfig` 类，将非必要配置项和业务逻辑内容，提出到工具类 `RememberMeUtils` 中


## v1.0.0-alpha.1（2021-02-01）

## 增加

- 增加缓存模块`com.fujieid.jap.core.cache.JapCache`
- `jap-oauth2` 模块中增加 `state` 校验的逻辑
- 添加一些`package-info.java`

## 修改

- 修改注释
- 解决 `PkceUtil` 中 `CodeVerifier` 只能本地缓存的问题，借助 `com.fujieid.jap.core.cache.JapCache` 可以自定义实现分布式缓存
- `simple-json` 升级到 `0.0.2`

## 其他
- 修复 javadoc 编译失败的问题

## 1.0.0-alpha（2021-01-28）

JAP 是一款开源的登录中间件，基于模块化设计，并且与业务高度解耦，使用起来非常灵活，开发者可以毫不费力地将 JAP 集成到任何 web 应用程序中，就像集成 JA 一样，简单方便。Just auth into any app!

**目前实现的功能**

- [实现账号密码登录](/quickstart/jap-simple)
- [实现第三方社交帐号登录](/quickstart/jap-social)
- [实现标准的 OAuth 2.0 应用的授权码登录](/quickstart/jap-oauth2)
- [实现 OIDC 应用的登录](/quickstart/jap-oidc)
- [支持同源 domain 的单点登录](/quickstart/jap-sso)


