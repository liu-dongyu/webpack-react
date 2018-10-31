const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    postcssPresetEnv({
      browsers: 'cover 99.5%',
    }),
  ],
};
