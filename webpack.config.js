const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: ['./app/javascripts/app.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "build"),
        port: 8090
    },
    plugins: [// Copy our app's index.html to the build folder.
        new CopyWebpackPlugin([
            {
                from: './app/index.html',
                to: "index.html"
            }
        ])
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
          }
        ],
    }
};
