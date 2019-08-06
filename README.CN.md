# DFG-NA

## 项目名的含义

- DFG 公司的简称
- [*N*est](https://github.com/nestjs/nest)
- [*A*ngular](https://github.com/angular/angular)

本项目是一个nestjs+angular的初始模版 。ORM使用TYPEORM[github](https://github.com/typeorm/typeorm),[official](https://typeorm.io/)。

## 选择的理由

1. 迷恋 Javascript。愿意相信 Javascript 可以统一前后端和数据库。Typescript是Javascript的一个超集，愿意相信它也代表了Javascript的未来方向。

2. 服务器端选择node。但是N不是Node的N，是Nest的N。Nest是一个架构类似Angular的node框架。作者原话[heavily inspired by Angular](https://github.com/nestjs/nest#description)。**Typescript**。
3. 客户端框架选择Angular。**Typescript**。考察了react和vue。react、graphql、relay本是同根生，react的component-render+jsx模式也很迷人，但relay与graphql的__generated__+createFragmentContainer结合方式却让人不敢恭维。vue，国人创建的人气框架，非常想认真的学习一下。但最终还是选择了Angular。喜欢它的结构性。使用**Typescript**也是一个重要原因。很多人说Angular学习曲线陡，可能是指理解它的底层会很难。使用电脑的时候一定要弄懂底层API再用，使用Excel时一定要搞懂cell的数据结构和底层实现，可能没几个人能用得上电脑了，也没几个人会用Excel了。

## 主要目录结构

```
Root
├─client
│  └─src
│     └─app
│      │─components
│      │─entities
│      │─intercepetors
│      └─services
└─server
   └─src
       │─base
       │─entities
       │─misc
       └─modules
```

客户端使用 [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3生成。
服务端使用 [Nest CLI](https://github.com/nestjs/nest-cli) version 6.5.0生成。

## 开发服务器

### 客户端

`cd client`

运行 `ng serve` 或`npm run start` 启动客户端. 浏览器打开 `http://localhost:4200/`。 修改代码保存后，会自动重新载入。

### 服务端

启动服务端前需要
`cp server\src\modules\database\database.providers.sample.ts server\src\modules\database\database.providers.ts`, 编辑该文件，正确配置数据库连接。

`cd server`

运行 `npm run start:dev`可以开发模式启动服务端. 浏览器打开`http://localhost:3000/`可以确认服务器端状态。 修改代码保存后，会自动重新载入。

## 生成组件

### 客户端组件

客户端组件在src\client\src\app\components下

`cd client\src\app\components`

运行 `ng generate component component-name` 生成新组件。 可用的命令还有 `ng generate directive|pipe|service|class|guard|interface|enum|module`。

### 服务端组件

服务端以module的形式组织。在server\src\modules下。

`cd server\src\modules`

运行 `nest generate module module-name` 生成新模块。可用的命令还有`nest generate angular-app|pipe|service|class|guard|interface|filter|module`。

## Build

### 客户端 build

`cd  client`

运行 `ng build` 可以构建客户端。构建目标文件夹为`dist/`。使用`--prod` 标识进行产品构建。

### 服务端 build

`cd server`

运行 `npm run prestart:prod` 构建服务端。 构建目标文件夹为`dist/`。

## docker

可以运行`docker-compose up --build`构建和运行docker容器。

## Running tests

没有考虑测试，将来也许会添加。

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI Usage](https://docs.nestjs.com/cli/usages).
