---
title: 如何使用 jap-simple
---

# 目录

[[toc]]

----


`jap-simple` 是为了方便快速的集成本地账号密码登录而添加的增强包


## 添加依赖

```xml
<dependency>
    <groupId>com.fujieid</groupId>
    <artifactId>jap-simple</artifactId>
    <version>{latest-version}</version>
</dependency>
```

## 实现 `JapUserService` 接口

`JapUserService` 是 JAP 调用（操作）开发者业务系统中用户的接口， 实现 `getByName` 和 `validPassword` 方法

```java
package com.fujieid.jap.demo.service;

import com.fujieid.jap.core.JapUser;
import com.fujieid.jap.core.JapUserService;
import com.google.common.collect.Lists;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 适用于 jap-simple 模块，实现 getByName 和 validPassword 方法
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:09
 * @since 1.0.0
 */
@Service("simple")
public class JapSimpleUserServiceImpl implements JapUserService {

    /**
     * 模拟 DB 操作
     */
    private static final List<JapUser> userDatas = Lists.newArrayList();

    static {
        // 模拟数据库中的数据
        userDatas.add(new JapUser().setUsername("jap").setPassword("jap"));
        for (int i = 0; i < 10; i++) {
            userDatas.add(new JapUser().setUsername("jap" + i).setPassword("jap" + i));
        }
    }

    @Override
    public JapUser getByName(String username) {
        return userDatas.stream()
                .filter((user) -> user.getUsername().equals(username))
                .findFirst()
                .orElse(null);
    }

    @Override
    public boolean validPassword(String password, JapUser user) {
        return user.getPassword().equals(password);
    }
}
```

## 实现 controller

```java
package com.fujieid.jap.demo;

import com.fujieid.jap.core.JapUserService;
import com.fujieid.jap.core.context.JapAuthentication;
import com.fujieid.jap.core.result.JapResponse;
import com.fujieid.jap.demo.config.JapConfigContext;
import com.fujieid.jap.simple.SimpleConfig;
import com.fujieid.jap.simple.SimpleStrategy;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 需要依赖 jap-simple 模块
 *
 * @author yadong.zhang (yadong.zhang0415(a)gmail.com)
 * @version 1.0.0
 * @date 2021/1/12 14:07
 * @since 1.0.0
 */
@Controller
@RequestMapping("/simple")
public class SimpleController {

    @Resource(name = "simple")
    private JapUserService japUserService;

    @GetMapping("/login")
    public String toLogin(HttpServletRequest request) {
        if (JapAuthentication.checkUser(request, response).isSuccess()) {
            return "redirect:/";
        }
        return "login";
    }

    @PostMapping("/login")
    public void renderAuth(HttpServletRequest request, HttpServletResponse response) {
        SimpleStrategy simpleStrategy = new SimpleStrategy(japUserService, new JapConfig());
        JapResponse japResponse = simpleStrategy.authenticate(new SimpleConfig(), request, response);
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

## 测试登录

启动测试项目后访问 `http://127.0.0.1:8443/simple/login` 

![](/_media/simple/6de06a6f.png)

进入登录页面后，使用账号密码登录：`jap`/`jap`

![](/_media/simple/25a57eb2.png)

登录完成后返回首页

![](/_media/simple/01384d5d.png)


## 官方推荐

- 普通示例项目：[jap-demo](https://gitee.com/fujieid/jap-demo)
- 前后端分离项目示例：[jap-demo-vue](https://gitee.com/fujieid/jap-demo-vue)
