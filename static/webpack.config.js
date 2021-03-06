const webpack = require('webpack');

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'] // maybe not css ** TODO
    },

    module: {
      rules: [{
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }]
    }
};

module.exports = config;
