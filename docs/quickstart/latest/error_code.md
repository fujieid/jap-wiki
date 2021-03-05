---
title: 异常代码
---
# 目录

[[toc]]

----

本章主要列出 JA 的错误代码，供开发者参考


| 异常代码 | 描述 | 原因 | 解决方案 |
| :---- | :----| :----| :----|
| 2000 | Success | - | - |
| 5000 | Failure | 多为系统异常，如 JA 本身的 BUG，或者其他原因 | 请参考控制台异常栈 |
| 5001 | Not Implemented | 方法未实现 | ① 针对自定义的 oauth 平台，请检查你的代码，是否存在未实现必要接口的问题；<br>② 针对 JA 内置的平台，说明该平台的某个方法暂不支持调用 |
| 5002 | Parameter incomplete | 传递的参数不全 | 请检查初始化 `Request` 时 `AuthConfig` 类中的配置是否填写完整（每个平台的配置可能会有差异） |
| 5003 | Unsupported operation | 不支持的操作 | 类似 `5001`，需注意的时，报出该异常，说明第三方可能本身就不支持某个操作 |
| 5004 | AuthDefaultSource cannot be null | `source` 参数未传或者不正确 | 检查 `source` 参数 |
| 5005 | Unidentified platform | 当前登录用户的身份不被支持，见企业微信平台 | 非当前企业用户，不被支持 |
| 5006 | Illegal redirect uri | 回调地址配置错误 | ① 检查回调地址是否以`http://`或者`https://`开头，如非，请修改回调地址；<br>② 针对 facebook 平台，回调地址必须为`https://`开头；<br>③ 针对支付宝平台，不支持本地回调，如`http://localhost`或者`http://127.0.0.1`（更多参考：[本地如何测那些不支持本地地址回调的授权登录?](http://localhost:3000/#/qa/func?id=%e6%9c%ac%e5%9c%b0%e5%a6%82%e4%bd%95%e6%b5%8b%e9%82%a3%e4%ba%9b%e4%b8%8d%e6%94%af%e6%8c%81%e6%9c%ac%e5%9c%b0%e5%9c%b0%e5%9d%80%e5%9b%9e%e8%b0%83%e7%9a%84%e6%8e%88%e6%9d%83%e7%99%bb%e5%bd%95%ef%bc%9f)） |
| 5007 | Illegal request | 该异常码为保留，目前未用到 | - |
| 5008 | Illegal code | 第三方回调时未传回 `code` 参数 | ① 请排查回调地址是否正确；<br>② 请检查回调方法的参数列表是否正确，推荐使用`AuthCallback`类自动封装回调参数；<br>③ 请检查回调时带回的参数，是否包含其他信息，比如`error`或者`error_description` |
| 5009 | Illegal state | 第三方回调时未传回 `state` 参数，或者本地缓存中的 `state` 已失效 | 请参考[异常相关 - illegal-state-xx](/qa/error) |
| 5010 | The refresh token is required; it must not be null | 该异常码为保留，目前未用到 | - |
