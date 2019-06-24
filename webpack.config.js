const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = env => {
  const isProduction = env === "production";
  return {
    stats: "errors-only",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public", "dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    devtool: isProduction ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      publicPath: "/dist/",
      compress: true,
      port: 9000,
      writeToDisk: true
    }
  };
};
