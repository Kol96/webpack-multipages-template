const ora = require('ora');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.watch.conf');

const spinner = ora('building for development...\n');
spinner.start();

const compiler = webpack(
  // Configuration Object
  webpackConfig
);

const watching = compiler.watch(
  {
    // Example watchOptions
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/
  },
  (err, stats) => {
    // Print watch/build result here...
    spinner.stop();
    if (err) throw err;
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n'
    );

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'));
      process.exit(1);
    }

    console.log(chalk.cyan('  Watching files.\n'));
  }
);
