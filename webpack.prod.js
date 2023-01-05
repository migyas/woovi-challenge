const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({ template: './template.prod.html' }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './public/assets', to: './assets' },
        { from: './public/_redirects' },
      ],
    }),
    new FaviconsWebpackPlugin({ logo: './public/assets/logo-favicon.svg' }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
});
