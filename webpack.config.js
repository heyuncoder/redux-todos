var path = require('path');
module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        //publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        // preLoaders: [{
        //     test: /\.jsx?$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader'
        // }],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};