const path = require('path');

const resolve = {
    extensions: ['*', '.js', '.vue', '.json'],
    symlinks: false,
    alias: {
        '@': path.resolve(__dirname, '../src')
    }
};


module.exports = async ({ config }) => {
    const imageRule = config.module.rules.find(rule => 'image.svg'.match(rule.test));
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        exclude: [
            path.resolve(__dirname, './stories/assets/images/')
        ],
        options: {
            svgo: {
                plugins: [{ removeDimensions: true }, { removeViewBox: false }]
            }
        }
    });
    config.module.rules.push({
        test: /\.(png|jpg|gif|svg)$/,
        include: [
            path.resolve(__dirname, './stories/assets/images/')
        ],
        use: [
            {
                loader: 'file-loader',
                options: {}
            }
        ]
    });
    config.resolve = {
        ...resolve, alias: { ...resolve.alias }
    };
    return config;
}
