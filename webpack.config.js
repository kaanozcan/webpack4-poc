const webpack = require("webpack"),
      path = require("path"),
      fs = require("fs");

const nodeEnv = process.env.NODE_ENV || "development";

const defaultConfig = {
  mode: nodeEnv,
  entry: {
    bundle: path.join(__dirname, "src/index.js")
  },
  output: {
  path: path.join(__dirname, "public/bundle"),
    filename: `[name].js`,
    chunkFilename: `[name].js`
  },
  devtool: "source-map",
  target: "web",
  optimization: {
    minimize: (nodeEnv === "production"),
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "lib"),
      path.join(__dirname, "node_modules")
    ],
    alias: {
      lib: path.join(__dirname, "lib/")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include: [
          path.join(__dirname, "src"),
        ]
      },
      {
        test: /\.json/,
        loader: "json-loader"
      }
    ]
  }
};

module.exports = defaultConfig;
