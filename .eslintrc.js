// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // 设置全局变量 例 '_': true
  globals: {},
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 关闭注释空格问题
    'spaced-comment': 0,
    // 允许空行的默认缩进
    'no-trailing-spaces': ['error', {'skipBlankLines': true}],
    semi: ['error', 'always'],
    // 不限制引号
    'quotes': 0,
    // 为引用变量警告
    'no-unused-vars': 1,
    // 允许空的构造函数
    'no-useless-constructor': 0,
    // 由于script标签默认会缩进一次，所以关闭
    'indent': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
