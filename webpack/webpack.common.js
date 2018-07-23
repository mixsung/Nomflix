const path = require("path");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
  entry: path.resolve(__dirname, "../src/index.js")
};

const commonConfig = {
  entry: ["babel-polyfill", PATHS.entry],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

if (MODE === "dev") {
  module.exports = Object.assign({}, commonConfig, devConfig);
} else if (MODE === "build") {
  module.exports = Object.assign({}, commonConfig, prodConfig);
}
