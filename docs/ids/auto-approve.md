---
title: 自动授权
---

# 目录

[[toc]]

----

## 问题

在很多时候，开发者可能不希望用户在通过 OAuth 登录时显示确认授权的页面

![](/_media/22db2ca3.png)

这种情况下，可以直接通过“**自动授权**”的方式，跳过确认授权页面。

## 拼装授权页面地址

在拼装授权页面时，在 URL 参数中，添加上 `autoapprove=true` 即可。比如：

```text
http://localhost:8080/oauth/authorize?autoapprove=true&client_id=o2vzcf78lu1wfi5mi4q1k16yu5ph4cp2&response_type=code&scope=read write openid profile email phone address&redirect_uri=http://localhost:8080&state=1620965015351
```

## 提供自动授权的 controller 接口

在原有的基础上([快速开始](/ids/quickstart.html))，添加 `/oauth/authorize/auto` 接口。

::: tip
如果你开发的接口不是 `/oauth/authorize/auto`，请注意修改 IdsConfig 相关配置，配置方式参考：[快速开始 - 第四步-开发相关-http-接口](/ids/quickstart.html#第四步-开发相关-http-接口)
:::

```java
@RequestMapping("/oauth")
@Controller
public class AuthorizationController {

    @GetMapping("/authorize")
    public RedirectView authorize(HttpServletRequest request) throws IOException {
        IdsResponse<String, String> idsResponse = new AuthorizationEndpoint().authorize(request);
        return new RedirectView(idsResponse.getData());
    }

    @PostMapping("/authorize")
    public RedirectView doAuthorize(HttpServletRequest request) {
        IdsResponse<String, String> idsResponse = new AuthorizationEndpoint().agree(request);
        return new RedirectView(idsResponse.getData());
    }

    /**
     * 自动授权，跳过确认授权页面
     *
     * @param request
     * @return
     */
    @GetMapping("/authorize/auto")
    public RedirectView doAuthorizeAutoApprove(HttpServletRequest request) {
        return this.doAuthorize(request);
    }
}
```


进行如上配置后，用户在登录时，就不会再显示确认授权页面了。

::: warning
自动授权功能，除了依赖 URL 中的参数 `autoapprove=true` 外，还需要 `ClientDetail` 支持当前应用允许自动登录。

其中 `ClientDetail.autoApprove` 属性为 true 时，才支持自动登录。

<a-tag color="red">尤其注意该条</a-tag> 如果当前请求授权的客户端中 `ClientDetail.autoApprove = false`，那么即使授权请求的 URL 中添加了 `autoapprove=true`，授权服务依然会显示授权页面。这种设计能方便开发者在管理系统中对某个客户端动态开合该特性。

:::

## 更多功能

<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-login-page`' :title="`自定义登录页面`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/scope`' :title="`自定义 scope`"/>
<ref-link :link='`/ids/cache`' :title="`自定义缓存`"/>
<ref-link :link='`/ids/jwks`' :title="`自定义 Token 加密密钥`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>


