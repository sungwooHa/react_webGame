const path = require("path");

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게
  resolve: {
    extensions: [".js", ".jsx"], //entry, output에서 확장명 안쳐도 되게 해줌.
  },

  //가장중요 entry : 입력, output : 출력
  entry: {
    app: ["./client"], //client jsx가 이미 "./WordRelay.jsx"를 호출하기때문에 빼도 됌, 확장자도 빠져도됌
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), //dirname : 현재 폴더 경로, `현재폴더경로\dist`
    filename: "app.js", //출력 형태
  }, //출력
};
