const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "index.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
              }
            ]
    },
    plugins: [
            new HtmlWebPackPlugin({
              template: "./src/index.html",
              filename: "./index.html"
            })
    ]
}