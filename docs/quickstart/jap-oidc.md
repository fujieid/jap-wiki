---
title: 如何使用
---

# 目录

[[toc]]

----

## 添加依赖

```xml
<dependency>
    <groupId>com.fujieid</groupId>
    <artifactId>jap-oidc</artifactId>
    <version>{latest-version}</version>
</dependency>
```

## 实现 `JapUserService` 接口

`JapUserService` 是 JAP 调用（操作）开发者业务系统中用户的接口，`jap-oidc` 需要实现 getByPlatformAndUid 和 createAndGetSocialUser 方法(和 `jap-oauth2` 模块类似)。

```java
package com.fujieid.jap.demo.service;

import com.alibaba.fastjson.JSONObject;
import com.fujieid.jap.core.JapUser;
import com.fujieid.jap.core.JapUserService;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 适用于 jap-oauth2 模块，实现 getByPlatformAndUid 和 createAndGetSocialUser 方法
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:09
 * @since 1.0.0
 */
@Service("oauth2")
public class JapOauth2UserServiceImpl implements JapUserService {

    /**
     * 模拟 DB 操作
     */
    private static List<JapUser> userDatas = Lists.newArrayList();

    /**
     * 根据第三方平台标识（platform）和第三方平台的用户 uid 查询数据库
     *
     * @param platform 第三方平台标识
     * @param uid      第三方平台的用户 uid
     * @return JapUser
     */
    @Override
    public JapUser getByPlatformAndUid(String platform, String uid) {
        // FIXME 注意：此处仅作演示用，并没有判断 platform，实际业务系统中需要根据 platform 和 uid 进行获取唯一用户
        return userDatas.stream().filter(user -> user.getUserId().equals(uid)).findFirst().orElse(null);
    }

    /**
     * 创建并获取第三方用户，相当于第三方登录成功后，将授权关系保存到数据库（开发者业务系统中 oauth2 user -> sys user 的绑定关系）
     *
     * @param platform 第三方平台标识
     * @param userInfo JustAuth 中的 AuthUser
     * @return JapUser
     */
    @Override
    public JapUser createAndGetOauth2User(String platform, JSONObject userInfo) {
        // FIXME 注意：此处仅作演示用，不同的 oauth 平台用户id都不一样，此处需要开发者自己分析第三方平台的用户信息，提取出用户的唯一ID
        String uid = userInfo.getString("userId");
        // 查询绑定关系，确定当前用户是否已经登录过业务系统
        JapUser japUser = this.getByPlatformAndUid(platform, uid);
        if (null == japUser) {
            japUser = createJapUser();
            japUser.setAdditional(userInfo);
            userDatas.add(japUser);
        }
        return japUser;
    }

    private JapUser createJapUser() {
        JapUser user = new JapUser();
        user.setUserId("1");
        user.setUsername("justauth");
        user.setPassword("justauthpassword");
        return user;
    }
}
```

::: warning 特别注意
上面示例代码中的 `FIXME` 注释部分，需要开发者自己实现
:::

## 创建 OAuth 应用

需要开发者自己去对应的平台创建支持 OIDC 的 OAuth 应用，开发者还可以参考 [Gitee 登录 - 申请应用](https://justauth.wiki/oauth/gitee.html#_1-%E7%94%B3%E8%AF%B7%E5%BA%94%E7%94%A8) 这篇文章。


本例以 [`JAI`](https://www.fujieid.com) 平台为例，创建一个 OAuth 应用，创建完成后的应用如下：

![](/_media/oauth2/13ab3ef2.png)

![](/_media/oidc/4a1180e0.png)

![](/_media/oidc/9b06d098.png)

## 实现 controller

```java
import com.fujieid.jap.core.JapConfig;
import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.oauth2.Oauth2GrantType;
import com.fujieid.jap.oauth2.Oauth2ResponseType;
import com.fujieid.jap.oidc.OidcConfig;
import com.fujieid.jap.oidc.OidcStrategy;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 需要依赖 jap-oidc 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oidc")
public class OidcController {

    @Resource(name = "oauth2")
    private JapUserService japUserService;

    @RequestMapping("/login/jai")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.getSession().setAttribute("strategy", "oidc");
        OidcStrategy oidcStrategy = new OidcStrategy(japUserService, new JapConfig());
        OidcConfig config = new OidcConfig();
        config.setIssuer("xxxx")
                .setPlatform("jai")
                .setState(UuidUtils.getUUID())
                .setClientId("xxx")
                .setClientSecret("xxx")
                .setCallbackUrl("http://localhost:8443/oidc/login/jai")
                .setScopes(new String[]{"read", "write"})
                .setResponseType(Oauth2ResponseType.code)
                .setGrantType(Oauth2GrantType.authorization_code);
        oidcStrategy.authenticate(config, request, response);
    }
}

```

## 测试登录

启动测试项目后访问 `http://127.0.0.1:8443/oidc/login/jai` 

![](/_media/oidc/e4f48f5a.png)

登录账号

![](/_media/oauth2/58895678.png)

登录成功

![](/_media/oidc/c17400bf.png)

::: tip
注意此处登录的时候没有显示授权页面，是因为我们在创建应用的时候勾选了`自动批准`。对于其他平台可能没有此项配置，实际要以第三方平台支持的配置为主。
:::

::: warning 注意
`response data` 的格式为：

```json
{
  "additional" : {},
  "userId" : "1",
  "username" : "jap"
}
```

其中 `additional` 节点第三方平台的用户信息。
:::
