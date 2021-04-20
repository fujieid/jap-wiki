---
title: 贡献者协议
---

# 目录

[[toc]]

----

首先，感谢你抽出宝贵的时间参与到 JAP 的贡献！

**JAP**是一款开源的登录认证中间件，基于模块化设计，为所有需要登录认证的 WEB 应用提供一套标准的技术解决方案，开发者可以基于 JAP 适配绝大多数的 WEB 系统（自有系统、联邦协议），就像集成 [JustAuth](https://gitee.com/yadong.zhang/JustAuth) 一样，简单方便。

**JAP** 的成长离不开大家的支持，如果你愿意为 JAP 贡献代码或提供建议，请阅读以下内容。

## 可以贡献哪些内容？

你可以对以下内容进行贡献：

- 修复bug（已打开的 Issue 或者是你发现的 BUG）
- 完善代码注释
- 添加单元测试
- 代码逻辑优化
- 新功能开发
- 编写文档
- 文章投稿：[JAP 相关文章投稿](https://www.wjx.cn/vj/r4gHhdm.aspx)

不知道如何贡献？你可以先参考 JAP 的 Issue 列表：

- [gitee issues](https://gitee.com/fujieid/jap/issues)
- [github issues](https://github.com/fujieid/jap/issues)

## Issue 规范

- `issue` 仅用于提交 `Bug` 或 `Feature` 以及功能相关的内容，其它内容可能会被直接关闭。
- 在提交 `issue` 之前，请搜索相关内容是否已被提出，请不要提交重复的问题。
- 在提交 `issue` 时，请使用准确的、有实际意义的内容作为标题和描述，方便我们准确定位问题。
- 在提交 `issue` 时，请说明 `JAP` 的版本号，并提供相关异常栈详细截图（**请勿截取自以为“很关键”的某段说明，务必截取全部内容**）

::: tip
强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/~sgtatham/bugs-cn.html)、[《如何向开源项目提交无法解答的问题》](https://zhuanlan.zhihu.com/p/25795393)，更好的问题更容易获得帮助。
:::

## Pull Request（PR）规范

- 请先 `fork` 一份源码到自己的项目下，**不要直接在仓库下建分支**。
- `commit` 信息要以 `[模块名]: 描述信息` 的形式填写，例如 `Social: fix xxx bug`。
- 提交 `PR` 前请 `rebase`，确保 `commit` 记录的整洁。
- 提交 `PR` 前请先对代码进行 `review`。
- 确保 `PR` 是提交到 `dev` 分支，而不是 `master` 分支。如果你提交的 `PR` 许久未合并，请确认你是否将 `PR` 提到了其他分支。
- 如果是修复未公开的 `bug`，请在 `PR` 中给出描述信息，参考：[A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)。
- 如果是修复已存在的 `issue`，请在描述中引用原文，例如: “`Resolves #issueid`”。

## Git Commit 规范

- 参考：[A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
- 请使用具有真实含义的内容
- 请确保单次 “message” 的内容尽量不超过 100 字
- 你可以在提交时使用 emoji 表情，参考：[gitmoji](https://github.com/carloscuesta/gitmoji) | [An emoji guide for your commit messages](https://gitmoji.dev)

## 编码规范

- 关于包名，请以拥有实际含义的名字命名，不可使用无意义的字母排列或者中文拼音
    - 新模块务必以`com.fujieid.jap.模块名` 命名，比如：`com.fujieid.jap.social`
    - 新业务包务必以`com.fujieid.jap.模块名.相关业务.相关操作` 命名，比如：`com.fujieid.jap.social.config.SocialConfig`
- 关于类名，请以拥有实际含义的名字命名，不可使用无意义的字母排列或者中文拼音
- 关于方法名，请以拥有实际含义的名字命名，不可使用无意义的字母排列或者中文拼音
- 关于注释，对于简单的方法，可以不添加注释，对于存在复杂逻辑或者有必要强调说明的方法、参数，必须添加注释，注释必须做到精简、准确
- 关于文档，我们这不是论文，所以请使用简单、干练或通俗易懂的文案，尽量不要使用大量的专业名词进行**堆砌**，加大开发者的阅读理解难度
- **其他代码规范，请遵循阿里巴巴编码规约**

## JavaDoc 注释规范

参考：[https://docs.oracle.com/javase/1.5.0/docs/tooldocs/windows/javadoc.html](https://docs.oracle.com/javase/1.5.0/docs/tooldocs/windows/javadoc.html)

## 其他

- 编写完代码后，请自行格式化代码。
- 如果是修改的已有文件，请单独格式化自己修改的内容。**不要随便格式化其他文件**
- 
