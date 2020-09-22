/* eslint-env node */
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: 'last 2 version and not dead and not IE 11',
                modules: false,
            }
        ]
    ],
    env: {
        test: {
            presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
        }
    }
};
