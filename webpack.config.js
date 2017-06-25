const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './app/javascripts/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  devServer:{
    inline: true,
    contentBase: path.join(__dirname, "build"),
    port: 8090
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: "index.html" }
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['react','es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ['css-loader','style-loader','sass-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000'
      }
    ]
  }
};
