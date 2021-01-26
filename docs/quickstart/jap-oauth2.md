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
    <artifactId>jap-oauth2</artifactId>
    <version>{latest-version}</version>
</dependency>

<!--
jap 已经使用 simple-json 解耦 json 类库，开发者只需要选择适合的依赖引入即可，支持依赖：
    - jackson
    - fastjson
    - gson
    - hutool-json
关于 simple-json 更多使用方式参考：https://github.com/xkcoding/simple-json
-->
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.73</version>
</dependency>

<!--
jap 已经使用 simple-http 解耦 http 类库，开发者只需要选择适合的依赖引入即可，支持依赖：
    - java 11 HttpClient
    - OkHttp3
    - apache HttpClient
    - hutool-http
关于 simple-http 更多使用方式参考：https://github.com/xkcoding/simple-http
-->
<dependency>
    <groupId>cn.hutool</groupId>
    <artifactId>hutool-http</artifactId>
    <version>5.2.5</version>
</dependency>
```

## 实现 `JapUserService` 接口

`JapUserService` 是 JAP 调用（操作）开发者业务系统中用户的接口，`jap-oauth2` 需要实现 getByPlatformAndUid 和 createAndGetSocialUser 方法。

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
    public JapUser createAndGetOauth2User(String platform, Map<String, Object> userInfo, Object tokenInfo) {
        // FIXME 业务端可以对 tokenInfo 进行保存或其他操作
        AccessToken accessToken = (AccessToken) tokenInfo;
        System.out.println(JsonUtil.toJsonString(accessToken));
        // FIXME 注意：此处仅作演示用，不同的 oauth 平台用户id都不一样，此处需要开发者自己分析第三方平台的用户信息，提取出用户的唯一ID
        String uid = (String) userInfo.get("userId");
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

## 多种不同的授权方式

### 授权码模式

#### **创建 OAuth 应用**

需要开发者自己去对应的平台创建 OAuth 应用，开发者还可以参考 [Gitee 登录 - 申请应用](https://justauth.wiki/oauth/gitee.html#_1-%E7%94%B3%E8%AF%B7%E5%BA%94%E7%94%A8) 这篇文章。


本例以 [`JAI`](https://www.fujieid.com) 平台为例，创建一个 OAuth 应用，创建完成后的应用如下：


![](/_media/oauth2/df62b3b6.png)

![](/_media/oauth2/128fce98.png)

#### **实现 controller**

```java
import com.fujieid.jap.core.JapConfig;
import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.oauth2.OAuthConfig;
import com.fujieid.jap.oauth2.Oauth2GrantType;
import com.fujieid.jap.oauth2.Oauth2ResponseType;
import com.fujieid.jap.oauth2.Oauth2Strategy;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 需要依赖 jap-oauth2 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oauth2")
public class Oauth2Controller {

    @Resource(name = "oauth2")
    private JapUserService japUserService;

    @RequestMapping("/login/jai")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Oauth2Strategy socialStrategy = new Oauth2Strategy(japUserService, new JapConfig());
        OAuthConfig config = new OAuthConfig();
        config.setPlatform("jai")
                .setState(UuidUtils.getUUID())
                .setClientId("t4h97wxykj6dg8c0sodeyj5zg0yi63te")
                .setClientSecret("xxxxxx")
                .setCallbackUrl("http://localhost:8443/oauth2/login/jai")
                .setAuthorizationUrl("https://xxx.com/oauth/authorize")
                .setTokenUrl("https://xxx.com/oauth/token")
                .setUserinfoUrl("https://xxx.com/api/userinfo")
                .setScopes(new String[]{"read", "write"})
                .setResponseType(Oauth2ResponseType.code)
                .setGrantType(Oauth2GrantType.authorization_code);
        socialStrategy.authenticate(config, request, response);
    }
}
```
### 隐式授权模式


#### **创建 OAuth 应用**

![](/_media/sponsor/dac63636.png)

![](/_media/sponsor/8fb2a201.png)

#### **实现 controller**

```java
import com.fujieid.jap.core.JapConfig;
import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.oauth2.OAuthConfig;
import com.fujieid.jap.oauth2.Oauth2GrantType;
import com.fujieid.jap.oauth2.Oauth2ResponseType;
import com.fujieid.jap.oauth2.Oauth2Strategy;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 需要依赖 jap-oauth2 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oauth2")
public class Oauth2Controller {

    @Resource(name = "oauth2")
    private JapUserService japUserService;

    @RequestMapping("/login/implicit/jai")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Oauth2Strategy socialStrategy = new Oauth2Strategy(japUserService, new JapConfig());
        OAuthConfig config = new OAuthConfig();
        config.setPlatform("jai")
                .setState(UuidUtils.getUUID())
                .setClientId("xxx")
                .setClientSecret("xxx")
                .setCallbackUrl("http://sso.jap.com:8443/oauth2/login/implicit/jai")
                .setAuthorizationUrl("https://xxx.com/oauth/authorize")
                .setTokenUrl("https://xxx.com/oauth/token")
                .setUserinfoUrl("https://xxx.com/api/userinfo")
                .setScopes(new String[]{"read", "write"})
                // 修改 ResponseType 为 Token 模式
                .setResponseType(Oauth2ResponseType.token);
        socialStrategy.authenticate(config, request, response);
    }
}
```

### 密码授权模式


#### **创建 OAuth 应用**

![](/_media/sponsor/ad4ba925.png)

![](/_media/sponsor/f24e7054.png)

#### **实现 controller**

```java
import com.fujieid.jap.core.JapConfig;
import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.oauth2.OAuthConfig;
import com.fujieid.jap.oauth2.Oauth2GrantType;
import com.fujieid.jap.oauth2.Oauth2ResponseType;
import com.fujieid.jap.oauth2.Oauth2Strategy;
import me.zhyd.oauth.utils.UuidUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 需要依赖 jap-oauth2 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@RestController
@RequestMapping("/oauth2")
public class Oauth2Controller {

    @Resource(name = "oauth2")
    private JapUserService japUserService;

    @RequestMapping("/login/password/jai")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Oauth2Strategy socialStrategy = new Oauth2Strategy(japUserService, new JapConfig());
        OAuthConfig config = new OAuthConfig();
        config.setPlatform("jai")
                .setState(UuidUtils.getUUID())
                .setClientId("xxx")
                .setClientSecret("xxx")
                .setCallbackUrl("http://sso.jap.com:8443/oauth2/login/password/jai")
                // 密码模式，不需要授权端链接
//                .setAuthorizationUrl("https://xxx.com/oauth/authorize")
                .setTokenUrl("https://xxx.com/oauth/token")
                .setUserinfoUrl("https://xxx.com/api/userinfo")
                .setScopes(new String[]{"read", "write"})
                // GrantType 设为 password
                .setGrantType(Oauth2GrantType.password)
                // 指定账号密码
                .setUsername("xxx")
                .setPassword("xxx");
        socialStrategy.authenticate(config, request, response);
    }
}
```

## 测试登录

启动测试项目后访问分别访问：
- 授权码模式：`http://127.0.0.1:8443/social/login/jai`
- 隐式授权模式：`http://127.0.0.1:8443/social/implicit/jai`
- 密码模式：`http://127.0.0.1:8443/social/password/jai`

![](/_media/sponsor/4f657553.png)

登录账号

![](/_media/oauth2/58895678.png)

登录成功

![](/_media/oauth2/b9aa7eb0.png)

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

## `jap-oauth2` 和 `jap-social` 有什么区别？

- 其实本质上没有区别，[`jap-social`](/quickstart/jap-social) 是基于 [`JustAuth`](https://github.com/justauth/JustAuth) 实现的，所以也就支持了 [`JustAuth`](https://github.com/justauth/JustAuth) 中自定义第三方 OAuth 平台的功能。
- **`jap-oauth2` 能适配的平台，[`jap-social`](/quickstart/jap-social) 一样可以适配**，只不过，传递的参数不同而已。<a-tag color="blue">敲黑板</a-tag>
- 但是，**[`jap-social`](/quickstart/jap-social) 能适配的平台，`jap-oauth2` 不一定可以适配**，原因如下。<a-tag color="blue">敲黑板</a-tag>
- 这两个模块唯一的最大区别在于，**`jap-oauth2` 仅支持标准的 OAuth 2.0 协议**，类似于 `支付宝`、`Stack Overflow Key`、`Coding` 这种做了定制化的平台，`jap-oauth2`无法做到适配。（ps.好在[`JustAuth`](https://github.com/justauth/JustAuth)已经完成了这部分工作。）

## 官方推荐

官方推荐使用 [jap-demo](https://gitee.com/fujieid/jap-demo) 示例项目进行测试。