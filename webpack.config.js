const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

//const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;

const config = {
  entry: path.join(__dirname, 'src', 'main.js'),
  mode: env,
  output: {
    path:path.join(__dirname, 'dist'),
    filename:'app.js'
  },
  // optimization: {
  //   splitChunks: {
  //     // HtmlWebpackPlugin 를 올바르게 사용하기 위해서 반드시 아래 질의 응답을 볼 것
  //     // See: https://github.com/jantimon/html-webpack-plugin/issues/882
  //     chunks: 'all',
  //   },
  // },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.join(__dirname, 'src')],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '#': path.join(__dirname, 'src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  plugins: [
    new VueLoaderPlugin()
  ],
};

module.exports = config;