# 发布一个标准的 npm 库

## git 标签

Git tag 通常用于标记版本发布的某一个点。例如，当我们有大型项目要发布到正式环境，我们会给这个 commit 打上一个版本 tag，来
标识它的版本信息。

Git tag 中一共有两类标签，一类叫做轻量标签（Lightweight Tags），另一类叫做附注标签（Annotated Tags）。Git 的最佳实践推荐
使用附注标签，因为当使用此类标签时，会将 tag 作为对象完整地存储到 git 数据库中，它有自身的校验和信息，包含着标签的名字，
电子邮件地址和日期，以及标签说明。

> 个人实践中，本地环境下个人使用使用轻量标签，但需要将标签分享给其他人时使用附注标签。

```bash
git tag v1.2.0 # 带 v 的tag是一个好的实践
git tag -a tag-name -m <注释文字> # 附注tag
git push origin tag-name # 推送一个tag
git push --tags # 推送所有tag  推送后在 github 可看到
git tag # 查看tag
git tag -d tag-name # 删除tag

git tag :refs/tags/tag-name # 删除远端tag
git show tag-name # 查看特定tag
```

## 发布带标签的版本

使用场景：新增一个功能，希望发布一个版本让一部分人试用，没有问题后在发布一个新版本。

```bash
npm version major|minor|patch|premajor|preminor|prepatch|prelease
```

命令会执行两个操作：

- 更新 package.json 的 version 字段
- 在 git 仓库中使用该版本打 tag，新建一个提交

> `npm version`时指定提交信息：

```bash
npm version patch -m "Upgrade to %s"  # %s 会自动替换成版本号
```

也可以指定具体的版本：

```bash
npm version v1.4.0-beta.1
```

> 在执行 npm version 时，仓库要求是 clean 的。

发布后查看版本

```bash
npm info # 查看当前 npm 的信息
npm info large-number-sum versions # 查看所有版本
npm i large-number-sum # 安装的不带标签的最新版本
npm i large-number-sum@beta # 安装带标签beta的最新版
```

[npm tag](https://www.jianshu.com/p/91902bae5572)

## 单元测试

## commit message 规范

## 生成日志变更记录

## 使用工具自动发布

## Travis 持续集成

[持续集成服务 Travis CI 教程](https://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)

## README 添加徽标

## 多环境支持

## 参考

[如何编写一个开源的 JavaScript 库](https://www.bilibili.com/video/BV1N34y1B7t6?p=24&spm_id_from=pageDriver)

[2020 年如何写一个现代的 JavaScript 库](https://mp.weixin.qq.com/s/RZI-B9oD45etwjSntEGUtg)

[如何编写一个 JS 开源库](https://github.com/DotHide/starwars-names)

[用持续集成工具 Travis 进行构建和部署](https://www.cnblogs.com/blackpuppy/p/use_travis_to_build_and_deploy.html)
