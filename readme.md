<!--
 * @Description: In User Settings Edit
 * @Author: Zhaohui Gong
 * @Date: 2019-08-05 11:56:24
 * @LastEditTime: 2019-08-13 10:48:47
 * @LastEditors: Please set LastEditors
 -->
# DFG-NA

## What is the name meaning

* DFG is the abb. name of my company.
* *N*est  --Nest is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with TypeScript (preserves compatibility with pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).[github](https://github.com/nestjs/nest),[official](https://nestjs.com/)
* *A*ngular --Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.[github](https://github.com/angular/angular),[official](https://angular.io/)
  
This project is a boilerplate for nestjs and angular developing.
TYPEORM is used access database.[github](https://github.com/typeorm/typeorm),[official](https://typeorm.io/)

## Main tools

The client of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.

The Server of this project was generated with [Nest CLI](https://github.com/nestjs/nest-cli) version 6.5.0.

## Directory structure

```
.
├── client
│   ├── dist
│   │   └── client
│   │       └── assets
│   │           ├── animal
│   │           ├── fill
│   │           ├── outline
│   │           └── twotone
│   ├── e2e
│   │   └── src
│   └── src
│       ├── app
│       │   ├── components
│       │   │   ├── bom-m
│       │   │   ├── bom-p
│       │   │   ├── cost
│       │   │   ├── history
│       │   │   ├── inventory
│       │   │   ├── nopage
│       │   │   ├── pandian
│       │   │   ├── pdedit
│       │   │   ├── pdinput
│       │   │   └── rdsin
│       │   ├── entities
│       │   ├── interceptors
│       │   └── services
│       ├── assets
│       └── environments
└── server
    ├── dist
    │   ├── base
    │   ├── entities
    │   ├── misc
    │   └── modules
    │       ├── bom
    │       ├── database
    │       ├── history
    │       ├── hourrate
    │       └── inventory
    ├── src
    │   ├── base
    │   ├── entities
    │   ├── misc
    │   └── modules
    │       ├── aps
    │       ├── bom
    │       ├── database
    │       ├── history
    │       ├── hourrate
    │       ├── inventory
    │       ├── mo
    │       └── stocktaking
    └── test

```

## Package install

`cd client`

`npm i`

`cd server`

`npm i`

## Development server

### client

`cd client`

Run `ng serve` or `npm run start` for a angular dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Server

Before run server instance,make sure you have executed
`cp server\src\modules\database\database.providers.sample.ts server\src\modules\database\database.providers.ts`, and edited the file appropriately.

`cd server`

Run `npm run start:dev` for a nestjs server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

### client components

`cd client\src\app\components`

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### server modules

`cd server\src\modules`

Run `nest generate module module-name` to generate a new module. You can also use `nest generate angular-app|pipe|service|class|guard|interface|filter|module`.

## Build

### client build

`cd client`

Run `ng build` to build the client project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### server build

`cd server`

Run `npm run prestart:prod` to build the server project. The build artifacts will be stored in the `dist/` directory.

## docker

You can use `docker-compose up --build` to build and start the dockers.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
To get more help on the Nest CLI use `nest --help` or go check out the [Nest CLI Usage](https://docs.nestjs.com/cli/usages).

