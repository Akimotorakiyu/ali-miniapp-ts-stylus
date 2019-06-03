# ali-miniapp-ts-stylus-template

本模板采用`typescript`,`stylus`。

集成请求库[`wefech`](https://github.com/jonnyshao/wefetch)，集成组件库[`mini-antui`](https://github.com/ant-mini-program/mini-antui)，集成样式库[`ColorUI`](https://github.com/weilanwl/ColorUI)

## 使用方法

1. 开发前准备

```bash
# 安装依赖
yarn add

# 开发
yarn dev
```

2. 开发

  * VS code打开本项目。
  * 阿里小程序开发工具打开本项目。

## 注意事项

### gulp构建相关

开发目录位于`src/`，保存时`gulp`会编译复制`src/**/*.styl`和`src/**/*.ts`、复制`src/**/!(*.styl|*.ts|*.d.ts)`到`./`目录下。

其它注意事项可以查看`gulpfile.ts`

### typescript相关

使用 `export {}` 来表述这是一个`.ts`模块而不是全局脚本。详情参照`src/**/*.ts`。

### type相关

type定义已提交PR到wefetch，等待在npm上发布。
在未发布之前，可直接将`types/wefetch.d.ts`手动复制并更名到`node_modules/wefect/index.d.ts`