const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'index.[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'uu77',
        template: 'src/assets/index.html'
      }),
      new MiniCssExtractPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
      },
    module: {
    rules: [
        {
        test: /\.css$/i, 
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
    ],
    },
    mode: 'development'
};
