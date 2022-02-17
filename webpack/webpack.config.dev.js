const { merge } = require('webpack-merge');
const parts = require('./webpack.parts');

require('dotenv').config();

const development = merge(
  {
    devServer: {
      port: 8080,
      // host: '192.168.6.32',
      compress: true,
      historyApiFallback: true,
      hot: true,
    },
  },
  parts.buildSetup('development'),
  parts.setMode('development'),
  parts.sourceMaps('eval-source-map'),
);
module.exports = development;
