const path = require("path");

module.exports = {
  name: "multiplication-table-setting",
  mode: "development",
  devtool: "eval", //hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"],
  },

  //입력
  entry: {
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
};
