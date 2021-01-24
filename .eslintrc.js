module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
        '@vue/typescript/recommended',
        'plugin:vue-a11y/base'
    ],
    plugins: ['vue-a11y'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-console': 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/no-multiple-template-root': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
