---
title: 如何使用 jap-social
---

# 目录

[[toc]]

----

`jap-social` 是为了方便快速的集成第三方登录而添加的增强包，依赖并完全适配 [JustAuth](https://github.com/justauth/JustAuth) 支持的平台。

## 添加依赖

```xml
<dependency>
    <groupId>com.fujieid</groupId>
    <artifactId>jap-social</artifactId>
    <version>{latest-version}</version>
</dependency>
```

## 实现 `JapUserService` 接口

`JapUserService` 是 JAP 调用（操作）开发者业务系统中用户的接口，`jap-social` 需要实现 `getByPlatformAndUid` 和 `createAndGetSocialUser` 方法。

```java
import com.fujieid.jap.core.JapUser;
import com.fujieid.jap.core.JapUserService;
import com.google.common.collect.Lists;
import me.zhyd.oauth.model.AuthUser;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 适用于 jap-social 模块，实现 getByPlatformAndUid 和 createAndGetSocialUser 方法
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:09
 * @since 1.0.0
 */
@Service("social")
public class JapSocialUserServiceImpl implements JapUserService {

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
     * 创建并获取第三方用户，相当于第三方登录成功后，将授权关系保存到数据库（开发者业务系统中 social user -> sys user 的绑定关系）
     *
     * @param userInfo JustAuth 中的 AuthUser
     * @return JapUser
     */
    @Override
    public JapUser createAndGetSocialUser(Object userInfo) {
        AuthUser authUser = (AuthUser) userInfo;
        // 查询绑定关系，确定当前用户是否已经登录过业务系统
        JapUser japUser = this.getByPlatformAndUid(authUser.getSource(), authUser.getUuid());
        if (null == japUser) {
            japUser = createJapUser();
            japUser.setAdditional(authUser);
            userDatas.add(japUser);
        }
        return japUser;
    }

    /**
     * 模拟创建用户
     *
     * @return JapUser
     */
    private JapUser createJapUser() {
        JapUser user = new JapUser();
        user.setUserId("1");
        user.setUsername("jap");
        user.setPassword("jappassword");
        return user;
    }
}
```

::: warning 特别注意
上面示例代码中的 `FIXME` 注释部分，需要开发者自己实现
:::

## 创建 OAuth 应用

以 `Gitee` 为例，创建 `OAuth` 应用的步骤参考 [Gitee 登录 - 申请应用](https://justauth.wiki/oauth/gitee.html#_1-%E7%94%B3%E8%AF%B7%E5%BA%94%E7%94%A8)

创建完成后如下：

![](/_media/social/2c147a42.png)

## 实现 controller

```java
package com.fujieid.jap.demo;

import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.core.result.JapResponse;
import com.fujieid.jap.demo.config.JapConfigContext;
import com.fujieid.jap.demo.util.ViewUtil;
import com.fujieid.jap.social.SocialConfig;
import com.fujieid.jap.social.SocialStrategy;
import me.zhyd.oauth.config.AuthConfig;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 需要依赖 jap-social 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/social")
public class SocialController {

    @Resource(name = "social")
    private JapUserService japUserService;

    @RequestMapping("/login/gitee")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) {
        SocialStrategy socialStrategy = new SocialStrategy(japUserService, new JapConfig());
        SocialConfig config = new SocialConfig();
        // platform 参考 justauth#AuthDefaultSource
        // 如果包含通过 justauth 自定义的第三方平台，则该值为实现 AuthSource 后的 getName() 值
        config.setPlatform("gitee");
        config.setState(UuidUtils.getUUID());
        config.setJustAuthConfig(AuthConfig.builder()
                .clientId("fda07d40917d6f040822d3fa01c8c75588c67d63132c3ddc5c66990342115ba9")
                .clientSecret("016f88fbff2d178263c4060c46168f4937153120a310adc21980e7838b76e833")
                .redirectUri("http://sso.jap.com:8443/social/login/gitee")
                .build());
        JapResponse japResponse = socialStrategy.authenticate(config, request, response);
        if (!japResponse.isSuccess()) {
            return new ModelAndView(new RedirectView("/?error=" + URLUtil.encode(japResponse.getMessage())));
        }
        if (japResponse.isRedirectUrl()) {
            return new ModelAndView(new RedirectView((String) japResponse.getData()));
        } else {
            System.out.println(japResponse.getData());
            return new ModelAndView(new RedirectView("/"));
        }
    }
}
```

::: tip
`jap-social` 对整个授权流程做了优化，不再要求开发者强制区分跳转 `authorizeUrl` 和通过 `login` 获取用户数据这两个方法，`jap-social` 将两者整合，方便开发者调用。

在仅使用 `JustAuth` 时，实现第三方平台的登录，需要如下编码：
```java
@RestController
@RequestMapping("/oauth")
public class RestAuthController {

    @RequestMapping("/render")
    public void renderAuth(HttpServletResponse response) throws IOException {
        AuthRequest authRequest = getAuthRequest();
        response.sendRedirect(authRequest.authorize(AuthStateUtils.createState()));
    }

    @RequestMapping("/callback")
    public Object login(AuthCallback callback) {
        AuthRequest authRequest = getAuthRequest();
        return authRequest.login(callback);
    }

    // 获取 request...
}
```
以上代码参考：[Gitee 登录](https://justauth.wiki/oauth/gitee.html#_2-4-%E4%BB%A5%E4%B8%8A%E5%AE%8C%E6%95%B4%E4%BB%A3%E7%A0%81%E5%A6%82%E4%B8%8B)

而使用 `jap-social` 后，则不需要再关注 `render` 或者 `callback` 的逻辑，直接一把梭即可：
```java
@RestController
@RequestMapping("/social")
public class SocialController {

    @Resource(name = "social")
    private JapUserService japUserService;

    @RequestMapping("/login/gitee")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) {
        SocialStrategy socialStrategy = new SocialStrategy(japUserService, new JapConfig());
        SocialConfig config = new SocialConfig();
        // platform 参考 justauth#AuthDefaultSource
        // 如果包含通过 justauth 自定义的第三方平台，则该值为实现 AuthSource 后的 getName() 值
        config.setPlatform("gitee");
        config.setState(UuidUtils.getUUID());
        config.setJustAuthConfig(AuthConfig.builder()
                .clientId("fda07d40917d6f040822d3fa01c8c75588c67d63132c3ddc5c66990342115ba9")
                .clientSecret("016f88fbff2d178263c4060c46168f4937153120a310adc21980e7838b76e833")
                .redirectUri("http://sso.jap.com:8443/social/login/gitee")
                .build());
        socialStrategy.authenticate(config, request, response);
    }
}
```
:::

## 测试登录

启动测试项目后访问 `http://127.0.0.1:8443/social/login/gitee` 

因为我已经在浏览器中登录过 gitee，所以 oauth 会跳过登录认证的流程，直接跳转到授权页面。

![](/_media/social/6a949b72.png)

登录成功

![](/_media/social/48429bba.png)

::: warning 注意
`response data` 的格式为：

```json
{
  "additional" : {},
  "userId" : "1",
  "username" : "jap"
}
```

其中 `additional` 节点为 `JustAuth` 的 [`me.zhyd.oauth.model.AuthUser`](https://gitee.com/yadong.zhang/JustAuth/blob/master/src/main/java/me/zhyd/oauth/model/AuthUser.java) 类
:::


## 官方推荐

- 普通示例项目：[jap-demo](https://gitee.com/fujieid/jap-demo)
- 前后端分离项目示例：[jap-demo-vue](https://gitee.com/fujieid/jap-demo-vue)
