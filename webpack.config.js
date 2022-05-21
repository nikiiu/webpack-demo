const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: '[name].[contenthash].js',
  },
    mode: 'development'
};