---
title: 自定义 scope
---

# 目录

[[toc]]

----

## 内置的 scope

`jap-ids` 中默认提供了以下几种 scope：

| code  | 描述 | 作用 |
| :------------: | :------------: | :------------: |
| `read` | Allows to read resources, including users, protected resources, etc. | 允许应用读取系统资源，包括用户、受保护的资源等 |
| `write` | Allows to modify resources, including adding, deleting, and modifying resources such as users and protected resources. | 允许应用修改系统资源，包括增删改用户数据、受保护的资源等 |
| `openid` | OpenID connect must include scope | OIDC 流程中必须包含的 `scope`，只有带此 `scope` 时才会返回 `id_token` |
| `profile` | Allow access to user's basic information. | 允许应用访问用户的基本信息 |
| `email` | Allow access to user's mailbox. | 允许应用访问用户的邮箱 |
| `phone` | Allow access to the user’s phone number. | 允许应用访问用户的手机号 |
| `address` | Allow access to the user's address. | 允许应用访问用户的个人地址 |


## 自定义 scope

`jap-ids` 支持开发者自定义授权服务的 scope，`com.fujieid.jap.ids.provider.IdsScopeProvider` 类相关 API 如下：


| api  | 参数 | 返回值 | 作用 | 备注 |
| :------------: | :------------: | :------------: | :------------: | :------------: |
| `addScope` | `IdsScope` | `void` | 添加单个 scope | 该方法会在原有的基础上**新增**或者**修改**（根据 `code` 判断是否需要修改） scope |
| `getScopes` | - | `List<IdsScope>` | 获取所有的 `IdsScope`  | 默认去重 |
| `getScopeByCodes` | `Collection<String>` | `List<IdsScope>` | 通过 `code` 查找 `IdsScope` | 默认去重 |
| `getScopeCodes` | - | `List<String>` | 获取所有 `IdsScope` 的 `code` 值 | 默认去重 |


::: tip
`IdsScope`包含两个属性：`code`、`description`
:::

### 添加 scope

```java
IdsScopeProvider.addScope(new IdsScope().setCode("test").setDescription("test"));
```

::: tip
`code` 不存在，将当前 `IdsScope` 对象添加到列表中
:::

### 修改 scope

修改内置的 `code` 为 `read` 的 `IdsScope` 的描述文字： 

```java
IdsScopeProvider.addScope(new IdsScope().setCode("read").setDescription("读取资源"));
```

::: tip
根据 `code` 判断是否需要修改，当已有的 `IdsScope` 中存在 `code` 相同的数据时，将会替换原 `IdsScope` 对象的描述文字。
:::



## 更多功能

<ref-link :link='`/ids/quickstart`' :title="`快速开始`"/>
<ref-link :link='`/ids/custom-login-page`' :title="`自定义登录页面`"/>
<ref-link :link='`/ids/custom-confirm-page`' :title="`自定义确认授权页面`"/>
<ref-link :link='`/ids/cache`' :title="`自定义缓存`"/>
<ref-link :link='`/ids/jwks`' :title="`自定义 Token 加密密钥`"/>
<ref-link :link='`/ids/pkce`' :title="`使用 PKCE 模式`"/>
<ref-link :link='`/ids/auto-approve`' :title="`自动授权`"/>
<ref-link :link='`/ids/error_code`' :title="`错误代码`"/>
