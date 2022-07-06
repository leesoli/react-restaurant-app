const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.join(__dirname, "/client/src")
const DIST_DIR = path.join(__dirname, "/client/dist")

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          },
        ],
      }
    ],
  },
  output: {
    path: DIST_DIR,
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./client/src/index.html"
  })],
  mode: process.env.NODE_ENV === "production"? "production": "development"
}