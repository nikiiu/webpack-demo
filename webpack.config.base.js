const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { options } = require('less');
module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'uu77',
        template: 'src/assets/index.html'
      }),
    ],
   
    
};
