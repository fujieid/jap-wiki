---
title: 快速开始
---

## 目录

[[toc]]

----

## 关于分支和版本的说明

当前最新版本为：<img src="https://img.shields.io/github/v/release/fujieid/jap?style=flat-square" ></img>

::: tip 分支说明
- 开发分支（`dev`）：最新代码，不保证稳定，实时发布 `SNAPSHOT` ，同时提交 `PR` 也是在这个分支。
- 主分支（`master`）：保护分支，稳定版代码，用于发布稳定版版本，**不接受任何 `PR`**。
:::

::: tip 版本号说明
- 稳定版（`release`）：格式为 `x.x.x`，为官方推荐使用的版本，可以用于生产环境。
- 快照版（`snapshots`）：格式为 `x.x.x-SNAPSHOT`。快照版会实时更新（`dev` 分支 `push` 后），想尝试新功能的开发者可以在开发环境使用 `SNAPSHOT` 版。
:::

::: warning
快照版不可用于生产环境！！！    
快照版不可用于生产环境！！！    
快照版不可用于生产环境！！！    
:::

## 使用 `jap-bom`

mica-bom，可以简化依赖和依赖版本统一处理，避免jar冲突。

注意：maven 是按先后顺序进行依赖的，所以 mica-bom 顺序按 mica、spring boot、spring cloud依次添加。

### Maven

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.fujieid</groupId>
            <artifactId>jap-bom</artifactId>
            <version>${jap.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

### Gradle

Spring boot 环境中可以开启 `apply plugin: "io.spring.dependency-management"` 插件。

```text
dependencyManagement {
    imports {
        mavenBom "com.fujieid:jap-bom:${japVersion}"
    }
}
```

## 使用 `snapshots`

注意：`snapshots` 版本会及时响应，修复最新的 `bug` 或者必要的需求。

### Maven

```xml
<repositories>
    <repository>
        <id>sonatype-nexus-snapshots</id>
        <name>Sonatype Nexus Snapshots</name>
        <url>https://oss.sonatype.org/content/repositories/snapshots/</url>
        <snapshots>
            <enabled>true</enabled>
        </snapshots>
        <releases>
            <enabled>false</enabled>
        </releases>
    </repository>
</repositories>
```

### Gradle

```text
repositories {
    mavenLocal()
    maven { url "https://maven.aliyun.com/repository/public" }
    maven { url "https://maven.aliyun.com/repository/spring" }
    maven { url "https://maven.aliyun.com/repository/spring-plugin" }
    maven { url "https://repo.spring.io/libs-release" }
    maven { url "https://repo.spring.io/milestone" }
    // 添加 snapshots 库地址
    maven { url "https://oss.sonatype.org/content/repositories/snapshots" }
    mavenCentral()
}
```

## 推荐阅读

本章节介绍 JAP 的具体使用方法。

<ref-link :link='`/quickstart/notice.html`' :title="`须知`"/>
<ref-link :link='`/quickstart/explain.html`' :title="`名词解释`"/>
<ref-link :link='`/quickstart/jap-simple.html`' :title="`使用 jap-simple`"/>
<ref-link :link='`/quickstart/jap-social.html`' :title="`使用 jap-social`"/>
<ref-link :link='`/quickstart/jap-oauth2.html`' :title="`使用 jap-oauth2`"/>
<ref-link :link='`/quickstart/jap-oidc.html`' :title="`使用 jap-oidc`"/>
<ref-link :link='`/quickstart/jap-sso.html`' :title="`使用 jap-sso`"/>
<ref-link :link='`/quickstart/jap-mfa.html`' :title="`使用 jap-mfa`"/>
<ref-link :link='`/demo/front-end-and-backend.html`' :title="`前后端分离架构下使用 JAP`"/>
<ref-link :link='`/quickstart/error_code.html`' :title="`错误代码`"/>
