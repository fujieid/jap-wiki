---
title: 错误代码
---

# 目录

[[toc]]

----

## 异常代码

本章主要列出 JAP 的错误代码，供开发者参考


| 异常代码 | 描述 | 原因 | 解决方案 |
| :---- | :----| :----| :----|
| 200 | Success | - | - |
| 401 | Not logged in. | 未登录 | 请登录 |
| 500 | An error occurred in the system, please refer to the error message. | 参考具体异常信息 | 参考具体异常信息 |
| 1000 | The user does not exist. | 用户不存在 | 请检查 `JapUserService` 接口实现方法是否存在异常或者业务系统中是否存在该用户 |
| 1001 | Passwords don't match. | 密码错误 | 修改登录密码 |
| 1002 | Illegal rememberme cookie. | 记住我的 cookie 格式异常 | 检查 `cookie`，不可随便手动修改 cookie 内容 |
| 1003 | Unable to save user information. | 用户保存失败 | 请检查 `JapUserService` 接口实现方法是否存在异常 |
| 1004 | AuthConfig in SocialStrategy is required. | 第三方登录时未传 `AuthConfig` | 检查 `SocialStrategy` 的参数 |
| 1005 | AuthenticateConfig is required. | 未传 `AuthenticateConfig` | 检查 `JapStrategy` 接口的实现类中是否传递 `AuthenticateConfig` 的继承类参数 |
| 1006 | OidcStrategy requires a issuer option. | OIDC 登录时，缺少 `issuer` 配置 | 检查 `OidcConfig` 的参数是否传递完整 |
| 1007 | Missing credentials | 在使用 `SimpleStrategy` 时，账号密码未传 | 检查传递的参数是否完整 |
