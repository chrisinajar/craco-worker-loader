# Craco Worker Loader Plugin
This is a [craco](https://github.com/sharegate/craco) plugin that adds worker-loader support to [create-react-app](https://facebook.github.io/create-react-app/) version >= 2.

> Use [react-app-rewired](https://github.com/timarney/react-app-rewired) for `create-react-app` version 1.

# Installation
```bash
yarn add craco-worker-loader worker-loader
```
or
```bash
npm i --save craco-worker-loader worker-loader
```

then edit your `craco.config.js` file to contain the plugin
```js
const WorkerLoaderPlugin = require("craco-worker-loader");

module.exports = function({ env }) {
  return {
    plugins: [{
      plugin: WorkerLoaderPlugin
    }]
  }
};
```

# License
MIT
