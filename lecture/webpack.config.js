const path = require("path");
const webpack = require("webpack");
const RefreshWebpackPlugin =  require("@pmmmwh/react-refresh-webpack-plugin");


module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"], //확장명
  },

  //입력
  entry: {
    /*
      파일간의 include가 되어 있을 경우 제외해도 된다
       resolve : extenstions 에서 확장명 호출되어 있을 경우 확장명 생략이 가능함 
       */
    app: ["./client"],
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: [
            ["@babel/preset-env",{
            targets:{
              browsers:['> 5% in KR', 'last 2 chrome versions'],
            },
          }],
          "@babel/preset-react",
        ],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            "react-refresh/babel",
          ],
        },
      },
    ],
  },

  plugins:[
    new RefreshWebpackPlugin()],

  //출력
  output: {
    path: path.join(__dirname, "dist"), //현재 경로 폴더.
    filename: "app.js",
    publicPath : '/dist/',
  },
  devServer :
  {
    publicPath : '/dist/',
    hot : true
  }
};
