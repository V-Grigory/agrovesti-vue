const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

const mode = process.env.NODE_ENV;
// console.log('from webpack NODE_ENV: ' + mode);
// console.log('from webpack PORT: ' + process.env.PORT);

module.exports = {
  entry: {
    index: mode === 'development'
      ? [
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
          './src_front/appSearch.js'
        ]
      : [
          './src_front/appSearch.js'
        ]
  },
  output: mode === 'development'
    ? {
        path: path.resolve(__dirname, './public/js'),
        filename: 'appSearch.js',
        publicPath: '/',
        hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
        hotUpdateMainFilename: '.hot/[hash].hot-update.json'
      }
    : {
        path: path.resolve(__dirname, './public/js'),
        filename: 'appSearch.js',
      },
  mode: mode, // none development production
  devtool: mode === 'production' ? false : 'eval-source-map',
  module: {
    rules: [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
      },
      {
        "test": /\.vue$/,
        "exclude": /node_modules/,
        "use": "vue-loader"
      },
      {
        "test": /\.scss$/,
        "use": [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: mode === 'development'
    ? [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
      ]
    : [
        new VueLoaderPlugin(),
      ]
};
