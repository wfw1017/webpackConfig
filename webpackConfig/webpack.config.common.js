const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const RootUrl = path.resolve(__dirname, '..');
const EntryUrl = RootUrl + '/src/entries/index.js';
const OutputUrl = RootUrl + '/src/dist';
const HtmlUrl = RootUrl + '/src/entries/index.html'
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    main: EntryUrl
  },
  output: {
    filename: '[name].bundle.js',
    path: OutputUrl
  },
  devServer: {
    contentBase: OutputUrl,
    port: 8090,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: HtmlUrl
    }),
    new webpack.HotModuleReplacementPlugin(),

  ]
}