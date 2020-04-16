# vue_test_template

## 说明

为了更方便的 ~~(懒 👀)~~ 写 vue demo ，减少每次建立写 demo 在建立路由引入等环节花费的时间
现在只要在 `@/view/main-page` 中建立组件,即可自动读取，并生成按钮，可展示对应组件的页面。

如果写 demo 有公共组件输出，则会放在 `@/components` 文件夹下,欢迎 PR。🙌

> 较干净的 demo 模板，👉 tag：[vdt_0.0.1](https://github.com/Samlldevel/vue_demo_template/tree/vdt_0.0.1)

## 组件

<details>
<summary>滚动视图</summary>

[ScollView](https://github.com/Samlldevel/vue_demo_template/blob/master/src/components/ScollView.vue)

![ScollView](./src/assets/scollView.gif)

- [x] 内容过长切换视图
- [x] 自定义宽度

</details>

<details>
<summary>树状表格</summary>

[ScollView](https://github.com/Samlldevel/vue_demo_template/blob/master/src/components/TreeTable.vue)

基于 element-ui@2.5.4 以下，[高版本](https://element.eleme.cn/#/zh-CN/component/table)已支持`树形数据`

- [x] 普通表格数据
- [x] 树形结构数据
- [x] 自定义插槽
- [x] 适应树形图的斑马纹
- [x] 复选逻辑，$refs.table.selection 可获取勾选数据

> 注：源码来源`github`，基于他人源码再加工，作者信息保留在源码中

</details>

<details>
<summary>Bpmn.js 自定义渲染</summary>

TODO: 官方例子：[Examples](https://github.com/bpmn-io/bpmn-js-examples)

[Bpmn.js]()

![Screencast](./src/assets/screencast.gif)

</details>

## 代码风格配置

使用前，老规矩

```
npm install
```

在 `setting.json` 中配置代码风格，需要安装 `eslint`、`Prettier - Code formatter`、`Vetur`等插件

```
{
  "prettier.singleQuote": true,
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.insertSpaces": true,
  "editor.minimap.enabled": false,
  "editor.wrappingIndent": "indent",
  "editor.dragAndDrop": false,
  "editor.showFoldingControls": "always",
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.snippetSuggestions": "top",
  "vetur.validation.style": false,
  "vetur.validation.script": false,
  "vetur.validation.template": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
    },
    "prettier": {
      "semi": false,
      "singleQuote": true
    }
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "explorer.confirmDelete": false,
  "editor.suggestSelection": "first",
  "window.zoomLevel": 0,
  "eslint.format.enable": true,
  "prettier.trailingComma": "none",
  "prettier.jsxSingleQuote": true,
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "prettier.semi": false,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "files.insertFinalNewline": true
}
```
