'use strict'
module.exports = {
  // types,
  types: [
    {
      value: ':sparkles: feat',
      name: '✨ 增加新功能'
    },
    {
      value: ':bug: fix',
      name: '🐛 修复bug'
    },
    {
      value: ':pencil: docs',
      name: '📝 修改文档(仅文档更改)'
    },
    {
      value: ':lipstick: ui',
      name: '💄 更新UI(更新用户界面和样式文件 )'
    },
    {
      value: ':art: style',
      name: '🎨 改进代码的结构（空白、格式、缺少分号等）'
    },
    {
      value: ':recycle: refactor',
      name: '♻️  重构代码'
    },
    {
      value: ':bookmark: release',
      name: '🔖 发布版本'
    },
    {
      value: ':rocket: deploy',
      name: '🚀 部署'
    },
    {
      value: ':white_check_mark: test',
      name: '✅ 增删测试'
    },
    {
      value: ':wrench: chore',
      name: '🔧 更改配置(构建过程或辅助工具的变动，包配置文件)'
    },
    {
      value: ':tada: init',
      name: '🎉 初次提交'
    },
    {
      value: ':heavy_plus_sign: dep_add',
      name: '➕ 添加依赖'
    },
    {
      value: ':heavy_minus_sign: dep_rm',
      name: '➖ 删除依赖'
    },
    {
      value: ':whale: docker',
      name: '🐳 Docker'
    }
  ],

  scopes: [
    { name: 'common' },
    { name: 'build' },
    { name: 'core' },
    { name: 'upgrade' },
    { name: 'node' }
  ],

  // it needs to match the value for field type. Eg.: 'fix'

  // scopeOverrides: {
  // fix: [
  // { name: 'merge' },
  // { name: 'style' },
  // { name: 'e2eTest' },
  // { name: 'unitTest' },
  // ],
  // },

  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?(yes/no)'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['特性', '修复'],
  // limit subject length
  subjectLimit: 100
}
