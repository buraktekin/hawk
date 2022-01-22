const path = require('path');
const webpack = require('webpack');
const os = require('os');

module.exports = {
  mode: 'development',
  // electron entrypoint:
  entry: './src/main.ts',
  target: 'electron-main',
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      'global': {}, // bizarre lodash(?) webpack workaround
      'global.GENTLY': false // superagent client fix
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: 'ts-loader' }]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  }
}