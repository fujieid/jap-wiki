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
| `openid` | OpenID connect must include scope | OIDC 流程中必须的 `scope`，只有带此 `scope` 时才会返回 `id_token` |
| `email` | Allow access to user's mailbox. | 允许应用访问用户的邮箱 |
| `phone` | Allow access to the user’s phone number. | 允许应用访问用户的手机号 |


## 自定义 scope

`jap-ids` 支持开发者自定义授权服务的 scope，`com.fujieid.jap.ids.provider.IdsScopeProvider` 类相关 API 如下：


| api  | 参数 | 作用 | 备注 |
| :------------: | :------------: | :------------: | :------------: |
| `initScopes` | `List<IdsScope>` | 初始化 scope | 该方法会**重置**系统默认的 scope |
| `addScope` | `IdsScope` | 添加单个 scope | 该方法会在原有的基础上**新增** scope |


::: tip
`IdsScope`包含两个属性：`code`、`description`
:::

### 初始化 scope

```java
List<IdsScope> scopes = new ArrayList<>();
scopes.add(new IdsScope().setCode("test").setDescription("test"));
scopes.add(new IdsScope().setCode("test2").setDescription("test2"));
IdsScopeProvider.initScopes(scopes);
```

### 添加 scope

```java
IdsScopeProvider.addScope(new IdsScope().setCode("test").setDescription("test"));
```
