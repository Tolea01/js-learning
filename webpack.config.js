const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
    }
  }]

  isDev ? loaders.push('eslint-loader') : null;

  return loaders;
}

module.exports = {
  entry: './src/2.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    hot: isDev,
    watchFiles: path.resolve(__dirname, 'src'),
  },

  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },

      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        }
      },

      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },

      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'sass-loader']
      },

      {
        test: /\.(png|jpg|svg|ttf|mp3)$/,
        use: ['file-loader']
      }

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
        removeComments: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style.min.css',
    }),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin(),
    ]
  }
};