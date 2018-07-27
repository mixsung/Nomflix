const path = require("path");

const PATHS = {
  entry: path.join(__dirname, "../src/index.js")
};

const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()]
            }
          }
        ]
      }
    ]
  }
};
