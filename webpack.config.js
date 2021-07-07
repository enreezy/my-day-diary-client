const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    hot: true,
    overlay: true,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      assets: path.resolve(__dirname, "src/assets/"),
      config: path.resolve(__dirname, "src/config/"),
      actions: path.resolve(__dirname, "src/actions/"),
      routes: path.resolve(__dirname, "src/routes/")
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        use: ["url-loader?limit=100000"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};
