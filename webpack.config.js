const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    // compress: true,
    // historyApiFallback: true,
  },
};

// ------------------------------

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// mode: 'development',
// entry: {
//   bundle: path.resolve(__dirname, 'src/index.js'),
// },
// output: {
//   path: path.resolve(__dirname, 'dist'),
//   filename: '[name][contenthash].js',
//   clean: true,
//   assetModuleFilename: '[name][ext]',
// },
