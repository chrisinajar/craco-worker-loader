const { loaderByName, addBeforeLoader } = require("@craco/craco");

module.exports = {
  overrideWebpackConfig: ({ pluginOptions, webpackConfig, context: { env } }) => {
    const workerLoader = {
      test: /\.worker\.js/,
      use: {
        loader: "worker-loader",
        options: pluginOptions || {}
      }
    };
    addBeforeLoader(webpackConfig, loaderByName("babel-loader"), workerLoader);
    return webpackConfig;
  }
};
