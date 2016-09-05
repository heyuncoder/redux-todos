module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};