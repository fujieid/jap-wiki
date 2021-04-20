---
title: 使用 PKCE 模式
---

# 目录

[[toc]]

----

## 关于 PKCE

关于 PKCE 的介绍，请参考 [什么是 PKCE？](https://discuss.justauth.plus/d/7-shi-yao-shi-pkce)。

## 使用 PKCE

`jap-ids` 中已经实现了 PKCE 模式，开发者可以在 [搭建完成 Oauth 服务](/ids/quickstart) 后，使用 PKCE 模式获取 Token 信息。

PKCE 模式和普通授权码模式在请求时，只有参数上的区别。

**在 PKCE 模式下**
- 在请求授权端点时，需要传递 `code_challenge` 和 `code_challenge_method` 两个参数。
- 在请求 token 端点时，需要传递 `code_verifier`。

| 参数  | 含义 | 作用 |
| :------------: | :------------: | :------------: |
| `code_verifier` | 一种加密的随机字符串 | 用于关联对 token 请求的授权请求 |
| `code_challenge` | 质询码（有些文章中翻译为“挑战码”，这是一个概念） | 请求 token 时，比对/验证 `code_verifier` |
| `code_challenge_method` | 质询码的生成方法，支持`plain`和`S256`两种方式 | 对 `code_challenge` 加密，以及在请求 token 节点时，对 `code_verifier` 进行验证 |


熟悉了以上概念，我们就很容易能实现 PKCE 模式的授权码请求。伪代码如下：

请求授权端点：

```java
// jap-ids 提供了生成 `code_verifier` 的方法
String codeVerifier = OauthUtil.generateCodeVerifier();
// codeChallengeMethod 一般和客户端绑定，这儿示例是从客户端中获取 codeChallengeMethod
String codeChallengeMethod = clientDetail.getCodeChallengeMethod();
// 通过 `code_verifier` 和 `code_challenge_method` 生成 `code_challenge`
String codeChallenge = OauthUtil.generateCodeChallenge(codeChallengeMethod, codeVerifier);

// 生成授权地址
https://{host}/oauth/authorize?client_id=%s&response_type=code&scope=%s&redirect_uri=%s&state=%s&code_challenge=%s&code_challenge_method=%s
```

::: tip 注意
在请求授权端点时，应对 `code_verifier` 进行缓存。
:::

用户登录并确认授权后，回调到开发者的系统，开发者的系统中通过 code 换取 token：

```java
// 从缓存中获取 codeVerifier
String codeVerifier = cache.get("codeVerifier");

// 生成获取 token 的地址
https://{host}/oauth/token?grant_type=authorization_code&client_id=%s&redirect_uri=%s&code=%s&code_verifier=%s
```
