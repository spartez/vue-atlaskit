
module.exports = async ({ config }) => {
    const imageRule = config.module.rules.find(rule => 'image.svg'.match(rule.test));
    imageRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
            svgo: {
              plugins: [{ removeDimensions: true }, { removeViewBox: false }]
            }
          }
      });
    return config;
}