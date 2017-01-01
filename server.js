var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = {};

if (process.env.NODE_ENV === 'development') {
  config = require('./webpack.config');
} else {
  config = require('./webpack.production.config');
}

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  // It suppress error shown in console, so it has to be set to false.
  quiet: false,
  // It suppress everything except error, so it has to be set to false as well
  // to see success build.
  noInfo: false,
  stats: {
    // Config for minimal console.log mess.
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`listening on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});
