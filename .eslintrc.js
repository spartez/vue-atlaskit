/* eslint-env node */
module.exports = {
    extends: ['@spartez/eslint-config-vue'],
    rules: {
        'max-len': [
            'warn',
            160,
            4,
            {
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        'no-param-reassign': ['error', { props: false }],
        'vue/html-closing-bracket-spacing': 'off',
        'import/no-extraneous-dependencies': [
            {
                devDependencies: [
                    '.storybook/**',
                    'stories/**'
                ]
            }
        ]
    },
    env: {
        node: true,
        'jest/globals': true
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['@', './src'],
                ],
                extensions: ['.vue', '.js', '.jsx', '.json']
            }
        }
    },
    plugins: ['jest']
};
