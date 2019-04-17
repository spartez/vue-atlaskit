/* eslint-env node */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'last 2 version, not dead',
                useBuiltIns: 'usage',
                modules: false
            }
        ]
    ],
    env: {
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        }
    }
};
