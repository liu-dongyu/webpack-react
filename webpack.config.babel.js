'use strict';

import { Config, ConfigEnvironment } from 'webpack-config';
import path from 'path';

ConfigEnvironment.INSTANCE.setAll({
  env: () => process.env.WEBPACK_ENV || process.env.NODE_ENV
});

export default new Config().extend('./conf/webpack.[env].config.babel.js');
