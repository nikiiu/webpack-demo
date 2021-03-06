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
    ],
     module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          use:["file-loader"]
        },
        {
          test: /\.styl$/,
          loaders: [
            'style-loader',
            'css-loader',
            'stylus-loader',
          ],
    
        },
        {
          test: /\.less$/i,
          loaders: [
            'style-loader',
            'css-loader',
            'less-loader',
          ],
        },
        {
          test: /\.scss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require('dart-sass')
              }
            },
          ],
        },
      ],
    },
  
   
    
};
