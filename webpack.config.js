const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", 
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // clears old files in dist on build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // tells webpack to use your template
    }),
  ],
  devServer: {
    static: "./dist",
  },
  mode: "development", // switch to "production" when deploying
};
