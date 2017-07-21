const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var package = require('./package.json');
var webpack = require('webpack');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
      app:  './app/javascripts/app.js',
      inventory: './app/javascripts/inventory.js',
      vendor: Object.keys(package.dependencies),
      worker: './app/javascripts/worker.js',
      box: './app/javascripts/box.js',
      home: './app/javascripts/home.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        port: 8000,
        disableHostCheck: true,
    },
    plugins: [// Use template of our app's index.html and generate new index.html in the build folder.
          new CommonsChunkPlugin({
             name: 'app',
             minChunks: 3
         }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'SmartBox',
            tagLine: 'A Smart Replenishment Box',
            template: './app/home.html',
            chunks: ['app','home','vendor'],
            filename: './index.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Inventory Manager',
            tagLine: 'Manage your tool inventory',
            color: 'bg-info',
            template: './app/index.html',
            chunks: ['app','vendor', 'inventory'],
            filename: './inventory.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Order Manager',
            tagLine: 'Order your tools!',
            color: 'bg-success',
            template: './app/index.html',
            chunks: ['app','vendor', 'worker'],
            filename: './worker.html' //relative to root of the application
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Box',
            tagLine: 'The Smart Box!',
            color: 'bg-warning',
            template: './app/index.html',
            chunks: ['app','vendor', 'box'],
            filename: './box.html' //relative to root of the application
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jquery: "jquery",
          "window.jQuery": "jquery",
          jQuery:"jquery"
        }),
        new webpack.ProvidePlugin({
          $: "tether",
          tether: "tether",
          "window.Tether": "tether",
          Tether:"tether"
        })
    ],
    module: {
        rules : [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['react','es2015']
              }
            }
          },
          {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                }
            }]
          },
          {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
            // loader: "url?limit=10000"
            use: "url-loader"
          },
          {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader'
          },
        ],
    }
};
