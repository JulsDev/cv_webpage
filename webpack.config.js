const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production';

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },

  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },

  optimization: isProd
    ? {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              // Use multi-process parallel running to improve the build speed
              parallel: true,
              cache: true, // Enable file caching
            },
          }),
        ],
      }
    : {
        splitChunks: {
          chunks: 'all',
        },
      },

  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: [/node_modules/],
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-modules-typescript-loader?module',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]__[hash:base64:5]',
                auto: /\.module\.\w+$/i,
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: 'file-loader',
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: ['url-loader'],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugins({
      template: path.resolve(__dirname, 'public/index.html'),
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/favicon.ico',
          to: path.resolve(__dirname, 'build'),
        },
        {
          from: 'public/manifest.json',
          to: path.resolve(__dirname, 'build'),
        },
      ],
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },

  devtool: 'source-map',
};
