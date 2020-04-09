module.exports = {
    root: true,
    env: {},
    globals: {},
    extends: [
        // 'plugin:vue/essential'
        //  '@vue/standard'
    ],
    parser: 'vue-eslint-parser',
    rules: {
        'no-console': 'off',
        'no-debugger': process.env.NODE.ENV === 'production' ? 'error' : 'warn',
        camelcase: 'off'
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}