import path from "path";
// const path = require('path')
import nodeExternals from "webpack-node-externals";
// export default {}
module.exports = {
  entry: path.resolve(__dirname, "./server/server.js"),
  target: "node",
  strictMode: true,
  externals: [nodeExternals()],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve("server-build"),
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
      },
    ],
  },
};
