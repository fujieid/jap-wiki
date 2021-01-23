---
title: 如何使用
---

# 目录

[[toc]]

----

## 准备工作

修改本地 `hosts`，加入以下配置

```text
127.0.0.1 sso.jap.com
127.0.0.1 sso1.jap.com
127.0.0.1 sso2.jap.com
127.0.0.1 sso3.jap.com
```

## 修改 `JapSimpleUserServiceImpl`

修改 `JapSimpleUserServiceImpl` 实现类，实现 `JapUser getById(String userId)` 方法。

```java
package com.fujieid.jap.demo.service;

import com.fujieid.jap.core.JapUser;
import com.fujieid.jap.core.JapUserService;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 适用于 jap-simple 模块，实现 getByName 和 validPassword 方法，如果需要sso登录，则必须实现 getById 方法
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:09
 * @since 1.0.0
 */
@Service("simple")
public class JapSimpleUserServiceImpl implements JapUserService {

    // ...

    /**
     * 当启用 sso 功能时，该方法必须实现
     *
     * @param userId 用户id
     * @return JapUser
     */
    @Override
    public JapUser getById(String userId) {
        return userDatas.stream()
                .filter((user) -> user.getUserId().equals(userId))
                .findFirst()
                .orElse(null);
    }

    // ...
}
```

::: warning 注意 
当启用 sso 功能时，必须实现 `getById` 方法
:::

## 启用 SSO

以 [`jap-simple`](/quickstart/jap-simple) 为例，在初始化 `SimpleStrategy` 时，默认方式为：

```java
SimpleStrategy simpleStrategy = new SimpleStrategy(japUserService, new JapConfig());
```

通过修改 `JapConfig` 参数，开启 SSO：

```java
SimpleStrategy simpleStrategy = new SimpleStrategy(japUserService, new JapConfig()
                .setSso(true)
                .setSsoConfig(new JapSsoConfig()
                        .setCookieDomain("jap.com")));
```

::: warning 请注意 
- 请不要将 domain 设置为 .jap.com，将 domain 设置为 .jap.com 后会报错： `java.lang.IllegalArgumentException: An invalid domain [.jap.com] was specified for this cookie`
- 原因：高版本 8.5版本 + tomcat 对 cookie 处理机制变更，原来设置 .x.com 应该修改为 x.com
- 参考解决方案：[An invalid domain [.xxx] was specified for this cookie](https://gitee.com/baomidou/kisso/wikis/java.lang.IllegalArgumentException:-An-invalid-domain-%5B.x.com%5D-was-specified-for-this-cookie?sort_id=12454)
:::

请自行修改 [`jap-social`](/quickstart/jap-social)、[`jap-oauth2`](/quickstart/jap-oauth2)
、[`jap-oidc`](/quickstart/jap-oidc) 模块的 `controller` 方法

## 测试 SSO 效果

### 重启项目，分别访问

- [http://sso.jap.com:8443/](http://sso.jap.com:8443/)
- [http://sso1.jap.com:8443/](http://sso1.jap.com:8443/)
- [http://sso2.jap.com:8443/](http://sso2.jap.com:8443/)
- [http://sso3.jap.com:8443/](http://sso3.jap.com:8443/)

![](/_media/sponsor/b0fc1f4c.png)

![](/_media/sponsor/d5218891.png)

![](/_media/sponsor/37311e4b.png)

![](/_media/sponsor/e61090fe.png)

### 测试登录

任意一个窗口进行登录

![](/_media/sponsor/642b947b.png)

登录完成后，刷新其他三个窗口

![](/_media/sponsor/f3dcde46.png)

![](/_media/sponsor/2b68cc4e.png)

![](/_media/sponsor/c28d9b83.png)

### 使用 `social` 方式单点登录

这儿需要注意一点，本例测试域名为 `sso.jap.com` 等四个域名，如果需要`social`单点，需要修改应用回调地址为`sso.jap.com`域下，如：

![](/_media/sponsor/5d12248f.png)

如果单点登录失败，请检查配置的回调地址和前面 `setCookieDomain` 配置的 `domain` 是否同源

由于我们前面已经登录过，先退出后，重新选择 `jap-social` 方式登录

![](/_media/sponsor/77d255a6.png)

![](/_media/sponsor/2019b112.png)

单个窗口登录成功，我们重新刷新其他三个窗口

![](/_media/sponsor/ac8c13cc.png)

![](/_media/sponsor/2940ea97.png)

![](/_media/sponsor/87987ef8.png)

OK， `jap-social`单点登录完成~~

`jap-oauth2`和`jap-oidc`和以上流程一致，本例不做演示。

## SSO 配置项

关于 SSO 的配置项解释如下：

| 属性 | 含义 | 备注 |
| :---: | :---: |:---: |
|  `cookieName` |  cookie name， 默认为 `_jap_sso_id` |   | 
|  `cookieDomain` |  Cookie 作用于的域名， 默认为当前访问域名 |   | 
|  `cookieMaxAge` |  Cookie 过期时间，默认为 `Integer.MAX_VALUE` |   | 
|  `paramReturnUrl` | 登录成功后的回调url字段名 | 保留字段，jap 中暂时未用到  | 
|  `loginUrl` | 登录地址，默认为 `/login` | 保留字段，jap 中暂时未用到  | 
|  `logoutUrl` | 登录地址，默认为 `/logout` | 保留字段，jap 中暂时未用到  | 





